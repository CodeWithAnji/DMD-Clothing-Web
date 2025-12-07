export default function Review() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-4">
      <h1 className="text-3xl font-semibold mb-4">#What our customers says</h1>

      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-1 lg:flex justify-between items-stretch gap-6">
        {/* Card 1 */}
        <div className="flex-1 p-8 text-center bg-gray-100 sm:h-[400px] lg:h-[400px]">
          <div className="text-[100px] text-gray-700 title-font">“</div>
          <h3 className="text-xl font-semibold text-gray-900">Rakesh Kapoor</h3>
          <p className="text-lg text-gray-600 mb-8 mt-8 italic">
            Graphic Designer, Surat India
          </p>
          <p className="text-gray-500 text-lg leading-relaxed italic">
            Absolutely love it! I've been using it for months, and it's been a
            game-changer for my workflow. The interface is intuitive and the
            features are exactly what I need to create stunning visuals
            efficiently.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex-1 bg-gray-100 p-8 text-center">
          <div className="text-[100px] text-gray-700 title-font">“</div>
          <h3 className="text-xl font-semibold text-gray-900">Arjun Mehta</h3>
          <p className="text-lg text-gray-600 mb-8 mt-8 italic">
            Shopkeeper, Creative Director, Textile Engineer
          </p>
          <p className="text-gray-500 text-lg leading-relaxed italic">
            Minimalism at its finest! Every detail has been thoughtfully
            considered. The quality is top-notch, and it's become an essential
            part of my daily routine.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex-1 bg-gray-100 p-8 text-center">
          <div className="text-[100px] text-gray-700 title-font">“</div>
          <h3 className="text-xl font-semibold text-gray-900">Aditya Roy</h3>
          <p className="text-lg text-gray-600 mb-8 mt-8 italic">
            New Delhi, Fashion Editor, Luxe India
          </p>
          <p className="text-gray-500 text-lg leading-relaxed italic">
            Working with pieces from luxurious yet affordable collection has
            been a delight. The craftsmanship is evident in every piece, making
            it a standout choice for fashion enthusiasts.
          </p>
        </div>
      </div>
    </section>
  );
}
