'use client';

import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState, Suspense } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const buttonHover = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

function BookingForm() {
  const searchParams = useSearchParams();
  const destination = searchParams.get('destination') || '';
  const travelDate = searchParams.get('travelDate') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelDate: travelDate,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <motion.section
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8"
    >
      <h1 className="text-3xl font-bold text-emerald-800 mb-6 text-center">
        Book Your Kerala Adventure
      </h1>
      <p className="text-gray-600 mb-8 text-center">
        Fill in your details to plan your dream trip to {destination || 'Kerala'}
      </p>

      <form className="space-y-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-emerald-800 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="Enter your full name"
            required
            aria-required="true"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-emerald-800 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="Enter your email"
            required
            aria-required="true"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-emerald-800 mb-1"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="Enter your phone number"
            required
            aria-required="true"
          />
        </div>

        <div>
          <label
            htmlFor="travelDate"
            className="block text-sm font-medium text-emerald-800 mb-1"
          >
            Travel Date
          </label>
          <input
            type="date"
            id="travelDate"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
            required
            aria-required="true"
          />
        </div>

        <div>
          <label
            htmlFor="destination"
            className="block text-sm font-medium text-emerald-800 mb-1"
          >
            Destination
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={destination}
            readOnly
            className="w-full px-4 py-2 border border-emerald-200 rounded-lg bg-emerald-50 text-gray-600 cursor-not-allowed"
            aria-readonly="true"
          />
        </div>

        <motion.button
          type="button"
          disabled
          variants={buttonHover}
          whileHover="hover"
          whileTap="tap"
          className="w-full px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold shadow-lg opacity-50 cursor-not-allowed"
          aria-disabled="true"
        >
          Coming Soon
        </motion.button>
      </form>
    </motion.section>
  );
}

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center py-12 px-4">
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <BookingForm />
      </Suspense>
    </div>
  );
}