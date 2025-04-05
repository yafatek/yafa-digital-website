import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, BarChart3, Award, Zap, Check, ChevronRight, Globe, Server, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

// Import customer logos
import tunjaraLogo from '@/assets/customer-logos/tunjara.png';
import orderqLogo from '@/assets/customer-logos/orderq.png';
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
    <section className="bg-gradient-to-b from-[#f5f5f7] to-white relative overflow-hidden pt-20 pb-28">
      {/* Background subtle patterns and decoration */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjAgMEgwVjYwSDYwVjBaIiBmaWxsPSIjMDAwMDAwIi8+PC9zdmc+')]"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-primary/10 blur-3xl opacity-30"></div>
      <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl opacity-30"></div>
      
      <div className="container relative">
        {/* Eyebrow announcement */}
        <div className="w-fit mx-auto mb-8 relative">
          <div className="bg-primary/5 backdrop-blur-lg border border-primary/10 rounded-full px-5 py-1.5 flex items-center gap-2">
            <span className="text-primary/90 font-medium text-sm">Now serving Dubai and the wider UAE</span>
            <div className="bg-primary/10 rounded-full p-0.5">
              <ChevronRight className="w-3 h-3 text-primary" />
            </div>
          </div>
        </div>
        
        {/* Main headline - Apple style large centered heading */}
        <div className="text-center mx-auto max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium text-neutral-900 tracking-tight mb-5 leading-[1.05]">
            Cloud Infrastructure & AI Solutions for Dubai Businesses
          </h1>
          <p className="text-neutral-600 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed mb-8">
            YAFA delivers enterprise-grade cloud infrastructure and intelligent AI solutions that help Dubai businesses operate at peak performance.
          </p>
          
          {/* Primary CTAs with clean design */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
            <Link href="/ai-solutions">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white border-0 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 w-full sm:w-auto px-8">
                Explore AI Solutions
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
            <a href="https://calendly.com/ferasawadi90/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-neutral-200 hover:border-neutral-300 bg-white text-neutral-800 w-full sm:w-auto px-8">
                Book Free Consultation
              </Button>
            </a>
          </div>
        </div>
        
        {/* Premium service pillars - Stripe style cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {[
            {
              icon: Server,
              title: "Cloud Infrastructure",
              description: "Robust, scalable cloud solutions optimized for UAE businesses, with local expertise.",
              color: "from-blue-50 to-blue-100/50",
              iconColor: "text-blue-500"
            },
            {
              icon: Bot,
              title: "AI Solutions",
              description: "Practical AI chatbots, agents, and automation tailored for Dubai's business needs.",
              color: "from-violet-50 to-violet-100/50",
              iconColor: "text-violet-500"
            },
            {
              icon: Globe,
              title: "Dubai Expertise",
              description: "15+ years of technical experience serving UAE's diverse business landscape.",
              color: "from-amber-50 to-amber-100/50",
              iconColor: "text-amber-500"
            }
          ].map((service, index) => (
            <div key={index} className="group hover:scale-[1.02] transition-all duration-300">
              <div className={`bg-gradient-to-b ${service.color} p-6 md:p-8 rounded-2xl border border-neutral-200/80 h-full hover:shadow-lg hover:border-neutral-300/80 transition-all duration-300`}>
                <div className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-5 ${service.iconColor}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Social proof - Brand bar with clean design */}
        <div className="bg-neutral-50/50 backdrop-blur-sm border border-neutral-200/50 rounded-xl p-8 shadow-sm">
          <div className="text-center mb-6">
            <span className="text-neutral-500 text-sm font-medium uppercase tracking-wide">Trusted by Dubai's Leading Businesses</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center h-14">
              <img src={tunjaraLogo} alt="Tunjara" className="h-full max-h-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-center h-14">
              <img src={orderqLogo} alt="OrderQ" className="h-full max-h-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-center h-14">
              <img src={macmaniaLogo} alt="MacMania" className="h-full max-h-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-center h-14">
              <img src={touchesLogo} alt="Touches" className="h-full max-h-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">
            <div className="flex items-center justify-center h-14">
              <img src={gramiLogo} alt="GRAMI" className="h-full max-h-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-center h-14">
              <img src={fyntrixLogo} alt="Fyntrix" className="h-full max-h-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-center h-14">
              <img src={beanifyLogo} alt="Beanify" className="h-full max-h-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center justify-center h-14">
              <img src={medseaLogo} alt="Med Sea 1888" className="h-full max-h-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
            </div>
          </div>
          
          {/* Key metrics - Apple card design */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { value: "15+", label: "Years Cloud & DevOps" },
              { value: "17+", label: "Years Python Expertise" },
              { value: "3", label: "Languages (AR/EN/TR)" },
              { value: "10+", label: "Years in MENA Region" }
            ].map((metric, index) => (
              <div key={index} className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm">
                <div className="flex flex-col items-center text-center">
                  <span className="text-3xl font-bold text-neutral-900 mb-1">{metric.value}</span>
                  <span className="text-sm text-neutral-500">{metric.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
