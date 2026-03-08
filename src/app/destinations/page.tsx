import DestinationCard from "@/components/DestinationCard";
import destinationsData from "@/data/destinations.json";
import { MapPin } from "lucide-react";

export const metadata = {
  title: "Destinations | Clovesis Destinations",
  description: "Browse our beautiful and carefully selected travel destinations.",
};

export default function DestinationsPage() {
  return (
    <div className="bg-[var(--background)] min-h-screen">
      <div className="bg-sky-950 py-20 border-b border-sky-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <MapPin className="h-12 w-12 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Explore Destinations
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-300">
            Find your next adventure from our hand-picked selection of the world&apos;s most breathtaking locations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsData.map((destination) => (
            <div key={destination.id} id={destination.id} className="scroll-mt-32">
              <DestinationCard {...destination} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
