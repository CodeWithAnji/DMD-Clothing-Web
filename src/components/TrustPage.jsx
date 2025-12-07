import { Leaf, Package, Truck, Lock, Scissors, BadgeCheck } from "lucide-react";

export default function TrustPage() {
  return (
    <section className="w-full bg-[#f9f6ef] py-16 px-[30px]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl  font-sans font-extrabold text-gray-900">
          Why Trust DMD
        </h2>
        <p className="text-xl text-gray-600  name-font mt-2">
          Thoughtfully made, responsibly delivered.
        </p>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-6 flex gap-4 items-center shadow-lg">
            <div className="p-4 rounded-2xl border border-[#e2dad0] bg-[#faf7ee]">
              <Leaf size={32} strokeWidth={2} className="text-[#c43e2a]" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900">
                Sustainable Fabrics
              </h3>
              <p className="text-gray-600 name-font text-sm mt-1">
                Natural fibers with low-impact dyes
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-6 flex gap-4 items-center shadow-lg">
            <div className="p-4 rounded-2xl border border-[#e2dad0] bg-[#faf7ee]">
              <Scissors size={32} strokeWidth={2} className="text-[#c43e2a]" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900">
                Small-Batch Craft
              </h3>
              <p className="text-gray-600 name-font text-sm mt-1">
                Handmade in India with care
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-6 flex gap-4 items-center shadow-lg">
            <div className="p-4 rounded-2xl border border-[#e2dad0] bg-[#faf7ee]">
              <BadgeCheck
                size={32}
                strokeWidth={2}
                className="text-[#c43e2a]"
              />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900">
                Perfect Fit Guarantee
              </h3>
              <p className="text-gray-600 name-font  text-sm mt-1">
                Easy 7-day size exchange
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-3xl p-6 flex gap-4 items-center shadow-lg">
            <div className="p-4 rounded-2xl border border-[#e2dad0] bg-[#faf7ee]">
              <Truck size={32} strokeWidth={2} className="text-[#c43e2a]" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900">
                Free Shipping
              </h3>
              <p className="text-gray-600 name-font text-sm mt-1">
                Fast delivery across India
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-3xl p-6 flex gap-4 items-center shadow-lg">
            <div className="p-4 rounded-2xl border border-[#e2dad0] bg-[#faf7ee]">
              <Lock size={32} strokeWidth={2} className="text-[#c43e2a]" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900">
                Secure Payments
              </h3>
              <p className="text-gray-600 name-font  text-sm mt-1">
                UPI, cards, and wallets
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-3xl p-6 flex gap-4 items-center shadow-lg">
            <div className="p-4 rounded-2xl border border-[#e2dad0] bg-[#faf7ee]">
              <Package size={32} strokeWidth={2} className="text-[#c43e2a]" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900">
                Planet-Smart Packaging
              </h3>
              <p className="text-gray-600 name-font text-sm mt-1">
                Recyclable materials
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
