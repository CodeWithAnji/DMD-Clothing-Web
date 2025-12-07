export default function CraftSection() {
  return (
    <section className="w-full mx-auto px-4 py-12 md:py-16 lg:py-20 text-center bg-[#faf7ee]">
      {/* Main heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-sans">
        Consciously Crafted. Timeless by Design.
      </h2>

      {/* Sub text */}
      <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-sm sm:text-lg md:text-xl leading-relaxed">
        Rooted in conscious design and timeless tradition, our garments are
        lovingly handmade by skilled artisans—blending ethical craftsmanship
        with modern elegance. From natural fabrics to the final stitch, we
        honour both people and the planet.
      </p>

      {/* Icons Row */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 mt-14">
        {/* Item 1 */}
        <div className="flex flex-col items-center">
          <img
            src="https://img.clevup.in/438426/static/homemade-stamp.png"
            alt="Handmade"
            className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]"
          />
          <h3 className="text-xl sm:text-2xl font-extrabold mt-5">
            Handmade by Artisans
          </h3>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-2">
            Small-batch, meticulously finished
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center">
          <img
            src="https://img.clevup.in/438426/static/natural-fabric-stamp.png"
            alt="Natural Fabrics"
            className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]"
          />
          <h3 className="text-xl sm:text-2xl font-extrabold mt-5">
            Natural Fabrics
          </h3>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-2">
            Skin-friendly, low-impact dyes
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center">
          <img
            src="https://img.clevup.in/438426/static/ethical-fashion-stamp.png"
            alt="Ethical Fashion"
            className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]"
          />
          <h3 className="text-xl sm:text-2xl font-extrabold mt-5">
            Ethical Slow Fashion
          </h3>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-2">
            Responsibly made, built to last
          </p>
        </div>
      </div>
    </section>
  );
}
