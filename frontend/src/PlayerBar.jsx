import React from 'react';
import './App.css';
import AudioPlayer from './AudioPlayer';

const PlayerBar = ({randomSong}) => {
    if (!randomSong) return null;
        return (
            <footer className="fixed bottom-0 left-0 w-full p-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold text-gray-800">Musique à découvrir !</h2>
            <p className="text-gray-600">{randomSong.title} - {randomSong.artist}</p>
            <AudioPlayer song={randomSong} />
            </div>
        </footer>
        )
    }

export default PlayerBar;