/* // src/data/packages.ts

import { PackageType } from "@/types";
import { Leaf, Car, Utensils, Mountain, Anchor, Waves, Camera } from 'lucide-react';

const packages: PackageType[] = [
  {
    id: 1,
    title: 'Classic Kerala Explorer',
    duration: '7 Days / 6 Nights',
    price: '₹45,000',
    originalPrice: '₹55,000',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    destinations: ['Kochi', 'Munnar', 'Thekkady', 'Alleppey'],
    highlights: ['Houseboat stay in Alleppey', 'Tea plantation visit in Munnar', 'Wildlife safari in Thekkady', 'Fort Kochi heritage walk'],
    includes: ['Accommodation', 'Daily Breakfast', 'All Transfers in A/C Car', 'Houseboat with all meals', 'Sightseeing Tickets'],
    category: '7days',
    overview: 'Experience the quintessential charm of Kerala. This tour is a perfect blend of colonial history, misty hill stations, vibrant wildlife, and serene backwaters, offering a complete introduction to "God\'s Own Country".',
    itinerary: [
      { day: 1, title: 'Arrival in Kochi', description: 'Arrive at Cochin International Airport (COK), transfer to your hotel. Evening Kathakali dance performance.' },
      { day: 2, title: 'Kochi to Munnar (4-5 hrs)', description: 'Drive to the stunning hill station of Munnar. Enjoy the scenic beauty of Cheeyappara & Valara waterfalls en route.' },
      { day: 3, title: 'Munnar Sightseeing', description: 'Visit Mattupetty Dam, Echo Point, a local tea factory, and the Tea Museum. Explore the Eravikulam National Park.' },
      { day: 4, title: 'Munnar to Thekkady (3-4 hrs)', description: 'Travel to Thekkady, home to Periyar National Park. In the afternoon, take a guided tour of a local spice plantation.' },
      { day: 5, title: 'Thekkady to Alleppey Houseboat (4-5 hrs)', description: 'Morning boat safari on Periyar Lake. Later, drive to Alleppey to board your private houseboat for an overnight cruise.' },
      { day: 6, title: 'Alleppey to Kochi', description: 'After breakfast on the houseboat, disembark and drive back to Kochi. Explore Fort Kochi, the Chinese Fishing Nets, and Jew Town.' },
      { day: 7, title: 'Departure from Kochi', description: 'Enjoy a final Keralan breakfast before transferring to the airport for your departure.' },
    ],
    addOns: [
      { name: 'Jeep Safari in Thekkady', description: 'An adventurous off-road journey through the forests.', icon: Car },
      { name: 'Ayurvedic Rejuvenation', description: 'A 90-minute traditional massage session in Munnar.', icon: Leaf },
    ],
    faqs: [
      { question: 'What is the best time to visit?', answer: 'The ideal time is from September to March when the weather is cool and pleasant for sightseeing.' },
      { question: 'Is this package physically demanding?', answer: 'It involves moderate walking during sightseeing. It can be adjusted for different fitness levels.' },
    ],
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
    highlights: ['2 nights luxury houseboat', 'Backwater village tour', 'Traditional Kerala cuisine', 'Bird watching at Kumarakom'],
    includes: ['Houseboat Stay (2 Nights)', 'All Meals on Houseboat', 'Resort Stay (1 Night)', 'Pickup/Drop from Kochi'],
    category: '4days',
    overview: 'Immerse yourself in the serene heart of Kerala\'s backwaters. This luxurious escape features an unforgettable extended stay on a traditional houseboat, gliding through tranquil canals and experiencing the unique culture of lakeside villages.',
    itinerary: [
      { day: 1, title: 'Arrival & Transfer to Houseboat', description: 'Arrive in Kochi and transfer directly to Alleppey to board your premium houseboat. Settle in as you begin your cruise.' },
      { day: 2, title: 'Full Day Backwater Cruise', description: 'Spend the entire day exploring the intricate network of canals, lakes, and lagoons. Visit local villages and see toddy tapping.' },
      { day: 3, title: 'Kumarakom Exploration', description: 'After breakfast, cruise to Kumarakom. Disembark and check into a lakeside resort. Visit the Kumarakom Bird Sanctuary in the evening.' },
      { day: 4, title: 'Return to Kochi for Departure', description: 'Enjoy a leisurely morning at the resort before your transfer back to Kochi airport.' },
    ],
    addOns: [
      { name: 'Canoe Excursion', description: 'Explore narrow, serene canals inaccessible to larger houseboats.', icon: Anchor },
      { name: 'Seafood Dinner', description: 'Enjoy a special dinner with freshly caught "Karimeen" (Pearl Spot fish).', icon: Utensils },
    ],
    faqs: [
      { question: 'Do houseboats have air conditioning?', answer: 'Yes, our premium houseboats have A/C in the bedrooms, typically operated from 9 PM to 6 AM.' },
      { question: 'What about mosquitos?', answer: 'Houseboats are equipped with nets and repellents. It\'s generally less of an issue while the boat is moving.' },
    ],
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
    highlights: ['Misty mountain mornings', 'Tea factory visits', 'Spice plantation tour', 'Wildlife sanctuary'],
    includes: ['Hotels in all locations', 'Daily Breakfast', 'Sightseeing tours', 'All Transfers'],
    category: '5days',
    overview: 'Escape to the cool, verdant hills of Kerala. This package is designed for nature lovers, covering the most beautiful hill stations, from the rolling tea gardens of Munnar to the wild, rustic beauty of Wayanad.',
    itinerary: [
        { day: 1, title: 'Kochi to Munnar', description: 'Start your journey from Kochi to the rolling hills of Munnar. Check into your hotel and relax.' },
        { day: 2, title: 'Exploring Munnar', description: 'A full day dedicated to Munnar\'s beauty: Tea Gardens, Mattupetty Dam, and Eravikulam National Park.' },
        { day: 3, title: 'Munnar to Thekkady', description: 'Drive to Thekkady. Experience a guided tour of a spice plantation and enjoy a boat ride on Periyar Lake.' },
        { day: 4, title: 'Thekkady to Wayanad', description: 'A scenic drive to Wayanad. Check in and visit Pookode Lake in the evening.' },
        { day: 5, title: 'Wayanad Exploration & Departure', description: 'Visit Edakkal Caves and Soochipara Falls before departing from Calicut International Airport (CCJ).' },
    ],
    addOns: [
        { name: 'Trekking Program', description: 'A guided half-day trek in Munnar or Wayanad.', icon: Mountain },
        { name: 'Bamboo Rafting', description: 'A unique and serene rafting experience in Thekkady.', icon: Anchor },
    ],
    faqs: [
        { question: 'Is it cold in the hill stations?', answer: 'Evenings can be cool, especially from November to February. It is advisable to carry a light jacket or sweater.' },
        { question: 'Are the roads to the hill stations safe?', answer: 'Yes, the roads are well-maintained, though they are winding. Our experienced drivers ensure a safe journey.' },
    ],
  },
  {
    id: 4,
    title: 'Kerala Beach Paradise',
    duration: '6 Days / 5 Nights',
    price: '₹38,000',
    originalPrice: '₹45,000',
    rating: 4.6,
    image: 'https://plus.unsplash.com/premium_photo-1680198518281-43303c95df1f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    destinations: ['Kovalam', 'Varkala', 'Marari'],
    highlights: ['Beach resort accommodation', 'Ayurvedic spa treatments', 'Sunset at Kovalam', 'Cliff-top dining at Varkala'],
    includes: ['Beach Resorts', 'Daily Breakfast', 'One Spa Session', 'All Transfers'],
    category: '6days',
    overview: 'Discover the stunning coastline of Kerala. From the iconic lighthouse beach of Kovalam to the dramatic cliffs of Varkala and the pristine sands of Marari, this tour is a perfect sun, sand, and sea escape.',
    itinerary: [
        { day: 1, title: 'Arrival in Trivandrum & Transfer to Kovalam', description: 'Arrive at Trivandrum (TRV) and transfer to your beach resort in Kovalam. Relax and enjoy the sunset.' },
        { day: 2, title: 'Kovalam Leisure', description: 'Enjoy a full day at leisure in Kovalam. Visit Hawa Beach and Lighthouse Beach. Indulge in your complimentary spa session.' },
        { day: 3, title: 'Kovalam to Varkala (1-2 hrs)', description: 'Drive to the unique cliff beach of Varkala. Check in and explore the cliff-top shops and cafes.' },
        { day: 4, title: 'Varkala Exploration', description: 'Visit the 2000-year-old Janardanaswamy Temple and take a holy dip in Papanasam Beach, believed to wash away sins.' },
        { day: 5, title: 'Varkala to Marari (3-4 hrs)', description: 'Travel to the tranquil Marari Beach, known for its quiet fishing villages. Enjoy the pristine and peaceful environment.' },
        { day: 6, title: 'Departure from Kochi', description: 'After a final beachside breakfast, transfer to Kochi airport (COK) for your departure.' },
    ],
    addOns: [
        { name: 'Surfing Lessons', description: 'A 2-hour beginner surf lesson at Varkala.', icon: Waves },
        { name: 'Poovar Island Backwater Trip', description: 'A day trip from Kovalam to the beautiful Poovar estuary.', icon: Anchor },
    ],
    faqs: [
        { question: 'Are the beaches safe for swimming?', answer: 'Major beaches like Kovalam have lifeguards. However, always check local conditions as currents can be strong.' },
        { question: 'What is the dress code for temples?', answer: 'Modest dress is required. Men are often required to wear a mundu and women a saree or long skirt.' },
    ],
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
    highlights: ['Complete Kerala experience', 'Multiple accommodation types', 'Cultural performances', 'Ayurvedic treatments'],
    includes: ['Luxury Hotels/Resorts', 'All Meals', 'Private Luxury Transport', 'All Activities & Tickets'],
    category: '10days',
    overview: 'For the traveler who wants it all. This grand tour covers every major highlight of Kerala, from the hills and backwaters to the vibrant cities and serene beaches, offering a deep and comprehensive cultural immersion.',
    itinerary: [
      { day: 1, title: 'Arrival in Kochi', description: 'Arrive in Kochi, check into your hotel. Explore Marine Drive in the evening.' },
      { day: 2, title: 'Kochi Sightseeing', description: 'Discover Fort Kochi, St. Francis Church, the Dutch Palace, and the iconic Chinese Fishing Nets.' },
      { day: 3, title: 'Kochi to Munnar', description: 'Scenic drive to the tea-covered hills of Munnar.' },
      { day: 4, title: 'Munnar Exploration', description: 'Full day of sightseeing, including the Tea Museum, Mattupetty Dam, and Echo Point.' },
      { day: 5, title: 'Munnar to Thekkady', description: 'Journey to Thekkady. Enjoy a boat safari in Periyar National Park and a spice plantation tour.' },
      { day: 6, title: 'Thekkady to Alleppey Houseboat', description: 'Drive to the backwaters of Alleppey and embark on your private overnight houseboat.' },
      { day: 7, title: 'Alleppey to Kovalam', description: 'After breakfast, drive down the coast to the famous beach destination of Kovalam.' },
      { day: 8, title: 'Kovalam & Trivandrum Sightseeing', description: 'Relax at the beach and take a half-day trip to Trivandrum to visit the Napier Museum and Padmanabhaswamy Temple (from outside).' },
      { day: 9, title: 'Kanyakumari Day Trip', description: 'Full-day excursion to the southernmost tip of India to see the Vivekananda Rock Memorial and the confluence of three oceans.' },
      { day: 10, title: 'Departure from Trivandrum', description: 'Enjoy a final breakfast before being transferred to Trivandrum airport (TRV).' },
    ],
    addOns: [
      { name: 'Kalaripayattu Show', description: 'Witness a performance of Kerala\'s ancient martial art in Thekkady.', icon: Camera },
      { name: 'Full-Day Ayurvedic Program', description: 'A comprehensive wellness session including consultation, massage, and other treatments.', icon: Leaf },
    ],
    faqs: [
      { question: 'Is 10 days enough for all this?', answer: 'This is a well-paced itinerary, but it involves considerable travel. It is designed to give you a complete overview of Kerala\'s diversity.' },
      { question: 'Which airport do we fly in and out of?', answer: 'You arrive at Kochi (COK) and depart from Trivandrum (TRV) for the most efficient travel route.' },
    ],
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
    highlights: ['Perfect weekend getaway', 'Tea garden visits', 'Fort Kochi exploration', 'Local cuisine tasting'],
    includes: ['2 Nights Hotel Stay', 'Breakfast', 'A/C Car Transfers', 'Sightseeing Guide'],
    category: '3days',
    overview: 'Short on time? This express package offers a delightful taste of Kerala by combining the historic port city of Kochi with the refreshing beauty of the Munnar hill station. It\'s the perfect weekend escape.',
    itinerary: [
      { day: 1, title: 'Arrival in Kochi & Sightseeing', description: 'Arrive at Kochi airport (COK), check in, and spend the afternoon exploring the historic Fort Kochi area.' },
      { day: 2, title: 'Day Trip to Munnar', description: 'An early start for a full-day excursion to Munnar. Visit a tea garden and enjoy the breathtaking views before returning to Kochi in the evening.' },
      { day: 3, title: 'Kochi Exploration & Departure', description: 'Morning at leisure for some last-minute shopping at Lulu Mall or exploring more of the city before transferring to the airport.' },
    ],
    addOns: [
      { name: 'Kochi Food Tour', description: 'A guided 3-hour evening street food tour.', icon: Utensils },
      { name: 'Backwater Day Cruise', description: 'Instead of Munnar, opt for a day cruise in Alleppey (travel time applies).', icon: Anchor },
    ],
    faqs: [
      { question: 'Is a day trip to Munnar hectic?', answer: 'It involves about 8 hours of driving round-trip, but it is the best way to experience the hills on a short schedule.' },
      { question: 'Can we stay one night in Munnar instead?', answer: 'Yes, the package can be customized to include one night in Kochi and one in Munnar. Contact us for a revised plan.' },
    ],
  },
];

export const getPackages = (): PackageType[] => packages;

export const getPackageById = (id: number | string): PackageType | undefined => {
    return packages.find(pkg => pkg.id === Number(id));
} */