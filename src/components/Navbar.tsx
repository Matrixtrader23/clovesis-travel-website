"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Packages", href: "/packages" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-sky-950/95 backdrop-blur-md shadow-sm py-3 border-b border-sky-900"
          : "bg-sky-950 py-5 border-b border-sky-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Globe className="h-8 w-8 text-primary" />
              <span className="font-poppins font-bold text-xl text-white">
                Clovesis
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-primary ${
                  pathname === link.href
                    ? "text-primary"
                    : isScrolled
                    ? "text-slate-200"
                    : "text-white/90"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-sky-950 shadow-lg border-t border-sky-900">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md font-medium ${
                  pathname === link.href
                    ? "text-primary bg-sky-900/50"
                    : "text-slate-300 hover:text-white hover:bg-sky-900/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
