import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Globe, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-sky-950 border-t border-sky-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Globe className="h-8 w-8 text-primary" />
              <span className="font-poppins font-bold text-xl text-white">
                Clovesis
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Discover the world&apos;s most amazing destinations with our exclusive travel packages and guided tours.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="h-8 w-8 rounded-full bg-sky-900 flex items-center justify-center hover:bg-primary transition-colors hover:text-white">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-sky-900 flex items-center justify-center hover:bg-primary transition-colors hover:text-white">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-sky-900 flex items-center justify-center hover:bg-primary transition-colors hover:text-white">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-sky-900 flex items-center justify-center hover:bg-primary transition-colors hover:text-white">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-poppins font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/destinations" className="text-sm hover:text-primary transition-colors">Destinations</Link>
              </li>
              <li>
                <Link href="/packages" className="text-sm hover:text-primary transition-colors">Tour Packages</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-white font-poppins font-semibold mb-6">Top Destinations</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/destinations" className="text-sm hover:text-primary transition-colors">Bali, Indonesia</Link>
              </li>
              <li>
                <Link href="/destinations" className="text-sm hover:text-primary transition-colors">Paris, France</Link>
              </li>
              <li>
                <Link href="/destinations" className="text-sm hover:text-primary transition-colors">Kyoto, Japan</Link>
              </li>
              <li>
                <Link href="/destinations" className="text-sm hover:text-primary transition-colors">Santorini, Greece</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-poppins font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-slate-400">123 Galle Road, Colombo 01, Sri Lanka</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-slate-400">+94 11 234 5678</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-slate-400">hello@clovesisdestinations.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sky-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Clovesis Destinations. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-slate-400 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-slate-400 hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
