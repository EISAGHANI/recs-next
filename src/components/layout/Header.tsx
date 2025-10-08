'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Facebook, Linkedin, Youtube } from 'lucide-react';

/**
 * Header Component
 * Main header with logo, navigation, and mobile menu
 * Features: Sticky header, social icons, CTA button
 */
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/data-collection', label: 'Data Collection' },
    { href: '/evaluation', label: 'Evaluation' },
    { href: '/technical-assistance', label: 'Technical Assistance' },
    { href: '/implementation', label: 'Implementation' },
    { href: '/our-work', label: 'Our Work' },
    { href: '/company', label: 'Company' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-primary-600">
              M31
            </div>
            <div className="text-xl text-gray-700 ml-1">research</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side: Social Icons + CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Social Icons */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2 border-2 border-gray-900 text-gray-900 text-sm font-semibold rounded-full hover:bg-gray-900 hover:text-white transition-all"
            >
              WORK WITH US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-900"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-600'
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Social Icons */}
              <div className="flex items-center space-x-4 px-4 pt-4 border-t border-gray-200">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600"
                >
                  <Youtube size={20} />
                </a>
              </div>

              {/* Mobile CTA Button */}
              <div className="px-4 pt-2">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-2 border-2 border-gray-900 text-gray-900 text-sm font-semibold rounded-full hover:bg-gray-900 hover:text-white transition-all"
                >
                  WORK WITH US
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
