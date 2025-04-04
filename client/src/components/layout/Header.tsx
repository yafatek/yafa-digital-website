import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <div className="font-bold text-2xl font-heading cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-teal-500">
                Yafa Cloud Services
              </div>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              className="text-slate-700 p-1" 
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <div className="flex items-center space-x-6">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Case Studies', path: '/case-studies' },
                { name: 'Blog', path: '/blog' }
              ].map((item) => (
                <Link key={item.path} href={item.path}>
                  <span className={`font-medium tracking-wide cursor-pointer hover:text-indigo-600 transition-colors duration-300 pb-1 ${
                    isActive(item.path) ? 'nav-item-active text-indigo-600' : 'text-slate-700'
                  }`}>
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white font-medium hover:opacity-90 shadow-md hover:shadow-lg transition-all">
                Contact Us
              </Button>
            </Link>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 mt-4 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="flex flex-col space-y-4 bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Case Studies', path: '/case-studies' },
              { name: 'Blog', path: '/blog' },
              { name: 'Contact Us', path: '/contact' }
            ].map((item) => (
              <Link key={item.path} href={item.path}>
                <span 
                  className={`font-medium block transition-colors duration-300 py-2 px-4 rounded-md ${
                    isActive(item.path) 
                      ? 'bg-gradient-to-r from-indigo-600/10 to-teal-500/10 text-indigo-600' 
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
