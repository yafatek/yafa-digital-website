import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Check, Users, Globe, Database, Code, Languages, Cloud, Server, Map } from 'lucide-react';
import { AnimatedElement } from '@/components/ui/animated-element';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement animation="fade" className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-4">
            About Us
          </div>
          <h2 className="heading-lg mb-4">
            Your Dedicated Technology Partner in the UAE
          </h2>
          <p className="text-body-lg text-neutral-600 mx-auto">
            Based in Dubai, YAFA Cloud Services combines deep technical expertise with local understanding to deliver practical Cloud & AI solutions for UAE businesses.
          </p>
        </AnimatedElement>

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
            <h3 className="heading-md mb-5 text-neutral-900">Our Expertise & Advantage</h3>
            <p className="text-neutral-700 mb-6">
              YAFA Cloud Services LLC was founded with a mission to empower UAE SMBs with accessible, high-impact Cloud & AI solutions. With over 15 years of experience in Cloud/DevOps and 17+ years mastering Python, we deliver practical technology solutions that solve real business challenges.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-[#3480cc] flex items-center justify-center flex-shrink-0">
                  <Cloud className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Multi-Cloud Expertise</h4>
                  <p className="text-neutral-600">AWS, GCP, Azure</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-[#3480cc] flex items-center justify-center flex-shrink-0">
                  <Server className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">End-to-End Capabilities</h4>
                  <p className="text-neutral-600">Infrastructure to AI</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-[#3480cc] flex items-center justify-center flex-shrink-0">
                  <Globe className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Regional Experience</h4>
                  <p className="text-neutral-600">10+ years in MENA</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-[#3480cc] flex items-center justify-center flex-shrink-0">
                  <Languages className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Multilingual Support</h4>
                  <p className="text-neutral-600">Arabic, English, Turkish</p>
                </div>
              </div>
            </div>
            <Link href="/about">
              <Button className="bg-primary text-white font-medium hover:bg-primary/90 transition-colors duration-300">
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
