"use client";

import React, { useMemo, useState, use as usePromise } from "react";
import { productList } from "@/components/json/products";
import Link from "next/link";
import { useCart } from "@/components/cart/CartContext";
import { useRouter } from "next/navigation";

const formatNumber = (value) => {
  if (!value) return 0;
  const match = String(value).match(/([0-9][0-9,]*)/);
  if (!match) return 0;
  const numeric = match[1].replace(/,/g, "");
  const parsed = parseInt(numeric, 10);
  return Number.isNaN(parsed) ? 0 : parsed;
};

export default function ProductDetailPage({ params }) {
  // In Next.js 15, params is a Promise in client components
  const resolvedParams = usePromise(params);
  const { id } = resolvedParams || {};

  const product = useMemo(() => {
    if (!id) return null;
    // Find product by ID (string matching)
    return productList.find(p => p.id === id) || null;
  }, [id]);

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
        <div className="text-6xl mb-4">🔍</div>
        <p className="text-xl font-medium mb-2">Product not found</p>
        <p className="text-gray-600 mb-4">The product with ID "{id}" could not be found.</p>
        <Link href="/products" className="bg-[#f59cb7] text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity">
          Back to products
        </Link>
      </div>
    );
  }

  const title = product.title || product.name || "Untitled Product";
  const currentPriceNumber = formatNumber(product.price);
  const originalPriceNumber = formatNumber(
    product.original_price || product.mrp
  );
  const discountPercent = (() => {
    const m = String(product.discount || "").match(/(\d+)/);
    const n = m ? parseInt(m[1], 10) : 0;
    return Number.isNaN(n) ? 0 : n;
  })();

 
  const thumbnails = product?.images || [
    "/assets/slide1.webp",
    "/assets/cat1.webp",
    "/assets/bride.webp",
    "/assets/cocktail.webp",
  ];

  const [activeImage, setActiveImage] = useState(thumbnails[0]);
  const { addItem } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addItem({
      id: product.id, 
      title,
      image: activeImage,
      priceNumber: currentPriceNumber,
      quantity,
    });
    router.push('/cart');
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-gray-900">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product?.category || "Jewelry"}</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{title}</span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Gallery */}
          <div className="flex gap-4">
            {/* Thumbs */}
            <div className="hidden sm:flex flex-col gap-3 w-20 shrink-0">
              {thumbnails.map((src) => (
                <button
                  key={src}
                  onClick={() => setActiveImage(src)}
                  className={`border ${
                    activeImage === src ? "border-gray-800" : "border-gray-200"
                  } rounded-md overflow-hidden aspect-square bg-gray-50`}
                >
                  <img
                    src={src}
                    alt="thumb"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            {/* Main */}
            <div className="flex-1">
              <div className="bg-gray-50 aspect-square w-full rounded-md overflow-hidden flex items-center justify-center">
                <img
                  src={activeImage}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
              {title}
            </h1>
            
            {/* Product ID Display */}
            <div className="mt-2 text-sm text-gray-500">
              Product ID: {product?.id} | SKU: {product?.id?.padStart(6, '0')}
            </div>

            {/* Price */}
            <div className="mt-4 flex items-end gap-3">
              <div className="text-2xl font-semibold text-gray-900">
                ₹ {currentPriceNumber.toLocaleString()}
              </div>
              {originalPriceNumber > 0 && (
                <div className="text-gray-500 line-through">
                  ₹ {originalPriceNumber.toLocaleString()}
                </div>
              )}
              {discountPercent > 0 && (
                <div className="text-green-600 text-sm font-medium">
                  ({discountPercent}% off)
                </div>
              )}
            </div>

            <p className="text-sm text-gray-500 mt-2">
              Inclusive of all taxes. Free Shipping above ₹800
            </p>

            {/* Size */}
            <div className="mt-6">
              <div className="text-xs tracking-widest text-gray-500">SIZE</div>
              <div className="mt-2 flex gap-2">
                <button className="px-3 py-2 border border-gray-400 text-sm text-gray-600">
                  {product?.size || "One Size"}
                </button>
              </div>
            </div>

            {/* Color */}
            <div className="mt-4">
              <div className="text-xs tracking-widest text-gray-500">COLOR</div>
              <div className="mt-2 text-sm text-gray-600">{product?.color || "Gold"}</div>
            </div>

            {/* Material */}
            <div className="mt-4">
              <div className="text-xs tracking-widest text-gray-500">
                MATERIAL
              </div>
              <div className="mt-2 text-sm text-gray-600">{product?.material || "Brass"}</div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <div className="text-xs tracking-widest text-gray-500">
                QUANTITY
              </div>
              <div className="mt-2 inline-flex items-center border border-gray-400 text-gray-600">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x border-gray-400 select-none">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2"
                >
                  +
                </button>
              </div>
            </div>

            {/* Pincode */}
            <div className="mt-4">
              <div className="flex gap-2 items-center">
                <input
                  placeholder="Enter your pincode"
                  className="flex-1 border border-gray-400 px-3 py-2 text-sm outline-none placeholder:text-gray-600"
                />
                <button className="px-4 py-2 border border-gray-900 text-sm">
                  Check
                </button>
              </div>
            </div>

            {/* Offers */}
            <div className="mt-6">
              <div className="text-sm font-medium mb-2 text-gray-600">Offers For You</div>
              <div className="border border-gray-200 p-3 text-sm text-gray-700 flex items-center justify-between">
                <span>Get 10% Off on Orders Above ₹1299/-</span>
                <code className="bg-gray-100 px-2 py-1">PRIYAASI10</code>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex gap-3">
              <button onClick={handleAddToCart} className="flex-1 bg-primary text-white py-3 text-sm tracking-wide">
                ADD TO CART
              </button>
              <button className="flex-1 border border-primbg-primary text-primbg-primary py-3 text-sm tracking-wide">
                BUY NOW
              </button>
            </div>

            {/* Accordions (dynamic) */}
            <div className="mt-8 divide-y divide-gray-200 border border-gray-200">
              <details className="p-4 text-gray-600" open >
                <summary className="cursor-pointer font-medium">
                  Description
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                  {product?.description || "Elegant gold-plated earrings with pearls and kundan detailing. Perfect for festive and wedding occasions."}
                </p>
              </details>
              <details className="p-4 text-gray-600">
                <summary className="cursor-pointer font-medium">
                  Product Information
                </summary>
                <div className="mt-2 text-sm text-gray-600 space-y-1">
                  <p><strong>Category:</strong> {product?.category || "Jewelry"}</p>
                  <p><strong>Material:</strong> {product?.material || "Brass"}</p>
                  <p><strong>Color:</strong> {product?.color || "Gold"}</p>
                  <p><strong>Size:</strong> {product?.size || "One Size"}</p>
                  {product?.rating && (
                    <p><strong>Rating:</strong> {product.rating}/5 ({product.reviews} reviews)</p>
                  )}
                </div>
              </details>
              <details className="p-4 text-gray-600">
                <summary className="cursor-pointer font-medium">
                  Supplier information
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                  Sold by Priyaasi. Authentic & quality assured.
                </p>
              </details>
            </div>

            {/* Service highlights */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
              <div>
                <div className="mx-auto w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  🚚
                </div>
                <div className="mt-2">Free Shipping</div>
              </div>
              <div>
                <div className="mx-auto w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  🔁
                </div>
                <div className="mt-2">7 day Easy Returns</div>
              </div>
              <div>
                <div className="mx-auto w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  🔒
                </div>
                <div className="mt-2">Secure Checkout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
