import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Heart, User, ShoppingBag } from "lucide-react";
import BannerTicker from "./BannerTicker";

export default function Header() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <BannerTicker />
        <header className="w-full bg-white shadow-sm h-[80px] lg:h-[140px] flex items-center relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto flex items-center justify-center w-full px-4 lg:px-0 relative">
            {/* Mobile Back Arrow */}
            <button className="lg:hidden text-black absolute left-4">
              <ArrowLeft size={28} strokeWidth={2} />
            </button>

            {/* Logo Center */}
            <div className="flex-1 flex justify-center items-center">
              <a href="/" className="block">
                <img
                  src="https://image.cdn.shpy.in/438426/assets_task_01k5xgyr4kfcytjpc4xwsyvcyr_1758706279_img_1-1758706292277.webp?height=200&format=webp"
                  alt="DMD Clothing Logo"
                  className="h-[100px] lg:h-[180px] w-auto object-contain"
                />
              </a>
            </div>

            {/* Desktop Icons with Hover Search */}
            <div className="hidden lg:flex items-center space-x-8 absolute right-0 pr-4 ml-5">
              <div className="relative group flex items-center">
                <input
                  type="text"
                  placeholder="Search for a product"
                  className="absolute right-full mr-2 w-0 opacity-0 group-hover:opacity-100 group-hover:w-56 transition-all duration-200 border-b border-gray-700 bg-transparent outline-none px-2 py-1 text-[20px]"
                />
                <Search size={26} className="cursor-pointer" />
              </div>

              <Link to="/wishlist">
                <Heart size={26} />
              </Link>
              <Link to="/account">
                <User size={26} />
              </Link>
              <Link to="/cart">
                <ShoppingBag size={26} />
              </Link>
            </div>

            {/* Mobile Icons with Hover Search */}
            <div className="flex lg:hidden items-center space-x-5 absolute right-4">
              <div className="relative group flex items-center">
                <input
                  type="text"
                  placeholder="Search for a product"
                  className="absolute right-full mr-2 w-0 opacity-0 group-hover:opacity-100 group-hover:w-46 transition-all duration-200 border-b border-gray-700 bg-transparent outline-none px-2 py-1 text-sm"
                />
                <Search size={26} className="cursor-pointer" />
              </div>
              <Link to="/cart">
                <ShoppingBag size={26} />
              </Link>
            </div>
          </div>
        </header>
      </div>

      {/* Add padding to the top of the main content to avoid overlap */}
      <div className="pt-[220px] lg:pt-[260px]"></div>
    </>
  );
}
