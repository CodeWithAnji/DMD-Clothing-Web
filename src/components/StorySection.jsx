import { ArrowRight } from "lucide-react";

export default function StorySection() {
  return (
    <section className="w-full bg-[#faf7ee] py-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-black uppercase">
            Every thread tells a story.
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mt-4 font-sans">
            A sustainable clothing <br />
            handcrafted with <br />
            precision and love
          </h1>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6">
            Wear what matters.
          </h3>

          <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-gray-600">
            Rooted in conscious design and timeless tradition, our garments are
            lovingly handmade by skilled artisans—blending ethical craftsmanship
            with modern elegance. From natural fabrics to the final stitch, we
            honour both people and the planet.
          </p>

          <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-gray-600">
            Explore collections that celebrate sustainability, authenticity, and
            slow fashion— made to last, made to love.
          </p>

          <button
            className="mt-6 inline-flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 
            bg-[#c43e2a] text-white text-lg sm:text-xl font-semibold 
            rounded-lg hover:bg-[#D94F3A] transition-all duration-300 underline
            shadow-md hover:shadow-xl transform hover:-translate-y-[2px]"
          >
            Explore Us
            <ArrowRight size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Right Image */}
        <div className="rounded-3xl overflow-hidden shadow-md w-full">
          <img
            src="https://img.clevup.in/463263/static/handcrafted.png"
            alt="Handcrafted clothing"
            className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
