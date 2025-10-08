const stats = [
  {
    number: '70+',
    label: 'Projects Completed',
  },
  {
    number: '4',
    label: 'Countries',
  },
  {
    number: '500K+',
    label: 'Lives Impacted',
  },
  {
    number: '15+',
    label: 'Years of Experience',
  },
];

export default function ImpactSection() {
  return (
    <section className="py-20 bg-primary-600 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-lg text-primary-100">
            Creating meaningful change across Africa
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-base text-primary-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
