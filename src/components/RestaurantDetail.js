import React from 'react';
import { Star } from 'lucide-react';

const RestaurantDetail = ({ restaurant, onBack }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <button
        onClick={onBack}
        className="mb-4 text-blue-600 hover:text-blue-800 flex items-center gap-2"
      >
        ← Back to Restaurants
      </button>
      
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
        <div className="flex items-center gap-2">
          {renderStars(restaurant.rating)}
          <span className="text-lg text-gray-600">({restaurant.rating})</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <img
            src={restaurant.photos[0]}
            alt={restaurant.name}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Cuisine Type</h3>
            <p className="text-gray-600">{restaurant.categories.join(", ")}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Price Range</h3>
            <p className="text-gray-600">{restaurant.priceRange}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Status</h3>
            <p className={restaurant.isOpen ? 'text-green-600' : 'text-red-600'}>
              {restaurant.isOpen ? 'Currently Open' : 'Currently Closed'}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {restaurant.reviews.map(review => (
            <div key={review.id} className="border rounded-lg p-4">
              <div className="flex items-start gap-3">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">{review.name}</h4>
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-gray-600">{review.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;