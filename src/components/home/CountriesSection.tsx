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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Where We Work</h2>
          <p className="text-xl text-gray-600">
            Making a difference across East and Southern Africa
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country) => (
            <Link
              key={country.name}
              href={country.href}
              className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-blue-500 hover:shadow-lg transition group"
            >
              <div className="text-6xl mb-4 text-center">{country.flag}</div>
              <h3 className="text-2xl font-semibold mb-2 text-center group-hover:text-blue-600 transition">
                {country.name}
              </h3>
              <p className="text-gray-600 text-center">
                {country.projects} Active Projects
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
