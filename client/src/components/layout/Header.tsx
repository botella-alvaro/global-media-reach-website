import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gradients from '@/lib/gradients';

// Logo path (relative to assets directory)
const logoPath = "/assets/Copy of Global Media Reach Logo.png";

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
      className={`relative font-medium transition-colors duration-300 px-1 py-1 ${
        active 
          ? 'text-white' 
          : 'text-gray-300 hover:text-white'
      }`}
    >
      {children}
      {active && (
        <span 
          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#F05A28] to-[#8E2DE2]"
          style={{ 
            background: gradients.primary
          }}
        />
      )}
    </a>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll state for header background
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Determine which section is currently in view
      const sections = ['home', 'services', 'technology', 'benefits', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#111111] bg-opacity-95 backdrop-blur-sm shadow-lg border-b border-gray-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center group">
              <img 
                src={logoPath} 
                alt="Global Media Reach Logo" 
                className="h-11 mr-3 transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-bold text-xl md:text-2xl text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text" 
                style={{ 
                  backgroundImage: gradients.primary,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent' 
                }}>
                Global Media Reach
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink href="#home" onClick={closeMenu} active={activeSection === 'home'}>
              Home
            </NavLink>
            <NavLink href="#services" onClick={closeMenu} active={activeSection === 'services'}>
              What We Do
            </NavLink>
            <NavLink href="#technology" onClick={closeMenu} active={activeSection === 'technology'}>
              Technology
            </NavLink>
            <NavLink href="#benefits" onClick={closeMenu} active={activeSection === 'benefits'}>
              Benefits
            </NavLink>
            <NavLink href="#contact" onClick={closeMenu} active={activeSection === 'contact'}>
              Contact
            </NavLink>
            
            <Button
              className="bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] hover:shadow-[0_0_15px_rgba(240,90,40,0.6)] transition-all duration-300 hover:-translate-y-0.5 rounded-full"
              style={{ 
                background: gradients.primary 
              }}
              onClick={() => {
                closeMenu();
                const auditSection = document.getElementById('audit');
                if (auditSection) {
                  auditSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Free Audit
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pt-5 pb-3 border-t border-gray-800 mt-4">
            <div className="flex flex-col space-y-5">
              <NavLink href="#home" onClick={closeMenu} active={activeSection === 'home'}>
                Home
              </NavLink>
              <NavLink href="#services" onClick={closeMenu} active={activeSection === 'services'}>
                What We Do
              </NavLink>
              <NavLink href="#technology" onClick={closeMenu} active={activeSection === 'technology'}>
                Technology
              </NavLink>
              <NavLink href="#benefits" onClick={closeMenu} active={activeSection === 'benefits'}>
                Benefits
              </NavLink>
              <NavLink href="#contact" onClick={closeMenu} active={activeSection === 'contact'}>
                Contact
              </NavLink>
              
              <Button
                className="bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] hover:shadow-[0_0_15px_rgba(240,90,40,0.6)] transition-all duration-300 w-full justify-center rounded-full"
                style={{ 
                  background: gradients.primary 
                }}
                onClick={() => {
                  closeMenu();
                  const auditSection = document.getElementById('audit');
                  if (auditSection) {
                    auditSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Free Audit
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}