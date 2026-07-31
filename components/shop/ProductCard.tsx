import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block rounded-2xl overflow-hidden
                 border border-black/10 dark:border-white/10
                 bg-white dark:bg-white/2
                 hover:border-glow-blue/50 transition-all duration-300
                 dark:hover:shadow-[0_0_25px_rgba(59,167,255,0.15)]
                 hover:-translate-y-1"
    >
      {/* Image placeholder — swap for next/image once assets exist */}
      <div className="relative aspect-square bg-black/5 dark:bg-white/5 flex items-center justify-center">
        <span className="text-xs opacity-40">Image</span>
        <span
          className="absolute top-3 left-3 text-[10px] font-medium px-2.5 py-1 rounded-full
                     bg-black/70 text-white dark:bg-glow-blue/20 dark:text-glow-blue"
        >
          {product.category}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-sm font-semibold mb-1 line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-3">
          <span className="text-base font-semibold text-glow-blue">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <span
            className="w-8 h-8 rounded-full flex items-center justify-center
                       border border-black/10 dark:border-white/10
                       group-hover:border-glow-blue/60 group-hover:scale-110
                       transition-all duration-300"
          >
            <ShoppingCart size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}