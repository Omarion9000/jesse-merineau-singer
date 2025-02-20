import React from 'react';
import { Play, Share2, Heart } from 'lucide-react';

const albums = [
  {
    id: 1,
    title: 'Babo baby',
    year: '2025',
    cover: 'https://auteurresearch.com/wp-content/uploads/2024/08/Your-Babo-Baby-Single-Artwork-by-Max-Ambeault-scaled.jpg',
    tracks: 12
  },
  {
    id: 2,
    title: 'Midnight Symphony',
    year: '2023',
    cover: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tracks: 10
  },
  {
    id: 3,
    title: 'Urban Echoes',
    year: '2022',
    cover: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tracks: 8
  }
];

const Albums = () => {
  return (
    <div className="pt-16">
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Albums</h1>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto">
            Explore the complete discography and immerse yourself in the musical journey.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album) => (
              <div key={album.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative group">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-purple-600 p-3 rounded-full text-white hover:bg-purple-700 transition-colors">
                      <Play className="h-8 w-8" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{album.title}</h3>
                      <p className="text-gray-600">{album.year}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 hover:text-purple-600 transition-colors">
                        <Heart className="h-5 w-5" />
                      </button>
                      <button className="p-2 hover:text-purple-600 transition-colors">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-500">{album.tracks} tracks</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Albums;