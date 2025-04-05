import { ArrowRight, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { caseStudies } from '@/lib/data';
import { useEffect } from 'react';

// Import SVG images
import ecommerceSvg from '../assets/case-studies/ecommerce.svg';
import aiSvg from '../assets/case-studies/ai.svg';
import securitySvg from '../assets/case-studies/security.svg';
import cloudSvg from '../assets/case-studies/cloud.svg';

const CaseStudiesPage = () => {
  // Handle hash navigation
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1); // Remove the # symbol
      const element = document.getElementById(id);
      
      if (element) {
        // Add a slight delay to ensure the page has fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else {
      // No hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-36 pb-24 relative bg-gradient-to-b from-white to-[#f5f5f7] overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-30"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-violet-50 blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-block bg-blue-50 backdrop-blur-lg border border-blue-100 rounded-full px-4 py-1.5 text-blue-600 text-sm font-medium mb-6">
            SUCCESS STORIES
          </div>
          <h1 className="text-4xl md:text-6xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
            Case studies
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 font-light max-w-3xl mx-auto">
            Explore how we've helped businesses achieve their goals through innovative cloud and AI solutions
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id} 
              id={study.id}
              className={`mb-20 pt-16 ${index > 0 ? 'border-t border-neutral-100' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                  {/* Case study image */}
                  <div className={`bg-gradient-to-br ${study.category.includes('E-Commerce') ? 'from-blue-50 to-blue-100' : 
                                               study.category.includes('AI') ? 'from-violet-50 to-violet-100' : 
                                               study.category.includes('Cybersecurity') ? 'from-amber-50 to-amber-100' : 
                                               'from-emerald-50 to-emerald-100'} 
                                               rounded-2xl shadow-sm border border-neutral-200/80 h-64 flex items-center justify-center p-6 mb-6 overflow-hidden relative`}>
                    {/* Decorative elements */}
                    <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-white/20 opacity-30"></div>
                    <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-white/20 opacity-20"></div>
                    
                    {study.category.includes('E-Commerce') ? (
                      <img 
                        src={ecommerceSvg} 
                        alt={`${study.title} case study illustration`}
                        className="w-32 h-32 object-contain text-blue-500"
                      />
                    ) : study.category.includes('AI') ? (
                      <img 
                        src={aiSvg} 
                        alt={`${study.title} case study illustration`}
                        className="w-32 h-32 object-contain text-violet-500"
                      />
                    ) : study.category.includes('Cybersecurity') ? (
                      <img 
                        src={securitySvg} 
                        alt={`${study.title} case study illustration`}
                        className="w-32 h-32 object-contain text-amber-500"
                      />
                    ) : (
                      <img 
                        src={cloudSvg} 
                        alt={`${study.title} case study illustration`}
                        className="w-32 h-32 object-contain text-emerald-500"
                      />
                    )}
                  </div>

                  <div className="mb-6">
                    <span className={`inline-block px-4 py-2 rounded-full ${
                      study.category.includes('E-Commerce') ? 'bg-blue-50 text-blue-600' : 
                      study.category.includes('AI') ? 'bg-violet-50 text-violet-600' : 
                      study.category.includes('Cybersecurity') ? 'bg-amber-50 text-amber-600' : 
                      'bg-emerald-50 text-emerald-600'
                    } text-sm font-medium`}>
                      {study.category}
                    </span>
                  </div>
                  
                  <div className="p-6 bg-[#f5f5f7] rounded-xl mb-6">
                    <h3 className="text-lg font-medium text-neutral-900 mb-2">Client</h3>
                    <p className="text-neutral-600">{study.client}</p>
                  </div>
                  
                  <div className="p-6 bg-[#f5f5f7] rounded-xl border-l-4 border-blue-400">
                    <p className="text-neutral-600 italic mb-4">"{study.testimonial.quote}"</p>
                    <footer className="text-sm font-medium text-neutral-900">{study.testimonial.author}</footer>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-medium text-neutral-900 mb-8 tracking-tight">{study.title}</h2>
                  
                  <div className="mb-8">
                    <div className="inline-block bg-blue-50 backdrop-blur-lg border border-blue-100 rounded-full px-4 py-1.5 text-blue-600 text-sm font-medium mb-3">
                      THE CHALLENGE
                    </div>
                    <p className="text-neutral-600 text-lg leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-8">
                    <div className="inline-block bg-violet-50 backdrop-blur-lg border border-violet-100 rounded-full px-4 py-1.5 text-violet-600 text-sm font-medium mb-3">
                      OUR SOLUTION
                    </div>
                    <p className="text-neutral-600 text-lg leading-relaxed">{study.solution}</p>
                  </div>
                  
                  <div className="mb-8">
                    <div className="inline-block bg-emerald-50 backdrop-blur-lg border border-emerald-100 rounded-full px-4 py-1.5 text-emerald-600 text-sm font-medium mb-3">
                      THE RESULTS
                    </div>
                    <ul className="space-y-4">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <div className="bg-emerald-50 rounded-full p-1 mr-3 flex-shrink-0">
                            <ChevronRight className="h-5 w-5 text-emerald-600" />
                          </div>
                          <span className="text-neutral-600 text-lg">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href="/contact">
                    <Button className="bg-neutral-900 text-white hover:bg-neutral-800 rounded-full shadow-sm font-normal">
                      Discuss your project
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#f5f5f7] relative">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-30"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-violet-50 blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/80 p-8 md:p-12 relative overflow-hidden max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-block bg-violet-50 backdrop-blur-lg border border-violet-100 rounded-full px-4 py-1.5 text-violet-600 text-sm font-medium mb-6">
                GET STARTED TODAY
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
                Ready to achieve similar results?
              </h2>
              <p className="text-lg text-neutral-600 max-w-xl mx-auto mb-8">
                Let's discuss how our cloud and AI solutions can help your business overcome challenges and reach new heights.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800 rounded-full shadow-sm font-normal">
                  Schedule a consultation
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
