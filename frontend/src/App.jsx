import React, { useState } from 'react';
import { Search, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import './App.css';
import musicDatabase from './assets/sample_data.json'

const AudioPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = React.useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
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

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={togglePlay}
        className="p-2 rounded-full hover:bg-gray-100"
      >
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

      <button
        onClick={toggleMute}
        className="p-2 rounded-full hover:bg-gray-100"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      <audio
        ref={audioRef}
        src={song.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

const MusicSearchApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredMusic = musicDatabase.musics.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Music Search & Player
        </h1>
        
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search for songs or artists..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pr-12 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
          <Search className="absolute right-4 top-4 text-gray-400" size={24} />
        </div>

        <div className="space-y-4">
          {filteredMusic.map(song => (
            <div 
              key={song.id}
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
          
          {filteredMusic.length === 0 && searchTerm && (
            <div className="text-center text-gray-500 py-8">
              No songs found matching "{searchTerm}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicSearchApp;
