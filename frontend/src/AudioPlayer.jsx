import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import './App.css';

const AudioPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [audioSrc, setAudioSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    audioRef.current.muted = isMuted;
  }, [isMuted]);

  const togglePlay = () => {
    if (!audioSrc) {
      setAudioSrc(song.audioUrl);
      audioRef.current.src = song.audioUrl;
      audioRef.current.play();
      setIsPlaying(true);
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
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleCanPlay = () => {
    setIsLoaded(true);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
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

      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onCanPlay={handleCanPlay}
        onEnded={handleEnded}
      />
    </div>
  );
};

export default AudioPlayer;
