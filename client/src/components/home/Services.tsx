import React from 'react';
import { Link } from 'wouter';
import { 
  Cloud, 
  Database,
  Server,
  Bot,
  MessageSquare,
  Zap,
  Workflow,
  BarChart3, 
  ShieldCheck, 
  ArrowRight,
  Check,
  ExternalLink,
  Building2,
  Hotel,
  UtensilsCrossed,
  ShoppingBag,
  Car,
  Plane
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedElement } from '@/components/ui/animated-element';

// Helper function to handle case study link clicks
const handleCaseStudyClick = (e, href) => {
  // If it's a hash link to the case studies page
  if (href.startsWith('/case-studies#')) {
    e.preventDefault();
    const hash = href.split('#')[1];
    window.location.href = `/case-studies#${hash}`;
  }
};

// Services data from the draft
const services = [
  {
    id: 1,
    title: 'Cloud Infrastructure Services',
    description: 'Build your digital future on a foundation you can trust across AWS, GCP, Azure, On-Premise & Hybrid environments.',
    icon: Cloud,
    features: [
      'Cloud Migration & Application Hosting',
      'Data Storage & Backup Solutions',
      'Networking & Security',
      'Infrastructure as Code (Terraform)'
    ],
    href: '/services#cloud'
  },
  {
    id: 2,
    title: 'AI-Powered Business Solutions',
    description: 'Leverage the power of Artificial Intelligence to automate tasks, enhance customer interactions, and unlock new insights.',
    icon: Bot,
    features: [
      'AI Chatbots (WhatsApp & Web)',
      'AI-Driven Automation',
      'Intelligent AI Agents',
      'Custom LLM Applications'
    ],
    href: '/ai-solutions'
  },
  {
    id: 3,
    title: 'Custom Infrastructure & Edge AI',
    description: 'For unique requirements, we offer bespoke solutions including Edge AI systems and custom IT laboratories.',
    icon: Server,
    features: [
      'Edge Computing Solutions',
      'Custom IT Labs',
      'On-Premise Infrastructure',
      'Specialized Development Environments'
    ],
    href: '/services#custom'
  },
  {
    id: 4,
    title: 'Cost Optimization',
    description: 'Analyze and optimize your cloud spending to ensure maximum ROI while maintaining performance and reliability.',
    icon: BarChart3,
    features: [
      'Cloud Spend Analysis',
      'Resource Rightsizing',
      'Reserved Instance Planning',
      'Continuous Monitoring'
    ],
    href: '/services#optimization'
  }
];

// Industry solutions
const industries = [
  { 
    title: 'Real Estate',
    description: 'Scalable hosting for property listings and virtual tours with AI lead capture',
    icon: Building2
  },
  { 
    title: 'Hospitality',
    description: 'Reliable booking engines and AI chatbots for guest services',
    icon: Hotel
  },
  { 
    title: 'Food & Beverage',
    description: 'Online ordering systems and inventory management automation',
    icon: UtensilsCrossed
  },
  { 
    title: 'E-commerce',
    description: 'High-performance store hosting with AI-powered customer support',
    icon: ShoppingBag
  },
  { 
    title: 'Car Rental',
    description: 'Booking systems and fleet management solutions',
    icon: Car
  },
  { 
    title: 'Travel Agencies',
    description: 'Reservation systems and AI travel planning assistants',
    icon: Plane
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-neutral-50 border-y border-neutral-200">
      <div className="container">
        <AnimatedElement animation="fade" className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-4">
            Our Services
          </div>
          <h2 className="heading-lg mb-4">
            Comprehensive Cloud & AI Solutions
          </h2>
          <p className="text-body-lg text-neutral-600 mx-auto">
            We offer a comprehensive suite of cloud and AI services designed to meet the evolving needs of UAE businesses, combining deep technical knowledge with a focus on practical application and business outcomes.
          </p>
        </AnimatedElement>
        
        {/* Main services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <AnimatedElement 
              key={service.id}
              animation="slide"
              delay={(index % 2 === 0) ? '100' : '200'}
            >
              <div className="card card-hover overflow-hidden border group h-full">
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
            </AnimatedElement>
          ))}
        </div>
        
        {/* Industry Solutions */}
        <AnimatedElement animation="fade" className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 sm:p-10 mb-16">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h3 className="heading-md mb-3">Industries We Serve</h3>
            <p className="text-neutral-600">
              We combine deep technical expertise with industry-specific insights to deliver solutions that address the unique challenges in your sector
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {industries.map((industry, index) => (
              <AnimatedElement 
                key={index} 
                animation="scale" 
                delay={(index % 3 === 0) ? '100' : (index % 3 === 1) ? '200' : '300'}
              >
                <div className="text-center p-5 rounded-lg hover:bg-neutral-50 transition-colors h-full">
                  <div className="mx-auto feature-icon w-14 h-14 mb-4">
                    {industry.icon && React.createElement(industry.icon, { className: "h-6 w-6" })}
                  </div>
                  <h4 className="heading-sm mb-3">{industry.title}</h4>
                  <p className="text-neutral-600 text-sm">{industry.description}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </AnimatedElement>
        
        {/* Case study highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <AnimatedElement animation="slide" delay="100" className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 md:p-8 lg:p-10 h-full">
              <div className="sm:flex items-start gap-6">
                <div className="mb-6 sm:mb-0 sm:w-24 rounded-lg bg-primary/10 h-24 flex items-center justify-center flex-shrink-0">
                  <div className="text-primary text-4xl font-bold">24/7</div>
                </div>
                <div>
                  <div className="text-sm text-primary font-medium uppercase tracking-wider mb-2">Success Story</div>
                  <h3 className="heading-md mb-3">AI Chatbot for Hospitality</h3>
                  <p className="text-neutral-700 mb-4">
                    Our WhatsApp chatbot solution helped a Dubai hotel increase bookings by 35% while providing 24/7 guest support and reducing staff workload.
                  </p>
                  <Link href="/case-studies#servicenow" onClick={(e) => handleCaseStudyClick(e, "/case-studies#servicenow")}>
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
          </AnimatedElement>
          
          <AnimatedElement animation="slide" delay="200">
            <div className="bg-primary text-white rounded-lg shadow-sm p-6 md:p-8 flex flex-col h-full">
              <h3 className="heading-sm mb-4">Why Partner with YAFA?</h3>
              <p className="text-white/80 mb-6">
                Our unique advantages for UAE businesses deliver tangible results for your organization.
              </p>
              <div className="mt-auto">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white/90 text-sm">15+ years technical expertise</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white/90 text-sm">Practical AI applications</span>
                </div>
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white/90 text-sm">Multi-lingual (AR/EN/TR)</span>
                </div>
                <Link href="/contact">
                  <Button className="w-full justify-center bg-white text-primary hover:bg-white/90">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedElement>
        </div>
        
        {/* CTA */}
        <AnimatedElement animation="fade" className="mb-0">
          <div className="bg-gradient-to-r from-[#3480cc] to-[#1a65b3] text-white rounded-lg shadow-lg p-8 md:p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 hero-pattern opacity-10"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="heading-md md:heading-lg mb-4 text-white font-bold" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Ready to Leverage Cloud & AI?</h3>
              <p className="text-white/95 text-base md:text-lg mb-8 mx-auto max-w-2xl font-medium">
                Schedule your complimentary consultation today and discuss your technical challenges with our Dubai-based experts. Transform your business with practical AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://calendly.com/ferasawadi90/30min" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-[#3480cc] hover:bg-white/90 font-semibold w-full sm:w-auto justify-center shadow-md">
                    Schedule Free Consultation
                    <span className="ml-2 text-xs bg-[#3480cc]/20 text-[#3480cc] px-2 py-0.5 rounded font-medium">Calendly →</span>
                  </Button>
                </a>
                <Link href="/ai-solutions">
                  <Button size="lg" variant="outline" className="border-white border-2 text-white hover:bg-white/20 w-full sm:w-auto justify-center font-semibold shadow-md">
                    Explore AI Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Services;
