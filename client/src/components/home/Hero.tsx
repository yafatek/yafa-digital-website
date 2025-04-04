import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, BarChart3, Award, Zap, Check } from 'lucide-react';

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
              ENTERPRISE SOLUTIONS
            </div>
            <h1 className="heading-xl mb-6 text-white">
              Secure Enterprise Cloud Infrastructure for Global Business
            </h1>
            <p className="text-body-lg text-white/80 mb-8 max-w-xl">
              Yafa Cloud Services delivers enterprise-grade infrastructure and AI solutions that enhance operational efficiency, drive innovation, and ensure security at scale.
            </p>
            
            {/* Key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Shield, text: "Enterprise-grade security compliance" },
                { icon: Zap, text: "High-performance infrastructure" },
                { icon: BarChart3, text: "Data-driven business intelligence" },
                { icon: Award, text: "Industry-leading SLAs" }
              ].map((feature, index) => (
                <div key={index} className="highlight-item">
                  <div className="highlight-icon">
                    <Check />
                  </div>
                  <span className="text-white/90 font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link href="/services">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-colors w-full sm:w-auto justify-center">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 transition-colors w-full sm:w-auto justify-center">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right column - Enterprise metrics dashboard */}
          <div className="lg:justify-self-end w-full max-w-xl">
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden shadow-lg">
              {/* Header with accent bar */}
              <div className="relative pt-6 px-6 pb-4">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/80 to-corporate-accent/80"></div>
                <h3 className="text-lg font-semibold text-white">Enterprise Performance Metrics</h3>
                <p className="text-sm text-white/60">Delivering measurable business impact</p>
              </div>
              
              {/* Dashboard content */}
              <div className="px-6 pb-6">
                {/* KPI metrics grid */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-1">99.99%</div>
                    <div className="text-sm text-white/70">Infrastructure Uptime</div>
                    <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[99.5%] bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-1">47%</div>
                    <div className="text-sm text-white/70">Average Cost Reduction</div>
                    <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[47%] bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-1">3.5x</div>
                    <div className="text-sm text-white/70">Performance Increase</div>
                    <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-1">10x</div>
                    <div className="text-sm text-white/70">ROI on AI Solutions</div>
                    <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[95%] bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Company achievements */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium text-white">Client satisfaction</div>
                    <div className="text-sm font-medium text-white">98.7%</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-between text-center gap-4">
                    <div>
                      <div className="text-sm text-white/70 mb-1">Years of Experience</div>
                      <div className="text-2xl font-bold text-white">15+</div>
                    </div>
                    <div className="w-px bg-white/10 hidden sm:block"></div>
                    <div>
                      <div className="text-sm text-white/70 mb-1">Enterprise Clients</div>
                      <div className="text-2xl font-bold text-white">250+</div>
                    </div>
                    <div className="w-px bg-white/10 hidden sm:block"></div>
                    <div>
                      <div className="text-sm text-white/70 mb-1">Cloud Solutions</div>
                      <div className="text-2xl font-bold text-white">500+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enterprise credibility section */}
        <div className="mt-16 py-5 px-6 bg-white/5 backdrop-blur-sm rounded-lg hidden md:block">
          <div className="grid grid-cols-6 gap-6 items-center">
            <div className="col-span-2 text-sm text-white/80">
              <span className="font-medium">Trusted by industry leaders</span>
            </div>
            <div className="col-span-4 flex justify-between items-center">
              <div className="h-7 w-24 bg-white/10 rounded"></div>
              <div className="h-7 w-20 bg-white/10 rounded"></div>
              <div className="h-7 w-28 bg-white/10 rounded"></div>
              <div className="h-7 w-24 bg-white/10 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
