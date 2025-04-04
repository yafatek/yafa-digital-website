import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Server, Database, Cloud, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="gradient-bg text-white py-20 md:py-28 relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 hero-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="mb-6 text-sm font-semibold text-white/80 uppercase tracking-wider">
              Enterprise Cloud & AI Solutions
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
              Strategic Cloud Technology for Enterprise Innovation
            </h1>
            <p className="text-lg mb-8 text-white/80 max-w-2xl leading-relaxed">
              Yafa Cloud Services delivers enterprise-grade infrastructure and AI solutions that enhance operational efficiency, drive innovation, and support strategic growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button className="bg-white text-primary font-medium px-6 py-3 rounded hover:bg-white/90 transition-colors duration-300 w-full sm:w-auto">
                  Explore Our Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white/30 text-white font-medium px-6 py-3 rounded hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-lg">
              {/* Professional UI element */}
              <div className="enterprise-ui-element rounded-md p-6 bg-white/10 backdrop-blur-sm shadow-lg border border-white/20">
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { 
                      icon: Cloud, 
                      title: "Enterprise Cloud", 
                      desc: "Secure, scalable infrastructure for business operations" 
                    },
                    { 
                      icon: Database, 
                      title: "Data Management", 
                      desc: "Comprehensive data storage and processing solutions" 
                    },
                    { 
                      icon: Server, 
                      title: "AI Solutions", 
                      desc: "Advanced machine learning for business intelligence" 
                    },
                    { 
                      icon: BarChart3, 
                      title: "Analytics", 
                      desc: "Data-driven insights for strategic decision-making" 
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white/5 p-4 rounded border border-white/10">
                      <div className="flex items-start">
                        <div className="bg-white/10 p-2 rounded mr-3 text-white">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white text-sm mb-1">{item.title}</h3>
                          <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Enterprise stats element */}
                <div className="mt-6 bg-white/5 p-4 rounded border border-white/10">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-white">Client satisfaction rate</span>
                    <span className="text-sm font-medium text-white">98.5%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[98.5%] bg-white rounded-full"></div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-sm font-medium text-white/80">Est.</div>
                      <div className="text-xl font-bold text-white">2018</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-white/80">Clients</div>
                      <div className="text-xl font-bold text-white">150+</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-white/80">Projects</div>
                      <div className="text-xl font-bold text-white">500+</div>
                    </div>
                  </div>
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
