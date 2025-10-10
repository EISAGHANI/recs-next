import Link from 'next/link';
import Image from 'next/image';

const publications = [
  {
    id: 1,
    date: 'Jan 2025',
    month: 'Jan',
    year: '2025',
    location: 'Zambia',
    title: 'Language Considerations for Research Projects in Zambia',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
    slug: 'language-considerations-zambia',
  },
  {
    id: 2,
    date: 'Nov 2024',
    month: 'Nov',
    year: '2024',
    location: 'Zambia',
    title: 'Obtaining Ethical Approval for Research Projects in Zambia',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    slug: 'ethical-approval-zambia',
  },
  {
    id: 3,
    date: 'Sep 2024',
    month: 'Sep',
    year: '2024',
    location: 'Zambia',
    title: 'Best Practices for Large-Scale Quantitative Data Collection in Rural Zambia',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
    slug: 'data-collection-rural-zambia',
  },
  {
    id: 4,
    date: 'Aug 2024',
    month: 'Aug',
    year: '2024',
    location: 'Zambia',
    title: 'Challenges of Conducting Programme Evaluations in Zambia',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&q=80',
    slug: 'programme-evaluations-zambia',
  },
];

export default function PublicationsSection() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decorative dots */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary-600 rounded-full"></div>
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary-600 rounded-full"></div>
        <div className="absolute top-40 left-32 w-2 h-2 bg-primary-600 rounded-full"></div>
        <div className="absolute bottom-20 left-16 w-2 h-2 bg-primary-600 rounded-full"></div>
        <div className="absolute bottom-40 left-40 w-2 h-2 bg-primary-600 rounded-full"></div>
        <div className="absolute top-32 right-20 w-2 h-2 bg-primary-600 rounded-full"></div>
        <div className="absolute top-48 right-32 w-2 h-2 bg-primary-600 rounded-full"></div>
        <div className="absolute bottom-32 right-24 w-2 h-2 bg-primary-600 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        {/* Section Header */}
        <div className="mb-12">
          <div className="mb-4">
            <h3 className="text-primary-600 text-2xl font-normal italic inline-block relative">
              Publications
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"></span>
            </h3>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Stories, Insights, and Reports
          </h2>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {publications.map((pub) => (
            <Link
              key={pub.id}
              href={`/blog/${pub.slug}`}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-80 bg-gray-200">
                <Image
                  src={pub.image}
                  alt={pub.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>

                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-primary-600 text-white rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-lg">
                  <span className="text-xs font-semibold">{pub.month}</span>
                  <span className="text-lg font-bold">{pub.year}</span>
                </div>

                {/* Location Badge */}
                <div className="absolute top-4 right-4 bg-primary-600/90 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <span className="text-white">📍</span>
                  {pub.location}
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-bold mb-3 leading-tight">
                    {pub.title}
                  </h3>
                  <button className="text-white text-sm font-semibold border-2 border-white px-4 py-2 rounded-full hover:bg-white hover:text-primary-600 transition-all">
                    MORE DETAILS
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* All Publications Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block px-8 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-full hover:bg-primary-600 hover:text-white transition-all uppercase tracking-wide"
          >
            ALL PUBLICATIONS
          </Link>
        </div>
      </div>
    </section>
  );
}
