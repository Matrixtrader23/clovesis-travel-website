"use client";

import { useMemo } from "react";
import packagesData from "@/data/packages.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Clock, MapPin, CheckCircle2, ChevronRight, Share2, Heart } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PackageDetailsPage({ params }: { params: { id: string } }) {
  const pkg = useMemo(() => {
    return packagesData.find((p) => p.id === params.id);
  }, [params.id]);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="bg-[var(--background)] min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="bg-sky-100/50 border-b border-sky-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center text-sm text-slate-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/packages" className="hover:text-primary transition-colors">Packages</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-slate-900 dark:text-slate-300 font-medium truncate">{pkg.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-poppins font-bold text-[var(--foreground)] mb-4">
              {pkg.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">{pkg.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Guided Tour</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-3">
            <div className="text-3xl font-bold text-primary">
              Rs. {pkg.price.toLocaleString()} <span className="text-base text-slate-500 font-normal">/person</span>
            </div>
            <div className="flex gap-3">
              <button className="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-sky-50 dark:hover:bg-slate-800 transition-colors tooltip text-slate-600 dark:text-slate-300">
                <Share2 className="h-5 w-5" />
              </button>
              <button className="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-red-50 text-slate-600 dark:text-slate-300 hover:text-red-500 hover:border-red-200 transition-colors">
                <Heart className="h-5 w-5" />
              </button>
              <button className="bg-primary hover:bg-sky-500 text-white px-8 h-10 rounded-full font-medium transition-colors shadow-sm shadow-primary/20">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {/* Image Gallery Slider */}
            <div className="rounded-3xl overflow-hidden bg-sky-50 dark:bg-slate-800 aspect-[16/10] relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                className="w-full h-full"
              >
                {[pkg.image, ...(pkg.images || [])].map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative w-full h-full">
                      <Image
                        src={img}
                        alt={`${pkg.name} - Image ${idx + 1}`}
                        fill
                        className="object-cover"
                        priority={idx === 0}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Description */}
            <section className="bg-[var(--card-bg)] rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h2 className="text-2xl font-poppins font-bold text-[var(--foreground)] mb-6">Overview</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {pkg.description}
              </p>
            </section>
          </div>

          <div className="space-y-8">
            {/* Highlights */}
            {pkg.highlights && pkg.highlights.length > 0 && (
              <section className="bg-[var(--card-bg)] rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm sticky top-24">
                <h2 className="text-2xl font-poppins font-bold text-[var(--foreground)] mb-6">Tour Highlights</h2>
                <ul className="space-y-4">
                  {pkg.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-4">Need Help Booking?</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                    Call our customer services team on the number below to speak to one of our advisors who will help you with all of your holiday needs.
                  </p>
                  <p className="text-lg font-bold text-primary">
                    +1 (555) 123-4567
                  </p>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
