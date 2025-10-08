const partners = [
  { name: 'WHO' },
  { name: 'UNICEF' },
  { name: 'World Bank' },
  { name: 'USAID' },
  { name: 'DFID' },
  { name: 'Gates Foundation' },
];

export default function PartnersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-primary-600 text-sm font-semibold tracking-wide uppercase mb-4 block">
            Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Trusted By Leading Organizations
          </h2>
          <p className="text-lg text-gray-600">
            We work with governments, NGOs, and international organizations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center h-20 bg-gray-50 rounded-lg border border-gray-200 px-4"
            >
              <p className="text-gray-400 font-medium text-sm">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
