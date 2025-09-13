import React from 'react'
import { Mail, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-8 pt-5 bg-[#fff7f9] text-black">
      {/* White moving strip */}
      <div className="bg-white text-[#db7f9b]">
        <div className="footer-marquee-wrapper py-2 border-y border-[#db7f9b]">
          <div className="footer-marquee-track">
            {Array.from({ length: 20 }).map((_, idx) => (
              <span key={idx} className="text-sm font-semibold tracking-widest">
                by brnd.me
              </span>
            ))}
            {Array.from({ length: 20 }).map((_, idx) => (
              <span key={`dup-${idx}`} className="text-sm font-semibold tracking-widest">
                by brnd.me
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-sm tracking-widest font-semibold mb-4 opacity-90">HELP</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li>FAQs</li>
              <li>Order Status</li>
              <li>Raise a Return Request</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Return Policy</li>
              <li>Cancellation Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm tracking-widest font-semibold mb-4 opacity-90">INFORMATION</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li>About Us</li>
              <li>Track Your Order</li>
              <li>Contact Us</li>
              <li>Blog</li>
              <li>Product Care Tips</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm tracking-widest font-semibold mb-4 opacity-90">TOP CATEGORIES</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li>Bracelets</li>
              <li>Earrings</li>
              <li>Necklaces</li>
              <li>Rings</li>
              <li>Toe rings</li>
              <li>Nath</li>
              <li>Anklets-Bracelets</li>
              <li>All Products</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm tracking-widest font-semibold mb-4 opacity-90">GET IN TOUCH</h3>
            <div className="space-y-3 text-sm opacity-90">
              <p className="font-semibold">Prita Designs Pvt Ltd,</p>
              <p>Corporate office address: Vaishnavi Properties, #30/1, Silicon Terraces, 2nd and 3rd Floor, Adugodi, Hosur Main Road, Koramangala, Bengaluru – 560095</p>
              <p>Registered address: Inno House, 2nd Floor, Plot No. 9 (4 Bay), Sector 32, Gurgaon, Gurgaon, Sadar Bazar, Haryana, India, 122001</p>
              <p>For queries and feedback, write to us at: support@priyaasi.com</p>
              <p>Phone: 9311749215</p>
              <div>
                <p className="font-semibold">Opening Hours:</p>
                <p>Monday to Saturday: 10am - 7pm</p>
                <p>Sundays: Holiday</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm mb-2 opacity-90">Subscribe to Our Newsletter</p>
              <div className="relative max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-white/50 focus:outline-none pb-2 pr-10 placeholder:text-white/70"
                />
                <button
                  aria-label="Subscribe"
                  className="absolute right-0 bottom-1 text-white/80 hover:text-white"
                >
                  <Mail size={18} />
                </button>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <a className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10" href="#" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10" href="#" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center text-xs opacity-80">
          © 2025 Ecom. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer