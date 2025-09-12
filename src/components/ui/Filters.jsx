"use client";
import React, { useState } from "react";

const Filters = () => {
  const [expandedSections, setExpandedSections] = useState({
    availability: false,
    price: false,
    size: false,
    color: false,
    style: false,
    gemstone: false,
    occasion: false,
    plating: false,
    basemetal: false,
  });

  const [selectedFilters, setSelectedFilters] = useState({
    availability: [],
    size: [],
    color: [],
    style: [],
    gemstone: [],
    occasion: [],
    plating: [],
    basemetal: [],
  });

  const [priceRange, setPriceRange] = useState([0, 8632]);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleFilter = (category, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const filterSections = [
    {
      id: "availability",
      title: "AVAILABILITY",
      options: [
        { label: "In stock", count: 459 },
        { label: "Out of stock", count: 11 },
      ],
    },
    {
      id: "price",
      title: "PRICE",
      type: "range",
      min: 0,
      max: 8632,
    },
    {
      id: "size",
      title: "SIZE",
      options: [
        { label: "XS", count: 12 },
        { label: "S", count: 45 },
        { label: "M", count: 78 },
        { label: "L", count: 56 },
        { label: "XL", count: 23 },
      ],
    },
    {
      id: "color",
      title: "COLOR",
      options: [
        { label: "Blue", count: 4 },
        { label: "Gold", count: 73 },
        { label: "Green", count: 28 },
        { label: "green", count: 1 },
        { label: "Maroon", count: 5 },
        { label: "Pink", count: 12 },
        { label: "Red", count: 8 },
        { label: "Silver", count: 34 },
      ],
    },
    {
      id: "style",
      title: "STYLE",
      options: [
        { label: "Casual", count: 45 },
        { label: "Formal", count: 23 },
        { label: "Vintage", count: 12 },
        { label: "Modern", count: 67 },
      ],
    },
    {
      id: "gemstone",
      title: "GEMSTONE",
      options: [
        { label: "Diamond", count: 34 },
        { label: "Ruby", count: 12 },
        { label: "Emerald", count: 8 },
        { label: "Sapphire", count: 15 },
      ],
    },
    {
      id: "occasion",
      title: "OCCASION",
      options: [
        { label: "Wedding", count: 23 },
        { label: "Party", count: 45 },
        { label: "Daily Wear", count: 78 },
        { label: "Festival", count: 34 },
      ],
    },
    {
      id: "plating",
      title: "PLATING",
      options: [
        { label: "Gold Plated", count: 56 },
        { label: "Silver Plated", count: 34 },
        { label: "Rose Gold", count: 23 },
      ],
    },
    {
      id: "basemetal",
      title: "BASEMETAL",
      options: [
        { label: "Brass", count: 45 },
        { label: "Copper", count: 23 },
        { label: "Stainless Steel", count: 67 },
      ],
    },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      {filterSections.map((section, index) => (
        <div
          key={section.id}
          className="border-b border-gray-200 pb-4 mb-4 last:border-b-0"
        >
          <button
            onClick={() => toggleSection(section.id)}
            className="w-full flex items-center justify-between text-sm font-medium text-gray-800 uppercase tracking-wide py-2 hover:text-primary transition-colors"
          >
            <span>{section.title}</span>
            <svg
              className={`w-4 h-4 transition-transform cursor-pointer duration-200 ${
                expandedSections[section.id] ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {expandedSections[section.id] && (
            <div className="mt-3 space-y-2">
              {section.type === "range" ? (
                <div className="px-2">
                  <div className="flex justify-between text-xs text-gray-600 mb-2">
                    <span>₹ {section.min}</span>
                    <span>₹ {section.max.toLocaleString()}</span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min={section.min}
                      max={section.max}
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>₹ {priceRange[0]}</span>
                      <span>₹ {priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ) : (
                section.options?.map((option) => (
                  <label
                    key={option.label}
                    className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-1 rounded"
                  >
                    <input
                      type="checkbox"
                      checked={
                        selectedFilters[section.id]?.includes(option.label) ||
                        false
                      }
                      onChange={() => toggleFilter(section.id, option.label)}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2"
                    />
                    <span className="text-sm text-gray-700 flex-1">
                      {option.label}
                    </span>
                    <span className="text-xs text-gray-500">
                      ({option.count})
                    </span>
                  </label>
                ))
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filters;
