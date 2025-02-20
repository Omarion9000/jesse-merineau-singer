import React from 'react';
import { Award, Music, Users, Mic } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About the Artist</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A visionary artist pushing the boundaries of modern music, blending genres
              and creating unforgettable experiences through sound.
            </p>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Artist Portrait"
              className="rounded-lg shadow-xl"
            />
            <div>
              <h2 className="text-3xl font-bold mb-6">The Journey</h2>
              <p className="text-gray-600 mb-6">
                Starting from humble beginnings, our artist has grown to become one of the
                most influential voices in contemporary music. With multiple platinum records
                and sold-out world tours, the journey continues to inspire millions worldwide.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-purple-600" />
                  <div>
                    <h3 className="font-bold">10+</h3>
                    <p className="text-sm text-gray-500">Awards Won</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Music className="h-8 w-8 text-purple-600" />
                  <div>
                    <h3 className="font-bold">5</h3>
                    <p className="text-sm text-gray-500">Albums Released</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-purple-600" />
                  <div>
                    <h3 className="font-bold">1M+</h3>
                    <p className="text-sm text-gray-500">Global Fans</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mic className="h-8 w-8 text-purple-600" />
                  <div>
                    <h3 className="font-bold">100+</h3>
                    <p className="text-sm text-gray-500">Live Shows</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;