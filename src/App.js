import React, { useState } from 'react';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';

const App = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleSelectRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleBack = () => {
    setSelectedRestaurant(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {selectedRestaurant ? (
        <DetailPage restaurant={selectedRestaurant} onBack={handleBack} />
      ) : (
        <MainPage onSelectRestaurant={handleSelectRestaurant} />
      )}
    </div>
  );
};

export default App;