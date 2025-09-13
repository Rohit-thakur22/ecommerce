import React from 'react'
import Link from 'next/link'

const ProductCard = ({ 
  id,
  product = {
    name: "Leaf Twirl - Maroon Ruby American Diamond Gold Plated Jewellery Set",
    price: "₹917",
    original_price: "₹4,199",
    discount: "78% OFF",
    image: undefined,
  }
}) => {
  // Normalize fields from various shapes
  const title = product.title || product.name || "Untitled Product";
  const priceString = String(product.price || product.currentPrice || "0");
  const originalPriceString = String(product.originalPrice || product.original_price || product.mrp || "0");
  const discountString = String(product.discount || product.discountPercent || "0");

  // Extract numeric values safely (handles formats like "₹1,234" or "from ₹726")
  const extractNumber = (value) => {
    if (!value) return 0;
    const match = String(value).match(/([0-9][0-9,]*)/);
    if (!match) return 0;
    const numeric = match[1].replace(/,/g, '');
    const parsed = parseInt(numeric, 10);
    return Number.isNaN(parsed) ? 0 : parsed;
  };

  const currentPriceNumber = extractNumber(priceString);
  const originalPriceNumber = extractNumber(originalPriceString);
  const discountPercent = (() => {
    const m = discountString.match(/(\d+)/);
    const n = m ? parseInt(m[1], 10) : 0;
    return Number.isNaN(n) ? 0 : n;
  })();

  const isOnSale = discountPercent > 0 && originalPriceNumber > currentPriceNumber;

  return (
    <Link href={`/products/${id}`} className="w-full max-w-sm overflow-hidden block">
      {/* Image Container */}
      <div className="relative">
        <div className="aspect-square bg-gradient-to-br from-gray-900 to-black p-8 flex items-center justify-center">
          {product.image ? (
            <img
              src={product.image}
              alt={title}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="text-5xl select-none">💎</div>
          )}
        </div>
        
        {/* Sale Badge */}
        {isOnSale && (
          <div className="absolute top-0 right-0 bg-[#f59cb7] text-white px-2 py-1 text-xs font-medium">
            Sale
          </div>
        )}
      </div>
      
      {/* Product Details */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h3 className="text-gray-900 font-medium text-base leading-snug">
          {title}
        </h3>
        
        {/* Price Section */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-medium text-gray-900">
            ₹ {currentPriceNumber.toLocaleString()}
          </span>
          {originalPriceNumber > 0 && (
            <span className="text-gray-400 line-through text-md">
              ₹ {originalPriceNumber.toLocaleString()}
            </span>
          )}
          {discountPercent > 0 && (
            <span className="text-red-500 text-sm font-medium">
              ({discountPercent}% Off)
            </span>
          )}
        </div>
        
        {/* CTA */}
        <span 
          className="inline-block w-full text-center py-3 text-white text-sm tracking-wide transition-all duration-200 hover:opacity-90"
          style={{ backgroundColor: '#f59cb7' }}
        >
          VIEW DETAILS
        </span>
      </div>
    </Link>
  );
};

export default ProductCard