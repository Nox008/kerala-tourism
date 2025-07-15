"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Booking, BookingStatus } from '../types/booking';

// Mock data - replace with API calls in a real implementation
const mockBookings: Booking[] = [
  {
    id: 'KL1234',
    destination: 'Alleppey Houseboat',
    bookingDate: '2023-05-15',
    travelDate: '2023-08-20',
    duration: '2 Days',
    status: 'confirmed',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'KL5678',
    destination: 'Munnar Tea Estate Tour',
    bookingDate: '2023-06-10',
    travelDate: '2023-09-05',
    duration: '3 Days',
    status: 'confirmed',
    image: 'https://images.unsplash.com/photo-1637066742971-726bee8d9f56?q=80&w=1249&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'KL9012',
    destination: 'Kochi Cultural Experience',
    bookingDate: '2023-07-01',
    travelDate: '2023-07-30',
    duration: '1 Day',
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1605955794720-651b9ae7f5e7?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'KL3456',
    destination: 'Wayand Wildlife Safari',
    bookingDate: '2023-06-25',
    travelDate: '2023-10-15',
    duration: '2 Days',
    status: 'pending',
    image: 'https://images.unsplash.com/photo-1630938819488-ba7d1440d48b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
];

const MyBookings = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [expandedBooking, setExpandedBooking] = useState<string | null>(null);

  const filteredBookings = mockBookings.filter(booking => {
    if (activeTab === 'upcoming') {
      return booking.status !== 'completed';
    }
    return booking.status === 'completed';
  });

  const toggleBookingExpansion = (id: string) => {
    setExpandedBooking(expandedBooking === id ? null : id);
  };

  const getStatusColor = (status: BookingStatus) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-emerald-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-emerald-800 mb-8"
        >
          My Bookings
        </motion.h1>

        {/* Tabs */}
        <div className="flex border-b border-emerald-200 mb-6">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-4 py-2 font-medium ${activeTab === 'upcoming' ? 'text-emerald-800 border-b-2 border-emerald-800' : 'text-emerald-600'}`}
          >
            Upcoming Trips
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`px-4 py-2 font-medium ${activeTab === 'past' ? 'text-emerald-800 border-b-2 border-emerald-800' : 'text-emerald-600'}`}
          >
            Past Trips
          </button>
        </div>

        {/* Bookings List */}
        {filteredBookings.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow p-8 text-center"
          >
            <p className="text-emerald-800">No {activeTab} bookings found.</p>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {filteredBookings.map((booking) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <div 
                  className="p-4 md:p-6 cursor-pointer"
                  onClick={() => toggleBookingExpansion(booking.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
                        <img 
                          src={booking.image} 
                          alt={booking.destination}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-emerald-800">{booking.destination}</h3>
                        <p className="text-sm text-gray-600">Booking ID: {booking.id}</p>
                        <p className="text-sm text-gray-600">Booked on: {new Date(booking.bookingDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex flex-col md:items-end">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                      <p className="text-sm text-emerald-800 mt-2">
                        {new Date(booking.travelDate).toLocaleDateString()} • {booking.duration}
                      </p>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedBooking === booking.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 md:px-6 md:pb-6 border-t border-emerald-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div>
                            <h4 className="font-medium text-emerald-800">Booking Details</h4>
                            <ul className="mt-2 space-y-1 text-sm text-gray-600">
                              <li>Booking Reference: {booking.id}</li>
                              <li>Destination: {booking.destination}</li>
                              <li>Travel Date: {new Date(booking.travelDate).toLocaleDateString()}</li>
                              <li>Duration: {booking.duration}</li>
                            </ul>
                          </div>
                          <div className="flex flex-col items-start space-y-3">
                            <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
                              View Itinerary
                            </button>
                            {booking.status === 'confirmed' || booking.status === 'pending' ? (
                              <button className="px-4 py-2 bg-white border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition-colors">
                                Cancel Booking
                              </button>
                            ) : null}
                            {booking.status === 'completed' && (
                              <button className="px-4 py-2 bg-white border border-emerald-800 text-emerald-800 rounded-md hover:bg-emerald-50 transition-colors">
                                Leave Review
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;