import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Send 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#003366] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold font-heading mb-6">Yafa Cloud Services</h3>
            <p className="mb-6 text-gray-300">
              Innovative cloud and AI solutions tailored to your business needs. We help companies transform, grow, and succeed in the digital era.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#2E8B57] transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-[#2E8B57] transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-[#2E8B57] transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-[#2E8B57] transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold font-heading mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-300 hover:text-[#2E8B57] transition-colors duration-300">Cloud Solutions</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-[#2E8B57] transition-colors duration-300">E-Commerce Development</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-[#2E8B57] transition-colors duration-300">Digital Marketing</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-[#2E8B57] transition-colors duration-300">Cybersecurity Services</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-[#2E8B57] transition-colors duration-300">AI Implementation</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-[#2E8B57] transition-colors duration-300">Managed IT Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold font-heading mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-[#2E8B57] transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-[#2E8B57] transition-colors duration-300">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-[#2E8B57] transition-colors duration-300">Services</Link></li>
              <li><Link href="/case-studies" className="text-gray-300 hover:text-[#2E8B57] transition-colors duration-300">Case Studies</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-[#2E8B57] transition-colors duration-300">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-[#2E8B57] transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold font-heading mb-6">Newsletter</h4>
            <p className="mb-4 text-gray-300">
              Subscribe to our newsletter to receive updates on the latest tech trends and company news.
            </p>
            <form className="mb-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="rounded-r-none text-gray-800"
                />
                <Button type="submit" className="bg-[#2E8B57] rounded-l-none hover:bg-opacity-90">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
            <p className="text-sm text-gray-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Yafa Cloud Services LLC. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#2E8B57] text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#2E8B57] text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#2E8B57] text-sm transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
