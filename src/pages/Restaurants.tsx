import React, { useState } from 'react';
import { MapPin, Star, Clock } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import FilterSection from '../components/FilterSection';

interface Restaurant {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  priceRange: string;
  location: string;
  openHours: string;
}

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "The Local Kitchen",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    cuisine: "Contemporary",
    rating: 4.8,
    priceRange: "$$",
    location: "Downtown",
    openHours: "11:00 AM - 10:00 PM"
  },
  {
    id: 2,
    name: "Seaside Bistro",
    image: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    cuisine: "Seafood",
    rating: 4.6,
    priceRange: "$$$",
    location: "Waterfront",
    openHours: "12:00 PM - 11:00 PM"
  },
  {
    id: 3,
    name: "Street Food Corner",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    cuisine: "Street Food",
    rating: 4.5,
    priceRange: "$",
    location: "City Center",
    openHours: "10:00 AM - 9:00 PM"
  }
];

const filterOptions = {
  cuisine: [
    { id: 'local', label: 'Local Cuisine' },
    { id: 'international', label: 'International' },
    { id: 'vegetarian', label: 'Vegetarian' }
  ],
  price: [
    { id: 'budget', label: 'Budget ($)' },
    { id: 'mid', label: 'Mid-Range ($$)' },
    { id: 'luxury', label: 'Luxury ($$$)' }
  ]
};

const Restaurants = () => {
  const [selectedCuisine, setSelectedCuisine] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string[]>([]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Discover Local Restaurants</h1>
        <SearchBar 
          placeholder="Search for restaurants, cuisine, or location" 
          onSearch={(query) => console.log(query)}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="space-y-6">
          <FilterSection
            title="Cuisine Type"
            options={filterOptions.cuisine}
            selectedOptions={selectedCuisine}
            onToggle={(id) => {
              setSelectedCuisine(prev =>
                prev.includes(id)
                  ? prev.filter(item => item !== id)
                  : [...prev, id]
              );
            }}
          />
          <FilterSection
            title="Price Range"
            options={filterOptions.price}
            selectedOptions={selectedPrice}
            onToggle={(id) => {
              setSelectedPrice(prev =>
                prev.includes(id)
                  ? prev.filter(item => item !== id)
                  : [...prev, id]
              );
            }}
          />
        </div>

        {/* Restaurants Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restaurants.map((restaurant) => (
              <div key={restaurant.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{restaurant.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{restaurant.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{restaurant.openHours}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{restaurant.rating}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-600">{restaurant.priceRange}</span>
                    </div>
                    <button className="w-full btn">
                      Reserve a Table
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;