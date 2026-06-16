import {
  Laptop,
  Smartphone,
  Shirt,
  Watch,
  Headphones,
  Sofa,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Electronics",
    icon: Laptop,
    items: "2,500+ Products",
  },
  {
    id: 2,
    name: "Mobiles",
    icon: Smartphone,
    items: "1,200+ Products",
  },
  {
    id: 3,
    name: "Fashion",
    icon: Shirt,
    items: "4,800+ Products",
  },
  {
    id: 4,
    name: "Accessories",
    icon: Watch,
    items: "1,500+ Products",
  },
  {
    id: 5,
    name: "Audio",
    icon: Headphones,
    items: "850+ Products",
  },
  {
    id: 6,
    name: "Furniture",
    icon: Sofa,
    items: "950+ Products",
  },
];

const Categories = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
              Categories
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Shop By Category
            </h2>

            <p className="mt-3 text-slate-600">
              Discover thousands of premium products across all categories.
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 font-medium text-slate-700 transition hover:border-violet-600 hover:text-violet-600">
            View All
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.id}
                className="group rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 transition group-hover:bg-violet-600">
                  <Icon
                    size={30}
                    className="text-violet-600 transition group-hover:text-white"
                  />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {category.name}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {category.items}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-violet-600">
                  Explore
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;