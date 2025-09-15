"use client";
import React, { useState } from "react";

const Filters = ({ onFilterChange, products = [] }) => {
  // Calculate actual price range from products
  const getPriceRange = () => {
    const prices = products.map(product => {
      const priceStr = product.price.replace(/[₹,]/g, '');
      return parseFloat(priceStr) || 0;
    });
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    };
  };

  const actualPriceRange = getPriceRange();

  const [expandedSections, setExpandedSections] = useState({
    price: false,
    color: false,
    category: false,
  });

  const [selectedFilters, setSelectedFilters] = useState({
    color: [],
    category: [],
  });

  const [priceRange, setPriceRange] = useState([actualPriceRange.min, actualPriceRange.max]);

  // Calculate actual counts from products
  const getColorCounts = () => {
    const colorCounts = {};
    products.forEach(product => {
      if (product.color) {
        colorCounts[product.color] = (colorCounts[product.color] || 0) + 1;
      }
    });
    return colorCounts;
  };

  const getCategoryCounts = () => {
    const categoryCounts = {};
    products.forEach(product => {
      if (product.category) {
        categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
      }
    });
    return categoryCounts;
  };

  const colorCounts = getColorCounts();
  const categoryCounts = getCategoryCounts();

  // Sort options by count (descending) for better UX
  const sortedColorOptions = Object.keys(colorCounts)
    .map(color => ({ label: color, count: colorCounts[color] }))
    .sort((a, b) => b.count - a.count);

  const sortedCategoryOptions = Object.keys(categoryCounts)
    .map(category => ({ label: category, count: categoryCounts[category] }))
    .sort((a, b) => b.count - a.count);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleFilter = (category, value) => {
    const newFilters = {
      ...selectedFilters,
      [category]: selectedFilters[category].includes(value)
        ? selectedFilters[category].filter((item) => item !== value)
        : [...selectedFilters[category], value],
    };
    setSelectedFilters(newFilters);
    onFilterChange({ ...newFilters, priceRange });
  };

  const handlePriceChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
    onFilterChange({ ...selectedFilters, priceRange: newPriceRange });
  };

  const filterSections = [
    {
      id: "price",
      title: "PRICE",
      type: "range",
      min: actualPriceRange.min,
      max: actualPriceRange.max,
    },
    {
      id: "color",
      title: "COLOR",
      options: sortedColorOptions,
    },
    {
      id: "category",
      title: "CATEGORY",
      options: sortedCategoryOptions,
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
                        handlePriceChange([priceRange[0], parseInt(e.target.value)])
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
