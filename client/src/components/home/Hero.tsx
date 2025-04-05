import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, BarChart3, Award, Zap, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

// Import customer logos
import tunjaraLogo from '@/assets/customer-logos/tunjara.png';
import orderqLogo from '@/assets/customer-logos/orderq_black_bg.png';
import macmaniaLogo from '@/assets/customer-logos/macmania.png';
import touchesLogo from '@/assets/customer-logos/touches.png';
import gramiLogo from '@/assets/customer-logos/grami.png';
import fyntrixLogo from '@/assets/customer-logos/fyntrix.png';
import beanifyLogo from '@/assets/customer-logos/beanify.png';
import medseaLogo from '@/assets/customer-logos/medsea.png';

// UAE Brand Logo Components
const EmiratesLogo = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 240 60" 
    className={cn("fill-current text-white", className)}
  >
    <path d="M31.448 15C17.322 15 10 24.115 10 30.353c0 6.237 7.322 15.353 21.448 15.353h175.698c12.63 0 23.375-6.573 23.375-15.353 0-8.781-10.746-15.353-23.375-15.353H31.448zm169.5 6.42c4.817 0 8.725 3.908 8.725 8.725 0 4.816-3.908 8.724-8.725 8.724h-169.5c-4.817 0-8.724-3.908-8.724-8.724 0-4.817 3.907-8.725 8.724-8.725h169.5z" />
    <path d="M186.448 23.362h-155c-4.142 0-7.5 3.14-7.5 7 0 3.86 3.358 7 7.5 7h155c4.142 0 7.5-3.14 7.5-7 0-3.86-3.358-7-7.5-7zm-37.5 7H60v-3.5h88.948v3.5z" />
  </svg>
);

const EtisalatLogo = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 200 60" 
    className={cn("fill-current text-white", className)}
  >
    <path d="M40.91 15c-17.12 0-31 6.716-31 15s13.88 15 31 15h120c17.121 0 31-6.716 31-15s-13.879-15-31-15h-120zm0 5h120c12.979 0 23.5 4.477 23.5 10s-10.521 10-23.5 10h-120c-12.979 0-23.5-4.477-23.5-10s10.521-10 23.5-10z" />
    <path d="M100.91 20.333c-16.43 0-28 4.297-28 9.584 0 5.286 11.57 9.584 28 9.584s28-4.298 28-9.584c0-5.287-11.57-9.584-28-9.584zm0 3.75c11.68 0 21.147 2.617 21.147 5.834 0 3.216-9.468 5.833-21.147 5.833-11.68 0-21.147-2.617-21.147-5.833 0-3.217 9.468-5.834 21.147-5.834z" />
    <circle cx="100.91" cy="29.917" r="6.5" />
  </svg>
);

const ADNOCLogo = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 220 60" 
    className={cn("fill-current text-white", className)}
  >
    <path d="M29.667 15C18.25 15 9 21.716 9 30s9.25 15 20.667 15h160.666C201.75 45 211 38.284 211 30s-9.25-15-20.667-15H29.667zm0 5h160.666c8.673 0 15.667 4.477 15.667 10s-6.994 10-15.667 10H29.667C20.994 40 14 35.523 14 30s6.994-10 15.667-10z" />
    <path d="M110 21.5L95.5 38.5h29L110 21.5zm-49.933 0L46.5 38.5h29L61.933 21.5zm98 0L144.5 38.5h29L158.067 21.5z" />
  </svg>
);

const EmaarLogo = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 200 60" 
    className={cn("fill-current text-white", className)}
  >
    <path d="M30 15c-11.046 0-20 6.716-20 15s8.954 15 20 15h140c11.046 0 20-6.716 20-15s-8.954-15-20-15H30z" />
    <path fill="currentColor" d="M165 23c4.418 0 8 3.358 8 7.5s-3.582 7.5-8 7.5H35c-4.418 0-8-3.358-8-7.5s3.582-7.5 8-7.5h130zm-6 4H41v7h118v-7z" fillOpacity="0.7" />
    <path d="M54 28h8v4h-8zM70 28h8v4h-8zM86 28h8v4h-8zM102 28h8v4h-8zM118 28h8v4h-8zM134 28h8v4h-8z" />
  </svg>
);

const Hero = () => {
  return (
    <section className="corporate-gradient text-white relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Background pattern */}
      <div className="absolute inset-0 hero-pattern opacity-10"></div>
      
      {/* Main content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Left column - Content */}
          <div>
            <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white/90 bg-white/10 rounded-full mb-6">
              UAE CLOUD & AI SOLUTIONS
            </div>
            <h1 className="heading-xl mb-6 text-white">
              Future-Proof Your Dubai Business: Advanced Cloud Infrastructure & AI Solutions by YAFA
            </h1>
            <p className="text-body-lg text-white/80 mb-8 max-w-xl">
              Based in Dubai, YAFA Cloud Services LLC empowers Small and Medium Businesses across the UAE to achieve peak performance. We are your dedicated partner for designing, implementing, and managing robust Cloud Infrastructure (AWS, GCP, Azure, On-Prem & Edge) and developing transformative AI Solutions (Chatbots, Automation, Agents). With over 15 years of deep technical expertise, we deliver tangible results for diverse sectors including Real Estate, Hospitality, Food & Beverage, E-commerce, Car Rental, and Travel Agencies.
            </p>
            
            {/* Key service pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Shield, text: "Rock-Solid Cloud Foundations: Scalable, secure, and cost-optimized infrastructure" },
                { icon: Zap, text: "Intelligent AI Integration: Practical AI Chatbots, Agents, and Automation" },
                { icon: BarChart3, text: "Custom Solutions & Edge Computing: Tailored infrastructure for your needs" },
                { icon: Award, text: "Unmatched Technical Expertise: 15+ years of experience in the UAE" }
              ].map((feature, index) => (
                <div key={index} className="highlight-item">
                  <div className="highlight-icon">
                    <Check className="text-white" />
                  </div>
                  <span className="text-white/90 font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link href="/ai-solutions">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-colors w-full sm:w-auto justify-center">
                  Explore AI Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="https://calendly.com/ferasawadi90/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/5 hover:bg-white/15 transition-colors w-full sm:w-auto justify-center">
                  Book Free Consultation
                  <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded">Calendly →</span>
                </Button>
              </a>
            </div>
          </div>
          
          {/* Right column - Enterprise metrics dashboard */}
          <div className="lg:justify-self-end w-full max-w-xl">
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden shadow-lg">
              {/* Header with accent bar */}
              <div className="relative pt-6 px-6 pb-4">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/80 to-corporate-accent/80"></div>
                <h3 className="text-lg font-semibold text-white">Why Partner with YAFA?</h3>
                <p className="text-sm text-white/60">Our unique advantages for UAE businesses</p>
              </div>
              
              {/* Dashboard content */}
              <div className="px-6 pb-6">
                {/* KPI metrics grid */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-1">15+</div>
                    <div className="text-sm text-white/70">Years Cloud & DevOps</div>
                    <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[100%] bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-1">17+</div>
                    <div className="text-sm text-white/70">Years Python Expertise</div>
                    <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[100%] bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-1">3</div>
                    <div className="text-sm text-white/70">Languages (AR/EN/TR)</div>
                    <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[100%] bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-1">10+</div>
                    <div className="text-sm text-white/70">Years in MENA Region</div>
                    <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[100%] bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Company achievements */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium text-white">Industry Focus</div>
                    <div className="text-sm font-medium text-white">6+ Sectors</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-between text-center gap-4">
                    <div>
                      <div className="text-sm text-white/70 mb-1">Real Estate</div>
                      <div className="text-2xl font-bold text-white">✓</div>
                    </div>
                    <div className="w-px bg-white/10 hidden sm:block"></div>
                    <div>
                      <div className="text-sm text-white/70 mb-1">Hospitality</div>
                      <div className="text-2xl font-bold text-white">✓</div>
                    </div>
                    <div className="w-px bg-white/10 hidden sm:block"></div>
                    <div>
                      <div className="text-sm text-white/70 mb-1">E-commerce</div>
                      <div className="text-2xl font-bold text-white">✓</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enterprise credibility section */}
        <div className="mt-16 py-5 px-6 bg-white/5 backdrop-blur-sm rounded-lg hidden md:block">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-6 gap-6 items-center">
              <div className="col-span-1 text-sm text-white/80">
                <span className="font-medium">Trusted by</span>
              </div>
              <div className="col-span-5 flex justify-between items-center">
                <div className="flex items-center justify-center h-12 w-24">
                  <img src={tunjaraLogo} alt="Tunjara" className="h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-12 w-24">
                  <img src={orderqLogo} alt="OrderQ" className="h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-12 w-24">
                  <img src={macmaniaLogo} alt="MacMania" className="h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-12 w-24">
                  <img src={touchesLogo} alt="Touches" className="h-full object-contain" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-6 gap-6 items-center">
              <div className="col-span-1"></div>
              <div className="col-span-5 flex justify-between items-center">
                <div className="flex items-center justify-center h-12 w-24">
                  <img src={gramiLogo} alt="GRAMI" className="h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-12 w-24">
                  <img src={fyntrixLogo} alt="Fyntrix" className="h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-12 w-24">
                  <img src={beanifyLogo} alt="Beanify" className="h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-12 w-24">
                  <img src={medseaLogo} alt="Med Sea 1888" className="h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
