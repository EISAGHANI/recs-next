import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  sector: string;
  country: string;
  year: string;
  image: string;
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  sector,
  country,
  year,
  image,
  link,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {sector}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <MapPin size={16} className="mr-1" />
            {country}
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            {year}
          </div>
        </div>
        {link && (
          <Link
            href={link}
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition"
          >
            View Project <ArrowRight size={16} className="ml-1" />
          </Link>
        )}
      </div>
    </div>
  );
}
