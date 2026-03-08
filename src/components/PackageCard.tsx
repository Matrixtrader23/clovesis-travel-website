import Image from "next/image";
import Link from "next/link";
import { Clock, CheckCircle2 } from "lucide-react";

interface PackageProps {
  id: string;
  name: string;
  image: string;
  duration: string;
  price: number;
  description: string;
  highlights?: string[];
}

export default function PackageCard({ id, name, image, duration, price, description, highlights }: PackageProps) {
  return (
    <div className="group rounded-3xl overflow-hidden bg-[var(--card-bg)] shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-800 flex flex-col h-full">
      <div className="relative h-56 w-full overflow-hidden shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-primary text-white font-semibold px-3 py-1.5 rounded-full text-sm">
          Rs. {price.toLocaleString()} <span className="text-white/80 text-xs font-normal">/person</span>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-3">
          <Clock className="h-4 w-4 text-primary" />
          <span>{duration}</span>
        </div>

        <h3 className="text-xl font-poppins font-bold text-[var(--card-foreground)] mb-3 line-clamp-2">
          {name}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-6 h-10">
          {description}
        </p>
        
        {highlights && highlights.length > 0 && (
          <div className="space-y-2 mb-6">
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Top Highlights</p>
            {highlights.slice(0, 2).map((highlight, index) => (
              <div key={index} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                <span className="line-clamp-1">{highlight}</span>
              </div>
            ))}
            {highlights.length > 2 && (
              <div className="text-xs text-primary font-medium mt-1">
                + {highlights.length - 2} more
              </div>
            )}
          </div>
        )}
        
        <div className="mt-auto pt-4 border-t border-sky-50 dark:border-slate-800 flex items-center justify-between">
          <Link 
            href={`/packages/${id}`}
            className="flex-grow text-center bg-primary hover:bg-sky-500 text-white font-medium py-3 rounded-xl transition-colors shadow-sm shadow-primary/20"
          >
            View Package
          </Link>
        </div>
      </div>
    </div>
  );
}
