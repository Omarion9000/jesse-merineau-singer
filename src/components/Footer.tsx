import React from 'react';
import { Instagram, Youtube, Code } from 'lucide-react';
import { SiSpotify, SiApplemusic } from 'react-icons/si';

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:contact@jessemerineau.com';
  };

  return (
    <footer className="bg-black/90 text-white backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <SiApplemusic className="h-8 w-8 text-red-500" />
              <span className="font-bold text-xl">Jesse Merineau</span>
            </div>
            <p className="text-gray-400">
              Connect with me and stay updated with my latest music and performances.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About Me</a></li>
              <li><a href="/gallery" className="text-gray-400 hover:text-white">Gallery</a></li>
              <li><a href="/songs" className="text-gray-400 hover:text-white">Songs</a></li>
              <li><a href="/videos" className="text-gray-400 hover:text-white">Videos</a></li>
              <li><a href="/news" className="text-gray-400 hover:text-white">News</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <button
                  onClick={handleEmailClick}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors"
                >
                  Send Email
                </button>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.instagram.com/jessemerineau/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://www.youtube.com/@JesseMerineau" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
                <a href="https://open.spotify.com/artist/6ZZFdCU3kmBaCtZnHLeHE4" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
                  <SiSpotify className="h-6 w-6" />
                </a>
                <a href="https://music.apple.com/us/artist/jesse-merineau/1358885851" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                  <SiApplemusic className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jesse Merineau. All rights reserved.</p>
          <div className="flex items-center justify-center mt-2 text-sm">
            <Code className="h-4 w-4 mr-1" />
            <span>Developed by Omar Serrano</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;