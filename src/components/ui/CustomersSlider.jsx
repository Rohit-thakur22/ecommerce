"use client";
import React from "react";
import Slider from "react-slick";
import "../../app/Sliders.css";

const CustomersSlider = ({ sliderData }) => {
  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  const settings = {
    dots: true,
    arrows: false,
    className: "center",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200, // large tablets & small laptops
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1024, // tablets & small laptops
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 768, // mobile landscape & tablets
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px",
          dots: true,
        },
      },
      {
        breakpoint: 640, // mobile portrait
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
          dots: true,
        },
      },
      {
        breakpoint: 480, // small mobile
        settings: {
          slidesToShow: 1,
          centerMode: false,
          dots: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="w-full py-6 sm:py-8 md:py-10 bg-[#fff7f9] h-max">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-black text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-10">
          CUSTOMER LOVE
        </h2>
        <div className="relative">
          <Slider {...settings}>
            {sliderData.map((slide, index) => {
              return (
                <div key={index} className="px-2 sm:px-3">
                  <div className="testimonial-card bg-white rounded-lg sm:rounded-xl px-4 sm:px-6 py-4 sm:py-6 mx-0 text-center transition-all duration-300 ease-out shadow-sm hover:shadow-md">
                    <div className="text-4xl sm:text-5xl md:text-6xl text-black leading-none mb-2 sm:mb-3">"</div>
                    <p className="text-gray-600 italic max-w-[48ch] text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                      {slide.quote}
                    </p>
                    <div className="mt-2 sm:mt-3 flex flex-col items-center gap-2 sm:gap-3">
                      <img
                        src={slide.image}
                        alt={slide.name}
                        className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover border-2 border-gray-100"
                      />
                      <div className="text-gray-900 font-semibold text-xs sm:text-sm">
                        {slide.name}
                        {slide.location ? `, ${slide.location}` : ""}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CustomersSlider;
