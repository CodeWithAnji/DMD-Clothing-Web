import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white pt-14 pb-6 px-6 md:px-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8">
        {/* Left */}
        <div className="max-w-lg">
          <img
            src="https://img.thecdn.in/438426/Untitleddesign12-1756467644429.png?height=200"
            alt="DMD Logo"
            className="w-[140px] mb-6"
          />
          <h2 className="text-2xl font-sans font-extrabold mb-3">
            About DMD Clothing
          </h2>
          <p className="text-gray-300 name-font text-lg leading-relaxed">
            Premium trousers, consciously crafted in small batches using natural
            fabrics and meticulous finishing. Slow-fashion ethics, timeless
            silhouettes, and everyday comfort—made in India for people and the
            planet.
          </p>
        </div>

        {/* Button */}
        <div className="flex lg:justify-end items-start">
          <button
            className="inline-block bg-[#c43e2a] hover:bg-[#d94f3a] text-white text-xl cursor-pointer font-semibold 
            px-6 py-4 rounded-xl shadow-md transition-all duration-300"
          >
            Shop Trousers
          </button>
        </div>
      </div>

      <hr className="border-gray-700 my-10" />

      {/* Bottom Links Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* SHOP */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">SHOP</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">All Trousers</li>
            <li className="hover:text-white cursor-pointer">Formal</li>
          </ul>
        </div>

        {/* HELP */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">HELP</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Refund Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">ABOUT</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">Our Story</li>
            <li className="hover:text-white cursor-pointer">Sustainability</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">CONTACT</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-[#1a1a1a] py-3 px-4 rounded-full">
              <Phone size={20} />
              <span>+91-7744844867</span>
            </div>

            <div className="flex items-center gap-3 bg-[#1a1a1a] py-3 px-4 rounded-full">
              <Mail size={20} />
              <span>dmdcc.onlinestore@gmail.com</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-3">
              <Facebook className="cursor-pointer bg-white p-2 text-black rounded-xl w-10 h-10 hover:scale-110 transition" />
              <Instagram className="cursor-pointer bg-white p-2 text-black rounded-xl w-10 h-10 hover:scale-110 transition" />
              <Linkedin className="cursor-pointer bg-white p-2 text-black rounded-xl w-10 h-10 hover:scale-110 transition" />
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 my-10" />

      {/* Bottom Payments + Copyright */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 text-sm text-center">
          © 2025 DMD Clothing — Made consciously in India.
        </p>

        <div className="flex gap-4 flex-wrap items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
            alt="Visa"
            className="h-8 w-auto"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
            alt="MasterCard"
            className="h-8 w-auto"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Rupay-Logo.png/1200px-Rupay-Logo.png"
            alt="RuPay"
            className="h-8 w-auto"
          />
        </div>
      </div>
    </footer>
  );
}
