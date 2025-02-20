import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const openSpotify = () => {
    window.open("https://open.spotify.com/track/0z0uDE2PV0DqdZE13lHSdE", "_blank");
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="text-white text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">Jesse Merineau</h1>
              <p className="text-xl md:text-2xl mb-8">New single "More than need u" Out Now</p>
              
              <div className="flex justify-center mb-8">
                <button 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full flex items-center space-x-2"
                  onClick={openSpotify}
                >
                  <Play className="h-5 w-5" />
                  <span>Listen Now</span>
                </button>
              </div>

              <div className="max-w-xl mx-auto">
                <iframe 
                  style={{ borderRadius: '12px' }} 
                  src="https://open.spotify.com/embed/track/0z0uDE2PV0DqdZE13lHSdE?utm_source=generator" 
                  width="100%" 
                  height="152" 
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Release */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Release</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img 
              src="https://static.wixstatic.com/media/5b1b54_764eb523ff1e4b14b6ea3c4fe5d3146f~mv2.jpg/v1/fill/w_568,h_568,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5b1b54_764eb523ff1e4b14b6ea3c4fe5d3146f~mv2.jpg"
              alt="More Than Need U Cover"
              className="rounded-lg shadow-xl"
            />
            <div>
              <h3 className="text-2xl font-bold mb-4">More Than Need U</h3>
              <p className="text-gray-600 mb-6">
                BABO BABY's latest single, "More Than Need U," released in 2025, delves into the depths of yearning and desire. 
                The track explores emotions that transcend mere need, capturing the intensity of longing in a compelling musical narrative. 
                With its evocative lyrics and captivating melody, "More Than Need U" offers listeners a profound and immersive experience.
                This release follows BABO BABY's earlier singles, "The Same" and "Your Babo Baby," both from 2024, showcasing the artist's 
                evolving musical journey.
              </p>
              <div className="flex flex-col space-y-4">
                <button 
                  className="w-full bg-black text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2"
                  onClick={openSpotify}
                >
                  <Play className="h-5 w-5" />
                  <span>Stream Song</span>
                </button>
                <div className="flex justify-center mt-4">
                  <Link 
                    to="/songs"
                    className="w-2/3 border-2 border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-colors text-center"
                  >
                    View Track List
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Video</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative pb-[56.25%] h-0">
            <iframe 
    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
    src="https://www.youtube.com/embed/3JlcPAWqJcA?autoplay=1&mute=1&loop=1&playlist=3JlcPAWqJcA" 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen
></iframe>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;