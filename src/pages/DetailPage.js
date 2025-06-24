import React from 'react';
import RestaurantDetail from '../components/RestaurantDetail';

const DetailPage = ({ restaurant, onBack }) => {
  return (
    <div className="py-8 px-4">
      <RestaurantDetail restaurant={restaurant} onBack={onBack} />
    </div>
  );
};

export default DetailPage;