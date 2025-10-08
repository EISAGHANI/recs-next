import Link from 'next/link';

const services = [
  {
    title: 'Consulting',
    description: 'Strategic guidance for sustainable development initiatives.',
  },
  {
    title: 'Training & Capacity Building',
    description: 'Empowering local teams with skills and knowledge.',
  },
  {
    title: 'Project Management',
    description: 'End-to-end management of development projects.',
  },
  {
    title: 'Research & Analysis',
    description: 'Data-driven insights for informed decision making.',
  },
  {
    title: 'Monitoring & Evaluation',
    description: 'Measuring impact and ensuring accountability.',
  },
  {
    title: 'Partnership Development',
    description: 'Building strong networks for collective impact.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive solutions for sustainable development
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
