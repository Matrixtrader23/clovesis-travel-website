import Image from "next/image";
import Link from "next/link";
import { Star, MapPin } from "lucide-react";

interface DestinationProps {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
}

export default function DestinationCard({ id, name, image, description, rating }: DestinationProps) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-[var(--card-bg)] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-800">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <Star className="h-4 w-4 fill-accent text-accent" />
          <span className="text-sm font-semibold text-slate-800">{rating}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-poppins font-bold text-[var(--card-foreground)] truncate pr-4">
            {name}
          </h3>
          <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
        </div>
        
        <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-6 h-10">
          {description}
        </p>
        
        <Link 
          href={`/destinations#${id}`}
          className="block w-full text-center bg-sky-50 hover:bg-primary hover:text-white dark:bg-slate-800 dark:hover:bg-primary dark:text-slate-200 text-slate-800 font-medium py-3 rounded-xl transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
