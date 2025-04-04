import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'E-commerce Platform Migration & AI Integration',
    category: 'E-Commerce',
    client: 'RetailPlus',
    description: 'We helped RetailPlus migrate their e-commerce platform to AWS cloud and implemented AI-driven inventory management, resulting in a 35% increase in sales.',
    href: '/case-studies/retailplus',
    bgColor: 'from-blue-600 to-blue-900'
  },
  {
    id: 2,
    title: 'Multilingual AI Chatbot Implementation',
    category: 'AI Solutions',
    client: 'ServiceNow Inc.',
    description: 'Developed and deployed a multilingual AI chatbot for ServiceNow Inc., reducing customer service costs by 40% and improving response times by 75%.',
    href: '/case-studies/servicenow',
    bgColor: 'from-green-600 to-green-900'
  },
  {
    id: 3,
    title: 'Enterprise-Grade Security Infrastructure',
    category: 'Cybersecurity',
    client: 'FinSecure Bank',
    description: 'Implemented comprehensive cybersecurity solutions for FinSecure Bank, preventing potential data breaches and ensuring compliance with financial regulations.',
    href: '/case-studies/finsecure',
    bgColor: 'from-blue-600 to-blue-900'
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#003366] mb-4">Case Studies</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses across various industries achieve their goals through innovative cloud and AI solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              {/* Image placeholder with gradient background */}
              <div className={`w-full h-48 bg-gradient-to-r ${study.bgColor} flex items-center justify-center p-6`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-white opacity-60">
                  {study.category === 'E-Commerce' && (
                    <>
                      <circle cx="8" cy="21" r="1" />
                      <circle cx="19" cy="21" r="1" />
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </>
                  )}
                  {study.category === 'AI Solutions' && (
                    <>
                      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
                      <path d="M10 17v.01" />
                      <path d="M14 17v.01" />
                    </>
                  )}
                  {study.category === 'Cybersecurity' && (
                    <>
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </>
                  )}
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className={`${study.category === 'AI Solutions' || study.category === 'Cybersecurity' ? 'bg-[#2E8B57] bg-opacity-10 text-[#2E8B57]' : 'bg-[#003366] bg-opacity-10 text-[#003366]'} text-xs font-medium px-3 py-1 rounded-full`}>
                    {study.category}
                  </span>
                  <span className="ml-3 text-gray-500 text-sm">Client: {study.client}</span>
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-[#003366]">{study.title}</h3>
                <p className="text-gray-700 mb-4">
                  {study.description}
                </p>
                <Link href={study.href}>
                  <a className="inline-block text-[#2E8B57] font-medium hover:underline">
                    Read case study <ArrowRight className="inline h-4 w-4 ml-1" />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/case-studies">
            <Button className="bg-[#003366] text-white font-heading font-semibold px-8 py-3 hover:bg-opacity-90 transition-colors duration-300">
              View All Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
