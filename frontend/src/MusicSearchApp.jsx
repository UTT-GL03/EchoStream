import React, { useState, useEffect } from 'react';
import './App.css';
import AudioPlayer from './AudioPlayer';
import { Link } from 'react-router-dom';
import PlayerBar from './PlayerBar';

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

  const groupByCategory = (songs) => {
    return songs.reduce((acc, song) => {
      const genre = song.genre || 'Uncategorized';
      if (!acc[genre]) {
        acc[genre] = [];
      }
      acc[genre].push(song);
      return acc;
    }, {});
  };

  const groupedMusic = groupByCategory(musicDatabase);

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
            {Object.keys(groupedMusic).map((genre) => (
                <div key={genre}>
                {/* Ajout d'un lien pour la catégorie */}
                <Link
                    to={`/category/${genre}`}
                    className="text-2xl font-semibold text-blue-600 hover:underline mb-4"
                >
                    {genre}
                </Link>
                {groupedMusic[genre].map((song) => (
                    <div
                    key={song._id}
                    className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow mb-4"
                    >
                    <h2 className="text-xl font-semibold text-gray-800">{song.title}</h2>
                    <div className="flex justify-between mt-2 mb-4">
                        <span className="text-gray-600">{song.artist}</span>
                        <span className="text-gray-500">{song.release_date}</span>
                    </div>
                    <AudioPlayer song={song} />
                    </div>
                ))}
                </div>
            ))}

            {musicDatabase.length === 0 && searchTerm && (
                <div className="text-center text-gray-500 py-8">
                No songs found matching "{searchTerm}"
                </div>
            )}
        </div>

      </div>

      <PlayerBar randomSong={randomSong}/>
    </div>
  );
};

export default MusicSearchApp;
