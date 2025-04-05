import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';

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
    bgColor: 'bg-primary'
  },
  {
    id: 2,
    title: 'Multilingual AI Chatbot Implementation',
    category: 'AI Solutions',
    client: 'ServiceNow Inc.',
    description: 'Developed and deployed a multilingual AI chatbot for ServiceNow Inc., reducing customer service costs by 40% and improving response times by 75%.',
    href: '/case-studies#servicenow',
    bgColor: 'bg-corporate-accent'
  },
  {
    id: 3,
    title: 'Enterprise-Grade Security Infrastructure',
    category: 'Cybersecurity',
    client: 'FinSecure Bank',
    description: 'Implemented comprehensive cybersecurity solutions for FinSecure Bank, preventing potential data breaches and ensuring compliance with financial regulations.',
    href: '/case-studies#finsecure',
    bgColor: 'bg-corporate-dark'
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="section bg-neutral-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-4">
            Success Stories
          </div>
          <h2 className="heading-lg mb-4">
            Enterprise Case Studies
          </h2>
          <p className="text-body-lg text-neutral-600 mx-auto">
            See how we've helped enterprise businesses across various industries achieve their strategic goals through innovative cloud and AI solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="card card-hover h-full flex flex-col">
              {/* Image with gradient background */}
              <div className={`w-full h-48 ${study.bgColor} flex items-center justify-center p-6`}>
                {study.category === 'E-Commerce' ? (
                  <img 
                    src={ecommerceSvg} 
                    alt={`${study.title} illustration`}
                    className="w-32 h-32 object-contain"
                  />
                ) : study.category === 'AI Solutions' ? (
                  <img 
                    src={aiSvg} 
                    alt={`${study.title} illustration`}
                    className="w-32 h-32 object-contain"
                  />
                ) : study.category === 'Cybersecurity' ? (
                  <img 
                    src={securitySvg} 
                    alt={`${study.title} illustration`}
                    className="w-32 h-32 object-contain"
                  />
                ) : (
                  <img 
                    src={cloudSvg} 
                    alt={`${study.title} illustration`}
                    className="w-32 h-32 object-contain"
                  />
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                    {study.category}
                  </span>
                  <span className="ml-3 text-neutral-500 text-sm">Client: {study.client}</span>
                </div>
                <h3 className="heading-sm mb-3">{study.title}</h3>
                <p className="text-neutral-700 mb-5 text-sm">
                  {study.description}
                </p>
                <div className="mt-auto">
                  <Link href={study.href} onClick={(e) => handleCaseStudyClick(e, study.href)}>
                    <span className="inline-flex items-center text-primary font-medium cursor-pointer hover:underline group">
                      Read case study 
                      <ArrowRight className="inline h-4 w-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/case-studies" onClick={handleViewAllClick}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium">
              View All Case Studies
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
