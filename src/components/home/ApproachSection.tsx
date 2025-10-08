import { CheckCircle2 } from 'lucide-react';

const approaches = [
  {
    title: 'Evidence-Based',
    description: 'All our research is grounded in rigorous methodologies and data-driven insights.',
  },
  {
    title: 'Locally-Led',
    description: 'We work with local teams who understand the cultural and contextual nuances.',
  },
  {
    title: 'Technology-Enabled',
    description: 'Leveraging modern tools and platforms for efficient data collection and analysis.',
  },
  {
    title: 'Client-Focused',
    description: 'We tailor our services to meet the specific needs and objectives of each client.',
  },
];

export default function ApproachSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-primary-600 text-sm font-semibold tracking-wide uppercase mb-4 block">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Combining local expertise with global standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {approaches.map((approach) => (
            <div
              key={approach.title}
              className="bg-white p-8 rounded-lg border border-gray-200"
            >
              <CheckCircle2 className="text-primary-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3 text-gray-900">{approach.title}</h3>
              <p className="text-gray-600">{approach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
