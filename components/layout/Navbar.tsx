"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Workshop", href: "/workshop" },
  { label: "Shop", href: "/shop" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md
                 bg-white/70 dark:bg-black/60
                 border-b border-black/5 dark:border-white/5"
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Your<span className="text-glow-blue">Center</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative pb-1 transition-colors duration-300
                    ${active ? "text-glow-blue" : "hover:text-glow-blue"}
                  `}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-glow-blue transition-all duration-300
                      ${active ? "w-full" : "w-0"}
                    `}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/cart"
            className="relative w-9 h-9 flex items-center justify-center rounded-full
                       border border-black/10 dark:border-white/10
                       hover:border-glow-blue/50 transition-colors duration-300
                       dark:hover:shadow-[0_0_15px_rgba(59,167,255,0.4)]"
            aria-label="Cart"
          >
            <ShoppingCart size={16} />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 min-w-4.5 px-1 rounded-full bg-glow-blue text-black text-[10px] font-semibold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/cart"
            className="relative w-9 h-9 flex items-center justify-center rounded-full
                       border border-black/10 dark:border-white/10"
            aria-label="Cart"
          >
            <ShoppingCart size={16} />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 min-w-4.5 px-1 rounded-full bg-glow-blue text-black text-[10px] font-semibold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-1"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul
          className="md:hidden flex flex-col gap-1 px-5 pb-5
                     bg-white/90 dark:bg-black/90 backdrop-blur-md"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  pathname === link.href
                    ? "text-glow-blue"
                    : "hover:text-glow-blue"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}