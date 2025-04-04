import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Server, Database, Cloud, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-pattern text-white py-20 md:py-32 relative overflow-hidden">
      {/* Abstract tech grid pattern overlays */}
      <div className="absolute inset-0 tech-pattern opacity-20"></div>
      
      {/* Gradient orbs for futuristic look */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-teal-500/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold text-teal-300 rounded-full bg-white/10 backdrop-blur-sm">
              ENTERPRISE CLOUD & AI SOLUTIONS | EST. 2018
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-teal-200">
              Powering Enterprise Innovation Through Advanced Cloud Technology
            </h1>
            <p className="text-lg md:text-xl mb-8 text-slate-300 max-w-2xl">
              Yafa Cloud Services delivers future-ready infrastructure and AI solutions that transform how enterprises operate, innovate, and scale in the digital era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white font-medium px-8 py-6 rounded-md hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 w-full sm:w-auto group">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white font-medium px-8 py-6 rounded-md hover:bg-white/20 transition-colors duration-300 w-full sm:w-auto">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Main graphic with futuristic styling */}
              <div className="futuristic-ui-element rounded-xl p-6 futuristic-glow">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Cloud, title: "Cloud Infrastructure", desc: "Scalable solutions" },
                    { icon: Database, title: "Data Processing", desc: "Real-time analytics" },
                    { icon: Server, title: "AI Computing", desc: "Advanced algorithms" },
                    { icon: BarChart3, title: "Business Intelligence", desc: "Data-driven insights" }
                  ].map((item, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-md p-4 rounded-lg border border-white/10 hover:border-teal-500/50 transition-colors duration-300">
                      <div className="flex items-center mb-2">
                        <item.icon className="h-5 w-5 mr-2 text-teal-400" />
                        <h3 className="font-medium text-white text-sm">{item.title}</h3>
                      </div>
                      <p className="text-slate-300 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
                
                {/* Decorative elements */}
                <div className="mt-6 relative">
                  <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full w-2/3 bg-gradient-to-r from-indigo-500 to-teal-400 rounded-full"></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-slate-400">
                    <span>System Capacity</span>
                    <span>67%</span>
                  </div>
                </div>
              </div>
              
              {/* Animated pulse rings */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24">
                <div className="absolute inset-0 rounded-full bg-indigo-600/20 animate-ping"></div>
                <div className="absolute inset-4 rounded-full bg-indigo-600/40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
