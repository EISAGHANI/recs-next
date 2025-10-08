import Link from 'next/link';
import { Database, FileText, BarChart3, Users } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Research & Consulting',
    description: 'Evidence-based research and strategic consulting for development programs.',
  },
  {
    icon: Database,
    title: 'Data Collection',
    description: 'Comprehensive field data collection across multiple sectors and geographies.',
  },
  {
    icon: BarChart3,
    title: 'Data Analysis',
    description: 'Advanced statistical analysis and insights generation from complex datasets.',
  },
  {
    icon: Users,
    title: 'Monitoring & Evaluation',
    description: 'Impact assessment and program evaluation for informed decision-making.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-primary-600 text-sm font-semibold tracking-wide uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering high-quality research and data services across Africa
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
