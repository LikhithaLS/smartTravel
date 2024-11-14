import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Bell, Compass } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Your Smart Travel Companion</h1>
            <p className="text-xl mb-8">
              Discover personalized travel experiences, local insights, and seamless booking all in one place.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/booking"
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold transition duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose TravelMate?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl">
              <MapPin className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Recommendations</h3>
              <p className="text-gray-600">
                Get personalized suggestions based on your preferences and location.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <Calendar className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">
                Book tickets and make reservations with just a few taps.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <Bell className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
              <p className="text-gray-600">
                Stay informed with instant notifications about your bookings and nearby attractions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Start Your Journey?
          </h2>
          <Link
            to="/register"
            className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition duration-300"
          >
            Create Your Account
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;