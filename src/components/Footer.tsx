import Link from 'next/link';

export interface FooterLink {
  id: string;
  label: string;
  href: string;
}

export interface FooterColumn {
  id: string;
  heading: string;
  links: FooterLink[];
}

export const defaultFooterColumns: FooterColumn[] = [
  {
    id: 'about',
    heading: 'About',
    links: [
      { id: 'our-story', label: 'Our Story', href: '/#pillars' },
      { id: 'team', label: 'Team', href: '/#pillars' },
      { id: 'partners', label: 'Partner With Us', href: '/partner' },
      { id: 'impact', label: 'Impact', href: '/impact' },
    ],
  },
  {
    id: 'connect',
    heading: 'Connect',
    links: [
      { id: 'register', label: 'Register', href: '/#events' },
      { id: 'volunteer', label: 'Volunteer', href: '/action#youth' },
      { id: 'partner-with-us', label: 'Partner with Us', href: '/partner' },
      { id: 'contact', label: 'Contact', href: '/contact' },
    ],
  },
];

export const defaultSocials = [
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/EmpowaYouth/',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    id: 'twitter',
    label: 'Twitter / X',
    href: 'https://x.com/EmpowaYouth',
    path: 'M18.9 2h3.68l-8.04 9.19 9.46 12.5h-7.41l-5.8-7.58-6.64 7.58h-3.68l8.6-9.83-9.07-11.86h7.59l5.24 6.93 6.07-6.93zm-1.29 19.49h2.04l-13.17-17.44h-2.19l13.32 17.44z',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/empowayouth/',
    path: 'M7.5 2h9c3.04 0 5.5 2.46 5.5 5.5v9c0 3.04-2.46 5.5-5.5 5.5h-9c-3.04 0-5.5-2.46-5.5-5.5v-9c0-3.04 2.46-5.5 5.5-5.5zm0 2c-1.93 0-3.5 1.57-3.5 3.5v9c0 1.93 1.57 3.5 3.5 3.5h9c1.93 0 3.5-1.57 3.5-3.5v-9c0-1.93-1.57-3.5-3.5-3.5h-9zm4.5 3.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 2a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5zm5.25-2.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/@empowayouth1198/',
    path: 'M23.5 6.2s-.23-1.65-.95-2.37c-.91-.95-1.93-.96-2.4-1.01-3.35-.24-8.38-.24-8.38-.24h-.01s-5.03 0-8.38.24c-.47.05-1.49.06-2.4 1.01-.72.72-.95 2.37-.95 2.37s-.24 1.94-.24 3.88v1.82c0 1.94.24 3.88.24 3.88s.23 1.65.95 2.37c.91.95 2.11.92 2.65 1.02 1.92.18 8.14.24 8.14.24s5.04-.01 8.39-.25c.47-.05 1.49-.06 2.4-1.01.72-.72.95-2.37.95-2.37s.24-1.94.24-3.88v-1.82c0-1.94-.24-3.88-.24-3.88zm-13.85 8.16v-6.73l6.48 3.38-6.48 3.35z',
  },
];

export function Footer({
  columns = defaultFooterColumns,
  socials = defaultSocials,
  contactEmail = 'info@empowaworx.co.za',
}: {
  columns?: FooterColumn[];
  socials?: typeof defaultSocials;
  contactEmail?: string;
}) {
  return (
    <footer className="ey-footer" aria-labelledby="ey-footer-title">
      <div className="ey-footer-inner">
        <section className="ey-footer-hero" aria-labelledby="ey-footer-title">
          <div className="mb-6 flex justify-center">
            <Link href="/" aria-label="EmpowaYouth Home">
              <img
                src="/logo/empowayouth-logo-2.png"
                alt="EmpowaYouth"
                className="h-16 w-auto object-contain opacity-95 transition-opacity hover:opacity-100"
              />
            </Link>
          </div>
          <h2 id="ey-footer-title" className="ey-footer-display">
            <span>One Movement. Nine Provinces. One </span>
            <span className="ey-heading-italic">Youth</span>
            <span> Economy.</span>
          </h2>
          <div className="ey-footer-accent-rule" aria-hidden="true" />
          <p className="mt-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-[var(--pt-accent)]">
            INSPIRED | CONNECTED | TRANSFORMED
          </p>
          <div className="ey-footer-ctas mt-6">
            <Link
              className="ey-button ey-button-dark-filled"
              href="/action#youth"
              title="for those unemployed, self-employed, or in school"
            >
              <span>I Am Youth</span>
            </Link>
            <Link
              className="ey-button ey-button-dark-outline"
              href="/partner"
              title="for corporate partners"
            >
              <span>Corporate Partners</span>
            </Link>
          </div>
        </section>

        <div className="ey-footer-divider" aria-hidden="true" />

        <div className="ey-footer-grid">
          {/* Column 1: Contact */}
          <address className="not-italic">
            <h3 className="ey-footer-heading">Contact</h3>
            <p className="ey-contact-copy text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)]">
              EMPOWAWORX HOUSE
            </p>
            <p className="ey-contact-copy mt-1 text-xs text-[var(--pt-muted)] leading-relaxed">
              364 Pine Avenue, Ferndale, <br />
              Randburg, 2196
            </p>
            <div className="mt-3 space-y-1 text-xs text-[var(--pt-muted)]">
              <div>
                <a className="transition-colors hover:text-[var(--pt-accent)]" href="tel:+27114827256">
                  +27 (0) 11 482 7256
                </a>
              </div>
              <div>
                <a className="transition-colors hover:text-[var(--pt-accent)]" href="tel:+27114827257">
                  +27 (0) 11 482 7257
                </a>
              </div>
            </div>
            <a className="ey-footer-contact-link block text-xs" href={`mailto:${contactEmail}`}>
              <span>{contactEmail}</span>
            </a>
            <Link
              href="/contact"
              className="ey-footer-link mt-3 inline-block text-xs font-semibold text-[var(--pt-accent)] transition-colors hover:underline"
            >
              <span>Reach Out &rarr;</span>
            </Link>
          </address>

          {/* Columns: About & Connect */}
          {columns.map((column) => (
            <nav key={column.id} aria-label={column.heading}>
              <h3 className="ey-footer-heading">{column.heading}</h3>
              <ul className="ey-footer-link-list">
                {column.links.map((link) => (
                  <li key={link.id}>
                    <Link className="ey-footer-link" href={link.href}>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Column 4: Follow Us */}
          <div className="ey-footer-social-column">
            <h3 className="ey-footer-heading">Follow Us</h3>
            <ul className="ey-social-list">
              {socials.map((social) => (
                <li key={social.id}>
                  <a
                    className="ey-social-link"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d={social.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ey-footer-divider" aria-hidden="true" />
      </div>

      <div className="ey-footer-bottom">
        <p className="ey-footer-copyright">
          <span>&copy; {new Date().getFullYear()} EmpowaYouth. All rights reserved. &bull; INSPIRED | CONNECTED | TRANSFORMED</span>
        </p>
        <div className="ey-footer-legal" aria-label="Legal links">
          <Link href="/privacy">
            <span>Privacy Policy</span>
          </Link>
          <span aria-hidden="true">&bull;</span>
          <Link href="/terms">
            <span>Terms of Service</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
