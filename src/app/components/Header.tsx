'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '#home') {
      return pathname === '/';
    }
    if (path === '/sustainability') {
      return pathname === '/sustainability';
    }
    if (path === '/careers') {
      return pathname === '/careers';
    }
    if (path === '/news') {
      return pathname === '/news';
    }
    if (path === '#businesses') {
      return pathname === '/' || pathname.startsWith('/businesses');
    }
    return false;
  };

  const getLinkClass = (path: string) => {
    const baseClass = "font-medium transition-colors";
    const activeClass = "text-blue-900";
    const inactiveClass = "text-gray-700 hover:text-blue-900";
    
    return `${baseClass} ${isActive(path) ? activeClass : inactiveClass}`;
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-900">
              Aviana
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={getLinkClass('#home')}>
              Home
            </Link>
            <Link href="/#about" className={getLinkClass('#about')}>
              About
            </Link>
            <Link href="/#sectors" className={getLinkClass('#sectors')}>
              Sectors
            </Link>
            <Link href="/#businesses" className={getLinkClass('#businesses')}>
              Our Businesses
            </Link>
            <Link href="/sustainability" className={getLinkClass('/sustainability')}>
              Sustainability
            </Link>
            <Link href="/careers" className={getLinkClass('/careers')}>
              Careers
            </Link>
            <Link href="/news" className={getLinkClass('/news')}>
              News & Insights
            </Link>
            <Link href="/#contact" className={getLinkClass('#contact')}>
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className={getLinkClass('#home')} onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/#about" className={getLinkClass('#about')} onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/#sectors" className={getLinkClass('#sectors')} onClick={() => setIsMenuOpen(false)}>
                Sectors
              </Link>
              <Link href="/#businesses" className={getLinkClass('#businesses')} onClick={() => setIsMenuOpen(false)}>
                Our Businesses
              </Link>
              <Link href="/sustainability" className={getLinkClass('/sustainability')} onClick={() => setIsMenuOpen(false)}>
                Sustainability
              </Link>
              <Link href="/careers" className={getLinkClass('/careers')} onClick={() => setIsMenuOpen(false)}>
                Careers
              </Link>
              <Link href="/news" className={getLinkClass('/news')} onClick={() => setIsMenuOpen(false)}>
                News & Insights
              </Link>
              <Link href="/#contact" className={getLinkClass('#contact')} onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}