import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, ChevronRight } from 'lucide-react';

// Import SVG images
import ecommerceSvg from '../../assets/case-studies/ecommerce.svg';
import aiSvg from '../../assets/case-studies/ai.svg';
import securitySvg from '../../assets/case-studies/security.svg';
import cloudSvg from '../../assets/case-studies/cloud.svg';

// Helper function to handle case study link clicks
const handleCaseStudyClick = (e, href) => {
  // If it's a hash link to the case studies page
  if (href.startsWith('/case-studies#')) {
    e.preventDefault();
    const hash = href.split('#')[1];
    window.location.href = `/case-studies#${hash}`;
  }
};

// Handle view all case studies click
const handleViewAllClick = (e) => {
  e.preventDefault();
  window.location.href = '/case-studies';
  // This ensures we go to the top of the page
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
};

const caseStudies = [
  {
    id: 1,
    title: 'Enterprise E-commerce Platform Migration',
    category: 'E-Commerce',
    client: 'RetailPlus',
    description: 'We helped RetailPlus migrate their e-commerce platform to AWS cloud and implemented AI-driven inventory management, resulting in a 35% increase in sales.',
    href: '/case-studies#retailplus',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    iconColor: 'text-blue-500'
  },
  {
    id: 2,
    title: 'Multilingual AI Chatbot Implementation',
    category: 'AI Solutions',
    client: 'ServiceNow Inc.',
    description: 'Developed and deployed a multilingual AI chatbot for ServiceNow Inc., reducing customer service costs by 40% and improving response times by 75%.',
    href: '/case-studies#servicenow',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-600',
    iconColor: 'text-violet-500'
  },
  {
    id: 3,
    title: 'Enterprise-Grade Security Infrastructure',
    category: 'Cybersecurity',
    client: 'FinSecure Bank',
    description: 'Implemented comprehensive cybersecurity solutions for FinSecure Bank, preventing potential data breaches and ensuring compliance with financial regulations.',
    href: '/case-studies#finsecure',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600',
    iconColor: 'text-amber-500'
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f7]/80 via-white to-white"></div>
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-blue-50 backdrop-blur-lg border border-blue-100 rounded-full px-4 py-1.5 text-blue-600 text-sm font-medium mb-6">
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
            Enterprise case studies
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 font-light">
            See how we've helped Dubai businesses achieve their goals through innovative cloud and AI solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div 
              key={study.id} 
              className="bg-white rounded-2xl shadow-sm border border-neutral-200/80 overflow-hidden hover:shadow-md hover:border-neutral-300/80 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Image with gradient background */}
              <div className={`w-full h-48 ${study.bgColor} flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
                {/* Decorative elements */}
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-white/10 opacity-30"></div>
                <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-white/10 opacity-20"></div>
                
                {study.category === 'E-Commerce' ? (
                  <img 
                    src={ecommerceSvg} 
                    alt={`${study.title} illustration`}
                    className={`w-32 h-32 object-contain ${study.iconColor}`}
                  />
                ) : study.category === 'AI Solutions' ? (
                  <img 
                    src={aiSvg} 
                    alt={`${study.title} illustration`}
                    className={`w-32 h-32 object-contain ${study.iconColor}`}
                  />
                ) : study.category === 'Cybersecurity' ? (
                  <img 
                    src={securitySvg} 
                    alt={`${study.title} illustration`}
                    className={`w-32 h-32 object-contain ${study.iconColor}`}
                  />
                ) : (
                  <img 
                    src={cloudSvg} 
                    alt={`${study.title} illustration`}
                    className={`w-32 h-32 object-contain ${study.iconColor}`}
                  />
                )}
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <span className={`${study.bgColor} ${study.textColor} text-xs font-medium px-3 py-1 rounded-full`}>
                    {study.category}
                  </span>
                  <span className="ml-3 text-neutral-500 text-sm">Client: {study.client}</span>
                </div>
                
                <h3 className="text-xl font-medium text-neutral-900 mb-3">{study.title}</h3>
                <p className="text-neutral-600 mb-6">
                  {study.description}
                </p>
                
                <div className="mt-auto">
                  <Link href={study.href} onClick={(e) => handleCaseStudyClick(e, study.href)}>
                    <Button 
                      variant="ghost" 
                      className={`${study.textColor} hover:bg-${study.bgColor.slice(3)} px-4 py-2 rounded-full border border-transparent hover:border-${study.textColor.slice(5)}/50 group`}
                    >
                      Read case study
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/case-studies" onClick={handleViewAllClick}>
            <Button className="bg-neutral-900 hover:bg-neutral-800 text-white rounded-full shadow-sm px-6">
              View All Case Studies
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
