"use client";
import React, { useState, useMemo } from "react";
import Card from "./Card";
import Filters from "../ui/Filters";
import { productList } from "../json/products";

const ProductList = () => {
  // Calculate actual price range from products
  const getPriceRange = () => {
    const prices = productList.map(product => {
      const priceStr = product.price.replace(/[₹,]/g, '');
      return parseFloat(priceStr) || 0;
    });
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    };
  };

  const actualPriceRange = getPriceRange();

  const [filters, setFilters] = useState({
    color: [],
    category: [],
    priceRange: [actualPriceRange.min, actualPriceRange.max]
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    return productList.filter(product => {
      // Price filter
      const productPrice = parseFloat(product.price.replace(/[₹,]/g, ''));
      if (productPrice < filters.priceRange[0] || productPrice > filters.priceRange[1]) {
        return false;
      }

      // Color filter
      if (filters.color.length > 0 && product.color) {
        if (!filters.color.includes(product.color)) {
          return false;
        }
      }

      // Category filter
      if (filters.category.length > 0 && product.category) {
        if (!filters.category.includes(product.category)) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);
  
  return (
    <div className="min-h-screen bg-[#fff7f9] mt-4">
      <div className="w-full mx-auto px-8 py-8">
        <div className="flex w-full gap-8">
          {/* Filters Sidebar */}
          <div className="sticky top-4 h-fit hidden md:block">
            <Filters onFilterChange={handleFilterChange} products={productList} />
          </div>
          
          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-gray-600">Showing {filteredProducts.length} products</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
              {filteredProducts.map((product) => (
                <Card key={product.id} id={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
