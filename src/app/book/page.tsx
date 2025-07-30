'use client';

import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, Suspense } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const inputVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
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

  const [focusedField, setFocusedField] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    // Handle actual submission logic here
  };

  const isFormValid = formData.fullName && formData.email && formData.phone && formData.travelDate;

  return (
    <div className="relative max-w-2xl w-full mx-auto">
      {/* Decorative Kerala Pattern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-orange-50/20 to-red-50/30 rounded-3xl transform rotate-1"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-emerald-50/40 via-green-50/30 to-teal-50/40 rounded-3xl transform -rotate-1"></div>
      
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
      >
        {/* Kerala-inspired Header Design */}
        <div className="relative bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 px-8 py-12">
          {/* Traditional Kerala Motif Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
              <pattern id="kerala-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="currentColor"/>
                <path d="M5,5 Q10,0 15,5 Q10,10 5,5" fill="currentColor"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#kerala-pattern)"/>
            </svg>
          </div>

          <div className="relative text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm"
            >
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl font-bold text-white mb-3 tracking-wide"
            >
              യാത്ര ആരംഭിക്കാം
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-xl font-semibold text-white/90 mb-2"
            >
              Begin Your Kerala Journey
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-white/80 font-medium"
            >
              {destination ? `Discover the magic of ${destination}` : 'Embrace God\'s Own Country'}
            </motion.p>
          </div>
        </div>

        {/* Form Section */}
        <div className="px-8 py-10">
          <motion.form
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Full Name */}
            <motion.div variants={inputVariants} className="group">
              <label
                htmlFor="fullName"
                className={`block text-sm font-semibold mb-3 transition-colors duration-300 ${
                  focusedField === 'fullName' ? 'text-orange-600' : 'text-gray-700'
                }`}
              >
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('fullName')}
                  onBlur={() => setFocusedField('')}
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-400"
                  placeholder="Enter your full name"
                  required
                />
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 rounded-full"></div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={inputVariants} className="group">
              <label
                htmlFor="email"
                className={`block text-sm font-semibold mb-3 transition-colors duration-300 ${
                  focusedField === 'email' ? 'text-orange-600' : 'text-gray-700'
                }`}
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-400"
                  placeholder="your.email@example.com"
                  required
                />
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 rounded-full"></div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div variants={inputVariants} className="group">
              <label
                htmlFor="phone"
                className={`block text-sm font-semibold mb-3 transition-colors duration-300 ${
                  focusedField === 'phone' ? 'text-orange-600' : 'text-gray-700'
                }`}
              >
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField('')}
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-400"
                  placeholder="+91 98765 43210"
                  required
                />
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 rounded-full"></div>
              </div>
            </motion.div>

            {/* Travel Date */}
            <motion.div variants={inputVariants} className="group">
              <label
                htmlFor="travelDate"
                className={`block text-sm font-semibold mb-3 transition-colors duration-300 ${
                  focusedField === 'travelDate' ? 'text-orange-600' : 'text-gray-700'
                }`}
              >
                Preferred Travel Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="travelDate"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('travelDate')}
                  onBlur={() => setFocusedField('')}
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-300 text-gray-800"
                  required
                />
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 rounded-full"></div>
              </div>
            </motion.div>

            {/* Destination (Read-only) */}
            {destination && (
              <motion.div variants={inputVariants}>
                <label className="block text-sm font-semibold mb-3 text-gray-700">
                  Selected Destination
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={destination}
                    readOnly
                    className="w-full px-5 py-4 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl text-gray-700 font-medium cursor-not-allowed"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.div
              variants={inputVariants}
              className="pt-4"
            >
              <motion.button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                whileHover={isFormValid ? { scale: 1.02, y: -2 } : {}}
                whileTap={isFormValid ? { scale: 0.98 } : {}}
                className={`w-full px-8 py-5 rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 relative overflow-hidden ${
                  isFormValid
                    ? 'bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white shadow-2xl hover:shadow-orange-500/25'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center"
                    >
                      <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </motion.div>
                  ) : (
                    <motion.span
                      key="text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center"
                    >
                      {isFormValid ? 'Begin Kerala Adventure' : 'Complete All Fields'}
                      {isFormValid && (
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      )}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Shimmer effect for enabled button */}
                {isFormValid && !isSubmitting && (
                  <div className="absolute inset-0 -top-px bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 hover:opacity-100 transition-opacity duration-700 transform translate-x-[-100%] hover:translate-x-[100%] ease-out"></div>
                )}
              </motion.button>
            </motion.div>
          </motion.form>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-8 pt-6 border-t border-gray-100"
          >
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Secure Booking
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                24/7 Support
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Best Price Guarantee
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <pattern id="bg-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1.5" fill="#ea580c"/>
            <path d="M15,15 Q30,5 45,15 Q30,25 15,15" fill="#ea580c" opacity="0.3"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#bg-pattern)"/>
        </svg>
      </div>

      <div className="relative flex items-center justify-center min-h-screen py-12 px-4">
        <Suspense 
          fallback={
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          }
        >
          <BookingForm />
        </Suspense>
      </div>
    </div>
  );
}