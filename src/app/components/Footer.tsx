'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Kerala Journey</h3>
                <p className="text-emerald-200 text-sm">God's Own Country</p>
              </div>
            </div>
            <p className="text-emerald-100 leading-relaxed">
              Discover the magic of Kerala with our authentic travel experiences. From misty hill stations to serene backwaters, we bring you the best of God's Own Country.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Youtube, href: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Destinations', href: '/destinations' },
                { label: 'Tour Packages', href: '/packages' },
                { label: 'Experiences', href: '/experiences' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <motion.span
                      whileHover={{ x: 5, color: '#fbbf24' }}
                      className="text-emerald-100 hover:text-yellow-300 transition-all duration-300 cursor-pointer"
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Popular Destinations */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-white">Popular Destinations</h4>
            <ul className="space-y-3">
              {[
                'Munnar Hill Station',
                'Alleppey Backwaters',
                'Kochi Heritage',
                'Thekkady Wildlife',
                'Kovalam Beach',
                'Wayanad Hills',
                'Kumarakom Lake',
                'Varkala Cliffs'
              ].map((destination, index) => (
                <li key={index}>
                  <motion.span
                    whileHover={{ x: 5, color: '#fbbf24' }}
                    className="text-emerald-100 hover:text-yellow-300 transition-all duration-300 cursor-pointer"
                  >
                    {destination}
                  </motion.span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-white">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-emerald-100">Marine Drive, Kochi</p>
                  <p className="text-emerald-100">Kerala 682011, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <p className="text-emerald-100">+91 484 123 4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <p className="text-emerald-100">info@keralajourney.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-emerald-100">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-emerald-100">Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 pt-8 border-t border-emerald-700"
        >
          <div className="text-center">
            <h4 className="text-2xl font-bold text-white mb-4">Stay Updated</h4>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest travel deals, destination guides, and Kerala travel tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-emerald-600 bg-white/10 text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 pt-8 border-t border-emerald-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-emerald-200 text-center md:text-left">
            © 2024 Kerala Journey. All rights reserved. Made with ❤️ for Kerala Tourism.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy">
              <motion.span
                whileHover={{ color: '#fbbf24' }}
                className="text-emerald-200 hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
              >
                Privacy Policy
              </motion.span>
            </Link>
            <Link href="/terms">
              <motion.span
                whileHover={{ color: '#fbbf24' }}
                className="text-emerald-200 hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
              >
                Terms of Service
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;