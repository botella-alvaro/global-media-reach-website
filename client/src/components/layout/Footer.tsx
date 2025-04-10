import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#121212] pt-16 pb-8 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#2D1A45] to-[#0B6EFD] flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="font-poppins font-bold text-xl text-white">Global Media Reach</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your full-stack, boutique digital advertising agency combining cutting-edge technology with a personal touch.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Linkedin size={18} />} href="#" />
              <SocialLink icon={<Twitter size={18} />} href="#" />
              <SocialLink icon={<Instagram size={18} />} href="#" />
            </div>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold text-lg text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <FooterLink href="#">Media Strategy</FooterLink>
              <FooterLink href="#">Media Buying</FooterLink>
              <FooterLink href="#">AdBid Technology</FooterLink>
              <FooterLink href="#">DOOH Advertising</FooterLink>
              <FooterLink href="#">Performance Marketing</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold text-lg text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Case Studies</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold text-lg text-white mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-[#0B6EFD] mt-1 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">123 Tech Avenue, Suite 500<br/>New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-[#0B6EFD] mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-[#0B6EFD] mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">info@globalmediareach.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Global Media Reach. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-500 text-sm hover:text-gray-400">Privacy Policy</Link>
              <Link href="#" className="text-gray-500 text-sm hover:text-gray-400">Terms of Service</Link>
              <Link href="#" className="text-gray-500 text-sm hover:text-gray-400">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <li>
      <a 
        href={href} 
        className="text-gray-400 hover:text-[#0B6EFD] transition-colors duration-300"
      >
        {children}
      </a>
    </li>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <a 
      href={href} 
      className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#0B6EFD] transition-colors"
      aria-label="Social media link"
    >
      {icon}
    </a>
  );
}
