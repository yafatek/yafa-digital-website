import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <div className="text-[#003366] font-bold text-2xl font-heading cursor-pointer">
                <span className="text-[#2E8B57]">Yafa</span> Cloud Services
              </div>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              className="text-[#003366] p-1" 
              onClick={toggleMobileMenu}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/">
              <a className={`font-heading font-medium text-[#003366] hover:text-[#2E8B57] transition-colors duration-300 ${isActive('/') ? 'nav-item-active' : ''}`}>
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className={`font-heading font-medium text-[#003366] hover:text-[#2E8B57] transition-colors duration-300 ${isActive('/about') ? 'nav-item-active' : ''}`}>
                About Us
              </a>
            </Link>
            <Link href="/services">
              <a className={`font-heading font-medium text-[#003366] hover:text-[#2E8B57] transition-colors duration-300 ${isActive('/services') ? 'nav-item-active' : ''}`}>
                Services
              </a>
            </Link>
            <Link href="/case-studies">
              <a className={`font-heading font-medium text-[#003366] hover:text-[#2E8B57] transition-colors duration-300 ${isActive('/case-studies') ? 'nav-item-active' : ''}`}>
                Case Studies
              </a>
            </Link>
            <Link href="/blog">
              <a className={`font-heading font-medium text-[#003366] hover:text-[#2E8B57] transition-colors duration-300 ${isActive('/blog') ? 'nav-item-active' : ''}`}>
                Blog
              </a>
            </Link>
            <Link href="/contact">
              <Button className="bg-[#2E8B57] text-white font-heading font-medium hover:bg-opacity-90">
                Contact Us
              </Button>
            </Link>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
          <div className="flex flex-col space-y-4">
            <Link href="/">
              <a 
                className={`font-heading font-medium text-[#003366] hover:text-[#2E8B57] transition-colors duration-300 py-2 px-4 ${
                  isActive('/') ? 'border-l-4 border-[#2E8B57]' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
            </Link>
            <Link href="/about">
              <a 
                className={`font-heading font-medium text-[#003366] hover:text-[#2E8B57] transition-colors duration-300 py-2 px-4 ${
                  isActive('/about') ? 'border-l-4 border-[#2E8B57]' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
            </Link>
            <Link href="/services">
              <a 
                className={`font-heading font-medium text-[#003366] hover:text-[#2E8B57] transition-colors duration-300 py-2 px-4 ${
                  isActive('/services') ? 'border-l-4 border-[#2E8B57]' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
            </Link>
            <Link href="/case-studies">
              <a 
                className={`font-heading font-medium text-[#003366] hover:text-[#2E8B57] transition-colors duration-300 py-2 px-4 ${
                  isActive('/case-studies') ? 'border-l-4 border-[#2E8B57]' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Case Studies
              </a>
            </Link>
            <Link href="/blog">
              <a 
                className={`font-heading font-medium text-[#003366] hover:text-[#2E8B57] transition-colors duration-300 py-2 px-4 ${
                  isActive('/blog') ? 'border-l-4 border-[#2E8B57]' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </a>
            </Link>
            <Link href="/contact">
              <a 
                className={`font-heading font-medium text-[#003366] hover:text-[#2E8B57] transition-colors duration-300 py-2 px-4 ${
                  isActive('/contact') ? 'border-l-4 border-[#2E8B57]' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
