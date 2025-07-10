'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, MapPin, Calendar, Edit, Check, X, Lock, Bookmark, Phone } from 'lucide-react';
import Image from 'next/image';

type UserProfileTab = 'profile' | 'bookings' | 'preferences';

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState<UserProfileTab>('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Aravind Kumar',
    email: 'aravind@example.com',
    location: 'Kochi, Kerala',
    joinDate: 'Joined March 2023',
    bio: 'Nature enthusiast exploring the beauty of Kerala one destination at a time.',
    phone: '+91 9876543210'
  });
  const [tempData, setTempData] = useState({ ...profileData });

  // Mock bookings data
  const bookings = [
    {
      id: 1,
      destination: 'Munnar Tea Gardens',
      date: '15-18 Oct 2023',
      status: 'Confirmed',
      image: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      destination: 'Aleppey Backwaters',
      date: '22-24 Nov 2023',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      destination: 'Wayanad Wildlife Safari',
      date: '5-7 Jan 2024',
      status: 'Upcoming',
      image: 'https://images.unsplash.com/photo-1698382439843-ca033a6079c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  const handleEditToggle = () => {
    if (isEditing) {
      // Save changes
      setProfileData({ ...tempData });
    } else {
      // Start editing - copy current data to temp
      setTempData({ ...profileData });
    }
    setIsEditing(!isEditing);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTempData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-emerald-800">My Profile</h1>
          <p className="text-gray-600 mt-2">Manage your Kerala Tourism account</p>
        </motion.div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Profile Header with Image */}
          <div className="relative h-48 bg-gradient-to-r from-emerald-600 to-teal-600">
            <div className="absolute -bottom-16 left-6">
              <div className="relative h-32 w-32 rounded-full border-4 border-white bg-gray-100 overflow-hidden">
                <Image 
                  src="/profile-placeholder.jpg" 
                  alt="Profile picture"
                  width={128}
                  height={128}
                  className="object-cover"
                />
                {isEditing && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute bottom-2 right-2 bg-emerald-600 text-white p-2 rounded-full shadow-md"
                  >
                    <Edit className="w-4 h-4" />
                  </motion.button>
                )}
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="pt-20 px-6 pb-6">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
              <button
                onClick={() => setActiveTab('profile')}
                className={`py-3 px-4 font-medium text-sm flex items-center gap-2 ${activeTab === 'profile' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-500 hover:text-emerald-500'}`}
              >
                <User className="w-4 h-4" />
                Profile
              </button>
              <button
                onClick={() => setActiveTab('bookings')}
                className={`py-3 px-4 font-medium text-sm flex items-center gap-2 ${activeTab === 'bookings' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-500 hover:text-emerald-500'}`}
              >
                <Bookmark className="w-4 h-4" />
                My Bookings
              </button>
              <button
                onClick={() => setActiveTab('preferences')}
                className={`py-3 px-4 font-medium text-sm flex items-center gap-2 ${activeTab === 'preferences' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-500 hover:text-emerald-500'}`}
              >
                <Lock className="w-4 h-4" />
                Preferences
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                {/* Profile Tab */}
                {activeTab === 'profile' && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-bold text-gray-800">Personal Information</h2>
                      {!isEditing ? (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleEditToggle}
                          className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium"
                        >
                          <Edit className="w-4 h-4" />
                          Edit Profile
                        </motion.button>
                      ) : (
                        <div className="flex gap-2">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleCancelEdit}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg text-sm font-medium"
                          >
                            <X className="w-4 h-4" />
                            Cancel
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleEditToggle}
                            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium"
                          >
                            <Check className="w-4 h-4" />
                            Save Changes
                          </motion.button>
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          {isEditing ? (
                            <input
                              type="text"
                              name="name"
                              value={tempData.name}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                            />
                          ) : (
                            <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-lg">
                              <User className="w-5 h-5 text-gray-400" />
                              <span>{profileData.name}</span>
                            </div>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          {isEditing ? (
                            <input
                              type="email"
                              name="email"
                              value={tempData.email}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                            />
                          ) : (
                            <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-lg">
                              <Mail className="w-5 h-5 text-gray-400" />
                              <span>{profileData.email}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                          {isEditing ? (
                            <input
                              type="tel"
                              name="phone"
                              value={tempData.phone}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                            />
                          ) : (
                            <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-lg">
                              <Phone className="w-5 h-5 text-gray-400" />
                              <span>{profileData.phone}</span>
                            </div>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                          {isEditing ? (
                            <input
                              type="text"
                              name="location"
                              value={tempData.location}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                            />
                          ) : (
                            <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-lg">
                              <MapPin className="w-5 h-5 text-gray-400" />
                              <span>{profileData.location}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                        {isEditing ? (
                          <textarea
                            name="bio"
                            value={tempData.bio}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                          />
                        ) : (
                          <div className="px-4 py-2 bg-gray-50 rounded-lg">
                            <p>{profileData.bio}</p>
                          </div>
                        )}
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-3 text-gray-500">
                          <Calendar className="w-5 h-5" />
                          <span className="text-sm">{profileData.joinDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bookings Tab */}
                {activeTab === 'bookings' && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-6">My Travel Experiences</h2>
                    
                    <div className="space-y-4">
                      {bookings.map(booking => (
                        <motion.div
                          key={booking.id}
                          whileHover={{ y: -2 }}
                          className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 h-48 bg-gray-100 relative">
                              <Image
                                src={booking.image}
                                alt={booking.destination}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="md:w-2/3 p-4">
                              <h3 className="font-bold text-lg text-emerald-800">{booking.destination}</h3>
                              <div className="flex items-center gap-4 mt-2 mb-3">
                                <span className="text-sm text-gray-600">{booking.date}</span>
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                  booking.status === 'Confirmed' 
                                    ? 'bg-blue-100 text-blue-800' 
                                    : booking.status === 'Completed' 
                                      ? 'bg-green-100 text-green-800' 
                                      : 'bg-orange-100 text-orange-800'
                                }`}>
                                  {booking.status}
                                </span>
                              </div>
                              <div className="flex gap-3 mt-4">
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium"
                                >
                                  View Details
                                </motion.button>
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium"
                                >
                                  {booking.status === 'Upcoming' ? 'Cancel' : 'Review'}
                                </motion.button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Preferences Tab */}
                {activeTab === 'preferences' && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Account Preferences</h2>
                    
                    <div className="space-y-6">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-medium text-gray-800 mb-3">Notification Settings</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-700">Email notifications</p>
                              <p className="text-xs text-gray-500">Receive updates about your bookings</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-700">SMS notifications</p>
                              <p className="text-xs text-gray-500">Get important alerts via text</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-700">Special offers</p>
                              <p className="text-xs text-gray-500">Get deals and promotions</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h3 className="font-medium text-gray-800 mb-3">Privacy Settings</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-700">Make profile public</p>
                              <p className="text-xs text-gray-500">Allow others to see your activity</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-700">Show last seen</p>
                              <p className="text-xs text-gray-500">Display when you were last active</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="border border-red-100 bg-red-50 rounded-lg p-4">
                        <h3 className="font-medium text-red-800 mb-3">Danger Zone</h3>
                        <div className="space-y-3">
                          <button className="text-sm font-medium text-red-600 hover:text-red-800">
                            Change Password
                          </button>
                          <button className="text-sm font-medium text-red-600 hover:text-red-800">
                            Deactivate Account
                          </button>
                          <button className="text-sm font-medium text-red-600 hover:text-red-800">
                            Delete Account
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}