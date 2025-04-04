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
  ChevronRight
} from 'lucide-react';
import yafaLogoLight from '../../assets/yafa-logo-light.png';

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
    <footer>
      {/* Pre-footer contact band */}
      <div className="bg-neutral-50 border-t border-neutral-200 py-6 hidden md:block">
        <div className="container">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-primary mr-3" />
              <span className="text-neutral-700 text-sm font-medium">Contact us today: (123) 456-7890</span>
            </div>
            <div className="flex gap-x-8">
              <a href="mailto:info@yafacloud.com" className="flex items-center text-neutral-700 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 mr-1.5" />
                <span className="text-sm">info@yafacloud.com</span>
              </a>
              <a href="#" className="flex items-center text-neutral-700 hover:text-primary transition-colors">
                <MapPin className="h-4 w-4 mr-1.5" />
                <span className="text-sm">Find our offices</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main footer */}
      <div className="bg-neutral-900 text-white pt-16 pb-8">
        <div className="container">
          {/* Footer top - newsletter */}
          <div className="mb-16 pb-8 border-b border-neutral-800 lg:flex justify-between items-center">
            <div className="mb-6 lg:mb-0 max-w-xl">
              <h3 className="heading-md text-white mb-2">Stay Updated with Industry Insights</h3>
              <p className="text-neutral-400 text-sm md:text-base">
                Subscribe to our newsletter for enterprise technology trends, insights, and exclusive resources.
              </p>
            </div>
            <div className="max-w-md w-full">
              <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                <div className="flex">
                  <div className="flex-grow">
                    <Input 
                      type="email" 
                      placeholder="Your business email" 
                      className="bg-neutral-800 border-neutral-700 text-white rounded-r-none h-12 focus-visible:ring-primary"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary/90 text-white rounded-l-none h-12 px-5"
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
          
          {/* Footer body - links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            <div className="lg:pr-8">
              <div className="mb-4">
                <div className="mb-6">
                  <img 
                    src={yafaLogoLight} 
                    alt="Yafa Cloud Services" 
                    className="h-10"
                  />
                </div>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Enterprise-grade cloud infrastructure and AI solutions for global businesses seeking operational excellence and digital transformation.
                </p>
              </div>
              <div className="flex space-x-3">
                <a 
                  href="https://www.linkedin.com/company/yafacs" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded bg-neutral-800 text-neutral-400 hover:bg-primary hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.instagram.com/yafa_cs_official/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded bg-neutral-800 text-neutral-400 hover:bg-primary hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.facebook.com/YafaTek" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded bg-neutral-800 text-neutral-400 hover:bg-primary hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="md:ml-8 lg:ml-0">
              <h4 className="text-white font-semibold text-lg mb-6">Enterprise Solutions</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/services#cloud" className="text-neutral-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1.5 text-neutral-700" />
                    <span>Cloud Infrastructure</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services#ecommerce" className="text-neutral-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1.5 text-neutral-700" />
                    <span>E-Commerce Solutions</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services#analytics" className="text-neutral-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1.5 text-neutral-700" />
                    <span>Business Intelligence</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services#security" className="text-neutral-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1.5 text-neutral-700" />
                    <span>Enterprise Security</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-neutral-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1.5 text-neutral-700" />
                    <span>Managed IT Services</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-neutral-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1.5 text-neutral-700" />
                    <span>AI Implementation</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-neutral-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1.5 text-neutral-700" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-neutral-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1.5 text-neutral-700" />
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-neutral-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1.5 text-neutral-700" />
                    <span>Case Studies</span>
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-neutral-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1.5 text-neutral-700" />
                    <span>Blog & Insights</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1.5 text-neutral-700" />
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Contact Information</h4>
              <ul className="space-y-4">
                <li className="flex">
                  <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-400">
                    1234 Technology Drive<br />
                    Suite 500<br />
                    San Francisco, CA 94103
                  </span>
                </li>
                <li className="flex">
                  <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-neutral-400">(123) 456-7890</span>
                </li>
                <li className="flex">
                  <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-neutral-400">info@yafacloud.com</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <a href="https://calendly.com/ferasawadi90/30min" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-neutral-800 text-white hover:bg-neutral-700 flex">
                    Book Free Consultation
                    <span className="ml-2 text-xs bg-white/10 px-2 py-0.5 rounded">Calendly →</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Footer bottom - copyright */}
          <div className="border-t border-neutral-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-neutral-500 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Yafa Cloud Services LLC. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="#" className="text-neutral-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-neutral-500 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-neutral-500 hover:text-white text-sm transition-colors">Cookies Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
