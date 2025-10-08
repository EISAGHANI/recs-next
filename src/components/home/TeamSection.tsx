import Image from 'next/image';

const team = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
  },
  {
    name: 'Jane Smith',
    role: 'Director of Research',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  },
  {
    name: 'Michael Johnson',
    role: 'Head of Data Collection',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  },
  {
    name: 'Sarah Williams',
    role: 'Lead Consultant',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-primary-600 text-sm font-semibold tracking-wide uppercase mb-4 block">
            Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Leadership
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to delivering excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-1 text-gray-900">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/about#team"
            className="inline-block text-primary-600 font-semibold hover:text-primary-700 transition"
          >
            View Full Team →
          </a>
        </div>
      </div>
    </section>
  );
}
