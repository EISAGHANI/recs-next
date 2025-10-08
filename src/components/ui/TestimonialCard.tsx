import { Quote } from 'lucide-react';
import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image?: string;
  quote: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  image,
  quote,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
      <Quote className="text-blue-600 mb-4" size={40} />
      <p className="text-gray-700 text-lg mb-6 italic">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center">
        {image && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
        )}
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}
