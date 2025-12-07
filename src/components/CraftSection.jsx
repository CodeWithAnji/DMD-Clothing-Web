export default function CraftSection() {
  return (
    <section className="m-full  mx-auto px-4 py-16 text-center bg-[#faf7ee]">
      {/* Main heading */}
      <a className=" sm:text-[20px] md:text-5xl font-sans font-extrabold text-gray-900">
        Consciously Crafted. Timeless by Design.
      </a>

      {/* Sub text */}
      <p className="text-gray-500 mt-4 max-w-3xl mx-auto .name-font text-2xl">
        Rooted in conscious design and timeless tradition, our garments are
        lovingly handmade by skilled artisans—blending ethical craftsmanship
        with modern elegance. From natural fabrics to the final stitch, we
        honour both people and the planet.
      </p>

      {/* Icons Row */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
        {/* Item 1 */}
        <div className="flex flex-col items-center">
          <div className=" rounded-full flex items-center justify-center">
            <img
              src="https://img.clevup.in/438426/static/homemade-stamp.png"
              alt="Handmade"
              className="w-[280px] h-70 opacity-90"
            />
          </div>
          <h3 className="text-3xl font-extrabold .name-font mt-5">
            Handmade by Artisans
          </h3>
          <p className="text-gray-500  text-xl  .name-font mt-3">
            Small-batch, meticulously finished
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center">
          <div className=" rounded-full  flex items-center justify-center">
            <img
              src="https://img.clevup.in/438426/static/natural-fabric-stamp.png"
              alt="Natural Fabrics"
              className="w-[280px] h-70 opacity-90"
            />
          </div>
          <h3 className="text-3xl font-extrabold  .name-font mt-5">
            Natural Fabrics
          </h3>
          <p className="text-gray-500  text-xl .name-font mt-3">
            Skin-friendly, low-impact dyes
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center">
          <div className=" rounded-full  flex items-center justify-center">
            <img
              src="https://img.clevup.in/438426/static/ethical-fashion-stamp.png"
              alt="Ethical Fashion"
              className="w-[280px] h-70 opacity-90 "
            />
          </div>
          <h3 className="text-3xl font-extrabold   .name-font mt-5">
            Ethical Slow Fashion
          </h3>
          <p className="text-gray-500  text-xl .name-font mt-3">
            Responsibly made, built to last
          </p>
        </div>
      </div>
    </section>
  );
}
