"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: "url('/images/hero/Background.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-sky-950/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-sky-950 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-md text-sm font-semibold tracking-wider uppercase mb-2">
            Discover the world with us
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold text-white leading-tight">
            Explore Your Dream <br className="hidden md:block"/>
            <span className="text-primary">Destinations</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-200 font-light">
            Experience unforgettable journeys with our premium travel packages. 
            Discover beautiful places, immerse in new cultures, and create lifelong memories.
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/destinations"
              className="group flex items-center gap-2 bg-primary hover:bg-sky-400 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
            >
              Explore Destinations
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/packages"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-full font-medium transition-all hover:-translate-y-1"
            >
              View Tour Packages
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}
