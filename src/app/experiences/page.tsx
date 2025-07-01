'use client';

import { motion } from 'framer-motion';
import { Waves, Mountain, Camera, Utensils,Sparkles, TreePine, Fish, Sunrise, Users, Calendar } from 'lucide-react';
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

export default function ExperiencesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const experiences = [
    {
      id: 1,
      title: 'Houseboat Cruise in Alleppey',
      description: 'Float through the serene backwaters on a traditional Kerala houseboat, watching village life unfold along the palm-fringed canals.',
      image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      duration: '2-3 Days',
      price: 'From ₹12,000',
      category: 'backwaters',
      icon: Waves,
      highlights: ['Traditional Kerala houseboat', 'Backwater village tour', 'Fresh seafood meals', 'Sunset views']
    },
    {
      id: 2,
      title: 'Tea Plantation Trek in Munnar',
      description: 'Walk through rolling hills covered in emerald tea gardens, visit tea factories, and witness the tea-making process.',
      image: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      duration: '1 Day',
      price: 'From ₹3,500',
      category: 'hills',
      icon: Mountain,
      highlights: ['Tea factory visit', 'Guided plantation walk', 'Tea tasting session', 'Scenic viewpoints']
    },
    {
      id: 3,
      title: 'Ayurvedic Spa Retreat',
      description: 'Rejuvenate your body and mind with authentic Ayurvedic treatments in traditional wellness centers.',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '3-7 Days',
      price: 'From ₹8,000',
      category: 'wellness',
      icon: Sparkles,
      highlights: ['Authentic Ayurvedic treatments', 'Herbal medicine consultation', 'Yoga sessions', 'Organic meals']
    },
    {
      id: 4,
      title: 'Spice Plantation Safari',
      description: 'Explore aromatic spice gardens in Thekkady and learn about Kerala\'s rich spice heritage.',
      image: 'https://plus.unsplash.com/premium_photo-1668081838761-26df6e3953f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      duration: 'Half Day',
      price: 'From ₹2,500',
      category: 'nature',
      icon: TreePine,
      highlights: ['Cardamom & pepper plantations', 'Spice processing demo', 'Fresh spice shopping', 'Traditional lunch']
    },
    {
      id: 5,
      title: 'Kerala Cooking Class',
      description: 'Learn to cook authentic Kerala dishes with local families and discover the secrets of Malabar cuisine.',
      image: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      duration: '4 Hours',
      price: 'From ₹2,000',
      category: 'culture',
      icon: Utensils,
      highlights: ['Traditional cooking methods', 'Local market visit', 'Family-style dining', 'Recipe book included']
    },
    {
      id: 6,
      title: 'Wildlife Safari at Periyar',
      description: 'Spot elephants, tigers, and exotic birds in their natural habitat at Periyar National Park.',
      image: 'https://images.unsplash.com/photo-1698382439843-ca033a6079c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      duration: 'Full Day',
      price: 'From ₹4,500',
      category: 'wildlife',
      icon: Camera,
      highlights: ['Boat safari on Periyar Lake', 'Wildlife photography', 'Nature trekking', 'Bird watching']
    },
    {
      id: 7,
      title: 'Chinese Fishing Net Experience',
      description: 'Try your hand at the iconic Chinese fishing nets in Fort Kochi and learn this ancient fishing technique.',
      image: 'https://images.unsplash.com/photo-1590160404513-c306c7ad8d45?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      duration: '2 Hours',
      price: 'From ₹1,500',
      category: 'culture',
      icon: Fish,
      highlights: ['Learn traditional fishing', 'Historical significance', 'Fresh catch preparation', 'Sunset timing']
    },
    {
      id: 8,
      title: 'Sunrise at Meesapulimala',
      description: 'Trek to the second highest peak in Western Ghats and witness a breathtaking sunrise above the clouds.',
      image: 'https://img.onmanorama.com/content/dam/mm/en/travel/kerala/images/2021/7/22/meesapulimala.jpg?w=1120&h=583',
      duration: '1 Day',
      price: 'From ₹3,000',
      category: 'adventure',
      icon: Sunrise,
      highlights: ['Pre-dawn trek', 'Spectacular sunrise views', 'Cloud forest walk', 'Photography opportunities']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Experiences', icon: Users },
    { id: 'backwaters', label: 'Backwaters', icon: Waves },
    { id: 'hills', label: 'Hill Stations', icon: Mountain },
    { id: 'culture', label: 'Cultural', icon: Camera },
    { id: 'nature', label: 'Nature', icon: TreePine },
    { id: 'wellness', label: 'Wellness', icon: Sparkles },
    { id: 'wildlife', label: 'Wildlife', icon: Fish },
    { id: 'adventure', label: 'Adventure', icon: Sunrise }
  ];

  const filteredExperiences = selectedCategory === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/90 via-green-700/80 to-teal-800/90 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1625401878457-a8fe61ccc6f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
          }}
        ></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Kerala <span className="text-yellow-300">Experiences</span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100">
            Immerse yourself in the authentic culture and natural beauty of God's Own Country
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={category.id}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                      : 'bg-white text-emerald-700 hover:bg-emerald-50 border border-emerald-200'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.label}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Experiences Grid */}
          <motion.div
            key={selectedCategory}
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredExperiences.map((experience) => {
              const IconComponent = experience.icon;
              return (
                <motion.div
                  key={experience.id}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-110"
                      style={{ backgroundImage: `url('${experience.image}')` }}
                    ></div>
                    <div className="absolute top-4 left-4 bg-emerald-600 text-white p-2 rounded-full">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-emerald-600">{experience.price}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-800">{experience.title}</h3>
                      <div className="flex items-center text-emerald-600">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-xs">{experience.duration}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {experience.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Highlights:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {experience.highlights.map((highlight, idx) => (
                          <span key={idx} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2 px-4 rounded-lg font-semibold text-sm hover:from-emerald-700 hover:to-teal-700 transition-all duration-300"
                      >
                        Book Now
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-all duration-300 text-sm"
                      >
                        Details
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Let us create a custom experience tailored just for you and your group
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              Plan Custom Experience
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}