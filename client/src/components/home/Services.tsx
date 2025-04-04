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
  Check,
  ExternalLink
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
      'Cloud migration & optimization',
      'Hybrid cloud architecture'
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
      'Inventory management',
      'Customer experience optimization'
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
      'Performance metrics',
      'Data visualization solutions'
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
      'Security audits',
      'Data loss prevention'
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
    <section id="services" className="section bg-neutral-50 border-y border-neutral-200">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-4">
            Enterprise Solutions
          </div>
          <h2 className="heading-lg mb-4">
            Advanced Technology Solutions for Enterprise
          </h2>
          <p className="text-body-lg text-neutral-600 mx-auto">
            We provide comprehensive technology solutions tailored for the complex needs of global enterprises and organizations seeking to optimize their operations.
          </p>
        </div>
        
        {/* Main services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="card card-hover overflow-hidden border group"
            >
              {/* Card header with accent line */}
              <div className="h-1 w-full bg-primary/80 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-corporate-accent opacity-80 group-hover:translate-x-0 -translate-x-full transition-transform duration-700"></div>
              </div>
              
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-5">
                  <div className="feature-icon">
                    {service.icon && React.createElement(service.icon, { className: "h-5 w-5" })}
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-md mb-3 text-neutral-900">{service.title}</h3>
                    <p className="text-neutral-700 mb-5">{service.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="highlight-item mb-0">
                          <Check className="highlight-icon" />
                          <span className="text-neutral-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-auto pt-2">
                      <Link href={service.href}>
                        <Button 
                          variant="ghost" 
                          className="text-primary hover:bg-primary/5 p-0 h-auto font-medium group"
                        >
                          Learn more
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional capabilities */}
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 sm:p-10 mb-16">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h3 className="heading-md mb-3">Additional Enterprise Capabilities</h3>
            <p className="text-neutral-600">
              Our comprehensive suite of technology services supports your core business operations with industry-leading infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            {additionalCapabilities.map((capability, index) => (
              <div key={index} className="text-center p-5 rounded-lg hover:bg-neutral-50 transition-colors">
                <div className="mx-auto feature-icon w-14 h-14 mb-4">
                  {capability.icon && React.createElement(capability.icon, { className: "h-6 w-6" })}
                </div>
                <h4 className="heading-sm mb-3">{capability.title}</h4>
                <p className="text-neutral-600 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enterprise case study highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2 bg-white rounded-lg shadow-sm border border-neutral-200 p-6 md:p-8 lg:p-10">
            <div className="sm:flex items-start gap-6">
              <div className="mb-6 sm:mb-0 sm:w-24 rounded-lg bg-primary/10 h-24 flex items-center justify-center flex-shrink-0">
                <div className="text-primary text-4xl font-bold">93%</div>
              </div>
              <div>
                <div className="text-sm text-primary font-medium uppercase tracking-wider mb-2">Case Study</div>
                <h3 className="heading-md mb-3">Transforming Enterprise Infrastructure</h3>
                <p className="text-neutral-700 mb-4">
                  Our cloud solutions helped a Fortune 500 company achieve a 93% improvement in operational efficiency while reducing infrastructure costs by 45% within the first year.
                </p>
                <Link href="/case-studies">
                  <Button
                    variant="outline"
                    size="sm"
                    className="group"
                  >
                    Read Case Study
                    <ExternalLink className="ml-2 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-primary text-white rounded-lg shadow-sm p-6 md:p-8 flex flex-col">
            <h3 className="heading-sm mb-4">Enterprise Consultation</h3>
            <p className="text-white/80 mb-6">
              Our experts provide tailored consultation to assess your organization's needs and craft a strategic technology roadmap.
            </p>
            <div className="mt-auto">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-white/90 text-sm">Comprehensive assessment</span>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-white/90 text-sm">Tailored recommendations</span>
              </div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-white/90 text-sm">Strategic implementation</span>
              </div>
              <Link href="/contact">
                <Button className="w-full justify-center bg-white text-primary hover:bg-white/90">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Enterprise-focused CTA */}
        <div className="bg-gradient-to-r from-corporate-dark to-corporate-blue text-white rounded-lg shadow-md p-8 md:p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 hero-pattern opacity-5"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="heading-md mb-4 text-white">Ready to Transform Your Enterprise Technology?</h3>
            <p className="text-white/80 text-lg mb-8 mx-auto">
              Our team of experts is ready to help you identify the right solutions for your organization's unique challenges and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-medium w-full sm:w-auto justify-center">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto justify-center">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
