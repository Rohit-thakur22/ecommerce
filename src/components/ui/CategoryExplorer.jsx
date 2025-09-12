import React from "react";

const CategoryExplorer = ({
  title = "EXPLORE BY CATEGORY",
  categories = [],
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4">
      {/* Title */}
      <h2 className="text-xl uppercase md:text-2xl font-medium text-center text-black mb-12 tracking-wide">
        {title}
      </h2>

      {/* Categories Grid */}
      <div className="flex justify-center items-center gap-6 md:gap-8 mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer group"
          >
            {/* Image Container */}
            <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-3">
              <div className="w-full h-full rounded-full bg-black overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Title */}
            <span className="text-sm md:text-base font-medium text-gray-700 text-center leading-tight group-hover:text-gray-900 transition-colors duration-200">
              {category.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategoryExplorer;
