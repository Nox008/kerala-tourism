'use client';

import { motion } from 'framer-motion';
import { MapPin, Star, Clock, Camera, ArrowLeft, Users, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

// Mock destination data
const destinationsData = {
  munnar: {
    id: 1,
    name: 'Munnar',
    slug: 'munnar',
    category: 'Hill Station',
    description: 'Munnar is a hill station and former resort for the British Raj elite. Set in Kerala\'s Western Ghats, it\'s surrounded by rolling hills dotted with tea plantations established in the late 19th century.',
    longDescription: 'Nestled in the Western Ghats at an altitude of 1,600 meters above sea level, Munnar is a breathtaking hill station that captivates visitors with its pristine natural beauty. The town is famous for its expansive tea plantations, misty mountains, and cool climate that provides a refreshing escape from the tropical heat of Kerala. Originally developed by the British as a summer retreat, Munnar has evolved into one of India\'s most popular hill stations while retaining its colonial charm and natural splendor.',
    image: 'https://images.unsplash.com/photo-1637066742971-726bee8d9f56?q=80&w=1249&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gallery: [
      'https://images.unsplash.com/photo-1637066742971-726bee8d9f56?q=80&w=1249&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1663597675816-9b5d68952f42?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1605531321045-59731b348442?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    rating: 4.8,
    duration: '2-3 Days',
    bestTime: 'October - March',
    price: '₹8,500',
    highlights: [
      'Tea Gardens & Plantations',
      'Eravikulam National Park',
      'Mattupetty Dam & Lake',
      'Top Station Viewpoint',
      'Anamudi Peak Trekking',
      'Tea Museum Visit'
    ],
    activities: [
      'Tea Plantation Tours',
      'Wildlife Spotting',
      'Trekking & Hiking',
      'Boating at Mattupetty',
      'Photography Tours',
      'Spice Garden Visits'
    ],
    inclusions: [
      'Accommodation for 2 nights',
      'All meals (breakfast, lunch, dinner)',
      'Transportation in AC vehicle',
      'Professional tour guide',
      'Entry fees to attractions',
      'Tea plantation tour'
    ],
    location: 'Idukki District, Kerala',
    altitude: '1,600 meters above sea level',
    temperature: '15°C - 25°C'
  },
  alleppey: {
    id: 2,
    name: 'Alleppey',
    slug: 'alleppey',
    category: 'Backwaters',
    description: 'Known as the Venice of the East, Alleppey is famous for its serene backwaters, houseboats, and lush green landscapes.',
    longDescription: 'Alleppey, officially known as Alappuzha, is a mesmerizing destination that showcases the best of Kerala\'s backwater tourism. This enchanting town is crisscrossed by a network of canals, rivers, and lagoons that create a unique ecosystem. The houseboats, locally known as Kettuvallams, offer an unforgettable experience as they glide through the tranquil waters surrounded by coconut groves, paddy fields, and traditional villages.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1730612188581-9f7a2b534c11?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1704365159871-6bf63f00b9c8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    rating: 4.9,
    duration: '1-2 Days',
    bestTime: 'November - February',
    price: '₹12,000',
    highlights: [
      'Houseboat Cruise',
      'Vembanad Lake',
      'Kumarakom Bird Sanctuary',
      'Alleppey Beach',
      'Backwater Villages',
      'Traditional Fishing'
    ],
    activities: [
      'Houseboat Stay',
      'Canoeing',
      'Village Tours',
      'Bird Watching',
      'Fishing',
      'Ayurvedic Spa'
    ],
    inclusions: [
      'Luxury houseboat accommodation',
      'All meals on houseboat',
      'Welcome drinks',
      'Sightseeing tours',
      'Transportation',
      'Professional crew'
    ],
    location: 'Alappuzha District, Kerala',
    altitude: 'Sea level',
    temperature: '23°C - 32°C'
  },
  kochi: {
    id: 3,
    name: 'Kochi',
    slug: 'kochi',
    category: 'Heritage',
    description: 'A historic port city with colonial architecture, cultural heritage, and modern urban charm.',
    longDescription: 'Kochi, also known as Cochin, is a vibrant port city that beautifully blends its rich historical heritage with modern urban development. The city has been a major spice trading center for centuries, attracting traders from around the world. Today, it stands as a testament to Kerala\'s multicultural heritage, with influences from Dutch, Portuguese, and British colonial periods evident in its architecture and culture.',
    image: 'https://images.unsplash.com/photo-1605955794720-651b9ae7f5e7?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gallery: [
      'https://images.unsplash.com/photo-1590123732197-e7079d2ceb89?q=80&w=1207&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1697729597066-7b3d09b6dab7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://upload.wikimedia.org/wikipedia/commons/8/8f/Kochi_Skyline.jpg'
    ],
    rating: 4.7,
    duration: '2-3 Days',
    bestTime: 'October - March',
    price: '₹6,500',
    highlights: [
      'Chinese Fishing Nets',
      'Fort Kochi',
      'Mattancherry Palace',
      'Jewish Synagogue',
      'Spice Markets',
      'Kathakali Performances'
    ],
    activities: [
      'Heritage Walks',
      'Spice Market Tours',
      'Cultural Shows',
      'Boat Rides',
      'Art Gallery Visits',
      'Culinary Tours'
    ],
    inclusions: [
      'Hotel accommodation',
      'Daily breakfast',
      'City sightseeing',
      'Cultural show tickets',
      'Airport transfers',
      'Professional guide'
    ],
    location: 'Ernakulam District, Kerala',
    altitude: 'Sea level',
    temperature: '24°C - 33°C'
  },
  kovalam: {
    id: 4,
    name: 'Kovalam',
    slug: 'kovalam',
    category: 'Beach',
    description: 'A serene beach destination with golden sands, palm-fringed shores, and Ayurvedic wellness retreats.',
    longDescription: 'Kovalam is a coastal paradise in Kerala, famous for its crescent-shaped beaches, lighthouse, and tranquil ambiance. The town offers a perfect blend of relaxation and adventure, with opportunities for sunbathing, swimming, and Ayurvedic therapies. Its vibrant nightlife and seafood shacks add to the charm, making it a favorite among international and domestic tourists.',
    image: 'https://images.unsplash.com/photo-1621338318169-c6f87f8913c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gallery: [
      'https://images.unsplash.com/photo-1576748135861-f254c1582530?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1644259003223-ec2197276667?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1602072254265-3d32678fe9c9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    rating: 4.5,
    duration: '2-3 Days',
    bestTime: 'September - March',
    price: '₹5,500',
    highlights: [
      'Lighthouse Beach',
      'Hawah Beach',
      'Samudra Beach',
      'Ayurvedic Spas',
      'Water Sports',
      'Sunset Views'
    ],
    activities: [
      'Beach Relaxation',
      'Ayurvedic Massages',
      'Surfing & Kayaking',
      'Lighthouse Visit',
      'Seafood Tasting',
      'Cultural Performances'
    ],
    inclusions: [
      'Beachfront accommodation',
      'Daily breakfast',
      'Ayurvedic session',
      'Local sightseeing',
      'Airport transfers',
      'Guide service'
    ],
    location: 'Thiruvananthapuram District, Kerala',
    altitude: 'Sea level',
    temperature: '23°C - 32°C'
  },
  thekkady: {
    id: 5,
    name: 'Thekkady',
    slug: 'thekkady',
    category: 'Wildlife',
    description: 'A lush forest reserve known for its wildlife, spice plantations, and scenic boat rides on Periyar Lake.',
    longDescription: 'Thekkady, home to the Periyar Wildlife Sanctuary, is a haven for nature lovers and adventure seekers. The region boasts dense forests, diverse flora and fauna, and sprawling spice plantations. Jeep safaris, bamboo rafting, and boat cruises on Periyar Lake offer glimpses of elephants, tigers, and rare birds. Thekkady also celebrates Kerala’s spice trade legacy with immersive plantation tours.',
    image: 'https://images.unsplash.com/photo-1716404985743-8c0e007cb358?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gallery: [
      'https://images.unsplash.com/photo-1716112371152-67a7086660fb?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1719111129504-ad9fc0094e12?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1669228025051-f341b9de57a9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    rating: 4.6,
    duration: '2 Days',
    bestTime: 'November - February',
    price: '₹7,000',
    highlights: [
      'Periyar Wildlife Sanctuary',
      'Spice Plantations',
      'Bamboo Rafting',
      'Jeep Safaris',
      'Kathakali & Kalaripayattu Shows',
      'Periyar Lake Boat Cruise'
    ],
    activities: [
      'Wildlife Spotting',
      'Plantation Tours',
      'Nature Walks',
      'Boat Rides',
      'Tribal Village Visits',
      'Adventure Sports'
    ],
    inclusions: [
      'Jungle resort stay',
      'Breakfast & dinner',
      'Boat cruise tickets',
      'Safari charges',
      'Guide fees',
      'Cultural show entry'
    ],
    location: 'Idukki District, Kerala',
    altitude: '900 - 1,300 meters',
    temperature: '15°C - 29°C'
  },
  wayanad: {
    id: 6,
    name: 'Wayanad',
    slug: 'wayanad',
    category: 'Hill Station',
    description: 'A misty hill station with lush coffee estates, waterfalls, and ancient caves nestled in the Western Ghats.',
    longDescription: 'Wayanad, a pristine district in Kerala, is renowned for its verdant landscapes, wildlife sanctuaries, and tribal heritage. The region’s rolling hills, tea/coffee plantations, and waterfalls like Soochipara create a picturesque setting. Trekking to Chembra Peak, exploring Edakkal Caves, and wildlife spotting at Muthanga Sanctuary are highlights. Wayanad’s cool climate and organic farms add to its rustic charm.',
    image: 'https://images.unsplash.com/photo-1630938819488-ba7d1440d48b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gallery: [
      'https://images.unsplash.com/photo-1668522871883-d3ea92f64dbc?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1723709431768-d749b0d814b9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://media2.thrillophilia.com/images/photos/000/021/423/original/1520229278_Banner-image-1920_kl0zqp.jpg?width=975&height=600'
    ],
    rating: 4.8,
    duration: '3-4 Days',
    bestTime: 'October - May',
    price: '₹8,000',
    highlights: [
      'Chembra Peak',
      'Edakkal Caves',
      'Banasura Sagar Dam',
      'Soochipara Falls',
      'Muthanga Wildlife Sanctuary',
      'Coffee Plantations'
    ],
    activities: [
      'Trekking',
      'Waterfall Visits',
      'Wildlife Safaris',
      'Plantation Tours',
      'Cave Exploration',
      'Camping'
    ],
    inclusions: [
      'Plantation stay',
      'Meals (breakfast & dinner)',
      'Trekking permits',
      'Safari charges',
      'Local guide',
      'Transfers'
    ],
    location: 'Wayanad District, Kerala',
    altitude: '700 - 2,100 meters',
    temperature: '12°C - 25°C'
  }
};

interface DestinationDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function DestinationDetailPage({ params }: DestinationDetailProps) {
  const { slug } = use(params);
  const destination = destinationsData[slug as keyof typeof destinationsData];

  if (!destination) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/70 via-green-700/60 to-teal-800/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${destination.image}')`
          }}
        ></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          >
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-medium">{destination.location}</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            {destination.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            {destination.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span>{destination.rating} Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{destination.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5" />
              <span>{destination.bestTime}</span>
            </div>
          </div>
        </motion.div>
        
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute top-8 left-8 z-30"
        >
          <Link href="/destinations">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Destinations
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-8"
              >
                {/* Overview */}
                <motion.div variants={fadeInUp}>
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">Overview</h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {destination.longDescription}
                  </p>
                </motion.div>

                {/* Highlights */}
                <motion.div variants={fadeInUp}>
                  <h2 className="text-3xl font-bold text-emerald-800 mb-6">Highlights</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {destination.highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                        <span className="text-gray-700 font-medium">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Activities */}
                <motion.div variants={fadeInUp}>
                  <h2 className="text-3xl font-bold text-emerald-800 mb-6">Activities</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {destination.activities.map((activity, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-lg border border-emerald-200 text-center cursor-pointer"
                      >
                        <span className="text-emerald-700 font-semibold">{activity}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Gallery */}
                <motion.div variants={fadeInUp}>
                  <h2 className="text-3xl font-bold text-emerald-800 mb-6">Gallery</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {destination.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
                      >
                        <div
                          className="w-full h-full bg-cover bg-center"
                          style={{ backgroundImage: `url('${image}')` }}
                        ></div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - Booking Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={slideInRight}
                className="sticky top-8"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-emerald-800 mb-2">
                      {destination.price}
                    </div>
                    <div className="text-gray-600">per person</div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-semibold text-emerald-700">{destination.duration}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Best Time</span>
                      <span className="font-semibold text-emerald-700">{destination.bestTime}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Category</span>
                      <span className="font-semibold text-emerald-700">{destination.category}</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-600">Rating</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-semibold text-emerald-700">{destination.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Link href={`/book?destination=${destination.name}`}>
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full mb-5 px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Book Now
                      </motion.button>
                    </Link>
                    
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-6 py-4 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold text-lg hover:bg-emerald-600 hover:text-white transition-all duration-300"
                      >
                        Get Custom Quote
                      </motion.button>
                    </Link>
                  </div>
                </div>

                {/* Inclusions */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white rounded-2xl shadow-xl p-8 mt-8"
                >
                  <h3 className="text-2xl font-bold text-emerald-800 mb-6">Package Includes</h3>
                  <div className="space-y-3">
                    {destination.inclusions.map((inclusion, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                        <span className="text-gray-700">{inclusion}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
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
              Ready to Explore {destination.name}?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-emerald-100 mb-8"
            >
              Book your dream vacation today and create memories that last a lifetime
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href={`/book?destination=${destination.name}`}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book This Trip
                </motion.button>
              </Link>
              <Link href="/destinations">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-emerald-800 transition-all duration-300"
                >
                  View All Destinations
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}