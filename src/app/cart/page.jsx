'use client'

import React from 'react'
import { useCart } from '@/components/cart/CartContext'
import Link from 'next/link'
import TrendingNow from '@/components/ui/TrendingNow'
import Feedback from '@/components/ui/Feedback'

export default function CartPage() {
  const { items, setQuantity, removeItem, subtotal } = useCart()

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-10">
        {/* Mobile Header */}
        <div className="lg:hidden mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-center text-black">
            CART <span className="font-normal">({items.length} items)</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left: Items */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            {/* Desktop Header */}
            <h1 className="hidden lg:block text-2xl font-semibold text-center mb-8 text-black">
              CART <span className="font-normal">({items.length} items)</span>
            </h1>

            {items.length === 0 ? (
              <div className="text-center text-gray-600 py-12">
                <div className="text-6xl mb-4">🛒</div>
                <p className="text-lg mb-4">Your cart is empty</p>
                <Link href="/products" className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-4 sm:space-y-6">
                {items.map((it) => (
                  <div key={it.id} className="cart-item-card bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Product Image */}
                      <div className="w-full sm:w-28 h-32 sm:h-28 bg-gray-100 overflow-hidden rounded-lg flex-shrink-0">
                        <img 
                          src={it.image || '/assets/slide1.webp'} 
                          alt={it.title} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      
                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900 text-sm sm:text-base mb-2 line-clamp-2">
                          {it.title}
                        </div>
                        
                        {/* Product Specifications */}
                        <div className="text-xs sm:text-sm text-gray-600 space-y-1 mb-3">
                          <div className="flex flex-wrap gap-2">
                            <span className="font-semibold">Size:</span>
                            <span>Onesize</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <span className="font-semibold">Color:</span>
                            <span>White</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <span className="font-semibold">Material:</span>
                            <span>Brass</span>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="quantity-controls inline-flex items-center border border-gray-300 rounded-lg text-gray-700">
                            <button 
                              onClick={() => setQuantity(it.id, (it.quantity || 1) - 1)} 
                              className="px-3 py-2 hover:bg-gray-100 transition-colors touch-target"
                              disabled={it.quantity <= 1}
                            >
                              -
                            </button>
                            <span className="px-4 py-2 border-x border-gray-300 select-none min-w-[3rem] text-center">
                              {it.quantity}
                            </span>
                            <button 
                              onClick={() => setQuantity(it.id, (it.quantity || 1) + 1)} 
                              className="px-3 py-2 hover:bg-gray-100 transition-colors touch-target"
                            >
                              +
                            </button>
                          </div>
                          
                          {/* Price */}
                          <div className="text-right">
                            <div className="text-lg sm:text-xl font-semibold text-gray-900">
                              ₹ {(it.priceNumber * (it.quantity || 1)).toLocaleString()}
                            </div>
                            {it.quantity > 1 && (
                              <div className="text-xs text-gray-500">
                                ₹ {it.priceNumber.toLocaleString()} each
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Remove Button */}
                        <button 
                          onClick={() => removeItem(it.id)} 
                          className="text-sm text-red-600 hover:text-red-700 hover:underline transition-colors touch-target"
                        >
                          Remove Item
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Summary */}
          <div className="order-1 lg:order-2">
            <div className="sticky top-4">
              <div className="border border-gray-200 rounded-lg p-4 sm:p-5 bg-gray-50">
                <div className="text-sm font-medium text-gray-700 mb-3">Offers For You</div>
                
                {/* Offer Card */}
                <div className="border border-gray-200 rounded-lg p-3 text-sm text-gray-700 mb-4 bg-white">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="flex-1">Get 10% Off on Orders Above ₹1299/-</span>
                    <code className="bg-gray-100 px-2 py-1 rounded text-xs font-mono self-start sm:self-auto">
                      PRIYAASI10
                    </code>
                  </div>
                </div>

                {/* Pincode Check */}
                <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center mb-4">
                  <input 
                    placeholder="Enter your pincode" 
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none placeholder:text-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent" 
                  />
                  <button className="px-4 py-2 border border-gray-900 text-gray-900 text-sm rounded-lg hover:bg-gray-900 hover:text-white transition-colors touch-target">
                    Check
                  </button>
                </div>

                {/* Subtotal */}
                <div className="flex items-center justify-between text-gray-800 py-3 border-t border-gray-200">
                  <div className="font-medium text-sm sm:text-base">
                    SUBTOTAL ({items.length} items)
                  </div>
                  <div className="text-lg sm:text-xl font-semibold">
                    ₹ {subtotal.toLocaleString()}
                  </div>
                </div>

                {/* Checkout Button */}
                <button className="mt-4 w-full bg-primary text-white py-3 text-sm sm:text-base font-medium tracking-wide rounded-lg hover:bg-opacity-90 transition-colors touch-target">
                  PROCEED TO CHECKOUT
                </button>

                <div className="text-xs text-gray-500 mt-3 text-center">
                  Shipping, taxes, and discount codes calculated at checkout.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <TrendingNow/>
      <Feedback/>
    </div>
  )
}


