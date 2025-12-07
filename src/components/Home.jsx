import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Carousel from "../assets/carousel.webp";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  // Refs for navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full px-0 sm:px-8 lg:px-14 relative">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={
          isDesktop
            ? { prevEl: prevRef.current, nextEl: nextRef.current }
            : false
        }
        onBeforeInit={(swiper) => {
          if (isDesktop) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        className="w-full h-[220px] sm:h-[260px] lg:h-[520px]"
      >
        <SwiperSlide>
          <img
            src={Carousel}
            alt="Home Banner"
            className="w-full h-full object-cover sm:object-cover"
          />
        </SwiperSlide>

        {/* Desktop Navigation Buttons */}
        {isDesktop && (
          <>
            <button
              ref={prevRef}
              className="prev-btn hidden lg:flex absolute top-1/2 left-6 z-20 -translate-y-1/2 text-gray-700 cursor-pointer transition"
            >
              <ChevronLeft size={38} strokeWidth={1} />
            </button>
            <button
              ref={nextRef}
              className="next-btn hidden lg:flex absolute top-1/2 right-6 z-20 -translate-y-1/2 text-gray-700 cursor-pointer transition"
            >
              <ChevronRight size={38} strokeWidth={1} />
            </button>
          </>
        )}
      </Swiper>
      <div className="text-2xl  .name-font mt-[50px] font-semibold">
        Conscious by Design
      </div>
      <a className="text-xl hover:underline cursor-pointer">Shop All </a>
    </div>
  );
}
