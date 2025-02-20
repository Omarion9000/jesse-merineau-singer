import React from 'react';
import { Music, Users, Mic } from 'lucide-react';

const AboutMe = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A passionate musician pushing the boundaries of modern music, blending genres
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
              src="https://i.ibb.co/xts0CdbB/BABO-BABY-Press-Photo-by-Vincent-Miller-1536x1340.jpg"
              alt="Jesse Merineau"
              className="rounded-lg shadow-xl"
            />
            <div>
              <h2 className="text-3xl font-bold mb-6">The Journey</h2>
              <div className="prose max-w-none text-gray-600 space-y-4">
                <p>
                  Hi, I'm Jesse Merineau, a singer/songwriter from Sault Ste. Marie, Ontario. Music has always been a part of who I am. At 16, with nothing but my acoustic guitar and my voice, I started performing live, pouring my heart into every song.
                </p>
                <p>
                  What began as small acoustic gigs soon led to bigger opportunities. I became the go-to opening act for touring bands passing through my city, but I knew I wanted more. So, I stepped up my game. With a full band behind me, I started headlining shows, winning Battle of the Bands, selling out local venues, and leading the biggest festival in town.
                </p>
                <p>
                  Now, I'm taking things even further. I'm working on my debut EP, collaborating with some incredible names in the industry, and bringing my music to a bigger stage. Every step I take is another move toward turning my dream into reality. 2018 is the year I release my music to the world—and I can't wait to share it with you.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="flex items-center space-x-3">
                  <Music className="h-8 w-8 text-purple-600" />
                  <div>
                    <h3 className="font-bold">10+</h3>
                    <p className="text-sm text-gray-500">Singles Released</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-purple-600" />
                  <div>
                    <h3 className="font-bold">100K+</h3>
                    <p className="text-sm text-gray-500">Global Fans</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mic className="h-8 w-8 text-purple-600" />
                  <div>
                    <h3 className="font-bold">50+</h3>
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

export default AboutMe;