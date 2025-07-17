'use client';

import { motion } from 'framer-motion';
import { X, MapPin, Star, Clock, Check, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { use } from 'react';

// Mock data type
interface Package {
  id: number;
  title: string;
  duration: string;
  price: string;
  rating: number;
  image: string;
  destinations: string[];
  highlights: string[];
  includes: string[];
  itinerary: { day: number; description: string }[];
  addons: { name: string; price: string }[];
  faqs: { question: string; answer: string }[];
}

// Mock package data (in a real app, this would come from an API)
const packages: Package[] = [
  {
    id: 1,
    title: 'Classic Kerala Explorer',
    duration: '7 Days / 6 Nights',
    price: '₹45,000',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    destinations: ['Kochi', 'Munnar', 'Thekkady', 'Alleppey'],
    highlights: [
      'Houseboat stay in Alleppey',
      'Tea plantation visit in Munnar',
      'Wildlife safari in Thekkady',
      'Fort Kochi heritage walk',
    ],
    includes: ['Accommodation', 'Meals', 'Transportation', 'Guide'],
    itinerary: [
      { day: 1, description: 'Arrive in Kochi, explore Fort Kochi' },
      { day: 2, description: 'Travel to Munnar, visit tea plantations' },
      { day: 3, description: 'Munnar sightseeing, Eravikulam National Park' },
      { day: 4, description: 'Drive to Thekkady, Periyar Wildlife Sanctuary' },
      { day: 5, description: 'Thekkady boat safari, spice plantation tour' },
      { day: 6, description: 'Journey to Alleppey, houseboat experience' },
      { day: 7, description: 'Return to Kochi, departure' },
    ],
    addons: [
      { name: 'Ayurvedic Spa Session', price: '₹5,000' },
      { name: 'Jeep Safari in Thekkady', price: '₹3,500' },
      { name: 'Local Village Experience', price: '₹2,000' },
    ],
    faqs: [
      {
        question: 'What is the best time to visit Kerala?',
        answer: 'The best time is from September to March, when the weather is pleasant and ideal for sightseeing.',
      },
      {
        question: 'What is the refunds policy?',
        answer: 'Full refund if cancelled 30 days prior, 50% refund for 15-29 days, no refund within 14 days.',
      },
      {
        question: 'What should I pack for this trip?',
        answer: 'Light cotton clothes, comfortable shoes, sunscreen, and a hat for sunny days.',
      },
    ],
  },
  {
    id: 2,
    title: 'Backwater Bliss',
    duration: '4 Days / 3 Nights',
    price: '₹25,000',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1701523945170-600f13233771?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    destinations: ['Kochi', 'Alleppey', 'Kumarakom'],
    highlights: [
      '2 nights luxury houseboat',
      'Backwater village tour',
      'Traditional Kerala cuisine',
      'Bird watching at Kumarakom',
    ],
    includes: ['Houseboat', 'All Meals', 'Pickup/Drop', 'Activities'],
    itinerary: [
      { day: 1, description: 'Arrival in Kochi and transfer to Alleppey' },
      { day: 2, description: 'Luxury houseboat cruise and local backwater exploration' },
      { day: 3, description: 'Visit Kumarakom Bird Sanctuary' },
      { day: 4, description: 'Return to Kochi and depart' },
    ],
    addons: [
      { name: 'Fishing Experience', price: '₹1,000' },
      { name: 'Village Canoe Ride', price: '₹1,500' },
    ],
    faqs: [
      {
        question: 'Is Wi-Fi available on houseboats?',
        answer: 'Most luxury houseboats offer basic Wi-Fi access.',
      },
      {
        question: 'Can I customize the food menu?',
        answer: 'Yes, preferences can be shared during booking.',
      },
    ],
  },
  {
    id: 3,
    title: 'Hill Station Retreat',
    duration: '5 Days / 4 Nights',
    price: '₹32,000',
    rating: 4.7,
    image: 'https://plus.unsplash.com/premium_photo-1697730304904-2bdf66da8f2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    destinations: ['Munnar', 'Thekkady', 'Wayanad'],
    highlights: [
      'Misty mountain mornings',
      'Tea factory visits',
      'Spice plantation tour',
      'Wildlife sanctuary',
    ],
    includes: ['Hotels', 'Breakfast', 'Sightseeing', 'Transfers'],
    itinerary: [
      { day: 1, description: 'Arrival at Munnar and local sightseeing' },
      { day: 2, description: 'Visit tea gardens and Eravikulam park' },
      { day: 3, description: 'Transfer to Thekkady, spice plantations' },
      { day: 4, description: 'Wildlife sanctuary safari and travel to Wayanad' },
      { day: 5, description: 'Wayanad caves exploration, departure' },
    ],
    addons: [
      { name: 'Campfire in Wayanad', price: '₹2,500' },
      { name: 'Jeep Ride in Munnar', price: '₹1,800' },
    ],
    faqs: [
      {
        question: 'Are hill stations safe during monsoon?',
        answer: 'Yes, but expect occasional landslides and slower travel.',
      },
    ],
  },
  {
    id: 4,
    title: 'Kerala Beach Paradise',
    duration: '6 Days / 5 Nights',
    price: '₹38,000',
    rating: 4.6,
    image: 'https://plus.unsplash.com/premium_photo-1680198518281-43303c95df1f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    destinations: ['Kovalam', 'Varkala', 'Kanyakumari'],
    highlights: [
      'Beach resort accommodation',
      'Ayurvedic spa treatments',
      'Sunset at Kanyakumari',
      'Cliff-top dining at Varkala',
    ],
    includes: ['Beach Resorts', 'All Meals', 'Spa Sessions', 'Activities'],
    itinerary: [
      { day: 1, description: 'Arrival in Kovalam and beach relaxation' },
      { day: 2, description: 'Ayurvedic spa and lighthouse beach' },
      { day: 3, description: 'Travel to Varkala, cliff walk' },
      { day: 4, description: 'Relax on Varkala beach' },
      { day: 5, description: 'Day trip to Kanyakumari' },
      { day: 6, description: 'Return to Trivandrum, departure' },
    ],
    addons: [
      { name: 'Yoga Session on Beach', price: '₹1,000' },
    ],
    faqs: [
      {
        question: 'Are spa sessions included for all days?',
        answer: 'Yes, one session per day is included at Kovalam.',
      },
    ],
  },
  {
    id: 5,
    title: 'Complete Kerala Journey',
    duration: '10 Days / 9 Nights',
    price: '₹75,000',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1691075213372-ff9e2d6d7645?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    destinations: ['Kochi', 'Munnar', 'Thekkady', 'Alleppey', 'Kovalam', 'Trivandrum'],
    highlights: [
      'Complete Kerala experience',
      'Multiple accommodation types',
      'Cultural performances',
      'Ayurvedic treatments',
    ],
    includes: ['Luxury Hotels', 'All Meals', 'Private Transport', 'All Activities'],
    itinerary: Array.from({ length: 10 }, (_, i) => ({
      day: i + 1,
      description: `Day ${i + 1} activities covering major Kerala spots`,
    })),
    addons: [
      { name: 'Elephant Ride in Thekkady', price: '₹2,000' },
      { name: 'Kathakali Performance', price: '₹1,200' },
    ],
    faqs: [
      {
        question: 'Can this itinerary be customized?',
        answer: 'Yes, we offer full customization before confirmation.',
      },
    ],
  },
  {
    id: 6,
    title: 'Quick Kerala Getaway',
    duration: '3 Days / 2 Nights',
    price: '₹18,000',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1658847123183-62c4836b5475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    destinations: ['Kochi', 'Munnar'],
    highlights: [
      'Perfect weekend getaway',
      'Tea garden visits',
      'Fort Kochi exploration',
      'Local cuisine tasting',
    ],
    includes: ['Hotels', 'Breakfast', 'Transfers', 'Guide'],
    itinerary: [
      { day: 1, description: 'Arrive in Kochi and explore Fort Kochi' },
      { day: 2, description: 'Travel to Munnar and visit tea gardens' },
      { day: 3, description: 'Return to Kochi for departure' },
    ],
    addons: [
      { name: 'Street Food Tour in Kochi', price: '₹1,000' },
    ],
    faqs: [
      {
        question: 'Is this ideal for solo travelers?',
        answer: 'Yes, it’s designed for a quick and safe solo or couple trip.',
      },
    ],
  },
  // Add other packages here as in PackagesPage
];

// Animation variants
const pageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: { duration: 0.3 },
  },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

interface PackageDetailsProps {
  params: Promise<{ id: string }>;
}

export default function PackageDetails({ params }: PackageDetailsProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const resolvedParams = use(params); // Unwrap the params Promise
  const packageData = packages.find((pkg) => pkg.id === parseInt(resolvedParams.id));

  if (!packageData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center">
        <p className="text-xl text-gray-800">Package not found</p>
      </div>
    );
  }

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 py-12 px-4">
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Back Button */}
        <Link href="/packages" className="absolute top-4 right-4 z-10 p-2 rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200">
          <X className="w-5 h-5" />
        </Link>

        {/* Banner Image */}
        <div className="relative h-64 md:h-96 overflow-hidden rounded-t-2xl">
          <Image
            src={packageData.image}
            alt={packageData.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-2xl md:text-3xl font-bold">{packageData.title}</h2>
            <div className="flex items-center gap-2 mt-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span>{packageData.rating}</span>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            {/* Package Info */}
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row justify-between mb-6">
              <div className="flex items-center gap-2 text-emerald-600">
                <Clock className="w-5 h-5" />
                <span>{packageData.duration}</span>
              </div>
              <div className="text-2xl font-bold text-emerald-600 mt-2 md:mt-0">{packageData.price}</div>
            </motion.div>

            {/* Destinations */}
            <motion.div variants={fadeInUp} className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-emerald-600" />
                <span className="font-semibold">Destinations</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {packageData.destinations.map((dest, idx) => (
                  <span
                    key={idx}
                    className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm"
                  >
                    {dest}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Placeholder Map */}
            <motion.div variants={fadeInUp} className="mb-6">
              <div className="bg-emerald-50 rounded-lg p-4 text-center">
                <p className="text-emerald-700">Interactive Route Map (Placeholder)</p>
              </div>
            </motion.div>

            {/* Itinerary Accordion */}
            <motion.div variants={fadeInUp} className="mb-6">
              <button
                onClick={() => toggleAccordion('itinerary')}
                className="flex items-center justify-between w-full p-4 bg-emerald-50 rounded-lg"
              >
                <h3 className="font-semibold text-gray-800">Itinerary</h3>
                {openAccordion === 'itinerary' ? (
                  <ChevronUp className="w-5 h-5 text-emerald-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-emerald-600" />
                )}
              </button>
              {openAccordion === 'itinerary' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 p-4 bg-white rounded-lg"
                >
                  {packageData.itinerary.map((item, idx) => (
                    <div key={idx} className="mb-2">
                      <h4 className="font-semibold text-emerald-600">Day {item.day}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>

            {/* Highlights */}
            <motion.div variants={fadeInUp} className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Highlights</h3>
              <ul className="space-y-2">
                {packageData.highlights.map((highlight, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center text-gray-600"
                    whileHover={{ x: 5 }}
                  >
                    <Check className="w-4 h-4 text-emerald-500 mr-2" />
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Inclusions */}
            <motion.div variants={fadeInUp} className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Inclusions</h3>
              <div className="flex flex-wrap gap-2">
                {packageData.includes.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Add-ons */}
            <motion.div variants={fadeInUp} className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Optional Add-ons</h3>
              <div className="grid gap-4">
                {packageData.addons.map((addon, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg"
                  >
                    <span className="text-gray-700">{addon.name}</span>
                    <span className="text-emerald-600 font-semibold">{addon.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* FAQs Accordion */}
            <motion.div variants={fadeInUp} className="mb-6">
              <button
                onClick={() => toggleAccordion('faqs')}
                className="flex items-center justify-between w-full p-4 bg-emerald-50 rounded-lg"
              >
                <h3 className="font-semibold text-gray-800">FAQs</h3>
                {openAccordion === 'faqs' ? (
                  <ChevronUp className="w-5 h-5 text-emerald-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-emerald-600" />
                )}
              </button>
              {openAccordion === 'faqs' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 p-4 bg-white rounded-lg"
                >
                  {packageData.faqs.map((faq, idx) => (
                    <div key={idx} className="mb-4">
                      <h4 className="font-semibold text-emerald-600">{faq.question}</h4>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>

            {/* Sticky Book Now Button (Mobile) */}
            <motion.div
              className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-emerald-200"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg font-semibold"
              >
                Book Now
              </motion.button>
            </motion.div>

            {/* Desktop Book Now Button */}
            <motion.div
              variants={fadeInUp}
              className="hidden md:block mt-6"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg font-semibold"
              >
                Book Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}