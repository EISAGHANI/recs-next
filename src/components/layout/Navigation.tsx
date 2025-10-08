'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

interface NavigationProps {
  isScrolled?: boolean;
  isMobile?: boolean;
  onClose?: () => void;
}

export default function Navigation({ isScrolled = false, isMobile = false, onClose }: NavigationProps) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleLinkClick = () => {
    if (onClose) onClose();
  };

  const linkClass = (href: string) => {
    const isActive = pathname === href;
    return `block px-4 py-2 rounded-lg transition-colors ${
      isActive
        ? 'text-blue-600 font-semibold'
        : 'text-gray-700 hover:text-blue-600'
    }`;
  };

  const dropdownItems = [
    {
      label: 'Sectors',
      children: [
        { href: '/sectors/health', label: 'Health' },
        { href: '/sectors/education', label: 'Education' },
        { href: '/sectors/agriculture', label: 'Agriculture' },
        { href: '/sectors/development', label: 'Development' },
      ]
    },
    {
      label: 'Countries',
      children: [
        { href: '/countries/zambia', label: 'Zambia' },
        { href: '/countries/kenya', label: 'Kenya' },
        { href: '/countries/rwanda', label: 'Rwanda' },
        { href: '/countries/zimbabwe', label: 'Zimbabwe' },
      ]
    }
  ];

  if (isMobile) {
    return (
      <nav className="flex flex-col space-y-2">
        <Link href="/about" onClick={handleLinkClick} className={linkClass('/about')}>
          About
        </Link>
        <Link href="/services" onClick={handleLinkClick} className={linkClass('/services')}>
          Services
        </Link>
        {dropdownItems.map((dropdown) => (
          <div key={dropdown.label}>
            <button
              onClick={() => setOpenDropdown(openDropdown === dropdown.label ? null : dropdown.label)}
              className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <span>{dropdown.label}</span>
              <ChevronDown 
                size={16} 
                className={`transition-transform ${openDropdown === dropdown.label ? 'rotate-180' : ''}`}
              />
            </button>
            {openDropdown === dropdown.label && (
              <div className="ml-4 space-y-2">
                {dropdown.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={handleLinkClick}
                    className={linkClass(child.href)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link href="/careers" onClick={handleLinkClick} className={linkClass('/careers')}>
          Careers
        </Link>
        <Link href="/contact" onClick={handleLinkClick} className={linkClass('/contact')}>
          Contact
        </Link>
      </nav>
    );
  }

  return (
    <nav className="flex items-center">
      <ul className="flex space-x-8">
        <li>
          <Link href="/about" className={linkClass('/about')}>
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className={linkClass('/services')}>
            Services
          </Link>
        </li>
        {dropdownItems.map((dropdown) => (
          <li key={dropdown.label} className="relative group">
            <button className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1">
              <span>{dropdown.label}</span>
              <ChevronDown size={16} />
            </button>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 mt-2 w-48 z-50">
              {dropdown.children.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
        <li>
          <Link href="/careers" className={linkClass('/careers')}>
            Careers
          </Link>
        </li>
        <li>
          <Link href="/contact" className={linkClass('/contact')}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
