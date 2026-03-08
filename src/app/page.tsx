import Hero from "@/components/Hero";
import DestinationCard from "@/components/DestinationCard";
import PackageCard from "@/components/PackageCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import CTASection from "@/components/CTASection";

// Import data
import destinationsData from "@/data/destinations.json";
import packagesData from "@/data/packages.json";

export default function Home() {
  const featuredDestinations = destinationsData.slice(0, 3);
  const featuredPackages = packagesData.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen font-inter">
      <Hero />
      
      {/* Featured Destinations Section */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
              Top Categories
            </span>
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-[var(--foreground)]">
              Featured Destinations
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
              Explore our most popular and breathtaking travel destinations chosen by thousands of travelers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tour Packages Section */}
      <section className="py-20 bg-sky-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">
              Exclusive Tours
            </span>
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-[var(--foreground)]">
              Featured Tour Packages
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
              Carefully crafted travel packages that guarantee the best experiences at the best prices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <TestimonialSlider />
      </section>

      {/* Call To Action Section */}
      <section>
        <CTASection />
      </section>
    </div>
  );
}
