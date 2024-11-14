import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import FilterSection from '../components/FilterSection';

interface Activity {
  id: number;
  title: string;
  image: string;
  price: string;
  rating: number;
  duration: string;
  location: string;
}

const activities: Activity[] = [
  {
    id: 1,
    title: "Historical City Tour",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "$49",
    rating: 4.8,
    duration: "3 hours",
    location: "City Center"
  },
  {
    id: 2,
    title: "Mountain Hiking Adventure",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "$75",
    rating: 4.9,
    duration: "6 hours",
    location: "Mountain Range"
  },
  {
    id: 3,
    title: "Local Food Tour",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "$65",
    rating: 4.7,
    duration: "4 hours",
    location: "Downtown"
  }
];

const filterOptions = {
  duration: [
    { id: '0-3', label: '0-3 hours' },
    { id: '3-6', label: '3-6 hours' },
    { id: '6+', label: '6+ hours' }
  ],
  price: [
    { id: 'budget', label: 'Budget ($)' },
    { id: 'mid', label: 'Mid-Range ($$)' },
    { id: 'luxury', label: 'Luxury ($$$)' }
  ]
};

const Booking = () => {
  const [selectedDuration, setSelectedDuration] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string[]>([]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Book Your Next Adventure</h1>
        <SearchBar 
          placeholder="Search for activities, tours, or attractions" 
          onSearch={(query) => console.log(query)}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="space-y-6">
          <FilterSection
            title="Duration"
            options={filterOptions.duration}
            selectedOptions={selectedDuration}
            onToggle={(id) => {
              setSelectedDuration(prev =>
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

        {/* Activities Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{activity.title}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{activity.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{activity.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">{activity.price}</span>
                      <button className="btn">Book Now</button>
                    </div>
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

export default Booking;