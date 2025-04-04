import React from 'react';
import { Link } from 'wouter';
import { 
  Cloud, 
  ShoppingCart, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight,
  Server,
  Database,
  Bot
} from 'lucide-react';

// New services data with more enterprise-focused descriptions
const services = [
  {
    id: 1,
    title: 'Enterprise Cloud Infrastructure',
    description: 'Scalable, high-performance cloud solutions that adapt to your organization\'s evolving needs.',
    icon: Cloud,
    highlights: [
      'Multi-cloud architecture consulting',
      'AI-optimized scaling algorithms',
      'Edge computing integration'
    ],
    href: '/services#cloud',
    gradient: 'from-indigo-600 to-blue-700'
  },
  {
    id: 2,
    title: 'E-Commerce Optimization',
    description: 'Transform your digital commerce with AI-driven analytics and personalization.',
    icon: ShoppingCart,
    highlights: [
      'Predictive inventory management',
      'Intelligent customer journey mapping',
      'Cross-platform integration'
    ],
    href: '/services#ecommerce',
    gradient: 'from-teal-500 to-teal-700'
  },
  {
    id: 3,
    title: 'Advanced Analytics & AI',
    description: 'Turn complex data into actionable intelligence with our machine learning solutions.',
    icon: BarChart3,
    highlights: [
      'Predictive business analytics',
      'Custom ML model development',
      'Real-time data processing'
    ],
    href: '/services#analytics',
    gradient: 'from-purple-600 to-indigo-700'
  },
  {
    id: 4,
    title: 'Enterprise Cybersecurity',
    description: 'Protect your digital assets with our comprehensive security frameworks.',
    icon: ShieldCheck,
    highlights: [
      'Zero-trust security implementation',
      'Threat intelligence monitoring',
      'Compliance automation'
    ],
    href: '/services#security',
    gradient: 'from-blue-600 to-blue-800'
  }
];

// Supplementary features that appear below the main services
const supplementaryFeatures = [
  { 
    title: 'Distributed Computing',
    description: 'High-performance computing solutions for intensive workloads',
    icon: Server,
    gradient: 'from-indigo-500 to-indigo-700'
  },
  { 
    title: 'Database Management',
    description: 'Optimized data storage and retrieval systems',
    icon: Database,
    gradient: 'from-teal-500 to-teal-700'
  },
  { 
    title: 'AI Automation',
    description: 'Workflow automation through advanced AI systems',
    icon: Bot,
    gradient: 'from-purple-500 to-purple-700'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background elements for enterprise look */}
      <div className="absolute inset-0 bg-slate-50 tech-pattern opacity-30"></div>
      <div className="absolute top-40 -right-20 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-indigo-700 rounded-full bg-indigo-100">
            ENTERPRISE SOLUTIONS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-teal-600">
            Advanced Technology Solutions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-teal-500 rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl text-center">
            Our suite of enterprise-grade services delivers cutting-edge technology solutions that drive innovation, efficiency, and security for your organization.
          </p>
        </div>
        
        {/* Main services with modern, futuristic cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="futuristic-border bg-white rounded-xl shadow-md service-card overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${service.gradient} w-full`}></div>
              <div className="p-6">
                <div className="flex items-start mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shrink-0 shadow-md`}>
                    {service.icon && React.createElement(service.icon, { className: "h-6 w-6" })}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2 text-slate-800">{service.title}</h3>
                    <p className="text-slate-600">{service.description}</p>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-4 mb-6">
                  <ul className="space-y-3">
                    {service.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-gradient-to-r from-indigo-500 to-teal-500 flex items-center justify-center text-white shrink-0 mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-slate-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link href={service.href}>
                  <span className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors cursor-pointer group">
                    View solution details
                    <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Supplementary features */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-10">
          <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Additional Enterprise Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supplementaryFeatures.map((feature, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-4 border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="flex items-center mb-3">
                  <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shrink-0 shadow-sm`}>
                    {feature.icon && React.createElement(feature.icon, { className: "h-4 w-4" })}
                  </div>
                  <h4 className="ml-3 font-medium text-slate-800">{feature.title}</h4>
                </div>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enterprise-focused CTA */}
        <div className="text-center">
          <Link href="/services">
            <span className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-teal-500 text-white font-medium px-6 py-3 rounded-md hover:shadow-lg hover:from-indigo-700 hover:to-teal-600 transition-all cursor-pointer">
              Explore All Enterprise Solutions
              <ArrowRight className="h-4 w-4 ml-2" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
