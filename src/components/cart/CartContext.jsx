'use client'

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'ecom_cart_v1'

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  // Load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setItems(JSON.parse(raw))
    } catch {}
  }, [])

  // Persist
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {}
  }, [items])

  const addItem = (item) => {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.id === item.id)
      if (idx !== -1) {
        const copy = [...prev]
        copy[idx] = { ...copy[idx], quantity: (copy[idx].quantity || 1) + (item.quantity || 1) }
        return copy
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }]
    })
  }

  const removeItem = (id) => setItems((prev) => prev.filter((p) => p.id !== id))

  const setQuantity = (id, quantity) => {
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, quantity: Math.max(1, quantity) } : p)))
  }

  const subtotal = useMemo(() => {
    return items.reduce((sum, it) => sum + (Number(it.priceNumber || 0) * (it.quantity || 1)), 0)
  }, [items])

  const value = useMemo(() => ({ items, addItem, removeItem, setQuantity, subtotal }), [items, subtotal])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}


