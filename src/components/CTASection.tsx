"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Send, Map } from "lucide-react";

export default function CTASection() {
  return (
    <div className="relative py-24 bg-sky-950 border-t border-sky-900/50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 opacity-10 blur-3xl w-96 h-96 rounded-full bg-primary" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 opacity-10 blur-3xl w-96 h-96 rounded-full bg-secondary" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Map className="w-16 h-16 mx-auto text-primary mb-6" />
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-6">
            Ready to Start Your Next Adventure?
          </h2>
          <p className="text-lg text-slate-300 font-light mb-10 max-w-2xl mx-auto">
            Join thousands of happy travelers who have explored the world with us. 
            Book your dream vacation today and create memories that will last a lifetime.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/packages"
              className="group flex flex-1 w-full sm:w-auto sm:flex-none items-center justify-center gap-2 bg-primary hover:bg-sky-400 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-primary/30"
            >
              Book a Trip Now
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/contact"
              className="flex flex-1 w-full sm:w-auto sm:flex-none justify-center items-center gap-2 bg-transparent hover:bg-white/5 text-white border border-slate-600 hover:border-slate-400 px-8 py-4 rounded-full font-medium transition-all"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
