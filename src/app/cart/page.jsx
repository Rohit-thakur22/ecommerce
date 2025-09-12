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
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Items */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-semibold text-center mb-8">CART <span className="font-normal">({items.length} items)</span></h1>

          {items.length === 0 ? (
            <div className="text-center text-gray-600">
              Your cart is empty. <Link href="/products" className="text-teal-700 underline">Continue shopping</Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((it) => (
                <div key={it.id} className="flex gap-4">
                  <div className="w-28 h-28 bg-gray-100 overflow-hidden">
                    <img src={it.image || '/assets/slide1.webp'} alt={it.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{it.title}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      <div><span className="font-semibold">Size:</span> Onesize</div>
                      <div><span className="font-semibold">Color:</span> White</div>
                      <div><span className="font-semibold">Material:</span> Brass</div>
                    </div>
                    <div className="mt-2 inline-flex items-center border border-gray-400 text-gray-700">
                      <button onClick={() => setQuantity(it.id, (it.quantity || 1) - 1)} className="px-3 py-2">-</button>
                      <span className="px-4 py-2 border-x border-gray-400 select-none">{it.quantity}</span>
                      <button onClick={() => setQuantity(it.id, (it.quantity || 1) + 1)} className="px-3 py-2">+</button>
                    </div>
                    <button onClick={() => removeItem(it.id)} className="block mt-2 text-sm text-red-600">Remove</button>
                  </div>
                  <div className="text-right text-gray-900">₹ {(it.priceNumber * (it.quantity || 1)).toLocaleString()}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: Summary */}
        <div className="border border-gray-200 p-5 h-fit">
          <div className="text-sm font-medium text-gray-700 mb-3">Offers For You</div>
          <div className="border border-gray-200 p-3 text-sm text-gray-700 flex items-center justify-between mb-4">
            <span>Get 10% Off on Orders Above ₹1299/-</span>
            <code className="bg-gray-100 px-2 py-1">PRIYAASI10</code>
          </div>

          <div className="flex gap-2 items-center">
            <input placeholder="Enter your pincode" className="flex-1 border border-gray-400 px-3 py-2 text-sm outline-none placeholder:text-gray-600" />
            <button className="px-4 py-2 border border-gray-900 text-sm">Check</button>
          </div>

          <div className="mt-4 flex items-center justify-between text-gray-800">
            <div className="font-medium">SUBTOTAL ({items.length} items)</div>
            <div>₹ {subtotal.toLocaleString()}</div>
          </div>

          <button className="mt-5 w-full bg-[#0e4f55] text-white py-3 text-sm tracking-wide">PROCEED TO CHECKOUT</button>

          <div className="text-xs text-gray-500 mt-3">Shipping, taxes, and discount codes calculated at checkout.</div>
        </div>
      </div>
      <TrendingNow/>
      <Feedback/>
    </div>
  )
}


