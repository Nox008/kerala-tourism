'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Award, MapPin, Clock, Star, Shield, Headphones } from 'lucide-react';

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

export default function AboutPage() {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Happy Travelers' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: MapPin, value: '50+', label: 'Destinations' },
    { icon: Star, value: '4.9', label: 'Average Rating' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passionate Service',
      description: 'We are passionate about Kerala and committed to sharing its beauty with the world through authentic, memorable experiences.'
    },
    {
      icon: Shield,
      title: 'Trusted & Reliable',
      description: 'With over 15 years of experience, we have built a reputation for reliability, safety, and exceptional service quality.'
    },
    {
      icon: Users,
      title: 'Local Expertise',
      description: 'Our team consists of local experts who know Kerala intimately and can provide insider access to hidden gems.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'We provide round-the-clock support to ensure your journey is smooth and memorable from start to finish.'
    }
  ];

  const team = [
    {
      name: 'Arjun Nair',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Born and raised in Kerala, Arjun founded the company with a vision to showcase the authentic beauty of God\'s Own Country.'
    },
    {
      name: 'Priya Menon',
      role: 'Head of Operations',
      image: 'https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bio: 'With 12 years in hospitality, Priya ensures every detail of your Kerala experience is perfectly planned and executed.'
    },
    {
      name: 'Ravi Kumar',
      role: 'Tour Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'A certified naturalist and cultural expert, Ravi brings Kerala\'s stories to life through his engaging tours and deep knowledge.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/90 via-green-700/80 to-teal-800/90 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1644773182204-f0bf03cae0cb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
          }}
        ></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-yellow-300">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100">
            Your trusted partners in discovering the magic of Kerala
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Founded in 2008 by a group of Kerala natives who were passionate about their homeland, 
                  our company began as a small venture to help visitors discover the authentic beauty of God's Own Country.
                </p>
                <p>
                  What started as weekend trips for friends and family has grown into Kerala's most trusted 
                  tourism company, serving thousands of travelers from around the world. We believe that 
                  travel should be transformative, not just recreational.
                </p>
                <p>
                  Our deep roots in Kerala, combined with our commitment to sustainable tourism, 
                  allow us to offer experiences that are both authentic and responsible. We work closely 
                  with local communities to ensure that tourism benefits everyone.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1679304319966-61712c71ebe4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Kerala backwaters"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-10 h-10 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-800 mb-4">
              Our Values
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape every experience we create
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-2xl mx-auto">
              The passionate people behind your unforgettable Kerala experiences
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <div className="text-emerald-600 font-semibold mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6">
            Our Mission
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl mb-8 leading-relaxed">
            To showcase the authentic beauty, rich culture, and warm hospitality of Kerala 
            while promoting sustainable tourism that benefits local communities and preserves 
            our natural heritage for future generations.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Join Our Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-800 mb-4">
              Awards & Recognition
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600">
              Recognized for our commitment to excellence and sustainable tourism
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
                year: '2023',
                award: 'Best Kerala Tour Operator',
                organization: 'Kerala Tourism Board',
                description: 'Recognized for outstanding service and authentic experiences'
              },
              {
                year: '2022',
                award: 'Sustainable Tourism Award',
                organization: 'Travel & Tourism Association',
                description: 'For our commitment to responsible and eco-friendly tourism'
              },
              {
                year: '2021',
                award: 'Excellence in Customer Service',
                organization: 'India Tourism Awards',
                description: 'Honoring our dedication to customer satisfaction'
              }
            ].map((award, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl text-center"
              >
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold text-emerald-600 mb-2">{award.year}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{award.award}</h3>
                <div className="text-emerald-600 font-semibold mb-3">{award.organization}</div>
                <p className="text-gray-600 text-sm">{award.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}