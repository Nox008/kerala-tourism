'use client';

import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Calendar, Users, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/90 via-green-700/80 to-teal-800/90 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              God's Own
            </span>
            <br />
            <span className="text-emerald-100">Country</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-emerald-100 leading-relaxed"
          >
            Discover the enchanting backwaters, lush hill stations, and vibrant culture of Kerala
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/packages">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Packages
              </motion.button>
            </Link>
            <Link href="/destinations">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-emerald-800 transition-all duration-300"
              >
                View Destinations
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <ChevronDown className="w-8 h-8 text-white opacity-70" />
        </motion.div>
      </section>

      {/* Quick Search Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-white rounded-2xl shadow-2xl p-8 -mt-20 relative z-30"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-center mb-8 text-emerald-800"
            >
              Plan Your Kerala Journey
            </motion.h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <motion.div variants={fadeInUp} className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-emerald-600" />
                  <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                    <option>Select Destination</option>
                    <option>Munnar</option>
                    <option>Alleppey</option>
                    <option>Kochi</option>
                    <option>Thekkady</option>
                  </select>
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Check-in</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-emerald-600" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 w-5 h-5 text-emerald-600" />
                  <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                    <option>2 Adults</option>
                    <option>1 Adult</option>
                    <option>3 Adults</option>
                    <option>4+ Adults</option>
                  </select>
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="flex items-end">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Search
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4"
            >
              Discover Kerala's Gems
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              From misty hill stations to serene backwaters, explore the diverse landscapes that make Kerala truly magical
            </motion.p>
          </motion.div>
          
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Munnar Hills",
                description: "Rolling tea plantations and cool mountain air",
                image: "https://images.unsplash.com/photo-1637066742971-726bee8d9f56?q=80&w=1249&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                rating: 4.8
              },
              {
                title: "Alleppey Backwaters",
                description: "Tranquil waterways and traditional houseboats",
                image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                rating: 4.9
              },
              {
                title: "Kochi Heritage",
                description: "Colonial architecture and vibrant port city culture",
                image: "https://images.unsplash.com/photo-1605955794720-651b9ae7f5e7?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                rating: 4.7
              }
            ].map((destination, index) => (
              <motion.div
                key={index}
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
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-emerald-800 mb-2">{destination.title}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <Link href={`/destinations/${destination.title.toLowerCase().replace(' ', '-')}`}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-emerald-600 font-semibold hover:text-emerald-800 transition-colors duration-300"
                    >
                      Learn More →
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-800 to-teal-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              Why Choose Kerala?
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Authentic Experiences",
                  description: "Immerse yourself in local culture, traditions, and authentic Kerala lifestyle",
                  icon: "🏛️"
                },
                {
                  title: "Natural Beauty",
                  description: "From pristine beaches to lush forests, experience nature at its finest",
                  icon: "🌿"
                },
                {
                  title: "Ayurvedic Wellness",
                  description: "Rejuvenate your mind and body with traditional Ayurvedic treatments",
                  icon: "🧘‍♀️"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-emerald-100">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}