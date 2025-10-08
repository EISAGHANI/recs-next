import Link from 'next/link';

const sectors = [
  {
    title: 'Health',
    description: 'Improving healthcare access and quality across communities.',
    href: '/sectors/health',
    icon: '🏥',
  },
  {
    title: 'Education',
    description: 'Empowering through quality education and learning opportunities.',
    href: '/sectors/education',
    icon: '📚',
  },
  {
    title: 'Agriculture',
    description: 'Supporting sustainable agricultural practices and food security.',
    href: '/sectors/agriculture',
    icon: '🌾',
  },
  {
    title: 'Development',
    description: 'Driving sustainable development and economic growth.',
    href: '/sectors/development',
    icon: '🏗️',
  },
];

export default function SectorsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Sectors</h2>
          <p className="text-xl text-gray-600">
            Working across multiple sectors to create lasting impact
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector) => (
            <Link
              key={sector.title}
              href={sector.href}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition group"
            >
              <div className="text-4xl mb-4">{sector.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
                {sector.title}
              </h3>
              <p className="text-gray-600">{sector.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
