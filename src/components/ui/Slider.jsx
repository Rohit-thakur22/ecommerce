"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample images - replace with your own
  const slides = [
    {
      id: 1,
      title: "Beautiful Landscape",
      description: "Explore stunning mountain views",
      image: "/assets/slide1.jpeg",
      color: "from-blue-600 to-purple-600",
    },
    {
      id: 2,
      title: "Ocean Paradise",
      description: "Discover pristine beaches",
      image: "/assets/slide2.jpeg",
      color: "from-teal-600 to-blue-600",
    },
    {
      id: 3,
      title: "Forest Adventure",
      description: "Journey through ancient woods",
      image: "/assets/slide3.jpeg",
      color: "from-green-600 to-teal-600",
    },
    {
      id: 4,
      title: "Desert Dreams",
      description: "Experience vast golden dunes",
      image: "/assets/slide4.jpeg",
      color: "from-orange-600 to-red-600",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="max-w-full mx-auto p-6">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
        {/* Carousel Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full flex-shrink-0 relative">
              <div className="relative h-96 md:h-[500px] !rounded-3xl">
                {/* Background Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-fill"
                  style={{
                    borderRadius: 26,
                  }}
                />

              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:text-gray-100" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:text-gray-100" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125 shadow-lg"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
