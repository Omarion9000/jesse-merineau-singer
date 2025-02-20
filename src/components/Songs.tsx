import { useState } from "react";
import { Play, Pause, Heart, Share2 } from 'lucide-react';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Song } from "./songs.d";

const songs: Song[] = [
  {
    id: 1,
    title: "Your Babo baby",
    album: "Babo baby",
    duration: "3:45",
    cover: "https://auteurresearch.com/wp-content/uploads/2024/08/Your-Babo-Baby-Single-Artwork-by-Max-Ambeault-scaled.jpg",
    url: "https://drive.google.com/file/d/1KbEknQxiISMsXPw4pfzuxvLhHnm_a1Ow/preview",
  },
  {
    id: 2,
    title: "More than need u",
    album: "Babo baby",
    duration: "3:06",
    cover: "https://static.wixstatic.com/media/5b1b54_764eb523ff1e4b14b6ea3c4fe5d3146f~mv2.jpg/v1/fill/w_568,h_568,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5b1b54_764eb523ff1e4b14b6ea3c4fe5d3146f~mv2.jpg",
    url: "https://drive.google.com/file/d/1Va6XCfNO2xGH3xym7i0I5AUjdqDgFwWE/preview",
  },
  {
    id: 3,
    title: "Temporary Dopamine",
    album: "Single",
    duration: "3:05",
    cover: "https://i.scdn.co/image/ab67616d0000b273114720e22fe567fc0f5bfaf8",
    url: "https://drive.google.com/file/d/15PnEGjfqR9Tql2WSxNBRA-F_kZwmSghV/preview",
  },
  {
    id: 4,
    title: 'This spark',
    album: 'Single',
    duration: '3:11',
    cover: 'https://cdn-images.dzcdn.net/images/cover/873915ca01f9e0ebf995bc798a28bdc9/500x500-000000-80-0-0.jpg',
    url: 'https://drive.google.com/file/d/1bvh17Abp1ruf31L6hNsOU1toYkgqRTbz/preview',
  },
  {
    id: 5,
    title: 'Honey',
    album: 'Single',
    duration: '2:49',
    cover: 'https://i.ytimg.com/vi/cFKtupPTzG4/maxresdefault.jpg',
    url: 'https://drive.google.com/file/d/1qDbAN9n3LxQNIv-LbguFScZFJOakWaTf/preview',
  },
  {
    id: 6,
    title: 'She knows',
    album: 'Single',
    duration: '3:21',
    cover: 'https://i.scdn.co/image/ab67616d0000b273cd38338b3d337623906d5ec1',
    url: 'https://drive.google.com/file/d/1xo79hF6IBe_GQKrUgVJ_iW1vGd3Npbkq/preview',
  },
  {
    id: 7,
    title: 'Another round',
    album: 'Single',
    duration: '4:24',
    cover: 'https://i.scdn.co/image/ab67616d00001e024cbe0181c1889b0ebccafb73',
    url: 'https://drive.google.com/file/d/1HgTgfLiUfEHWgWvkRYZncYA7ixFTEOZb/preview',
  },
  {
    id: 8,
    title: 'The edge',
    album: 'Single',
    duration: '3:49',
    cover: 'https://i.scdn.co/image/ab67616d00001e024cbe0181c1889b0ebccafb73',
    url: 'https://drive.google.com/file/d/12_fTxqP3Ip4y-O7Zp0rcI-WKAGU1vbAt/preview',
  },
  {
    id: 9,
    title: 'Now that I am home',
    album: 'Single',
    duration: '3:38',
    cover: 'https://i.scdn.co/image/ab67616d00001e024cbe0181c1889b0ebccafb73',
    url: 'https://drive.google.com/file/d/1Op-9n1ilaqxcbsRecZsFhCWF4h6WYPnp/preview',
  },
  {
    id: 10,
    title: 'That night',
    album: 'Single',
    duration: '3:31',
    cover: 'https://i.scdn.co/image/ab67616d00001e024cbe0181c1889b0ebccafb73',
    url: 'https://drive.google.com/file/d/1kQxywRCMNNThcNM6Khb2Kbc2Nlu7G2Qo/preview',
  }
];

const Songs = () => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState<number | null>(null);

  const handlePlayPause = (song: Song) => {
    if (currentSong?.id === song.id) {
      setIsPlaying(!isPlaying);  // Cambiar el estado de reproducción
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  const handleShare = (song: Song, platform: string) => {
    const text = `Check out "${song.title}" by Jesse Merineau`;
    const url = "https://jessemerineau.net.omarserrano.ca/";

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`
    };

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
  };

  return (
    <div className="pt-16">
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Songs</h1>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto">
            Listen to the latest tracks and discover new favorites.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {songs.map((song) => (
                <div key={song.id} className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        src={song.cover}
                        alt={song.title}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{song.title}</h3>
                        <p className="text-sm text-gray-500">{song.album}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <span className="text-gray-500">{song.duration}</span>
                      <button
                        className="text-gray-400 hover:text-purple-600 transition-colors"
                        onClick={() => handlePlayPause(song)}
                      >
                        {currentSong?.id === song.id && isPlaying ? (
                          <Pause className="h-5 w-5" />
                        ) : (
                          <Play className="h-5 w-5" />
                        )}
                      </button>
                      <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <Heart className="h-5 w-5" />
                      </button>
                      <div className="relative">
                        <button 
                          className="text-gray-400 hover:text-blue-500 transition-colors"
                          onClick={() => setShowShareMenu(showShareMenu === song.id ? null : song.id)}
                        >
                          <Share2 className="h-5 w-5" />
                        </button>
                        {showShareMenu === song.id && (
                          <div className="absolute right-0 mt-2 bg-white p-2 rounded shadow-md">
                            <button
                              className="block text-gray-700 hover:text-blue-500"
                              onClick={() => handleShare(song, 'facebook')}
                            >
                              <FaFacebook className="h-4 w-4 inline-block mr-2" /> Facebook
                            </button>
                            <button
                              className="block text-gray-700 hover:text-blue-500 mt-1"
                              onClick={() => handleShare(song, 'twitter')}
                            >
                              <FaTwitter className="h-4 w-4 inline-block mr-2" /> Twitter
                            </button>
                            <button
                              className="block text-gray-700 hover:text-green-500 mt-1"
                              onClick={() => handleShare(song, 'whatsapp')}
                            >
                              <FaWhatsapp className="h-4 w-4 inline-block mr-2" /> WhatsApp
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {currentSong?.id === song.id && isPlaying && (
                    <iframe
                      src={song.url}
                      width="100%"
                      height="166"
                      frameBorder="no"
                      allow="autoplay"
                    ></iframe>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Songs;
