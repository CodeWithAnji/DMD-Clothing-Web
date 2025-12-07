import React from "react";
import { Heart, Star } from "lucide-react";
import "../css/product.css";
const products = [
  {
    id: 1,
    name: "Wrinkle Free Express Mattee | Solid Formal Trousers | Polo Fit | Office",
    image1:
      "https://image.cdn.shpy.in/438426/CaramelCream-1764069036096.png?format=webp",
    image2:
      "https://image.cdn.shpy.in/438426/CharcoalBlack2-1764068816156.png?width=600&format=webp",
    price: 999,
    oldPrice: 1999,
    rating: 4.5,
    sold: "1475",
    discount: "50% OFF",
  },
  {
    id: 2,
    name: "Wrinkle Free Express Mattee | Solid Formal Trousers | Polo Fit | Office",
    image1:
      "https://image.cdn.shpy.in/438426/CharcoalBlack5-1764068894754.png?width=600&format=webp",
    image2:
      "https://image.cdn.shpy.in/438426/CharcoalBlack-1764068893845.png?format=webp",
    price: 999,
    oldPrice: 1999,
    rating: 4.5,
    sold: "1547",
    discount: "50% OFF",
  },
  {
    id: 3,
    name: "Wrinkle Free Express Mattee | Solid Formal Trousers | Polo Fit | Office",
    image1:
      "https://image.cdn.shpy.in/438426/BeigeCream2-1764069266513.png?width=600&format=webp",
    image2:
      "https://image.cdn.shpy.in/438426/BeigeCream-1764069265318.png?format=webp",
    price: 999,
    oldPrice: 1999,
    rating: 4.5,
    sold: "2007",
    discount: "50% OFF",
  },
  {
    id: 4,
    name: "Wrinkle Free Express Mattee | Solid Formal Trousers | Polo Fit | Office",
    image1:
      "https://image.cdn.shpy.in/438426/NavyBlue5-1764068975178.png?width=600&format=webp",
    image2:
      "https://image.cdn.shpy.in/438426/NavyBlue-1764068974447.png?format=webp",
    price: 999,
    oldPrice: 1999,
    rating: 4.5,
    sold: "2071",
    discount: "50% OFF",
  },
  {
    id: 5,
    name: "Wrinkle Free Express Mattee | Solid Formal Trousers | Polo Fit | Office",
    image1:
      "https://image.cdn.shpy.in/438426/NavyBlue-1764068974447.png?format=webp",
    image2:
      "https://image.cdn.shpy.in/438426/ChocolateBrown-1764068679158.png?format=webp",
    price: 999,
    oldPrice: 1999,
    rating: 4.5,
    sold: "1537",
    discount: "50% OFF",
  },
  {
    id: 6,
    name: "Wrinkle Free Express Mattee | Solid Formal Trousers | Polo Fit | Office",
    image1:
      "https://image.cdn.shpy.in/438426/CharcoalBlack5-1764068894754.png?width=600&format=webp",
    image2:
      "https://image.cdn.shpy.in/438426/CharcoalBlack-1764068893845.png?format=webp",

    price: 999,
    oldPrice: 1999,
    rating: 4.5,
    sold: "1671",
    discount: "50% OFF",
  },
];

export default function ProductCard() {
  return (
    <div className="max-w-[1560px] mx-auto px-4 sm:px-4 lg:px-0 py-8 cursor-pointer">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-sm r relative group overflow-hidden"
          >
            {/* Discount badge */}
            <span className="absolute top-0 left-0 bg-amber-600 text-white text-xl px-3 font-semibold py-2 sm:w-[120px] h-[50px] ">
              {product.discount}
            </span>
            {/* Heart icon */}
            <button className="absolute top-4 right-2 bg-white w-[40px] h-[40px] rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 cursor-pointer  transition">
              <Heart size={25} />
            </button>
            {/* Product image */}
            <img
              src={product.image1 || product.image}
              alt={product.name}
              className="w-full sm:h-[450px] lg:h-[650px] object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
            />
            <img
              src={product.image2 || product.image}
              alt={product.name}
              className="absolute top-0 left-0 w-full sm:h-[450px] lg:h-[650px] object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
            {/* Product info */}
            <div className=" product-card p-3 font-sans">
              {/* Product Name */}
              <h2 className="sm:text-[18px] lg:text-[20px] ">{product.name}</h2>

              {/* Rating */}
              <div className="flex items-center mt-2 space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={25}
                    className={
                      i < Math.floor(product.rating)
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-300 fill-gray-300"
                    }
                  />
                ))}
                <span className="text-xl text-gray-700 ml-1">{`(${product.sold})`}</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-2 mt-2">
                <span className=" text-gray-600 text-[20px]">
                  ₹ {product.price}
                </span>
                <span className="text-gray-400 line-through text-[17px]">
                  ₹ {product.oldPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
