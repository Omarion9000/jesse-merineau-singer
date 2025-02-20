import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const news = [
  {
    id: 1,
    title: 'New Single "Your Babo Baby" Marks a Fresh Chapter',
    date: 'January 15, 2025',
    image: 'https://auteurresearch.com/wp-content/uploads/2024/08/Your-Babo-Baby-Single-Artwork-by-Max-Ambeault-scaled.jpg',
    excerpt: 'BABO BABY, also known as Jesse Merineau, is a singer-songwriter born in Sault Ste. Marie, ON. He is now poised to embark on a fresh musical journey, bringing to life a vision he has long dreamed of.',
    content: `Merineau's past indie-rock act quickly gained traction, captivating audiences and selling out numerous concerts. He achieved a significant milestone by signing with the renowned label Blanco Y Negro in Spain, reaching many of his initial career goals. The pandemic's impact on live performances, coupled with evolving musical tastes, prompted Merineau to pursue a new project.

After a decade in the industry, he leveraged his network to create BABO BABY, collaborating with DJs and producers from Paris, LA, Seoul, and New Zealand. This project features modern-futuristic pop instrumentals and lyrics inspired by his new love from South Korea, marking a significant evolution in his musical journey.`,
    author: 'Jenna Melanson',
    readMoreLink: 'https://canadianbeats.ca/2024/08/13/babo-baby-five-questions-with/'
  },
  {
    id: 2,
    title: '"The Same" - A Haunting New Single',
    date: 'January 10, 2025',
    image: 'https://aipate.com/wp-content/uploads/2024/09/babo-baby-the-same.jpg?w=640',
    excerpt: 'BABO BABY\'s new single, "The Same" is a hauntingly beautiful piece that highlights Jesse Merineau\'s artistic depth.',
    content: `His catchy vocals, paired with poignant lyrics, create a listening experience that is both emotive and effortless. The minimalist yet creative instrumental underscores the haunting atmosphere, while the production, mixing, and mastering are impeccable. BABO BABY's unique style and skill shine through, leaving listeners eager for more. Born in Sault Ste. Marie, Canada, Merineau's musical journey has been one of steady growth, and with "The Same" he continues to deliver on his promise of artistry and vision.`,
    author: 'Yellow & Black',
    readMoreLink: 'https://yellowblackmusic.com/babo-baby-the-same/'
  },
  {
    id: 3,
    title: '"More Than Need U" Explores Deep Love',
    date: 'January 5, 2025',
    image: 'https://static.wixstatic.com/media/5b1b54_764eb523ff1e4b14b6ea3c4fe5d3146f~mv2.jpg/v1/fill/w_568,h_568,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5b1b54_764eb523ff1e4b14b6ea3c4fe5d3146f~mv2.jpg',
    excerpt: '"More Than Need U" is the newest single from BABO BABY, a song detailing when yearning still doesn\'t fully convey the love you have for someone.',
    content: `It's a feeling that fully takes over and operates the gears in your mind. Enter the butterflies in your stomach and you've got a full blown crush, but that's not what BABO BABY discusses in "More Than Need U", but rather the next level above that. When this person is all you can think about. When you feel like you can't breathe when you're around them. When your worst fear is that they may not even like you back. These are the emotions he conveys in this song. The love is so strong it consumes every aspect of your life.`,
    author: 'Ashley Adams',
    readMoreLink: 'https://www.poppassionblog.com/post/review-more-than-need-u-babo-baby'
  }
];

const News = () => {
  return (
    <div className="pt-16">
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Latest News</h1>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto">
            Stay updated with the latest announcements and stories.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {news.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-full min-h-[300px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center text-gray-500 mb-4">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <div className="prose max-w-none text-gray-600 mb-6">
                      <p>{item.content}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 italic">By {item.author}</span>
                      <a
                        href={item.readMoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 font-semibold flex items-center space-x-2 hover:text-purple-700 transition-colors"
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Get the latest news and updates delivered directly to your inbox.
            </p>
            <form className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;