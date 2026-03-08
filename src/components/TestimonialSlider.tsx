"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Adventure Traveler",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    content: "My trip to Bali with Clovesis was absolutely incredible. The guides were knowledgeable, the accommodations were top-notch, and every detail was perfectly handled.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Photographer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    content: "The Japan Cultural Trek tour exceeded all my expectations. As a photographer, the locations we visited were picture-perfect. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Honeymooner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    content: "We booked the Paris Romantic Getaway for our honeymoon and it was magical. The sunset cruise on the Seine is a memory we'll cherish forever.",
    rating: 4,
  },
];

export default function TestimonialSlider() {
  return (
    <div className="py-20 bg-sky-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">
            Traveler Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-[var(--card-foreground)]">
            What Our Clients Say
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-16 px-4"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-auto">
              <div className="bg-[var(--card-bg)] rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 h-full flex flex-col relative transition-shadow hover:shadow-md">
                <Quote className="absolute top-6 right-6 text-slate-100 dark:text-slate-800 h-16 w-16 -z-10" />
                
                <div className="flex gap-1 mb-6 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={i < testimonial.rating ? "fill-current" : "fill-none"}
                      size={20}
                    />
                  ))}
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 italic mb-8 flex-grow leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-primary/20 p-0.5">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-[var(--card-foreground)]">
                      {testimonial.name}
                    </h4>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
