import { ArrowRight } from 'lucide-react';
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
      <section className="bg-[#003366] text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-6 tracking-tight text-white">Case Studies</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-medium text-white">
            Explore how we've helped businesses achieve their goals through innovative cloud and AI solutions
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id} 
              id={study.id}
              className={`mb-20 pt-16 ${index > 0 ? 'border-t border-gray-200' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                  {/* Case study image */}
                  <div className={`bg-gradient-to-r ${study.bgColor} rounded-lg shadow-lg h-64 flex items-center justify-center p-6 mb-6 overflow-hidden`}>
                    {study.category.includes('E-Commerce') ? (
                      <img 
                        src={ecommerceSvg} 
                        alt={`${study.title} case study illustration`}
                        className="w-full h-full object-contain"
                      />
                    ) : study.category.includes('AI') ? (
                      <img 
                        src={aiSvg} 
                        alt={`${study.title} case study illustration`}
                        className="w-full h-full object-contain"
                      />
                    ) : study.category.includes('Cybersecurity') ? (
                      <img 
                        src={securitySvg} 
                        alt={`${study.title} case study illustration`}
                        className="w-full h-full object-contain"
                      />
                    ) : study.category.includes('Cloud') ? (
                      <img 
                        src={cloudSvg} 
                        alt={`${study.title} case study illustration`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24 text-white opacity-60">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    )}
                  </div>

                  <div className="mb-6">
                    <span className={`inline-block px-4 py-2 rounded-full ${study.category.includes('Cybersecurity') || study.category.includes('E-Commerce') ? 'bg-[#2E8B57] bg-opacity-10 text-[#2E8B57]' : 'bg-[#003366] bg-opacity-10 text-[#003366]'} text-sm font-medium`}>
                      {study.category}
                    </span>
                  </div>
                  
                  <div className="p-6 bg-gray-50 rounded-lg mb-6">
                    <h3 className="text-lg font-bold font-heading text-[#003366] mb-2">Client</h3>
                    <p className="text-gray-700">{study.client}</p>
                  </div>
                  
                  <blockquote className="p-6 bg-gray-50 rounded-lg border-l-4 border-[#2E8B57]">
                    <p className="text-gray-700 italic mb-4">"{study.testimonial.quote}"</p>
                    <footer className="text-sm font-medium text-[#003366]">{study.testimonial.author}</footer>
                  </blockquote>
                </div>
                
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-extrabold font-heading text-[#003366] mb-6 tracking-tight">{study.title}</h2>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-extrabold font-heading text-[#003366] mb-3 tracking-tight">The Challenge</h3>
                    <p className="text-gray-800 text-base leading-relaxed font-medium">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-extrabold font-heading text-[#003366] mb-3 tracking-tight">Our Solution</h3>
                    <p className="text-gray-800 text-base leading-relaxed font-medium">{study.solution}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-extrabold font-heading text-[#003366] mb-3 tracking-tight">The Results</h3>
                    <ul className="space-y-3">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-[#2E8B57] mt-1 mr-2 shrink-0" />
                          <span className="text-gray-800 text-base leading-relaxed font-medium">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href="/contact">
                    <Button className="bg-[#3480cc] text-white hover:bg-[#3480cc]/90">
                      Discuss Your Project
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#003366] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading mb-6 tracking-tight text-white">Ready to Achieve Similar Results?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 font-medium leading-relaxed text-white">
            Let's discuss how our cloud and AI solutions can help your business overcome challenges and reach new heights.
          </p>
          <Link href="/contact">
            <Button className="bg-white hover:bg-white/90 text-[#3480cc] font-heading font-semibold px-8 py-3 text-lg transition-colors duration-300">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
