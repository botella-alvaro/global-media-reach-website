import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed w-full bg-opacity-90 backdrop-blur-sm z-50 border-b border-gray-800 transition-all duration-300
      ${isScrolled ? 'bg-[#1A1A1A]' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#2D1A45] to-[#0B6EFD] flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="font-poppins font-bold text-xl text-white">Global Media Reach</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink href="#home" onClick={closeMenu}>Home</NavLink>
            <NavLink href="#services" onClick={closeMenu}>What We Do</NavLink>
            <NavLink href="#technology" onClick={closeMenu}>Technology</NavLink>
            <NavLink href="#benefits" onClick={closeMenu}>Benefits</NavLink>
            <NavLink href="#contact" onClick={closeMenu}>Contact</NavLink>
            <Button 
              className="bg-gradient-to-r from-[#FF6B2B] to-[#0B6EFD] hover:shadow-[0_0_15px_rgba(255,107,43,0.6)] transition-all duration-300 hover:-translate-y-0.5 rounded-full"
              onClick={() => {
                closeMenu();
                const auditSection = document.getElementById("audit");
                if (auditSection) {
                  auditSection.scrollIntoView({ behavior: "smooth" });
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
          <nav className="lg:hidden pt-4 pb-2 border-t border-gray-800 mt-3">
            <div className="flex flex-col space-y-4">
              <NavLink href="#home" onClick={closeMenu}>Home</NavLink>
              <NavLink href="#services" onClick={closeMenu}>What We Do</NavLink>
              <NavLink href="#technology" onClick={closeMenu}>Technology</NavLink>
              <NavLink href="#benefits" onClick={closeMenu}>Benefits</NavLink>
              <NavLink href="#contact" onClick={closeMenu}>Contact</NavLink>
              <Button 
                className="bg-gradient-to-r from-[#FF6B2B] to-[#0B6EFD] hover:shadow-[0_0_15px_rgba(255,107,43,0.6)] transition-all duration-300 rounded-full mt-2"
                onClick={() => {
                  closeMenu();
                  const auditSection = document.getElementById("audit");
                  if (auditSection) {
                    auditSection.scrollIntoView({ behavior: "smooth" });
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

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <a 
      href={href} 
      className="relative py-2 text-gray-200 hover:text-white after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-[#FF6B2B] after:to-[#0B6EFD] after:transition-all after:duration-300 hover:after:w-full"
      onClick={(e) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          if (onClick) onClick();
        }
      }}
    >
      {children}
    </a>
  );
}
