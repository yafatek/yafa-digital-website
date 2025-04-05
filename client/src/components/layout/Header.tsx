import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useRoute } from 'wouter';
import { Menu, X, ChevronDown, Search, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import yafaLogoDark from '../../assets/yafa-logo-dark.png';
import yafaLogoLight from '../../assets/yafa-logo-light.png';
import { Input } from '@/components/ui/input';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Services', 
    path: '/services',
    submenu: [
      { name: 'Cloud Infrastructure', path: '/services#cloud' },
      { name: 'AI Solutions', path: '/ai-solutions' },
      { name: 'E-Commerce Solutions', path: '/services#ecommerce' },
      { name: 'Digital Marketing', path: '/services#marketing' },
      { name: 'Enterprise Security', path: '/services#security' }
    ]
  },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' }
];

// Searchable content structure
const searchableContent = [
  { title: 'AWS Cloud Infrastructure', path: '/services#cloud', category: 'Service' },
  { title: 'AI Solutions and Chatbots', path: '/ai-solutions', category: 'Service' },
  { title: 'E-Commerce Solutions', path: '/services#ecommerce', category: 'Service' },
  { title: 'Digital Marketing', path: '/services#marketing', category: 'Service' },
  { title: 'Cybersecurity Services', path: '/services#security', category: 'Service' },
  { title: 'Enterprise E-commerce Platform Migration', path: '/case-studies#retailplus', category: 'Case Study' },
  { title: 'Multilingual AI Chatbot Implementation', path: '/case-studies#servicenow', category: 'Case Study' },
  { title: 'Enterprise-Grade Security Infrastructure', path: '/case-studies#finsecure', category: 'Case Study' },
  { title: 'About YAFA Cloud Services', path: '/about', category: 'Page' },
  { title: 'Pricing Plans', path: '/pricing', category: 'Page' },
  { title: 'Contact Us', path: '/contact', category: 'Page' },
  { title: 'Blog & Insights', path: '/blog', category: 'Page' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof searchableContent>([]);
  const [location, navigate] = useLocation();
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchOverlayRef = useRef<HTMLDivElement>(null);

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

      // Close search when clicking outside
      if (isSearchOpen && searchOverlayRef.current && !searchOverlayRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Close search on Escape key
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
      
      // Open search on Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSubmenu, isSearchOpen]);

  // Focus the search input when the search overlay opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isSearchOpen]);

  // Filter search results based on query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = searchableContent.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.category.toLowerCase().includes(query)
    );
    setSearchResults(results);
  }, [searchQuery]);

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

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery('');
  };

  const handleSearchItemClick = (path: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(path);
  };

  const isActive = (path: string) => {
    return location === path || location.startsWith(path + '/');
  };

  return (
    <>
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-200 backdrop-blur-lg ${
          isScrolled 
            ? 'bg-white/90 shadow-sm py-3' 
            : 'bg-white/80 py-4'
        }`}
      >
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img 
                src={yafaLogoDark} 
                alt="Yafa Cloud Services" 
                className="h-8 md:h-9 cursor-pointer transition-all"
              />
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button 
              variant="ghost" 
              className="text-neutral-700 hover:bg-neutral-100 rounded-full" 
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
                        className={`relative px-3 py-2 mx-1 text-sm font-medium rounded-full transition-colors ${
                          isActive(item.path) || activeSubmenu === item.name 
                            ? 'text-neutral-900 bg-neutral-100' 
                            : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                        } flex items-center`}
                        onClick={() => toggleSubmenu(item.name)}
                      >
                        {item.name}
                        <ChevronDown className={`ml-1 h-3.5 w-3.5 transition-transform ${
                          activeSubmenu === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Dropdown */}
                      {activeSubmenu === item.name && (
                        <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-neutral-200/50 overflow-hidden z-20 backdrop-blur-xl">
                          <div className="py-1">
                            {item.submenu.map((subitem) => (
                              <Link key={subitem.path} href={subitem.path}>
                                <span 
                                  className="block px-4 py-2.5 text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-colors cursor-pointer text-sm"
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
                      <span className={`relative block px-3 py-2 mx-1 text-sm font-medium rounded-full transition-colors ${
                        isActive(item.path) 
                          ? 'text-neutral-900 bg-neutral-100' 
                          : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                      }`}>
                        {item.name}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            {/* Search button */}
            <div className="ml-2 mr-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded-full h-9 w-9 p-0"
                onClick={toggleSearch}
              >
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
            
            {/* CTA buttons */}
            <div className="flex items-center space-x-3">
              <Link href="/case-studies">
                <Button 
                  variant="outline" 
                  className="rounded-full border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 hidden lg:inline-flex"
                  size="sm"
                >
                  Case Studies
                </Button>
              </Link>
              <a href="https://calendly.com/ferasawadi90/30min" target="_blank" rel="noopener noreferrer">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white font-medium transition-all rounded-full shadow-sm hover:shadow"
                  size="sm"
                >
                  Free Consultation
                  <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </a>
            </div>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-xl transition-all duration-300 z-40 pt-20 ${
            isMobileMenuOpen 
              ? 'opacity-100 pointer-events-auto' 
              : 'opacity-0 pointer-events-none transform translate-x-full'
          }`}
        >
          <div className="container py-4 overflow-y-auto max-h-screen">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.submenu ? (
                    <div className="rounded-xl overflow-hidden">
                      <button 
                        className={`w-full text-left px-5 py-3.5 flex items-center justify-between text-lg font-medium ${
                          isActive(item.path) || activeSubmenu === item.name 
                            ? 'bg-neutral-100 text-neutral-900' 
                            : 'text-neutral-700 hover:bg-neutral-50'
                        }`}
                        onClick={() => toggleSubmenu(item.name)}
                      >
                        {item.name}
                        <ChevronDown className={`h-5 w-5 transition-transform ${
                          activeSubmenu === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Mobile submenu */}
                      {activeSubmenu === item.name && (
                        <div className="pl-5 pb-2 bg-neutral-50">
                          {item.submenu.map((subitem) => (
                            <Link key={subitem.path} href={subitem.path}>
                              <span 
                                className="block px-5 py-3 text-neutral-700 hover:text-neutral-900"
                                onClick={() => {
                                  setActiveSubmenu(null);
                                  setIsMobileMenuOpen(false);
                                }}
                              >
                                {subitem.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={item.path}>
                      <span 
                        className={`block px-5 py-3.5 text-lg font-medium rounded-xl ${
                          isActive(item.path) 
                            ? 'bg-neutral-100 text-neutral-900' 
                            : 'text-neutral-700 hover:bg-neutral-50'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile menu CTA */}
              <div className="pt-8 pb-4">
                <Link href="/case-studies">
                  <Button 
                    variant="outline" 
                    className="rounded-xl bg-neutral-50 border-neutral-200 text-neutral-800 w-full mb-3 h-14 text-base font-medium"
                  >
                    Browse Case Studies
                  </Button>
                </Link>
                <a href="https://calendly.com/ferasawadi90/30min" target="_blank" rel="noopener noreferrer">
                  <Button 
                    className="rounded-xl bg-primary hover:bg-primary/90 text-white w-full h-14 text-base font-medium shadow-sm"
                  >
                    Book Free Consultation
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Search Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-neutral-900/30 backdrop-blur-sm transition-opacity duration-200 ${
          isSearchOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-full h-full flex items-start justify-center pt-24">
          <div 
            ref={searchOverlayRef}
            className="bg-white w-full max-w-2xl rounded-xl shadow-2xl border border-neutral-200/50 transition-all duration-300 transform overflow-hidden"
            style={{
              maxHeight: isSearchOpen ? (searchResults.length > 0 ? '32rem' : '5rem') : '0',
              opacity: isSearchOpen ? 1 : 0,
            }}
          >
            <div className="p-4 border-b border-neutral-100 flex items-center">
              <Search className="h-5 w-5 text-neutral-400 mr-3" />
              <Input
                ref={searchInputRef}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for services, case studies, pages..."
                className="border-0 shadow-none focus-visible:ring-0 focus-visible:ring-transparent text-base text-neutral-700 placeholder:text-neutral-400"
              />
              <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border border-neutral-200 bg-neutral-50 px-1.5 font-mono text-[10px] font-medium text-neutral-500">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>

            {searchResults.length > 0 && (
              <div className="overflow-y-auto max-h-80">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 hover:bg-neutral-50 border-b border-neutral-100 last:border-b-0 cursor-pointer"
                    onClick={() => handleSearchItemClick(result.path)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-neutral-900">{result.title}</h4>
                        <p className="text-xs text-neutral-500 mt-1">{result.path}</p>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-600">
                        {result.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {searchQuery && searchResults.length === 0 && (
              <div className="p-6 text-center">
                <p className="text-neutral-500">No results found for "{searchQuery}"</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Spacer when mobile menu is open */}
      {isMobileMenuOpen && <div className="h-screen md:hidden" />}
    </>
  );
};

export default Header;
