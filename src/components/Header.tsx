'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavItem {
  label: string;
  href: string;
}

export const defaultNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Offerings', href: '/offerings' },
  { label: 'Impact', href: '/impact' },
  { label: 'Media & Insights', href: '/media' },
  { label: 'Partner With Us', href: '/partner' },
  { label: 'Take Action', href: '/action' },
  { label: 'Contact Us', href: '/contact' },
];

export function Header({ navItems = defaultNavItems }: { navItems?: NavItem[] }) {
  const navRef = useRef<HTMLElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => {
      nav.classList.toggle('ey-nav--top', window.scrollY <= 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const checkIsCurrent = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    if (href === '/action' && (pathname === '/action' || pathname === '/take-action')) {
      return true;
    }
    if (href === '/partner' && (pathname === '/partner' || pathname === '/partners' || pathname === '/partner-with-us')) {
      return true;
    }
    if (href.startsWith('/') && !href.includes('#')) {
      return pathname === href || pathname.startsWith(href + '/');
    }
    return false;
  };

  return (
    <nav
      ref={navRef}
      className={`ey-nav${isMobileMenuOpen ? ' ey-nav--open' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="ey-nav-inner">
        <Link href="/" className="ey-nav-logo" aria-label="EmpowaYouth Home">
          <img
            src="/logo/empowayouth-logo-2.png"
            alt="EmpowaYouth"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul id="ey-mobile-navigation" className="ey-nav-links" role="list">
          {navItems.map((item) => {
            const isCta = item.label === 'Take Action';
            const isCurrent = checkIsCurrent(item.href);
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`ey-nav-link${isCta ? ' ey-nav-link--cta' : ''}${isCurrent ? ' ey-nav-link--active' : ''}`}
                  aria-current={isCurrent ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="ey-nav-toggle"
          type="button"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="ey-mobile-navigation"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer links */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-white/10 px-6 py-4 flex flex-col gap-3">
          {navItems.map((item) => {
            const isCta = item.label === 'Take Action';
            const isCurrent = checkIsCurrent(item.href);
            return (
              <Link
                key={`mobile-${item.label}`}
                href={item.href}
                className={`py-2 text-base transition-colors ${
                  isCta
                    ? 'inline-flex items-center justify-center px-4 py-2.5 rounded-md bg-[var(--pt-accent)] text-white font-semibold'
                    : isCurrent
                    ? 'text-white font-bold border-l-2 border-[var(--pt-accent)] pl-2'
                    : 'text-slate-300 hover:text-white pl-2'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}

export default Header;
