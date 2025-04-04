import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Check, Users, Globe, Headphones } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-12">
            {/* Using a styled div instead of an actual image */}
            <div className="rounded-lg shadow-xl bg-gradient-to-br from-blue-800 to-green-600 w-full aspect-video flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24 text-white opacity-60">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#003366] mb-6">About Yafa Cloud Services</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Founded with a vision to make advanced cloud technology and AI solutions accessible to businesses of all sizes, Yafa Cloud Services LLC has quickly established itself as a trusted partner for digital transformation.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              Our team of certified professionals brings together expertise in AWS cloud infrastructure, AI development, e-commerce solutions, and cybersecurity to deliver comprehensive services tailored to your unique business needs.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#003366] bg-opacity-10 flex items-center justify-center text-[#003366] mr-4">
                  <Check className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold">AWS Certified</h3>
                  <p className="text-sm text-gray-600">Official partner</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#2E8B57] bg-opacity-10 flex items-center justify-center text-[#2E8B57] mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold">Expert Team</h3>
                  <p className="text-sm text-gray-600">Experienced professionals</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#003366] bg-opacity-10 flex items-center justify-center text-[#003366] mr-4">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold">Global Reach</h3>
                  <p className="text-sm text-gray-600">Serving clients worldwide</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#2E8B57] bg-opacity-10 flex items-center justify-center text-[#2E8B57] mr-4">
                  <Headphones className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold">24/7 Support</h3>
                  <p className="text-sm text-gray-600">Always available</p>
                </div>
              </div>
            </div>
            <Link href="/about">
              <Button className="bg-[#003366] text-white font-heading font-semibold hover:bg-opacity-90 transition-colors duration-300">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
