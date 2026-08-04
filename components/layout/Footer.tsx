import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/5 bg-white dark:bg-black/40 mt-20">
      <div className="max-w-6xl mx-auto px-5 py-12 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Your<span className="text-glow-blue">Center</span>
          </h3>
          <p className="text-sm opacity-70 leading-relaxed">
            Hands-on electronics &amp; IoT workshops for students, plus the tools and components to keep building.
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
              <Phone size={14} className="text-glow-blue" /> +91-XXXXXXXXXX
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-glow-blue" /> yourcenter@email.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-glow-blue" /> Your City, India
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-sm font-semibold mb-3 tracking-wide uppercase opacity-80">
            Follow
          </h4>
          <div className="flex items-center gap-3">
            {/* Email Icon Link */}
            <a 
              href="mailto:yourcenter@email.com" 
              aria-label="Email" 
              className="w-9 h-9 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 hover:border-glow-blue/50 hover:text-glow-blue hover:-translate-y-0.5 transition-all duration-300 dark:hover:shadow-[0_0_15px_rgba(59,167,255,0.35)]"
            >
              <Mail size={15} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook" 
              className="w-9 h-9 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 hover:border-glow-blue/50 hover:text-glow-blue hover:-translate-y-0.5 transition-all duration-300 dark:hover:shadow-[0_0_15px_rgba(59,167,255,0.35)]"
            >
              <FaFacebookF size={14} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram" 
              className="w-9 h-9 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 hover:border-glow-blue/50 hover:text-glow-blue hover:-translate-y-0.5 transition-all duration-300 dark:hover:shadow-[0_0_15px_rgba(59,167,255,0.35)]"
            >
              <FaInstagram size={15} />
            </a>
            <a 
              href="https://wa.me" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp" 
              className="w-9 h-9 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 hover:border-glow-blue/50 hover:text-glow-blue hover:-translate-y-0.5 transition-all duration-300 dark:hover:shadow-[0_0_15px_rgba(59,167,255,0.35)]"
            >
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Banner */}
      <div className="border-t border-black/5 dark:border-white/5 py-5">
        <p className="text-center text-xs opacity-60">
          &copy; {new Date().getFullYear()} YourCenter. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
