import { Clock3, ArrowRight, BadgePercent } from "lucide-react";

const deals = [
  {
    id: 1,
    title: "iPhone 16 Pro",
    discount: "30% OFF",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    bg: "from-violet-600 to-purple-600",
    expiresIn: "12 Hours Left",
  },
  {
    id: 2,
    title: "Premium Headphones",
    discount: "45% OFF",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    bg: "from-emerald-600 to-green-600",
    expiresIn: "18 Hours Left",
  },
  {
    id: 3,
    title: "Smart Watch",
    discount: "25% OFF",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
    bg: "from-orange-500 to-red-500",
    expiresIn: "6 Hours Left",
  },
];

const Deals = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
              <BadgePercent size={16} />
              Hot Deals
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Today's Best Offers
            </h2>

            <p className="mt-3 text-slate-600">
              Grab exclusive discounts before they're gone.
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 font-medium text-slate-700 transition hover:border-violet-600 hover:text-violet-600">
            View All Deals
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Deals Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className={`group relative overflow-hidden rounded-3xl bg-linear-to-r ${deal.bg} p-8 text-white shadow-xl transition duration-300 hover:-translate-y-2`}
            >
              {/* Content */}
              <div className="relative z-10">
                <div className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                  {deal.discount}
                </div>

                <h3 className="mt-6 text-3xl font-bold">
                  {deal.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-white/90">
                  <Clock3 size={18} />
                  <span>{deal.expiresIn}</span>
                </div>

                <button className="mt-8 flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:scale-105">
                  Shop Now
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Product Image */}
              <img
                src={deal.image}
                alt={deal.title}
                className="absolute bottom-0 right-0 h-40 w-40 object-contain transition duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;