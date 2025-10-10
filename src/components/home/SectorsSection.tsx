import Link from 'next/link';
import { Download } from 'lucide-react';

const sectors = [
  {
    id: 1,
    number: '1',
    icon: '❤️',
    category: 'Health',
    title: 'Health and Nutrition',
    color: 'bg-red-500',
  },
  {
    id: 2,
    number: '2',
    icon: '🎓',
    category: 'Education',
    title: 'Education and Learning',
    color: 'bg-yellow-400',
  },
  {
    id: 3,
    number: '3',
    icon: '🌾',
    category: 'Agriculture',
    title: 'Agriculture and Food Systems',
    color: 'bg-green-500',
  },
  {
    id: 4,
    number: '4',
    icon: '🌍',
    category: 'Multi-Sector',
    title: 'Socio-Economic Development',
    color: 'bg-blue-500',
  },
];

export default function SectorsSection() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decorative dots */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-2 h-2 bg-primary-600 rounded-full"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-primary-600 rounded-full"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-primary-600 rounded-full"></div>
        <div className="absolute bottom-20 right-16 w-2 h-2 bg-primary-600 rounded-full"></div>
        <div className="absolute bottom-40 right-40 w-2 h-2 bg-primary-600 rounded-full"></div>
        <div className="absolute top-32 left-20 w-2 h-2 bg-primary-600 rounded-full"></div>
        <div className="absolute top-48 left-32 w-2 h-2 bg-primary-600 rounded-full"></div>
        <div className="absolute bottom-32 left-24 w-2 h-2 bg-primary-600 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="lg:pr-8">
            {/* Work Categories heading */}
            <div className="mb-6">
              <h3 className="text-primary-600 text-2xl font-normal italic inline-block relative">
                Work Categories
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"></span>
              </h3>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our Sectors
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our work is structured into four key categories: Health, Education, Agriculture, 
              and Development. Across Zambia, Kenya, Rwanda, and Zimbabwe, RECS Research delivers 
              data, research, and insights tailored to address critical challenges and drive 
              sustainable impact in each of these focus areas. Our data collection service, however, 
              spans many more sectors.
            </p>

            {/* Download Button */}
            <Link
              href="/company-profile.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-full hover:bg-primary-600 hover:text-white transition-all"
            >
              <Download size={20} />
              Download our Company Profile
            </Link>
          </div>

          {/* Right Grid - Sectors Cards */}
          <div className="grid grid-cols-2 gap-6">
            {sectors.map((sector) => (
              <div
                key={sector.id}
                className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-primary-500 hover:shadow-lg transition-all group cursor-pointer"
              >
                {/* Large background number */}
                <div className="absolute top-4 right-4 text-8xl font-bold text-gray-100 group-hover:text-primary-50 transition-colors">
                  {sector.number}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon circle */}
                  <div className={`w-16 h-16 ${sector.color} rounded-full flex items-center justify-center text-3xl mb-4 shadow-lg`}>
                    {sector.icon}
                  </div>

                  {/* Category */}
                  <p className="text-sm text-gray-600 mb-2">{sector.category}</p>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {sector.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
