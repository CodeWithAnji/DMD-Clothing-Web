import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Heart, User, ShoppingBag } from "lucide-react";
import BannerTicker from "./BannerTicker";

export default function Header() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white overflow-hidden">
        <BannerTicker />

        {/* HEADER */}
        <header className="w-full bg-white shadow-sm h-[64px] md:h-[80px] lg:h-[95px] flex items-center relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto w-full flex items-center justify-center px-4 relative">
            {/* MOBILE BACK BUTTON */}
            <button className="sm:flex lg:hidden text-black absolute left-4">
              <ArrowLeft size={22} strokeWidth={2} />
            </button>

            {/* LOGO */}
            <div className="flex-1 flex justify-center items-center">
              <a href="/" className="block">
                <img
                  src="https://image.cdn.shpy.in/438426/assets_task_01k5xgyr4kfcytjpc4xwsyvcyr_1758706279_img_1-1758706292277.webp?height=200&format=webp"
                  alt="DMD Clothing Logo"
                  className="h-[80px] md:h-[110px] lg:h-[160px] w-auto object-contain"
                />
              </a>
            </div>

            {/* DESKTOP ICONS */}
            <div className="hidden lg:flex items-center space-x-8 absolute right-4">
              <div className="relative group flex items-center">
                <input
                  type="text"
                  placeholder="Search for a product"
                  className="absolute right-full mr-2 w-0 opacity-0 group-hover:w-56 group-hover:opacity-100 transition-all duration-200 border-b border-gray-700 bg-transparent outline-none px-2 py-1 text-[16px]"
                />
                <Search size={22} className="cursor-pointer" />
              </div>

              <Link to="/wishlist">
                <Heart size={22} />
              </Link>
              <Link to="/account">
                <User size={22} />
              </Link>
              <Link to="/cart">
                <ShoppingBag size={22} />
              </Link>
            </div>

            {/* MOBILE / TABLET ICONS */}
            <div className="flex lg:hidden items-center space-x-5 absolute right-4">
              <div className="relative group flex items-center">
                <input
                  type="text"
                  placeholder="Search for a product"
                  className="absolute right-full mr-2 w-0 opacity-0 group-hover:w-40 group-hover:opacity-100 transition-all duration-200 border-b border-gray-700 bg-transparent outline-none px-2 py-1 text-sm"
                />
                <Search size={22} className="cursor-pointer" />
              </div>

              <Link to="/cart">
                <ShoppingBag size={22} />
              </Link>
            </div>
          </div>
        </header>
      </div>

      {/* PAGE SPACING */}
      <div className="pt-[160px] md:pt-[190px] lg:pt-[240px]"></div>
    </>
  );
}
