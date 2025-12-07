export default function Review() {
  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 lg:px-12">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center">
        #What Our Customers Say
      </h1>

      {/* Reviews Grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="p-8 text-center bg-gray-100 rounded-xl shadow-sm">
          <div className="text-[70px] sm:text-[80px] md:text-[100px] text-gray-700 leading-none">
            “
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
            Rakesh Kapoor
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 mt-4 italic">
            Graphic Designer, Surat India
          </p>
          <p className="text-gray-500 sm:text-base md:text-lg leading-relaxed italic">
            Absolutely love it! I've been using it for months, and it's been a
            game-changer for my workflow. The interface is intuitive and the
            features are exactly what I need.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-8 text-center bg-gray-100 rounded-xl shadow-sm">
          <div className="text-[70px] sm:text-[80px] md:text-[100px] text-gray-700 leading-none">
            “
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
            Arjun Mehta
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 mt-4 italic">
            Shopkeeper, Creative Director, Textile Engineer
          </p>
          <p className="text-gray-500 sm:text-base md:text-lg leading-relaxed italic">
            Minimalism at its finest! Every detail has been thoughtfully
            considered. The quality is top-notch, and it’s now an essential part
            of my daily routine.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-8 text-center bg-gray-100 rounded-xl shadow-sm">
          <div className="text-[70px] sm:text-[80px] md:text-[100px] text-gray-700 leading-none">
            “
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
            Aditya Roy
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 mt-4 italic">
            New Delhi, Fashion Editor, Luxe India
          </p>
          <p className="text-gray-500 sm:text-base md:text-lg leading-relaxed italic">
            Craftsmanship is evident in every piece—luxurious yet affordable.
            Truly refreshing, a standout experience for fashion enthusiasts.
          </p>
        </div>
      </div>
    </section>
  );
}
