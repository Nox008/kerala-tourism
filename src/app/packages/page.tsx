'use client';

import { motion } from 'framer-motion';
import { Clock, Users, MapPin, Star, Check, Calendar, Plane } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function PackagesPage() {
  const [selectedDuration, setSelectedDuration] = useState('all');

  const packages = [
    {
      id: 1,
      title: 'Classic Kerala Explorer',
      duration: '7 Days / 6 Nights',
      price: '₹45,000',
      originalPrice: '₹55,000',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      destinations: ['Kochi', 'Munnar', 'Thekkady', 'Alleppey'],
      highlights: [
        'Houseboat stay in Alleppey',
        'Tea plantation visit in Munnar',  
        'Wildlife safari in Thekkady',
        'Fort Kochi heritage walk'
      ],
      includes: ['Accommodation', 'Meals', 'Transportation', 'Guide'],
      category: '7days'
    },
    {
      id: 2,
      title: 'Backwater Bliss',
      duration: '4 Days / 3 Nights',
      price: '₹25,000',
      originalPrice: '₹30,000',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1701523945170-600f13233771?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      destinations: ['Kochi', 'Alleppey', 'Kumarakom'],
      highlights: [
        '2 nights luxury houseboat',
        'Backwater village tour',
        'Traditional Kerala cuisine',
        'Bird watching at Kumarakom'
      ],
      includes: ['Houseboat', 'All Meals', 'Pickup/Drop', 'Activities'],
      category: '4days'
    },
    {
      id: 3,
      title: 'Hill Station Retreat',
      duration: '5 Days / 4 Nights',
      price: '₹32,000',
      originalPrice: '₹38,000',
      rating: 4.7,
      image: 'https://plus.unsplash.com/premium_photo-1697730304904-2bdf66da8f2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      destinations: ['Munnar', 'Thekkady', 'Wayanad'],
      highlights: [
        'Misty mountain mornings',
        'Tea factory visits',
        'Spice plantation tour',
        'Wildlife sanctuary'
      ],
      includes: ['Hotels', 'Breakfast', 'Sightseeing', 'Transfers'],
      category: '5days'
    },
    {
      id: 4,
      title: 'Kerala Beach Paradise',
      duration: '6 Days / 5 Nights',
      price: '₹38,000',
      originalPrice: '₹45,000',
      rating: 4.6,
      image: 'https://plus.unsplash.com/premium_photo-1680198518281-43303c95df1f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      destinations: ['Kovalam', 'Varkala', 'Kanyakumari'],
      highlights: [
        'Beach resort accommodation',
        'Ayurvedic spa treatments',
        'Sunset at Kanyakumari',
        'Cliff-top dining at Varkala'
      ],
      includes: ['Beach Resorts', 'All Meals', 'Spa Sessions', 'Activities'],
      category: '6days'
    },
    {
      id: 5,
      title: 'Complete Kerala Journey',
      duration: '10 Days / 9 Nights',
      price: '₹75,000',
      originalPrice: '₹90,000',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1691075213372-ff9e2d6d7645?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      destinations: ['Kochi', 'Munnar', 'Thekkady', 'Alleppey', 'Kovalam', 'Trivandrum'],
      highlights: [
        'Complete Kerala experience',
        'Multiple accommodation types',
        'Cultural performances',
        'Ayurvedic treatments'
      ],
      includes: ['Luxury Hotels', 'All Meals', 'Private Transport', 'All Activities'],
      category: '10days'
    },
    {
      id: 6,
      title: 'Quick Kerala Getaway',
      duration: '3 Days / 2 Nights',
      price: '₹18,000',
      originalPrice: '₹22,000',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1658847123183-62c4836b5475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      destinations: ['Kochi', 'Munnar'],
      highlights: [
        'Perfect weekend getaway',
        'Tea garden visits',
        'Fort Kochi exploration',
        'Local cuisine tasting'
      ],
      includes: ['Hotels', 'Breakfast', 'Transfers', 'Guide'],
      category: '3days'
    }
  ];

  const durations = [
    { id: 'all', label: 'All Packages' },
    { id: '3days', label: '3 Days' },
    { id: '4days', label: '4-5 Days' },
    { id: '6days', label: '6-7 Days' },
    { id: '10days', label: '10+ Days' }
  ];

  const filteredPackages = selectedDuration === 'all' 
    ? packages 
    : packages.filter(pkg => pkg.category === selectedDuration);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/90 via-green-700/80 to-teal-800/90 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Kerala <span className="text-yellow-300">Packages</span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100">
            Carefully crafted itineraries for an unforgettable Kerala experience
          </p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {durations.map((duration, index) => (
              <motion.button
                key={duration.id}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDuration(duration.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedDuration === duration.id
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                    : 'bg-white text-emerald-700 hover:bg-emerald-50 border border-emerald-200'
                }`}
              >
                {duration.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Packages Grid */}
          <motion.div
            key={selectedDuration}
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-8"
          >
            {filteredPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.01 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-110"
                    style={{ backgroundImage: `url('${pkg.image}')` }}
                  ></div>
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{pkg.rating}</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Best Seller
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
                      <div className="flex items-center text-emerald-600 mb-2">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{pkg.duration}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-600">{pkg.price}</div>
                      <div className="text-sm text-gray-500 line-through">{pkg.originalPrice}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-4 h-4 text-emerald-600 mr-2" />
                      <span className="text-sm text-gray-600">Destinations:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {pkg.destinations.map((dest, idx) => (
                        <span key={idx} className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs">
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {pkg.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Check className="w-3 h-3 text-emerald-500 mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.includes.map((item, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300"
                    >
                      Book Now
                    </motion.button>
                    <Link href={`/packages/${pkg.id}`} passHref>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-3 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-all duration-300"
                    >
                      View Details
                    </motion.button>
                  </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
            Can't Find What You're Looking For?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl mb-8">
            Let us create a customized package just for you
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Customize Package
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Talk to Expert
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}