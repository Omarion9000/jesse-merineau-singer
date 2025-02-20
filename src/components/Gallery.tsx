import React, { useState } from 'react';
import { Instagram, X } from 'lucide-react';

const images = [
  {
    id: 1,
    url: 'https://i.ibb.co/xts0CdbB/BABO-BABY-Press-Photo-by-Vincent-Miller-1536x1340.jpg',
    caption: 'BABO BABY Press Photo by Vincent Miller'
  },
  {
    id: 2,
    url: 'https://i.ibb.co/TBFGDm30/472456713-122142578552378757-721000078648326796-n.jpg',
    caption: 'Live Performance'
  },
  {
    id: 3,
    url: 'https://i.ibb.co/Pzm2JL8g/472347002-122142578636378757-9100080695549312177-n.jpg',
    caption: 'Studio Session'
  },
  {
    id: 4,
    url: 'https://i.ibb.co/zTyFGWdq/472312735-122142424508378757-1301608264883312233-n.jpg',
    caption: 'Behind the Scenes'
  },
  {
    id: 5,
    url: 'https://i.ibb.co/VyJ8bD7/472292528-122142423872378757-2781320025341942892-n.jpg',
    caption: 'Concert Highlights'
  },
  {
    id: 6,
    url: 'https://i.ibb.co/rfcpHWys/472223590-122142578612378757-8688758025326678234-n.jpg',
    caption: 'Performance'
  },
  {
    id: 7,
    url: 'https://i.ibb.co/8hSmyL7/470197575-122139513698378757-5867792133111951243-n.jpg',
    caption: 'Stage Performance'
  },
  {
    id: 8,
    url: 'https://i.ibb.co/DDX2dQxv/349158458-1484990112240625-7166293676673766354-n.jpg',
    caption: 'Live Show'
  },
  {
    id: 9,
    url: 'https://i.ibb.co/XZ2QMHWP/347109739-1326565658208423-7029406294543167396-n.jpg',
    caption: 'Acoustic Session'
  },
  {
    id: 10,
    url: 'https://i.ibb.co/sd29Vd6k/67816596-1290688881089753-2009624745510699008-n.jpg',
    caption: 'Studio Recording'
  },
  {
    id: 11,
    url: 'https://i.ibb.co/x8g3QsYv/67614748-1290688157756492-2802114918214533120-n.jpg',
    caption: 'Backstage Moments'
  },
  {
    id: 12,
    url: 'https://i.ibb.co/wNxzpsL9/67375239-1290690957756212-8119379482583760896-n.jpg',
    caption: 'On Stage'
  },
  {
    id: 13,
    url: 'https://i.ibb.co/7tTX27Tk/50734615-292527701428981-5255247727696019456-n.jpg',
    caption: 'Performance Night'
  },
  {
    id: 14,
    url: 'https://i.ibb.co/2Yp60s3M/50699191-292526174762467-8797106716094234624-n.jpg',
    caption: 'Live Music'
  },
  {
    id: 15,
    url: 'https://i.ibb.co/1G3WSDq0/50674110-292523501429401-1684735028191297536-n.jpg',
    caption: 'Concert Vibes'
  },
  {
    id: 16,
    url: 'https://i.ibb.co/bgMjdkmj/50589108-292526008095817-6083047926051897344-n.jpg',
    caption: 'Music Journey'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  return (
    <div className="pt-16">
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Gallery</h1>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto">
            A visual journey through performances, behind-the-scenes moments, and more.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image) => (
              <div 
                key={image.id} 
                className="group relative cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/400x600?text=Image+Not+Found';
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-lg font-semibold mb-2">{image.caption}</p>
                    <a
                      href="https://www.instagram.com/jessemerineau/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-sm hover:text-purple-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Instagram className="h-5 w-5" />
                      <span>View on Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-w-7xl w-full">
            <img
              src={selectedImage.url}
              alt={selectedImage.caption}
              className="max-w-full max-h-[90vh] object-contain rounded-lg mx-auto"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/800x1200?text=Image+Not+Found';
              }}
            />
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold bg-black/50 px-4 py-2 rounded-full">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;