import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gradients from '@/lib/gradients';

const NAV_LINKS = [
  { href: '#home',       label: 'Home' },
  { href: '#services',   label: 'What We Do' },
  { href: '#technology', label: 'Technology' },
  { href: '#benefits',   label: 'Benefits' },
  { href: '#contact',    label: 'Contact' },
];

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}

function NavLink({ href, children, onClick, active = false }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative font-medium transition-colors duration-300 px-1 py-1 text-sm ${
        active ? 'text-white' : 'text-gray-400 hover:text-white'
      }`}
    >
      {children}
      {active && (
        <motion.span
          layoutId="nav-underline"
          className="absolute bottom-0 left-0 w-full h-0.5 rounded-full"
          style={{ background: gradients.primary }}
        />
      )}
    </a>
  );
}

export default function Header() {
  const [isOpen, setIsOpen]       = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'services', 'technology', 'benefits', 'contact'];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  function scrollToAudit() {
    closeMenu();
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d0d0d]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-gray-800/60'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group" onClick={closeMenu}>
            <img
              src="/images/logo.png"
              alt="Global Media Reach"
              className="h-9 w-auto object-contain"
              onError={(e) => {
                // Fallback to gradient circle if image fails to load
                const img = e.currentTarget;
                img.style.display = 'none';
                const fallback = img.nextElementSibling as HTMLElement | null;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback shown only if img fails */}
            <div
              className="hidden w-9 h-9 rounded-full bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-white font-bold text-base">G</span>
            </div>
            <span className="font-bold text-lg md:text-xl text-white group-hover:text-gray-200 transition-colors duration-200">
              Global Media Reach
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {NAV_LINKS.map(({ href, label }) => (
              <NavLink
                key={href}
                href={href}
                onClick={closeMenu}
                active={activeSection === href.slice(1)}
              >
                {label}
              </NavLink>
            ))}

            <Button
              className="bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] hover:shadow-[0_0_20px_rgba(240,90,40,0.5)] transition-all duration-300 hover:-translate-y-0.5 rounded-full text-sm px-5 py-2 h-auto"
              style={{ background: gradients.primary }}
              onClick={scrollToAudit}
            >
              Free Audit
            </Button>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white focus:outline-none p-1 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen((o) => !o)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation — animated slide */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              key="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-5 pb-3 border-t border-gray-800/60 mt-4 flex flex-col space-y-4">
                {NAV_LINKS.map(({ href, label }, i) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink href={href} onClick={closeMenu} active={activeSection === href.slice(1)}>
                      {label}
                    </NavLink>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.05 }}
                >
                  <Button
                    className="w-full justify-center rounded-full text-sm h-auto py-3 hover:shadow-[0_0_20px_rgba(240,90,40,0.4)] transition-all duration-300"
                    style={{ background: gradients.primary }}
                    onClick={scrollToAudit}
                  >
                    Free Audit
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
