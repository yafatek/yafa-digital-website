import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { caseStudies } from '@/lib/data';

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#003366] text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Case Studies</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
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
                    {study.image ? (
                      <img 
                        src={study.image} 
                        alt={`${study.title} case study illustration`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24 text-white opacity-60">
                        {study.category.includes('E-Commerce') && (
                          <>
                            <circle cx="8" cy="21" r="1" />
                            <circle cx="19" cy="21" r="1" />
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                          </>
                        )}
                        {study.category.includes('AI') && (
                          <>
                            <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
                            <path d="M10 17v.01" />
                            <path d="M14 17v.01" />
                          </>
                        )}
                        {study.category.includes('Cybersecurity') && (
                          <>
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </>
                        )}
                        {study.category.includes('Cloud') && (
                          <>
                            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                          </>
                        )}
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
                  <h2 className="text-3xl font-bold font-heading text-[#003366] mb-6">{study.title}</h2>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-bold font-heading text-[#003366] mb-3">The Challenge</h3>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-bold font-heading text-[#003366] mb-3">Our Solution</h3>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-bold font-heading text-[#003366] mb-3">The Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-[#2E8B57] mt-1 mr-2 shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href="/contact">
                    <Button className="bg-[#003366] text-white hover:bg-opacity-90">
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
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Achieve Similar Results?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Let's discuss how our cloud and AI solutions can help your business overcome challenges and reach new heights.
          </p>
          <Link href="/contact">
            <Button className="bg-[#2E8B57] text-white font-heading font-semibold px-8 py-3 text-lg hover:bg-opacity-90 transition-colors duration-300">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
