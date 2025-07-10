'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, User, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/destinations', label: 'Destinations' },
    { href: '/packages', label: 'Packages' },
    { href: '/experiences', label: 'Experiences' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleUserMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsUserMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-emerald-800 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-emerald-200 transition-colors duration-200">
              <Phone className="w-4 h-4" />
              <span>+91 484 123 4567</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-emerald-200 transition-colors duration-200">
              <Mail className="w-4 h-4" />
              <span>info@TropiKerala.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2 hover:text-emerald-200 transition-colors duration-200">
            <MapPin className="w-4 h-4" />
            <span>Kochi, Kerala, India</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-xl py-2' : 'shadow-lg py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-xl">𖦹</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-emerald-800 group-hover:text-emerald-700 transition-colors duration-300">
                  TropiKerala
                </h1>
                <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Tropical. Tranquil. Timeless.
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 rounded-lg hover:bg-emerald-50 group"
                >
                  {item.label}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Login/Sign Up Dropdown */}
              <div className="relative">
                <button
                  onClick={handleUserMenuToggle}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 font-medium"
                >
                  <User className="w-4 h-4" />
                  <span>Account</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* User Dropdown */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-10">
                    <a href="/login" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200">
                      Login
                    </a>
                    {/* <a href="/signup" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200">
                      Sign Up
                    </a> */}
                    {/* <div className="border-t border-gray-100 my-1"></div> */}
                    <a href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200">
                      My Profile
                    </a>
                    <a href="/bookings" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200">
                      My Bookings
                    </a>
                  </div>
                )}
              </div>

              {/* Book Now Button */}
              <a href="/contact">
                <button className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95">
                  Book Now
                </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMenuToggle}
              className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-0 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`absolute top-5 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white border-t border-gray-100">
            <nav className="px-4 py-4 space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block py-3 px-4 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={closeMenus}
                >
                  {item.label}
                </a>
              ))}
              
              <div className="pt-4 space-y-2">
                <a
                  href="/login"
                  className={`block py-3 px-4 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 font-medium transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${navItems.length * 50}ms` }}
                  onClick={closeMenus}
                >
                  Login / Sign Up
                </a>
                <a href="/contact" onClick={closeMenus}>
                  <button
                    className={`w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 transform ${
                      isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${(navItems.length + 1) * 50}ms` }}
                  >
                    Book Now
                  </button>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Overlay for closing menus */}
      {(isMenuOpen || isUserMenuOpen) && (
        <div
          className="fixed inset-0 bg-black/10 z-40 lg:hidden"
          onClick={closeMenus}
        ></div>
      )}
    </>
  );
};

export default Header;