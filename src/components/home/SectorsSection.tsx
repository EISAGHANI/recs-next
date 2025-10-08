import Link from 'next/link';
import { Heart, GraduationCap, Sprout, TrendingUp } from 'lucide-react';

const sectors = [
  {
    icon: Heart,
    title: 'Health',
    description: 'Healthcare research and data collection services',
    href: '/sectors/health',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Educational research and assessment programs',
    href: '/sectors/education',
  },
  {
    icon: Sprout,
    title: 'Agriculture',
    description: 'Agricultural research and rural development',
    href: '/sectors/agriculture',
  },
  {
    icon: TrendingUp,
    title: 'Development',
    description: 'Economic and social development research',
    href: '/sectors/development',
  },
];

export default function SectorsSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-primary-600 text-sm font-semibold tracking-wide uppercase mb-4 block">
            Sectors
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Where We Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized research across key development sectors
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <Link
                key={sector.title}
                href={sector.href}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-primary-500 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                  <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                  {sector.title}
                </h3>
                <p className="text-gray-600 text-sm">{sector.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
