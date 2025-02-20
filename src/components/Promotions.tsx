import React from 'react';
import { Tag, Calendar, ArrowRight } from 'lucide-react';

const promotions = [
  {
    id: 1,
    title: 'Early Bird Album Access',
    description: 'Get exclusive early access to the upcoming album "Ethereal Dreams" and receive limited edition merchandise.',
    validUntil: 'March 30, 2024',
    discount: '20% OFF'
  },
  {
    id: 2,
    title: 'VIP Concert Package',
    description: 'Purchase VIP tickets for the upcoming world tour and get a meet & greet opportunity with the artist.',
    validUntil: 'April 15, 2024',
    discount: 'Special Price'
  },
  {
    id: 3,
    title: 'Merchandise Bundle',
    description: 'Buy any album and get 50% off on selected merchandise items.',
    validUntil: 'May 1, 2024',
    discount: '50% OFF'
  }
];

const Promotions = () => {
  return (
    <div className="pt-16">
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Special Offers</h1>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto">
            Exclusive deals and promotions for our dedicated fans.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promotions.map((promo) => (
              <div key={promo.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Tag className="h-8 w-8 text-purple-600" />
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {promo.discount}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                  <p className="text-gray-600 mb-4">{promo.description}</p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>Valid until {promo.validUntil}</span>
                  </div>
                  <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
                    <span>Claim Offer</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promotions;