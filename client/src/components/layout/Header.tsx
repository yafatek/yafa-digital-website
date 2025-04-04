import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Services', 
    path: '/services',
    submenu: [
      { name: 'Cloud Infrastructure', path: '/services#cloud' },
      { name: 'E-Commerce Solutions', path: '/services#ecommerce' },
      { name: 'Business Intelligence', path: '/services#analytics' },
      { name: 'Enterprise Security', path: '/services#security' }
    ]
  },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Blog', path: '/blog' }
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [location] = useLocation();
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (activeSubmenu) {
        const dropdown = dropdownRefs.current[activeSubmenu];
        if (dropdown && !dropdown.contains(event.target as Node)) {
          setActiveSubmenu(null);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeSubmenu]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubmenu = (name: string) => {
    if (activeSubmenu === name) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(name);
    }
  };

  const isActive = (path: string) => {
    return location === path || location.startsWith(path + '/');
  };

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:block bg-neutral-800 text-white py-2">
        <div className="container flex justify-between items-center">
          <div className="text-sm flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center hover:text-neutral-300 transition-colors">
              <Phone className="h-3.5 w-3.5 mr-1.5" />
              <span>(123) 456-7890</span>
            </a>
            <a href="mailto:info@yafacloud.com" className="flex items-center hover:text-neutral-300 transition-colors">
              <Mail className="h-3.5 w-3.5 mr-1.5" />
              <span>info@yafacloud.com</span>
            </a>
          </div>
          <div className="text-sm">
            <span className="text-neutral-400 mr-3">Working Hours:</span>
            <span>Monday - Friday: 9:00 AM - 6:00 PM EST</span>
          </div>
        </div>
      </div>
    
      {/* Main header */}
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md py-3' 
            : 'bg-white py-5'
        }`}
      >
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <span className="font-bold text-2xl cursor-pointer text-neutral-900">
                <span className="text-primary">Yafa</span> Cloud Services
              </span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button 
              variant="ghost" 
              className="text-neutral-700" 
              onClick={toggleMobileMenu}
              size="sm"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {/* Main navigation items */}
            <div className="flex items-center">
              {navigation.map((item) => (
                <div 
                  key={item.name}
                  className="relative"
                  ref={el => dropdownRefs.current[item.name] = el}
                >
                  {item.submenu ? (
                    <div>
                      <button 
                        className={`nav-item px-4 py-2 flex items-center ${
                          isActive(item.path) || activeSubmenu === item.name ? 'text-primary' : ''
                        }`}
                        onClick={() => toggleSubmenu(item.name)}
                      >
                        {item.name}
                        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                          activeSubmenu === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Dropdown */}
                      {activeSubmenu === item.name && (
                        <div className="absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-neutral-200 overflow-hidden z-20">
                          <div className="py-1">
                            {item.submenu.map((subitem) => (
                              <Link key={subitem.path} href={subitem.path}>
                                <span 
                                  className="block px-4 py-2 text-neutral-700 hover:bg-neutral-50 hover:text-primary transition-colors cursor-pointer text-sm"
                                  onClick={() => setActiveSubmenu(null)}
                                >
                                  {subitem.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={item.path}>
                      <span className={`nav-item px-4 py-2 block ${
                        isActive(item.path) ? 'text-primary after:bg-primary' : ''
                      }`}>
                        {item.name}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            {/* CTA button */}
            <Link href="/contact">
              <Button 
                className="bg-primary text-white font-medium hover:bg-primary/90 transition-all ml-4"
                size="sm"
              >
                Contact Us
              </Button>
            </Link>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={`md:hidden absolute left-0 right-0 bg-white border-b border-neutral-200 shadow-md transition-all duration-300 z-40 ${
            isMobileMenuOpen ? 'max-h-[70vh] opacity-100' : 'max-h-0 opacity-0 overflow-hidden pointer-events-none'
          }`}
        >
          <div className="container py-4 overflow-y-auto max-h-[70vh]">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.submenu ? (
                    <div>
                      <button 
                        className={`w-full text-left px-3 py-2.5 rounded-md flex items-center justify-between ${
                          isActive(item.path) || activeSubmenu === item.name 
                            ? 'bg-primary/5 text-primary font-medium' 
                            : 'text-neutral-800 hover:bg-neutral-50'
                        }`}
                        onClick={() => toggleSubmenu(item.name)}
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transition-transform ${
                          activeSubmenu === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Mobile submenu */}
                      <div className={`pl-4 mt-1 mb-1 overflow-hidden transition-all duration-200 ${
                        activeSubmenu === item.name ? 'max-h-60' : 'max-h-0'
                      }`}>
                        {item.submenu.map((subitem) => (
                          <Link key={subitem.path} href={subitem.path}>
                            <span 
                              className="block px-3 py-2 text-neutral-700 hover:text-primary rounded-md text-sm transition-colors cursor-pointer"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subitem.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={item.path}>
                      <span 
                        className={`block px-3 py-2.5 rounded-md ${
                          isActive(item.path) 
                            ? 'bg-primary/5 text-primary font-medium' 
                            : 'text-neutral-800 hover:bg-neutral-50'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile contact info */}
              <div className="pt-4 mt-4 border-t border-neutral-200">
                <div className="space-y-3">
                  <a href="tel:+1234567890" className="flex items-center text-neutral-700 hover:text-primary">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>(123) 456-7890</span>
                  </a>
                  <a href="mailto:info@yafacloud.com" className="flex items-center text-neutral-700 hover:text-primary">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>info@yafacloud.com</span>
                  </a>
                </div>
                <div className="mt-5">
                  <Link href="/contact">
                    <Button className="w-full bg-primary text-white">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
