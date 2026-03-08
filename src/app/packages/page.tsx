import PackageCard from "@/components/PackageCard";
import packagesData from "@/data/packages.json";
import { Compass } from "lucide-react";

export const metadata = {
  title: "Tour Packages | Clovesis Destinations",
  description: "Browse our exclusive, hand-picked tour packages.",
};

export default function PackagesPage() {
  return (
    <div className="bg-[var(--background)] min-h-screen">
      <div className="bg-sky-950 py-20 border-b border-sky-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Compass className="h-12 w-12 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Tour Packages
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-300">
            Carefully structured plans that ensure you experience the best of these destinations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packagesData.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </div>
    </div>
  );
}
