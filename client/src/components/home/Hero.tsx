import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="hero-pattern text-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
              Innovative Cloud & AI Solutions for Your Business
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl">
              Yafa Cloud Services LLC delivers cutting-edge cloud technology and AI solutions to help your business thrive in the digital era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button className="bg-[#2E8B57] text-white font-heading font-semibold px-8 py-6 rounded-md hover:bg-opacity-90 transition-colors duration-300 w-full sm:w-auto">
                  Explore Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="bg-white text-[#003366] font-heading font-semibold px-8 py-6 rounded-md hover:bg-opacity-90 transition-colors duration-300 w-full sm:w-auto">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Using an image placeholder for cloud technology */}
            <div className="rounded-lg shadow-2xl bg-gradient-to-br from-blue-900 to-green-700 w-full max-w-md aspect-video flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24 text-white opacity-60">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                <path d="M22 19h-2"/>
                <path d="M17 14h-2"/>
                <path d="M14 19h-2"/>
                <path d="M14 9h-2"/>
                <path d="M9 14H7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
