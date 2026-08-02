import Link from "next/link";
import { Mail, Phone, MapPin, Camera, Play } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="border-t border-black/5 dark:border-white/5
                 bg-white dark:bg-black/40 mt-20"
    >
      <div className="max-w-6xl mx-auto px-5 py-12 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Your<span className="text-glow-blue">Center</span>
          </h3>
          <p className="text-sm opacity-70 leading-relaxed">
            Hands-on electronics &amp; IoT workshops for students, plus the
            tools and components to keep building.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-semibold mb-3 tracking-wide uppercase opacity-80">
            Explore
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-glow-blue transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/workshop" className="hover:text-glow-blue transition-colors">
                Workshop
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-glow-blue transition-colors">
                Shop
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-sm font-semibold mb-3 tracking-wide uppercase opacity-80">
            Contact
          </h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-glow-blue" />
              +91-XXXXXXXXXX
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-glow-blue" />
              yourcenter@email.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-glow-blue" />
              Pioneer Park, Barasat, Kol - 700124
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-sm font-semibold mb-3 tracking-wide uppercase opacity-80">
            Follow
          </h4>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-glow-blue transition-colors">
              <Camera size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-glow-blue transition-colors">
              <Camera size={18} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-glow-blue transition-colors">
              <Play size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-black/5 dark:border-white/5 py-5">
        <p className="text-center text-xs opacity-60">
          © {new Date().getFullYear()} Quantum Physics Lab. All rights reserved.
        </p>
      </div>
    </footer>
  );
}