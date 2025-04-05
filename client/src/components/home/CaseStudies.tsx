import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, ChevronRight, ArrowUpRight } from 'lucide-react';

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
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f7]/90 via-white to-white"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-30"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-violet-50 blur-3xl opacity-30"></div>
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto mb-24">
          <div className="text-center mb-16 relative">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="inline-block bg-blue-50 backdrop-blur-lg border border-blue-100 rounded-full px-4 py-1.5 text-blue-600 text-sm font-medium">
                  CLIENT SUCCESS
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-medium text-neutral-900 tracking-tight leading-tight">
              Real results for<br />real businesses
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-blue-200 via-violet-300 to-blue-200 mx-auto my-8"></div>
            <p className="text-lg md:text-xl text-neutral-600 font-light max-w-2xl mx-auto">
              See how we've transformed Dubai businesses with innovative cloud and AI solutions that deliver measurable outcomes.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-1.5 text-sm bg-white text-neutral-700">
              <span className="block h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
              Cloud Solutions
            </span>
            <span className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-1.5 text-sm bg-white text-neutral-700">
              <span className="block h-2 w-2 rounded-full bg-violet-500 mr-2"></span>
              AI & Automation
            </span>
            <span className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-1.5 text-sm bg-white text-neutral-700">
              <span className="block h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
              Cybersecurity
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div 
              key={study.id} 
              className="bg-white overflow-hidden flex flex-col h-full group relative"
            >
              <div className="absolute inset-0 border border-neutral-200/80 rounded-2xl transition-all duration-300 group-hover:border-neutral-300/90 group-hover:shadow-lg"></div>
              
              {/* Card Header */}
              <div className="relative overflow-hidden p-5 flex items-start">
                {/* Category */}
                <div className={`${study.bgColor} ${study.textColor} text-xs font-medium px-3 py-1 rounded-full mb-5 inline-block`}>
                  {study.category}
                </div>
              </div>
              
              {/* Card Content */}
              <div className="px-5 pb-5 flex-grow flex flex-col">
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-xl font-medium text-neutral-900 pr-3 leading-tight">{study.title}</h3>
                  
                  <div className={`flex-shrink-0 ${study.bgColor} rounded-full p-3 relative mt-0.5`}>
                    {study.category === 'E-Commerce' ? (
                      <img 
                        src={ecommerceSvg} 
                        alt={`${study.title} illustration`}
                        className={`w-5 h-5 object-contain ${study.iconColor}`}
                      />
                    ) : study.category === 'AI Solutions' ? (
                      <img 
                        src={aiSvg} 
                        alt={`${study.title} illustration`}
                        className={`w-5 h-5 object-contain ${study.iconColor}`}
                      />
                    ) : study.category === 'Cybersecurity' ? (
                      <img 
                        src={securitySvg} 
                        alt={`${study.title} illustration`}
                        className={`w-5 h-5 object-contain ${study.iconColor}`}
                      />
                    ) : (
                      <img 
                        src={cloudSvg} 
                        alt={`${study.title} illustration`}
                        className={`w-5 h-5 object-contain ${study.iconColor}`}
                      />
                    )}
                  </div>
                </div>
                
                <div className="mb-3 flex items-center">
                  <div className="text-neutral-500 text-sm flex items-center">
                    <span className={`mr-2 h-0.5 w-6 ${study.bgColor}`}></span>
                    Client: <span className="text-neutral-800 ml-1">{study.client}</span>
                  </div>
                </div>
                
                {/* Results Section (highlighted) */}
                <div className={`mb-6 ${study.bgColor} bg-opacity-20 rounded-xl p-4 relative`}>
                  <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-30"></div>
                  <div className="flex flex-col gap-y-2">
                    {/* Extract and display key metrics from description */}
                    {study.category === 'E-Commerce' && (
                      <div className="flex items-baseline">
                        <span className="text-2xl font-medium mr-2 text-blue-700">35%</span>
                        <span className="text-neutral-700 text-sm">increase in sales</span>
                      </div>
                    )}
                    {study.category === 'AI Solutions' && (
                      <div className="flex flex-wrap gap-3">
                        <div className="flex items-baseline">
                          <span className="text-2xl font-medium mr-2 text-violet-700">40%</span>
                          <span className="text-neutral-700 text-sm">lower service costs</span>
                        </div>
                        <div className="flex items-baseline">
                          <span className="text-2xl font-medium mr-2 text-violet-700">75%</span>
                          <span className="text-neutral-700 text-sm">faster response</span>
                        </div>
                      </div>
                    )}
                    {study.category === 'Cybersecurity' && (
                      <div className="flex items-baseline">
                        <span className="text-2xl font-medium mr-2 text-amber-700">100%</span>
                        <span className="text-neutral-700 text-sm">compliance achieved</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <p className="text-neutral-600 text-sm mb-6">
                  {study.description}
                </p>
                
                <div className="mt-auto">
                  <Link href={study.href} onClick={(e) => handleCaseStudyClick(e, study.href)}>
                    <Button 
                      variant="ghost" 
                      className={`${study.textColor} hover:bg-${study.bgColor.slice(3)} px-4 py-2 rounded-full border border-transparent hover:border-${study.textColor.slice(5)}/50 group text-sm w-full justify-center`}
                    >
                      Read full case study
                      <ArrowUpRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link href="/case-studies" onClick={handleViewAllClick}>
            <Button className="bg-neutral-900 hover:bg-neutral-800 text-white rounded-full shadow-sm font-normal">
              View all case studies
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
