import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Compass, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">TravelMate</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/booking" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Book Tickets
            </Link>
            <Link to="/restaurants" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Restaurants
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <User className="h-4 w-4 mr-1" />
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/booking"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Book Tickets
            </Link>
            <Link
              to="/restaurants"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Restaurants
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;