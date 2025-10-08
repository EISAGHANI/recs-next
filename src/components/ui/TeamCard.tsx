import Image from 'next/image';

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
  linkedin?: string;
}

export default function TeamCard({ name, role, image, bio, linkedin }: TeamCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-gray-900">{name}</h3>
        <p className="text-blue-600 mb-3">{role}</p>
        {bio && <p className="text-gray-600 text-sm mb-4">{bio}</p>}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
          >
            View LinkedIn →
          </a>
        )}
      </div>
    </div>
  );
}
