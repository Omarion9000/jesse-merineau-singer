import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import ErrorBoundary from './ErrorBoundary';

declare global {
  interface Window {
    SC: any;
  }
}

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const playerRef = useRef<any>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const initializeWidget = () => {
      if (window.SC && iframeRef.current) {
        try {
          playerRef.current = window.SC.Widget(iframeRef.current);
          
          playerRef.current.bind(window.SC.Widget.Events.READY, () => {
            playerRef.current.setVolume(volume * 100);
            
            playerRef.current.bind(window.SC.Widget.Events.PLAY, () => {
              setIsPlaying(true);
            });
            
            playerRef.current.bind(window.SC.Widget.Events.PAUSE, () => {
              setIsPlaying(false);
            });
            
            playerRef.current.bind(window.SC.Widget.Events.FINISH, () => {
              setIsPlaying(false);
              // Auto-replay when finished
              playerRef.current.seekTo(0);
              playerRef.current.play();
            });
          });
        } catch (error) {
          console.error('Error initializing SoundCloud widget:', error);
        }
      }
    };

    if (!window.SC) {
      const script = document.createElement('script');
      script.src = 'https://w.soundcloud.com/player/api.js';
      script.crossOrigin = 'anonymous';
      script.onload = initializeWidget;
      document.body.appendChild(script);
    } else {
      initializeWidget();
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.unbind(window.SC.Widget.Events.READY);
        playerRef.current.unbind(window.SC.Widget.Events.PLAY);
        playerRef.current.unbind(window.SC.Widget.Events.PAUSE);
        playerRef.current.unbind(window.SC.Widget.Events.FINISH);
      }
    };
  }, [volume]);

  const handlePlayPause = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pause();
      } else {
        playerRef.current.play();
      }
    }
  };

  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newVolume = Math.max(0, Math.min(1, x / rect.width));
    setVolume(newVolume);
    if (playerRef.current) {
      playerRef.current.setVolume(newVolume * 100);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://auteurresearch.com/wp-content/uploads/2024/08/Your-Babo-Baby-Single-Artwork-by-Max-Ambeault-scaled.jpg"
            alt="Your Babo Baby"
            className="w-12 h-12 rounded"
          />
          <div>
            <h4 className="font-medium">Your Babo Baby</h4>
            <p className="text-sm text-gray-400">Jesse Merineau</p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <button className="hover:text-purple-400" disabled>
            <SkipBack className="h-5 w-5" />
          </button>
          <button
            className="bg-purple-600 p-2 rounded-full hover:bg-purple-700"
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6" />
            )}
          </button>
          <button className="hover:text-purple-400" disabled>
            <SkipForward className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <Volume2 className="h-5 w-5" />
          <div 
            className="w-24 h-1 bg-gray-700 rounded-full cursor-pointer"
            onClick={handleVolumeChange}
          >
            <div 
              className="h-full bg-purple-600 rounded-full"
              style={{ width: `${volume * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="hidden">
        <ErrorBoundary>
          <iframe
            ref={iframeRef}
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/omar-serrano90/your-babo-baby-babo-baby&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
            title="Your Babo Baby"
            crossOrigin="anonymous"
          />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default MusicPlayer;