import React, { useState, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // This would normally be a real audio file
  const audioSrc = "#";
  
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
  
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };
  
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };
  
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };
  
  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
      } else {
        audioRef.current.volume = 0;
      }
      setIsMuted(!isMuted);
    }
  };
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm p-5 border border-neutral-100 dark:border-neutral-700">
      <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-4">Voice Response</h3>
      
      <audio 
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className="space-y-4">
        {/* Progress bar */}
        <div className="space-y-1">
          <input 
            type="range"
            min="0"
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full appearance-none cursor-pointer"
            style={{
              backgroundSize: `${(currentTime / (duration || 1)) * 100}% 100%`,
              backgroundImage: 'linear-gradient(to right, #2B6D9A, #2B6D9A)'
            }}
          />
          
          <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration || 0)}</span>
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400">
              <SkipBack size={20} />
            </button>
            
            <button 
              onClick={togglePlay}
              className="bg-primary-500 hover:bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-800"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
            </button>
            
            <button className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400">
              <SkipForward size={20} />
            </button>
          </div>
          
          <div className="flex items-center space-x-2 w-1/4">
            <button onClick={toggleMute} className="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400">
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            
            <input 
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-full appearance-none cursor-pointer"
              style={{
                backgroundSize: `${(isMuted ? 0 : volume) * 100}% 100%`,
                backgroundImage: 'linear-gradient(to right, #2B6D9A, #2B6D9A)'
              }}
            />
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          <span className="font-medium">Session:</span> Stress Management Techniques
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          <span className="font-medium">Generated:</span> Today at 2:45 PM
        </p>
      </div>
    </div>
  );
};

export default AudioPlayer;