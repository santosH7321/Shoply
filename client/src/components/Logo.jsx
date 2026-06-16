import { ShoppingBag } from "lucide-react";

const Logo = ({
  size = "md",
  showTagline = false,
}) => {
  const variants = {
    sm: {
      icon: "h-8 w-8",
      title: "text-lg",
      tagline: "text-[10px]",
    },
    md: {
      icon: "h-10 w-10",
      title: "text-2xl",
      tagline: "text-xs",
    },
    lg: {
      icon: "h-12 w-12",
      title: "text-3xl",
      tagline: "text-sm",
    },
  };

  const current = variants[size];

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Logo Icon */}
      <div className="flex items-center justify-center rounded-2xl bg-linear-to-br from-violet-600 to-purple-700 p-2 shadow-lg shadow-violet-500/20">
        <ShoppingBag className={`${current.icon} text-white`} />
      </div>

      {/* Brand Content */}
      <div className="flex flex-col">
        <h1
          className={`font-extrabold tracking-tight text-slate-900 ${current.title}`}
        >
          Shop<span className="text-violet-600">ly</span>
        </h1>

        {showTagline && (
          <p
            className={`font-medium text-slate-500 ${current.tagline}`}
          >
            Premium Shopping Experience
          </p>
        )}
      </div>
    </div>
  );
};

export default Logo;