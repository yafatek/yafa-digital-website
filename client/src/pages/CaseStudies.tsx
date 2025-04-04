import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    id: 'retailplus',
    title: 'E-commerce Platform Migration & AI Integration',
    client: 'RetailPlus',
    category: 'E-Commerce',
    challenge: 'RetailPlus needed to migrate their legacy e-commerce platform to a more scalable and AI-ready infrastructure to support their growing business.',
    solution: 'We implemented a comprehensive AWS cloud migration, integrating AI-driven inventory management and personalized recommendation engines.',
    results: [
      '35% increase in sales within the first quarter',
      '52% improvement in page load speed',
      '40% reduction in infrastructure costs',
      'Enhanced inventory forecasting accuracy by 28%'
    ],
    testimonial: {
      quote: "Yafa Cloud Services transformed our e-commerce platform with their AWS expertise. Our site is now faster, more secure, and our sales have increased dramatically.",
      author: "Sarah Johnson, CEO, RetailPlus"
    },
    bgColor: 'from-blue-600 to-blue-900'
  },
  {
    id: 'servicenow',
    title: 'Multilingual AI Chatbot Implementation',
    client: 'ServiceNow Inc.',
    category: 'AI Solutions',
    challenge: 'ServiceNow Inc. was facing increasing customer service costs and slow response times, particularly for their international clients requiring support in multiple languages.',
    solution: 'We developed and deployed a sophisticated multilingual AI chatbot capable of handling customer inquiries in 12 languages, integrated with their existing CRM system.',
    results: [
      '40% reduction in customer service costs',
      '75% improvement in response times',
      'Successful handling of 70% of inquiries without human intervention',
      'Support for 12 languages with 95% accuracy'
    ],
    testimonial: {
      quote: "The AI chatbot solution developed by Yafa Cloud Services has revolutionized our customer service. It handles 70% of inquiries automatically and in multiple languages.",
      author: "Michael Chen, CTO, ServiceNow Inc."
    },
    bgColor: 'from-green-600 to-green-900'
  },
  {
    id: 'finsecure',
    title: 'Enterprise-Grade Security Infrastructure',
    client: 'FinSecure Bank',
    category: 'Cybersecurity',
    challenge: 'FinSecure Bank needed to strengthen their cybersecurity infrastructure to meet stringent financial regulations and protect against increasingly sophisticated cyber threats.',
    solution: 'We implemented a comprehensive cybersecurity solution including network security, data protection, threat detection systems, and employee security training.',
    results: [
      'Successfully passed all regulatory compliance audits',
      'Prevented several potential data breaches',
      '95% reduction in phishing vulnerability',
      'Decreased incident response time by 60%'
    ],
    testimonial: {
      quote: "Their cybersecurity expertise is unmatched. Yafa Cloud Services implemented a comprehensive security solution that gives us peace of mind and meets all regulatory requirements.",
      author: "Rebecca Martinez, CISO, FinSecure Bank"
    },
    bgColor: 'from-blue-600 to-blue-900'
  },
  {
    id: 'globaltech',
    title: 'Cloud Infrastructure Optimization',
    client: 'GlobalTech Solutions',
    category: 'Cloud Solutions',
    challenge: 'GlobalTech Solutions was experiencing scaling issues with their existing cloud infrastructure, resulting in performance bottlenecks and rising costs.',
    solution: 'We restructured their cloud architecture using AWS best practices, implemented auto-scaling, and optimized resource allocation.',
    results: [
      '62% cost reduction on cloud infrastructure',
      '99.99% uptime achievement',
      '3x improvement in application response time',
      'Seamless handling of 10x traffic spikes'
    ],
    testimonial: {
      quote: "The optimization of our cloud infrastructure by Yafa Cloud Services exceeded our expectations. We've seen dramatic improvements in performance while significantly reducing costs.",
      author: "James Peterson, VP of Technology, GlobalTech Solutions"
    },
    bgColor: 'from-blue-800 to-blue-600'
  },
  {
    id: 'fashionfwd',
    title: 'AI-Powered Product Recommendation Engine',
    client: 'FashionFwd',
    category: 'AI & E-Commerce',
    challenge: 'FashionFwd wanted to increase customer engagement and average order value on their e-commerce platform through personalized recommendations.',
    solution: 'We developed a custom AI recommendation engine that analyzes browsing behavior, purchase history, and product attributes to deliver highly relevant suggestions.',
    results: [
      '47% increase in average order value',
      '28% improvement in conversion rate',
      '52% higher customer retention',
      '3x increase in product discovery'
    ],
    testimonial: {
      quote: "The AI recommendation engine has transformed our customer experience. Shoppers are discovering more products they love and spending more per visit.",
      author: "Emma Rodriguez, Digital Director, FashionFwd"
    },
    bgColor: 'from-green-700 to-green-500'
  },
  {
    id: 'healthone',
    title: 'Secure Healthcare Data Platform',
    client: 'HealthOne Medical Group',
    category: 'Cloud & Cybersecurity',
    challenge: 'HealthOne needed a HIPAA-compliant cloud platform for storing and sharing sensitive patient data across multiple facilities.',
    solution: 'We created a custom secure healthcare data platform with end-to-end encryption, granular access controls, and comprehensive audit logging.',
    results: [
      'Full HIPAA compliance verification',
      '40% faster access to patient records',
      'Zero security incidents since implementation',
      'Improved collaboration between healthcare providers'
    ],
    testimonial: {
      quote: "Yafa Cloud Services delivered a platform that meets our strict security requirements while making it easier for our staff to access the information they need to provide quality care.",
      author: "Dr. Robert Chen, CIO, HealthOne Medical Group"
    },
    bgColor: 'from-blue-700 to-blue-500'
  }
];

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
                  {/* Image placeholder with gradient background */}
                  <div className={`bg-gradient-to-r ${study.bgColor} rounded-lg shadow-lg h-64 flex items-center justify-center p-6 mb-6`}>
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
