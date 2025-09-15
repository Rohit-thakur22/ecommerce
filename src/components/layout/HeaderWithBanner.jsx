'use client'
import { ShoppingBag, UserRound } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { nav } from "../json/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HeaderWithBanner = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);

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
        setShowBanner(false);
      } else {
        setShowBanner(true);
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
        className={`overflow-hidden bg-primary flex items-center justify-center text-white text-sm font-medium tracking-wider
        transition-all duration-500 ease-in-out
        ${showBanner ? "h-10 opacity-100" : "h-0 opacity-0"}`}
      >
        📣 Get Extra 10% OFF on Orders Above ₹1299 | Code: 123456
      </div>

      {/* Header search-bar with buttons */}
      <div className="flex items-center justify-between px-4 bg-white transition-all duration-500 ease-in-out">
        <div className="mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-start mr-44">
          <Link href={"/"}>
            <Image src={"/logo.png"} height={30} width={80} alt="logo" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={handleWhatsAppClick}
            className="flex items-center cursor-pointer gap-2 text-gray-700 hover:text-primary transition-colors"
            aria-label="Contact us on WhatsApp"
          >
            <Image src={"/whatsapp.svg"} height={25} width={25} alt="whatsapp" />
          </button>

          <button className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
            <UserRound />
          </button>

          <button 
            onClick={handleCartClick}
            className="flex items-center cursor-pointer gap-2 text-gray-700 hover:text-primary transition-colors"
            aria-label="View shopping cart"
          >
            <ShoppingBag />
          </button>
        </div>
      </div>

      {/* Header section below alert */}
      <div className="h-10 w-[98%] mx-auto bg-primary flex items-center justify-center text-white text-sm transition-all duration-500 ease-in-out">
        by brnd.me
      </div>

      {/* navigations */}
      <div className="flex justify-center gap-10 uppercase tracking-wider text-md items-center text-black mt-3 transition-all duration-500 ease-in-out">
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
    </div>
  );
};

export default HeaderWithBanner;
