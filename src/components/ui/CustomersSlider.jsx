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
  };

  return (
    <div className="w-full py-10 bg-[#fafafa] h-max">
      <h2 className="text-center text-black text-2xl mb-10">
        CUSTOMER LOVE
      </h2>
      <Slider {...settings}>
        {sliderData.map((slide, index) => {
          return (
            <div key={index}>
              <div className="testimonial-card bg-white rounded px-6 py-4 mx-0 text-center transition-transform duration-300 ease-out">
                <div className="text-6xl text-black leading-none">
                  “
                </div>
                <p className="text-gray-400 italic max-w-[48ch] text-sm">
                  {slide.quote}
                </p>
                <div className="mt-1 flex flex-col items-center gap-3">
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div className="text-gray-900 font-semibold text-xs">
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
  );
};

export default CustomersSlider;
