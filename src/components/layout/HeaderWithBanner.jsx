'use client'
import { ShoppingBag, UserRound, Menu, X, Search } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { nav } from "../json/navigation";
import Link from "next/link";

const HeaderWithBanner = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number (include country code without +)
    const phoneNumber = '1234567890'; // Replace with your WhatsApp number
    const message = 'Hello! I\'m interested in your products. Can you help me?';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  const handleCartClick = () => {
    // Redirect to cart page
    window.location.href = '/cart';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowBanner(false); // hide when scroll starts
      } else {
        setShowBanner(true); // show when back at top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="flex flex-col sticky top-0 z-50 shadow-xl transition-all duration-500 pb-3"
      style={{
        background: "linear-gradient(to bottom,#e9d7BEB3 0,#fff 100%)",
      }}
    >
      {/* Top Banner Alert */}
      <div
        className={`overflow-hidden bg-primary flex items-center justify-center text-white text-xs sm:text-sm font-medium tracking-wider px-2
        transition-all duration-500 ease-in-out
        ${showBanner ? "h-8 sm:h-10 opacity-100" : "h-0 opacity-0"}`}
      >
        <span className="text-center">📣 Get Extra 10% OFF on Orders Above ₹1299 | Code: 123456</span>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between px-2 sm:px-4 bg-white transition-all duration-500 ease-in-out py-2 sm:py-0">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors touch-target"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo - Mobile */}
        <div className="lg:hidden">
          <Link href={"/"}>
            <Image src={"/logo.png"} height={25} width={70} alt="logo" />
          </Link>
        </div>

        {/* Logo - Desktop */}
        <div className="hidden lg:flex items-start mr-44">
          <Link href={"/"}>
            <Image src={"/logo.png"} height={30} width={80} alt="logo" />
          </Link>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:block mx-4 lg:mx-8 flex-1 max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className=" px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-gray-400 w-max"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
          {/* Mobile Search Button */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors touch-target"
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          <button 
            onClick={handleWhatsAppClick}
            className="flex items-center cursor-pointer gap-1 sm:gap-2 text-gray-700 hover:text-primary transition-colors touch-target p-1 sm:p-2"
            aria-label="Contact us on WhatsApp"
          >
            <Image src={"/whatsapp.svg"} height={20} width={20} className="sm:h-6 sm:w-6" alt="whatsapp" />
            {/* <span className="hidden sm:inline text-sm">WhatsApp</span> */}
          </button>

          <button className="flex items-center gap-1 sm:gap-2 text-gray-700 hover:text-primary transition-colors touch-target p-1 sm:p-2">
            <UserRound size={20} className="sm:h-6 sm:w-6" />
            {/* <span className="hidden sm:inline text-sm">Account</span> */}
          </button>

          <button 
            onClick={handleCartClick}
            className="flex items-center cursor-pointer gap-1 sm:gap-2 text-gray-700 hover:text-primary transition-colors touch-target p-1 sm:p-2"
            aria-label="View shopping cart"
          >
            <ShoppingBag size={20} className="sm:h-6 sm:w-6" />
            {/* <span className="hidden sm:inline text-sm">Cart</span> */}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden px-4 py-2 bg-white border-t border-gray-200 search-bar-enter">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      )}

      {/* Header section below alert */}
      <div className="h-8 sm:h-10 w-[98%] mx-auto bg-primary flex items-center justify-center text-white text-xs sm:text-sm transition-all duration-500 ease-in-out">
        by brnd.me
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-center gap-10 uppercase tracking-wider text-md items-center text-black mt-3 transition-all duration-500 ease-in-out">
        {nav.map((item) => {
          return (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                href={item.url}
                className="relative cursor-pointer transition-colors duration-300 hover:text-[#f59cb7] group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f59cb7] transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
              
              {/* Dropdown Menu */}
              {item.subItems && hoveredItem === item.name && (
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white shadow-xl border border-gray-100 z-50 overflow-hidden"
                  style={{
                    animation: 'fadeInScale 0.3s ease-out forwards'
                  }}
                >
                  <div className="py-1">
                    {item.subItems.map((subItem, index) => (
                      <Link
                        key={subItem.name}
                        href={subItem.url}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#f59cb7] transition-colors duration-200 border-b border-gray-50 last:border-b-0"
                        style={{
                          animationDelay: `${index * 30}ms`,
                          animation: 'slideInFromTop 0.2s ease-out forwards',
                          opacity: 0
                        }}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg mobile-menu-enter">
          <div className="px-4 py-2">
            {nav.map((item) => (
              <div key={item.name} className="border-b border-gray-100 last:border-b-0">
                <Link
                  href={item.url}
                  className="block py-3 text-gray-700 hover:text-[#f59cb7] transition-colors duration-200 font-medium touch-target"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {/* Mobile Submenu */}
                {item.subItems && (
                  <div className="ml-4 pb-2">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.url}
                        className="block py-2 text-sm text-gray-600 hover:text-[#f59cb7] transition-colors duration-200 touch-target"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderWithBanner;
