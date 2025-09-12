import React from "react";
import Card from "./Card";
import Filters from "../ui/Filters";
import { productList } from "../json/products";

const ProductList = () => {
  const data = productList;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full mx-auto px-8 py-8">
        <div className="flex w-full gap-8">
          {/* Filters Sidebar */}
          <div className="sticky top-4 h-fit">
            <Filters />
          </div>
          
          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-gray-600">Showing {data.length} products</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {data.map((product) => (
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
