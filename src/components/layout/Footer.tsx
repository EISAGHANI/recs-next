import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RECS</h3>
            <p className="text-gray-400">
              Empowering communities across Africa through sustainable development.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Sectors</h4>
            <ul className="space-y-2">
              <li><Link href="/sectors/health" className="text-gray-400 hover:text-white">Health</Link></li>
              <li><Link href="/sectors/education" className="text-gray-400 hover:text-white">Education</Link></li>
              <li><Link href="/sectors/agriculture" className="text-gray-400 hover:text-white">Agriculture</Link></li>
              <li><Link href="/sectors/development" className="text-gray-400 hover:text-white">Development</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Countries</h4>
            <ul className="space-y-2">
              <li><Link href="/countries/zambia" className="text-gray-400 hover:text-white">Zambia</Link></li>
              <li><Link href="/countries/kenya" className="text-gray-400 hover:text-white">Kenya</Link></li>
              <li><Link href="/countries/rwanda" className="text-gray-400 hover:text-white">Rwanda</Link></li>
              <li><Link href="/countries/zimbabwe" className="text-gray-400 hover:text-white">Zimbabwe</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} RECS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
