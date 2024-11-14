import React, { useState } from 'react';
import { User, MapPin, Calendar, Settings } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    location: 'New York, USA',
    joinDate: 'January 2024',
  };

  const upcomingBookings = [
    {
      id: 1,
      title: 'City Walking Tour',
      date: '2024-03-25',
      time: '10:00 AM',
      location: 'Central Park',
    },
    {
      id: 2,
      title: 'Restaurant Reservation',
      date: '2024-03-27',
      time: '7:30 PM',
      location: 'The Local Kitchen',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow p-6 space-y-6">
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center">
                <User className="h-12 w-12 text-blue-600" />
              </div>
              <h2 className="mt-4 text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.location}</p>
            </div>

            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center px-4 py-2 rounded-md ${
                  activeTab === 'profile'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <User className="h-5 w-5 mr-3" />
                Profile
              </button>
              <button
                onClick={() => setActiveTab('bookings')}
                className={`w-full flex items-center px-4 py-2 rounded-md ${
                  activeTab === 'bookings'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Calendar className="h-5 w-5 mr-3" />
                My Bookings
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center px-4 py-2 rounded-md ${
                  activeTab === 'settings'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Settings className="h-5 w-5 mr-3" />
                Settings
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow">
            {activeTab === 'profile' && (
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-6">
                  Profile Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={user.name}
                      className="block w-full mt-1 p-2 border border-gray-300 rounded"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      value={user.email}
                      className="block w-full mt-1 p-2 border border-gray-300 rounded"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Location
                    </label>
                    <input
                      type="text"
                      value={user.location}
                      className="block w-full mt-1 p-2 border border-gray-300 rounded"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Member Since
                    </label>
                    <input
                      type="text"
                      value={user.joinDate}
                      className="block w-full mt-1 p-2 border border-gray-300 rounded"
                      disabled
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-6">
                  Upcoming Bookings
                </h3>
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <div key={booking.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{booking.title}</h4>
                          <div className="mt-2 space-y-1 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2" />
                              {booking.date} at {booking.time}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              {booking.location}
                            </div>
                          </div>
                        </div>
                        <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-6">Account Settings</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-4">Notifications</h4>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 rounded"
                        />
                        <span className="ml-2">
                          Email notifications for bookings
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 rounded"
                        />
                        <span className="ml-2">
                          Push notifications for deals
                        </span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-4">Privacy</h4>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 rounded"
                        />
                        <span className="ml-2">Make profile public</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 rounded"
                        />
                        <span className="ml-2">Share activity history</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
