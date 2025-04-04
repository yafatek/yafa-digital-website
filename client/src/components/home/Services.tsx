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
  Bot,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Enterprise services data
const services = [
  {
    id: 1,
    title: 'Cloud Infrastructure',
    description: 'Enterprise-grade cloud solutions optimized for performance, security, and reliability.',
    icon: Cloud,
    features: [
      'Multi-cloud management',
      'Private cloud development',
      'Cloud migration & optimization'
    ],
    href: '/services#cloud'
  },
  {
    id: 2,
    title: 'E-Commerce Solutions',
    description: 'Comprehensive e-commerce platforms with advanced analytics and personalization.',
    icon: ShoppingCart,
    features: [
      'Platform integration',
      'Payment processing',
      'Inventory management'
    ],
    href: '/services#ecommerce'
  },
  {
    id: 3,
    title: 'Business Intelligence',
    description: 'Data analytics solutions that transform raw data into actionable business insights.',
    icon: BarChart3,
    features: [
      'Predictive analytics',
      'Real-time dashboards',
      'Performance metrics'
    ],
    href: '/services#analytics'
  },
  {
    id: 4,
    title: 'Enterprise Security',
    description: 'Comprehensive security solutions to protect critical business assets and data.',
    icon: ShieldCheck,
    features: [
      'Threat detection & response',
      'Compliance management',
      'Security audits'
    ],
    href: '/services#security'
  }
];

// Additional capabilities
const additionalCapabilities = [
  { 
    title: 'Advanced Computing',
    description: 'High-performance computing infrastructure for demanding workloads',
    icon: Server
  },
  { 
    title: 'Data Management',
    description: 'Enterprise database solutions with optimization and maintenance',
    icon: Database
  },
  { 
    title: 'Workflow Automation',
    description: 'Business process automation through AI and machine learning',
    icon: Bot
  }
];

const Services = () => {
  return (
    <section id="services" className="content-section bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Services</span>
          <h2 className="section-title mt-2">Enterprise Technology Solutions</h2>
          <p className="section-subtitle text-center">
            We provide comprehensive technology solutions tailored to meet the complex needs of modern enterprises.
          </p>
        </div>
        
        {/* Main services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="enterprise-border bg-white shadow-sm service-card"
            >
              <div className="p-6">
                <div className="flex items-start">
                  <div className="feature-icon bg-primary/10">
                    {service.icon && React.createElement(service.icon, { className: "h-5 w-5 text-primary" })}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2 text-slate-800">{service.title}</h3>
                    <p className="text-slate-600 mb-4">{service.description}</p>
                    
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-slate-700">
                          <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={service.href}>
                      <Button 
                        variant="ghost" 
                        className="text-primary hover:bg-primary/5 p-0 h-auto font-medium"
                      >
                        Learn more
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional capabilities */}
        <div className="bg-white rounded-md border border-slate-200 p-8 mb-12 subtle-shadow">
          <h3 className="text-xl font-bold text-slate-800 mb-2 text-center">Additional Capabilities</h3>
          <p className="text-slate-600 text-center mb-8">Comprehensive technology services to support your core business operations</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalCapabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto feature-icon mb-4 w-14 h-14 rounded-lg">
                  {capability.icon && React.createElement(capability.icon, { className: "h-6 w-6 text-primary mx-auto" })}
                </div>
                <h4 className="font-bold text-slate-800 mb-2">{capability.title}</h4>
                <p className="text-slate-600 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enterprise-focused CTA */}
        <div className="bg-primary/5 rounded-md border border-primary/10 p-8 text-center">
          <h3 className="text-xl font-bold text-slate-800 mb-3">Ready to enhance your enterprise technology?</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to help you identify the right solutions for your business needs.
          </p>
          <Link href="/services">
            <Button className="bg-primary text-white font-medium">
              View All Services
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
