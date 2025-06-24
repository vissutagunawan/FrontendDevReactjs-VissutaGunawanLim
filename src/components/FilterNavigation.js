import React from 'react';

const categories = ["All", "Italian", "Asian", "Thai", "Mexican", "American", "Japanese", "French", "Indian", "Chinese"];

const FilterNavigation = ({ filters, onFilterChange }) => {
  const clearAllFilters = () => {
    onFilterChange({
      openNow: false,
      price: '',
      category: ''
    });
  };

  const hasActiveFilters = filters.openNow || filters.price || filters.category;

  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-4 items-center">
          <span className="text-gray-600 font-medium">Filter By:</span>
          
          <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.openNow}
                onChange={(e) => onFilterChange({ ...filters, openNow: e.target.checked })}
                className="rounded"
              />
              <span className="text-sm">Open Now</span>
            </label>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Price:</span>
            <select
              value={filters.price}
              onChange={(e) => onFilterChange({ ...filters, price: e.target.value })}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value="">All</option>
              <option value="$">$</option>
              <option value="$$">$$</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Categories:</span>
            <select
              value={filters.category}
              onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
              className="border rounded px-2 py-1 text-sm"
            >
              {categories.map(cat => (
                <option key={cat} value={cat === "All" ? "" : cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-gray-500 hover:text-gray-700 underline"
          >
            CLEAR ALL
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterNavigation;