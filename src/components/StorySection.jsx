import { ArrowRight } from "lucide-react";
export default function StorySection() {
  return (
    <section className="w-full bg-[#faf7ee] py-16  px-[60px]">
      <div className="  max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="pl-0">
          <p className="text-2xl font-bold tracking-wider text-black   uppercase">
            Every thread tells a story.
          </p>

          <h1 className=" sm:text-[45px] md:text-[45px] lg:text-[50px] font-sans font-extrabold text-gray-900 leading-tight mt-4">
            A sustainable clothing <br />
            handcrafted with <br />
            precision and love
          </h1>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 name-font">
            Wear what matters.
          </h3>

          <p className="mt-4 text-xl leading-relaxed text-gray-600 name-font">
            Rooted in conscious design and timeless tradition, our garments are
            lovingly handmade by skilled artisans—blending ethical craftsmanship
            with modern elegance. From natural fabrics to the final stitch, we
            honour both people and the planet.
          </p>

          <p className="mt-4 text-xl leading-relaxed text-gray-600 name-font">
            Explore collections that celebrate sustainability, authenticity, and
            slow fashion—made to last, made to love.
          </p>
          <button
            className="mt-4 cursor-pointer inline-flex items-center justify-center gap-3 px-8 py-4 
                 bg-[#c43e2a] text-white underline text-xl font-semibold 
                 rounded-lg hover:bg-[#D94F3A] 
                 transition-all duration-300 shadow-lg hover:shadow-xl 
                 transform hover:-translate-y-0.5"
          >
            Explore Us
            <ArrowRight size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Right Image */}
        <div className="rounded-3xl overflow-hidden shadow-md">
          <img
            src="https://img.clevup.in/463263/static/handcrafted.png"
            alt="Handcrafted clothing"
            className="w-full h-[460px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
