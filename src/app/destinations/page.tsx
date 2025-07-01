'use client';

import { motion } from 'framer-motion';
import { MapPin, Star, Clock, Users, Camera } from 'lucide-react';
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

export default function DestinationsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Destinations' },
    { id: 'hills', label: 'Hill Stations' },
    { id: 'backwaters', label: 'Backwaters' },
    { id: 'beaches', label: 'Beaches' },
    { id: 'wildlife', label: 'Wildlife' },
    { id: 'heritage', label: 'Heritage' }
  ];

  const destinations = [
    {
      id: 1,
      name: 'Munnar',
      category: 'hills',
      description: 'Misty hills covered with tea plantations and cool mountain air',
      image: 'https://images.unsplash.com/photo-1637066742971-726bee8d9f56?q=80&w=1249&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.8,
      duration: '2-3 Days',
      bestTime: 'Oct - Mar',
      highlights: ['Tea Gardens', 'Eravikulam National Park', 'Mattupetty Dam'],
      price: '₹8,500'
    },
    {
      id: 2,
      name: 'Alleppey',
      category: 'backwaters',
      description: 'Venice of the East with serene backwaters and houseboats',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      duration: '1-2 Days',
      bestTime: 'Nov - Feb',
      highlights: ['Houseboat Cruise', 'Vembanad Lake', 'Kumarakom Bird Sanctuary'],
      price: '₹12,000'
    },
    {
      id: 3,
      name: 'Kochi',
      category: 'heritage',
      description: 'Historic port city with colonial architecture and cultural heritage',
      image: 'https://images.unsplash.com/photo-1605955794720-651b9ae7f5e7?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.7,
      duration: '2-3 Days',
      bestTime: 'Oct - Mar',
      highlights: ['Chinese Fishing Nets', 'Fort Kochi', 'Mattancherry Palace'],
      price: '₹6,500'
    },
    {
      id: 4,
      name: 'Kovalam',
      category: 'beaches',
      description: 'Pristine beaches with golden sand and swaying coconut palms',
      image: 'https://images.unsplash.com/photo-1621338318169-c6f87f8913c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.6,
      duration: '2-3 Days',
      bestTime: 'Oct - Mar',
      highlights: ['Lighthouse Beach', 'Hawa Beach', 'Samudra Beach'],
      price: '₹7,500'
    },
    {
      id: 5,
      name: 'Thekkady',
      category: 'wildlife',
      description: 'Wildlife sanctuary famous for elephants and spice plantations',
      image: 'https://images.unsplash.com/photo-1716404985743-8c0e007cb358?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.5,
      duration: '2-3 Days',
      bestTime: 'Oct - Jun',
      highlights: ['Periyar Wildlife Sanctuary', 'Spice Gardens', 'Bamboo Rafting'],
      price: '₹9,000'
    },
    {
      id: 6,
      name: 'Wayanad',
      category: 'hills',
      description: 'Lush green hills with waterfalls, caves, and tribal culture',
      image: 'https://images.unsplash.com/photo-1630938819488-ba7d1440d48b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.7,
      duration: '2-4 Days',
      bestTime: 'Oct - May',
      highlights: ['Chembra Peak', 'Edakkal Caves', 'Soochipara Falls'],
      price: '₹8,000'
    }
  ];

  const filteredDestinations = activeCategory === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/90 via-green-700/80 to-teal-800/90 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Explore <span className="text-yellow-300">Kerala</span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100">
            Discover the diverse landscapes and rich culture of God's Own Country
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
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                    : 'bg-white text-emerald-700 hover:bg-emerald-50 border border-emerald-200'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Destinations Grid */}
          <motion.div
            key={activeCategory}
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-110"
                    style={{ backgroundImage: `url('${destination.image}')` }}
                  ></div>
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{destination.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    From {destination.price}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-emerald-800">{destination.name}</h3>
                    <MapPin className="w-5 h-5 text-emerald-600" />
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{destination.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-600" />
                      <span className="text-gray-700">{destination.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-emerald-600" />
                      <span className="text-gray-700">{destination.bestTime}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-emerald-800 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <Link href={`/destinations/${destination.name.toLowerCase()}`}>
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="text-emerald-600 font-semibold hover:text-emerald-800 transition-colors duration-300"
                      >
                        Learn More →
                      </motion.button>
                    </Link>
                    <Link href={`/book?destination=${destination.name}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Book Now
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
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-800 to-teal-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready for Your Kerala Adventure?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-emerald-100 mb-8"
            >
              Let us create a personalized itinerary just for you
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Plan My Trip
                </motion.button>
              </Link>
              <Link href="/packages">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-emerald-800 transition-all duration-300"
                >
                  View Packages
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}