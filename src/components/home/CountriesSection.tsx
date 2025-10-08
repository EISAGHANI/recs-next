import Link from 'next/link';

const countries = [
  {
    name: 'Zambia',
    href: '/countries/zambia',
    flag: '🇿🇲',
    projects: 25,
  },
  {
    name: 'Kenya',
    href: '/countries/kenya',
    flag: '🇰🇪',
    projects: 18,
  },
  {
    name: 'Rwanda',
    href: '/countries/rwanda',
    flag: '🇷🇼',
    projects: 15,
  },
  {
    name: 'Zimbabwe',
    href: '/countries/zimbabwe',
    flag: '🇿🇼',
    projects: 12,
  },
];

export default function CountriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-primary-600 text-sm font-semibold tracking-wide uppercase mb-4 block">
            Countries
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Where We Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Making a difference across East and Southern Africa
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country) => (
            <Link
              key={country.name}
              href={country.href}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-primary-500 hover:shadow-md transition-all group"
            >
              <div className="text-5xl mb-4 text-center">{country.flag}</div>
              <h3 className="text-xl font-bold mb-2 text-center text-gray-900 group-hover:text-primary-600 transition">
                {country.name}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {country.projects} Active Projects
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
