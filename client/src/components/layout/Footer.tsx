import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Linkedin, 
  Facebook, 
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Send,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import yafaLogoDark from '../../assets/yafa-logo-dark.png';

// Instagram icon component
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f7]">
      {/* Newsletter section */}
      <div className="container pt-20 pb-16">
        <div className="bg-gradient-to-b from-white to-neutral-50 rounded-2xl shadow-sm border border-neutral-200/80 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-blue-50 blur-3xl opacity-50"></div>
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-violet-50 blur-3xl opacity-50"></div>
          
          <div className="relative z-10 lg:flex justify-between items-center gap-12">
            <div className="mb-8 lg:mb-0 max-w-xl">
              <h3 className="text-2xl md:text-3xl font-medium text-neutral-900 mb-3">Stay updated with industry insights</h3>
              <p className="text-neutral-600">
                Subscribe for the latest technology trends, insights, and exclusive resources.
              </p>
            </div>
            <div className="w-full max-w-md">
              <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                <div className="flex">
                  <div className="flex-grow">
                    <Input 
                      type="email" 
                      placeholder="Your business email" 
                      className="bg-white border-neutral-200 rounded-l-full rounded-r-none h-12 focus-visible:ring-primary focus:border-neutral-300"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary/90 text-white rounded-l-none rounded-r-full h-12 px-5 shadow-sm"
                  >
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <p className="mt-2 text-xs text-neutral-500">
                  By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main footer */}
      <div className="border-t border-neutral-200">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            <div className="lg:pr-8">
              <div className="mb-6">
                <img 
                  src={yafaLogoDark} 
                  alt="Yafa Cloud Services" 
                  className="h-10"
                />
              </div>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Enterprise-grade cloud infrastructure and AI solutions for businesses in Dubai seeking operational excellence and digital transformation.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/yafacs" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 text-neutral-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.instagram.com/yafa_cs_official/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 text-neutral-600 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.facebook.com/YafaTek" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 text-neutral-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-neutral-900 font-medium text-lg mb-6">Enterprise Solutions</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/services#cloud" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                    Cloud Infrastructure
                  </Link>
                </li>
                <li>
                  <Link href="/services#ecommerce" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                    E-Commerce Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services#analytics" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                    Business Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="/services#security" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                    Enterprise Security
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                    Managed IT Services
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                    AI Implementation
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-neutral-900 font-medium text-lg mb-6">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                    Blog & Insights
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-neutral-900 font-medium text-lg mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-600">
                    Business Bay<br />
                    Dubai, UAE
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0" />
                  <span className="text-neutral-600">+971565531542</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0" />
                  <span className="text-neutral-600">admin@yafa.digital</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <a href="https://calendly.com/ferasawadi90/30min" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-neutral-900 hover:bg-neutral-800 text-white rounded-full shadow-sm">
                    Book Free Consultation
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer bottom - copyright */}
      <div className="border-t border-neutral-200 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Yafa Cloud Services LLC. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-neutral-500 hover:text-neutral-800 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-neutral-500 hover:text-neutral-800 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-neutral-500 hover:text-neutral-800 text-sm transition-colors">Cookies Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
