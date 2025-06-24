import React from 'react';
import { Star, Clock } from 'lucide-react';

const RestaurantCard = ({ restaurant, onLearnMore }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <div className="aspect-video bg-gray-200 overflow-hidden">
        <img
          src={restaurant.photos[0]}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{restaurant.name}</h3>
        
        <div className="flex items-center gap-1 mb-2">
          {renderStars(restaurant.rating)}
          <span className="text-sm text-gray-600 ml-1">({restaurant.rating})</span>
        </div>
        
        <div className="text-sm text-gray-600 mb-2">
          {restaurant.categories[0]}
        </div>
        
        <div className="flex items-center justify-between mb-4 flex-grow">
          <span className="text-sm font-medium">{restaurant.priceRange}</span>
          <div className={`flex items-center gap-1 text-xs ${restaurant.isOpen ? 'text-green-600' : 'text-red-600'}`}>
            <Clock className="w-3 h-3" />
            {restaurant.isOpen ? 'Open' : 'Closed'}
          </div>
        </div>
        
        <button
          onClick={() => onLearnMore(restaurant)}
          className="w-full bg-blue-900 text-white py-2 px-4 rounded text-sm font-medium hover:bg-blue-800 transition-colors mt-auto"
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;