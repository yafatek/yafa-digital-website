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
  Plane,
  ChevronRight
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
    <section id="services" className="py-20 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-primary/5 backdrop-blur-lg border border-primary/10 rounded-full px-4 py-1.5 text-primary/90 text-sm font-medium mb-6">
            Enterprise Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
            Cloud & AI services for your business
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 font-light">
            We combine technical expertise with industry-specific insights to deliver solutions tailored for UAE businesses.
          </p>
        </div>
        
        {/* Featured services - Apple style cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-white rounded-2xl shadow-sm border border-neutral-200/80 overflow-hidden group hover:shadow-lg hover:border-neutral-300/80 transition-all duration-300 h-full"
            >
              <div className="p-8 md:p-10">
                <div className={`w-14 h-14 rounded-2xl bg-${index === 0 ? 'blue' : index === 1 ? 'violet' : index === 2 ? 'amber' : 'emerald'}-50 flex items-center justify-center shadow-sm mb-6 text-${index === 0 ? 'blue' : index === 1 ? 'violet' : index === 2 ? 'amber' : 'emerald'}-500`}>
                  {service.icon && React.createElement(service.icon, { className: "h-7 w-7" })}
                </div>
                
                <h3 className="text-2xl font-medium text-neutral-900 mb-4">{service.title}</h3>
                <p className="text-neutral-600 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-${index === 0 ? 'blue' : index === 1 ? 'violet' : index === 2 ? 'amber' : 'emerald'}-50 flex items-center justify-center mt-0.5 mr-3`}>
                        <Check className={`h-3 w-3 text-${index === 0 ? 'blue' : index === 1 ? 'violet' : index === 2 ? 'amber' : 'emerald'}-500`} />
                      </div>
                      <span className="text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <Link href={service.href}>
                    <Button 
                      variant="ghost" 
                      className={`text-${index === 0 ? 'blue' : index === 1 ? 'violet' : index === 2 ? 'amber' : 'emerald'}-500 hover:bg-${index === 0 ? 'blue' : index === 1 ? 'violet' : index === 2 ? 'amber' : 'emerald'}-50 px-4 py-2 rounded-full border border-transparent hover:border-${index === 0 ? 'blue' : index === 1 ? 'violet' : index === 2 ? 'amber' : 'emerald'}-200/50 group`}
                    >
                      Learn more
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Industry Solutions - Stripe style */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-3xl font-medium text-neutral-900 mb-4">Industries We Serve</h3>
            <p className="text-neutral-600">
              Tailored solutions for Dubai's diverse business landscape
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-b from-neutral-50 to-white rounded-2xl border border-neutral-200/80 p-6 hover:shadow-md hover:border-neutral-300/80 transition-all duration-300 hover:scale-[1.01] h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-5 text-neutral-500">
                  {industry.icon && React.createElement(industry.icon, { className: "h-6 w-6" })}
                </div>
                <h4 className="text-xl font-medium text-neutral-900 mb-3">{industry.title}</h4>
                <p className="text-neutral-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Case study and Partnership - Apple style split section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-neutral-200/80 p-8 md:p-10 hover:shadow-lg hover:border-neutral-300/80 transition-all duration-300">
            <div className="sm:flex items-start gap-8">
              <div className="mb-6 sm:mb-0 sm:w-28 rounded-2xl bg-blue-50 h-28 flex items-center justify-center flex-shrink-0">
                <div className="text-blue-500 text-4xl font-bold">24/7</div>
              </div>
              <div>
                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full mb-4">
                  Success Story
                </div>
                <h3 className="text-2xl font-medium text-neutral-900 mb-4">AI Chatbot for Hospitality</h3>
                <p className="text-neutral-600 mb-6">
                  Our WhatsApp chatbot solution helped a Dubai hotel increase bookings by 35% while providing 24/7 guest support and reducing staff workload.
                </p>
                <Link href="/case-studies#servicenow" onClick={(e) => handleCaseStudyClick(e, "/case-studies#servicenow")}>
                  <Button
                    variant="outline"
                    className="rounded-full border-neutral-200 hover:border-neutral-300 bg-white text-neutral-800"
                  >
                    Read Case Study
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-b from-[#f8f8fc] to-white rounded-2xl shadow-sm border border-neutral-200/80 p-8 md:p-10 flex flex-col">
            <h3 className="text-xl font-medium text-neutral-900 mb-4">Why Partner with YAFA?</h3>
            <p className="text-neutral-600 mb-6">
              Our unique advantages for UAE businesses
            </p>
            <div className="mt-2 space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-violet-50 flex items-center justify-center mr-3">
                  <Check className="h-3 w-3 text-violet-500" />
                </div>
                <span className="text-neutral-700">15+ years technical expertise</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-violet-50 flex items-center justify-center mr-3">
                  <Check className="h-3 w-3 text-violet-500" />
                </div>
                <span className="text-neutral-700">Practical AI applications</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-violet-50 flex items-center justify-center mr-3">
                  <Check className="h-3 w-3 text-violet-500" />
                </div>
                <span className="text-neutral-700">Multi-lingual (AR/EN/TR)</span>
              </div>
            </div>
            <div className="mt-auto">
              <Link href="/contact">
                <Button className="w-full justify-center rounded-full bg-violet-600 hover:bg-violet-700 text-white">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* CTA - Apple/Stripe style */}
        <div className="bg-gradient-to-b from-[#f5f5f7] to-white rounded-2xl border border-neutral-200/80 p-8 md:p-12 text-center relative overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
          <div className="absolute -left-24 -bottom-24 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl opacity-50"></div>
          <div className="absolute -right-24 -top-24 w-64 h-64 rounded-full bg-violet-500/10 blur-3xl opacity-50"></div>
          
          <div className="relative max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-medium text-neutral-900 mb-6 tracking-tight">
              Ready to elevate your business with AI?
            </h3>
            <p className="text-neutral-600 text-lg mb-10 mx-auto">
              Schedule your complimentary consultation today and discuss your technical challenges with our Dubai-based experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/ferasawadi90/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white border-0 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 w-full sm:w-auto px-8 rounded-full">
                  Book Free Consultation
                </Button>
              </a>
              <Link href="/ai-solutions">
                <Button size="lg" variant="outline" className="border-neutral-200 hover:border-neutral-300 bg-white text-neutral-800 w-full sm:w-auto px-8 rounded-full">
                  Explore AI Solutions
                  <ChevronRight className="ml-1 h-4 w-4" />
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
