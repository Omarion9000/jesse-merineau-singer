import React from 'react';
import { Play } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Now That I\'m Home (Official Music Video)',
    thumbnail: 'https://i.ytimg.com/vi/koLP0EF2NdA/maxresdefault.jpg',
    youtubeId: 'koLP0EF2NdA',
    description: 'Official music video for "Now That I\'m Home"'
  },
  {
    id: 2,
    title: 'That Night (Official Music Video)',
    thumbnail: 'https://i.ytimg.com/vi/h-nyn8i66rI/maxresdefault.jpg',
    youtubeId: 'h-nyn8i66rI',
    description: 'Official music video for "That Night"'
  },
  {
    id: 3,
    title: 'Temporary Dopamine (Official Music Video)',
    thumbnail: 'https://i.ytimg.com/vi/DmUzXFmbQRc/maxresdefault.jpg',
    youtubeId: 'DmUzXFmbQRc',
    description: 'Official music video for "Temporary Dopamine"'
  },
  {
    id: 4,
    title: 'She Knows (Official Music Video)',
    thumbnail: 'https://i.ytimg.com/vi/Pm-AVF8sAnU/maxresdefault.jpg',
    youtubeId: 'Pm-AVF8sAnU',
    description: 'Official music video for "She Knows"'
  },
  {
    id: 5,
    title: 'This Spark (Official Music Video)',
    thumbnail: 'https://i.ytimg.com/vi/ziNIj4cTFVg/maxresdefault.jpg',
    youtubeId: 'ziNIj4cTFVg',
    description: 'Official music video for "This Spark"'
  },
  {
    id: 6,
    title: 'Honey (Official Music Video)',
    thumbnail: 'https://i.ytimg.com/vi/cFKtupPTzG4/maxresdefault.jpg',
    youtubeId: 'cFKtupPTzG4',
    description: 'Official music video for "Honey"'
  }
];

const Videos = () => {
  return (
    <div className="pt-16">
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Videos</h1>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto">
            Watch official music videos, live performances, and behind-the-scenes content.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative aspect-w-16 aspect-h-9">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                  <p className="text-gray-600 mb-4">{video.description}</p>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    <Play className="h-5 w-5" />
                    <span>Watch on YouTube</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;