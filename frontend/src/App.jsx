import React, { useState, useEffect } from 'react';
import { Search, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import './App.css';

const AudioPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [audioSrc, setAudioSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = React.useRef(null);

  const togglePlay = () => {
    if (!audioSrc) {
      setAudioSrc(song.audioUrl);
    } else if (isLoaded) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleCanPlay = () => {
    setIsLoaded(true);
    audioRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="flex items-center space-x-4">
      <button onClick={togglePlay} className="p-2 rounded-full hover:bg-gray-100">
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      
      <div className="flex-1">
        <div className="bg-gray-200 h-2 rounded-full">
          <div 
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <button onClick={toggleMute} className="p-2 rounded-full hover:bg-gray-100">
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      {audioSrc && (
        <audio
          ref={audioRef}
          src={audioSrc}
          onTimeUpdate={handleTimeUpdate}
          onCanPlay={handleCanPlay}
          onEnded={() => setIsPlaying(false)}
        />
      )}
    </div>
  );
};

const MusicSearchApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [musicDatabase, setMusicDatabase] = useState([]);
  const [finalSearchTerm, setFinalSearchTerm] = useState('');
  const [randomSong, setRandomSong] = useState(null);

  useEffect(() => {
    let body;

    if (finalSearchTerm === '') {
      body = JSON.stringify({
        selector: {
          release_date: { "$lt": "2024-12-03" }
        },
        sort: [{ release_date: "desc" }],
        limit: 20
      });
    } else {
      body = JSON.stringify({
        selector: {
          title: {
            "$gte": finalSearchTerm.toLowerCase(),
            "$lte": finalSearchTerm.toLowerCase() + "\ufff0"
          }
        },
        limit: 20
      });
    }
    fetch('http://localhost:5984/echostream_db/_find', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: body
    })
      .then((response) => response.json())
      .then((data) => {
        const musics = data.docs;
        setMusicDatabase(musics);
        if (!randomSong && musics.length > 0) {
          const randomIndex = Math.floor(Math.random() * musics.length);
          setRandomSong(musics[randomIndex]);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [finalSearchTerm]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setFinalSearchTerm(searchTerm);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          EchoStream
        </h1>
        
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search for songs or artists..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full p-4 pr-12 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>

        <div className="space-y-4">
          {musicDatabase.map(song => (
            <div 
              key={song._id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-800">{song.title}</h2>
              <div className="flex justify-between mt-2 mb-4">
                <span className="text-gray-600">{song.artist}</span>
                <span className="text-gray-500">{song.release_date}</span>
              </div>
              <AudioPlayer song={song} />
            </div>
          ))}
          
          {musicDatabase.length === 0 && searchTerm && (
            <div className="text-center text-gray-500 py-8">
              No songs found matching "{searchTerm}"
            </div>
          )}
        </div>
      </div>

      {randomSong && (
        <footer className="fixed bottom-0 left-0 w-full p-4 text-center">
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold text-gray-800">Musique à découvrir !</h2>
            <p className="text-gray-600">{randomSong.title} - {randomSong.artist}</p>
            <AudioPlayer song={randomSong} />
          </div>
        </footer>
      )}
    </div>
  );
};

export default MusicSearchApp;
