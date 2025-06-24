import React, { useState, useEffect } from 'react';
import FilterNavigation from '../components/FilterNavigation';
import RestaurantCard from '../components/RestaurantCard';
import { mockRestaurants } from '../data/mockData';

const MainPage = ({ onSelectRestaurant }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [filters, setFilters] = useState({
    openNow: false,
    price: '',
    category: ''
  });

  useEffect(() => {
    setRestaurants(mockRestaurants);
    setFilteredRestaurants(mockRestaurants);
  }, []);

  useEffect(() => {
    let filtered = restaurants;

    if (filters.openNow) {
      filtered = filtered.filter(r => r.isOpen);
    }

    if (filters.price) {
      filtered = filtered.filter(r => r.priceRange === filters.price);
    }

    if (filters.category) {
      filtered = filtered.filter(r => r.categories.includes(filters.category));
    }

    setFilteredRestaurants(filtered);
  }, [filters, restaurants]);

  const displayedRestaurants = showMore ? filteredRestaurants : filteredRestaurants.slice(0, 8);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Restaurants</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <FilterNavigation filters={filters} onFilterChange={setFilters} />

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">All Restaurants</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {displayedRestaurants.map(restaurant => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onLearnMore={onSelectRestaurant}
          />
        ))}
      </div>

      {filteredRestaurants.length > 8 && !showMore && (
        <div className="text-center">
          <button
            onClick={() => setShowMore(true)}
            className="bg-white border border-gray-300 text-gray-700 py-3 px-8 rounded hover:bg-gray-50 transition-colors font-medium"
          >
            LOAD MORE
          </button>
        </div>
      )}
    </div>
  );
};

export default MainPage;