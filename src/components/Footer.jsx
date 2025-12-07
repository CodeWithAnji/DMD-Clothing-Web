import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white pt-14 pb-6 px-[30px]">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-8">
        {/* Left */}
        <div className="max-w-lg">
          <img
            src="https://img.thecdn.in/438426/Untitleddesign12-1756467644429.png?height=200"
            alt="DMD Logo"
            className="w-[120px] mb-4"
          />
          <h2 className="text-2xl   font-sans font-extrabold mb-2">
            About DMD Clothing
          </h2>

          <p className="text-gray-300  name-font text-lg leading-relaxed">
            Premium trousers, consciously crafted in small batches using natural
            fabrics and meticulous finishing. Slow-fashion ethics, timeless
            silhouettes, and everyday comfort— made in India for people and the
            planet.
          </p>
        </div>

        {/* Button */}
        <div className="flex lg:justify-end items-start">
          <button
            className="inline-block bg-[#c43e2a] hover:bg-[#d94f3a] text-white text-xl cursor-pointer font-semibold 
            px-4 py-3 rounded-xl shadow-md transition-all duration-300"
          >
            Shop Trousers
          </button>
        </div>
      </div>

      <hr className="border-gray-700 my-10" />

      {/* Bottom Links Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
              Terms & Condition
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
              <Facebook className="cursor-pointer bg-white p-2 text-black rounded-lg w-10 h-10" />
              <Instagram className="cursor-pointer bg-white p-2 text-black rounded-lg w-10 h-10" />
              <Linkedin className="cursor-pointer bg-white p-2 text-black rounded-lg w-10 h-10" />
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 my-10" />

      {/* Bottom Payments + Copyright */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 text-sm">
          © 2025 DMD Clothing — Made consciously in India.
        </p>

        <div className="flex gap-4 flex-wrap items-center">
          <img
            src="data:image/webp;base64,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"
            alt="UPI"
            className="h-8 w-auto object-contain"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
            alt="Visa"
            className="h-8 w-auto object-contain"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
            alt="MasterCard"
            className="h-8 w-auto object-contain"
          />
          <img
            src="https://www.bing.com/th/id/OIP.vJ01x9JQKLXsRdUHsTATugAAAA?w=217&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.5&pid=3.1&rm=2&ucfimg=1"
            alt="RuPay"
            className="h-8 w-auto object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
