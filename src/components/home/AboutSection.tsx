import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary-600 text-sm font-semibold tracking-wide uppercase mb-4 block">
              About M31 Research
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leading Research Firm in Sub-Saharan Africa
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              M31 Research is a Zambia-based research and data collection company with operations 
              across East and Southern Africa.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We deliver evidence-based research, comprehensive data collection, and strategic 
              consulting services to governments, NGOs, and international organizations.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Learn More About Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-primary-600 mb-2">4</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
