'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, Users, Star, CheckCircle } from 'lucide-react';
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    travelDates: '',
    groupSize: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form and show success
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      travelDates: '',
      groupSize: ''
    });
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Hide success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 484 123 4567', '+91 98765 43210'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@keralatourism.com', 'bookings@keralatourism.com'],
      description: 'Send us your queries anytime'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Marine Drive, Ernakulam', 'Kochi, Kerala 682031'],
      description: 'Visit our office in the heart of Kochi'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat - Sun: 10:00 AM - 4:00 PM'],
      description: 'We\'re here when you need us'
    }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: 'Book a Consultation',
      description: 'Schedule a free consultation with our travel experts',
      action: 'Schedule Call'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team for instant help',
      action: 'Start Chat'
    },
    {
      icon: Users,
      title: 'Group Booking',
      description: 'Special rates and packages for group bookings',
      action: 'Get Quote'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'London, UK',
      rating: 5,
      comment: 'Exceptional service! The team helped us plan the perfect Kerala honeymoon.'
    },
    {
      name: 'Rajesh Sharma',
      location: 'Mumbai, India',
      rating: 5,
      comment: 'Professional and responsive. Made our family trip unforgettable!'
    },
    {
      name: 'Emily Chen',
      location: 'Singapore',
      rating: 5,
      comment: 'Best travel agency for Kerala. Highly recommended for authentic experiences.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative h-64 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/90 via-green-700/80 to-teal-800/90 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Get In <span className="text-yellow-300">Touch</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-emerald-100">
            Let's plan your perfect Kerala adventure together
          </p>
        </motion.div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-16"
          >
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{action.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4">{action.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 md:px-6 md:py-2 rounded-full text-sm md:text-base font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300"
                  >
                    {action.action}
                  </motion.button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center gap-2 text-sm md:text-base"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Thank you! We'll get back to you within 24 hours.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-sm md:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-sm md:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-sm md:text-base"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="groupSize" className="block text-sm font-semibold text-gray-700 mb-2">
                      Group Size
                    </label>
                    <select
                      id="groupSize"
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-sm md:text-base"
                    >
                      <option value="">Select group size</option>
                      <option value="1-2">1-2 people</option>
                      <option value="3-5">3-5 people</option>
                      <option value="6-10">6-10 people</option>
                      <option value="10+">10+ people</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="travelDates" className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Travel Dates
                    </label>
                    <input
                      type="date"
                      id="travelDates"
                      name="travelDates"
                      value={formData.travelDates}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-sm md:text-base"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">New Booking</option>
                      <option value="information">Information Request</option>
                      <option value="custom">Custom Package</option>
                      <option value="group">Group Booking</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 resize-none text-sm md:text-base"
                    placeholder="Tell us about your dream Kerala trip..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold text-base md:text-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
                <div className="space-y-4 md:space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start gap-3 md:gap-4">
                        <div className="bg-emerald-100 p-2 md:p-3 rounded-full flex-shrink-0">
                          <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-emerald-700" />
                        </div>
                        <div>
                          <h3 className="text-base md:text-lg font-semibold text-gray-800">{info.title}</h3>
                          <div className="text-sm md:text-base text-gray-600 space-y-1 mt-1">
                            {info.details.map((detail, i) => (
                              <p key={i}>{detail}</p>
                            ))}
                          </div>
                          <p className="text-xs md:text-sm text-gray-500 mt-1 md:mt-2">{info.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">What Our Clients Say</h2>
                <div className="space-y-4 md:space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="border-l-4 border-emerald-500 pl-4 py-2">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm md:text-base text-gray-700 italic mb-2">"{testimonial.comment}"</p>
                      <p className="text-sm font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">{testimonial.location}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.140656437566!2d76.26781331528737!3d9.9318768763586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0873e6c6357e9d%3A0x9a4e8f1e1eb4bc6c!2sMarine%20Drive%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1623947834567!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-xl md:rounded-2xl"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}