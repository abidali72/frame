import { useState, useEffect } from 'react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Labs', href: '#labs' },
    { label: 'Studio', href: '#studio' },
    { label: 'Openings', href: '#openings' },
    { label: 'Shop', href: '#shop' },
  ];

  return (
    <>
      <header
        id="navbar-header"
        className="fixed top-0 left-0 right-0 z-10 w-full px-5 sm:px-8 py-4 sm:py-5 flex justify-between items-center"
      >
        {/* Logo */}
        <a
          id="navbar-logo-link"
          href="#"
          className="flex items-center gap-3 text-white select-none group"
          aria-label="Mainframe Homepage"
        >
          <span
            id="navbar-logo-text"
            className="text-[21px] sm:text-[26px] tracking-tight font-medium"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Mainframe®
          </span>
          <span
            id="navbar-logo-asterisk"
            aria-hidden="true"
            className="text-[25px] sm:text-[30px] leading-none select-none"
            style={{ letterSpacing: '-0.02em' }}
          >
            ✳︎
          </span>
        </a>

        {/* Desktop Nav Links (hidden below md) */}
        <nav
          id="navbar-desktop-nav"
          aria-label="Desktop Navigation"
          className="hidden md:flex items-center text-[23px] text-white"
        >
          {navLinks.map((link, index) => (
            <span key={link.label} className="inline-flex items-center">
              <a
                href={link.href}
                className="hover:opacity-60 transition-opacity"
              >
                {link.label}
              </a>
              {index < navLinks.length - 1 && <span className="mr-2">,</span>}
            </span>
          ))}
        </nav>

        {/* Desktop CTA (hidden below md) */}
        <div id="navbar-desktop-cta-container" className="hidden md:block">
          <a
            id="navbar-desktop-cta"
            href="#contact"
            className="text-[23px] text-white underline underline-offset-2 hover:opacity-60 transition-opacity"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Hamburger Button (visible below md) */}
        <button
          id="navbar-mobile-hamburger"
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden relative z-20 flex flex-col justify-center items-center w-8 h-8 gap-[5px] focus:outline-none cursor-pointer"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 origin-center ${
              mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 origin-center ${
              mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="navbar-mobile-overlay"
        className={`md:hidden fixed inset-0 z-[9] bg-black/90 backdrop-blur-md flex flex-col justify-center items-start px-8 gap-8 transition-opacity duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav
          id="navbar-mobile-nav"
          aria-label="Mobile Navigation"
          className="flex flex-col gap-8 w-full"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[32px] font-medium text-white hover:opacity-70 transition-opacity"
            >
              {link.label}
            </a>
          ))}
          <a
            id="navbar-mobile-cta"
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[32px] font-medium text-white underline underline-offset-4 hover:opacity-70 transition-opacity mt-2"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </>
  );
}
