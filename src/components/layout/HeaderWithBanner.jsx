import { ShoppingBag, UserRound } from "lucide-react";
import Image from "next/image";
import React from "react";
import { nav } from "../json/navigation";
import Link from "next/link";

const HeaderWithBanner = () => {
  return (
    <div className="flex flex-col bg-white">
      {/* Top Banner Alert*/}
      <div className="h-10 w-full bg-primary flex items-center justify-center text-white text-sm font-semibold tracking-wider">
        📣 Get Extra 10% OFF on Orders Above ₹1299 | Code: 123456
      </div>

      {/* Header search-bar with buttons */}
      <div className="flex items-center justify-between px-4 py-3 bg-white">
        <div className="mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className=" px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-start">
          <Link href={"/"}>
            <Image src={"/logo.png"} height={50} width={100} alt="logo" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
            <Image
              src={"/whatsapp.svg"}
              height={25}
              width={25}
              alt="whatsapp"
            />
          </button>

          <button className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
            <UserRound />
          </button>

          <button className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
            <ShoppingBag />
          </button>
        </div>
      </div>

      {/* Header section below alert */}
      <div className="h-10 w-[98%] mx-auto bg-primary flex items-center justify-center text-white text-sm font-semibold">
        by brnd.me
      </div>

      {/* navigations */}
      <div className="flex justify-center gap-10 uppercase tracking-wider text-md items-center text-black mt-3">
        {nav.map((item) => {
          return (
            <p
              key={item.name}
              className="relative cursor-pointer transition-colors duration-300 hover:text-primary group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderWithBanner;
