import React from 'react';
import { Link } from 'wouter';
import { 
  Building2, 
  Hotel, 
  UtensilsCrossed,
  ShoppingBag,
  Car,
  Plane,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedElement } from '@/components/ui/animated-element';

// Industry data
const industries = [
  {
    id: 1,
    title: 'Real Estate',
    description: 'Empower your real estate business with scalable hosting for property listings, virtual tours, and AI-powered lead capture systems that work around the clock.',
    icon: Building2,
    features: [
      '99.9%+ uptime for property listings',
      'AI lead generation and qualification',
      'Virtual tour hosting solutions',
      'Automated reporting systems'
    ],
    href: '/services#real-estate'
  },
  {
    id: 2,
    title: 'Hospitality',
    description: 'Enhance guest experiences and streamline operations with reliable booking engines, property management systems, and AI chatbots for 24/7 guest service.',
    icon: Hotel,
    features: [
      'Reliable hotel booking systems',
      'WhatsApp chatbots for guest services',
      'PMS integration and hosting',
      'Automated guest communications'
    ],
    href: '/services#hospitality'
  },
  {
    id: 3,
    title: 'Food & Beverage',
    description: 'Serve your customers better with robust online ordering systems, inventory management automation, and AI-driven customer engagement tools.',
    icon: UtensilsCrossed,
    features: [
      'Online ordering systems',
      'Inventory level automation',
      'WhatsApp ordering bots',
      'Kitchen management systems'
    ],
    href: '/services#food-beverage'
  },
  {
    id: 4,
    title: 'E-commerce',
    description: 'Build your online retail presence on rock-solid infrastructure with AI-powered customer support, ensuring performance even during peak sales periods.',
    icon: ShoppingBag,
    features: [
      'High-performance store hosting',
      'AI-powered customer support',
      'Order fulfillment automation',
      'Product recommendation engines'
    ],
    href: '/services#e-commerce'
  }
];

// Additional industries with simpler display
const additionalIndustries = [
  {
    title: 'Car Rental',
    description: 'Comprehensive booking systems and fleet management solutions for car rental businesses.',
    icon: Car,
    href: '/services#car-rental'
  },
  {
    title: 'Travel Agencies',
    description: 'Reservation systems and AI travel planning assistants to enhance your travel agency services.',
    icon: Plane,
    href: '/services#travel-agencies'
  }
];

const Industries = () => {
  return (
    <section id="industries" className="section bg-white">
      <div className="container">
        <AnimatedElement animation="fade" className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-4">
            Industry Solutions
          </div>
          <h2 className="heading-lg mb-4">
            Tailored Solutions for Your Industry
          </h2>
          <p className="text-body-lg text-neutral-600 mx-auto">
            We combine our deep technical expertise with industry-specific insights to deliver solutions that address the unique challenges and opportunities within your sector.
          </p>
        </AnimatedElement>
        
        {/* Featured industries grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {industries.map((industry, index) => (
            <AnimatedElement 
              key={industry.id}
              animation="slide"
              delay={(index % 2 === 0) ? '100' : '200'}
            >
              <div className="card card-hover overflow-hidden border group h-full">
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-5">
                    <div className="feature-icon">
                      {industry.icon && React.createElement(industry.icon, { className: "h-5 w-5" })}
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-md mb-3 text-neutral-900">{industry.title}</h3>
                      <p className="text-neutral-700 mb-5">{industry.description}</p>
                      
                      <ul className="mb-6 space-y-2">
                        {industry.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-neutral-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-auto pt-2">
                        <Link href={industry.href}>
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
        
        {/* Additional industries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {additionalIndustries.map((industry, index) => (
            <AnimatedElement animation="fade" delay={(index % 2 === 0) ? '100' : '200'} key={index}>
              <div className="flex items-start p-6 rounded-lg border border-neutral-200 bg-neutral-50/50 hover:shadow-sm transition-shadow">
                <div className="feature-icon flex-shrink-0 mr-4">
                  {industry.icon && React.createElement(industry.icon, { className: "h-5 w-5" })}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{industry.title}</h3>
                  <p className="text-neutral-600 text-sm mb-4">{industry.description}</p>
                  <Link href={industry.href}>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-primary hover:bg-primary/5 p-0 h-auto text-sm font-medium group"
                    >
                      Learn more
                      <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
        
        {/* CTA */}
        <AnimatedElement animation="fade" className="max-w-3xl mx-auto text-center">
          <h3 className="heading-md mb-4">Don't see your industry?</h3>
          <p className="text-neutral-600 mb-6">
            Our technology solutions can be adapted to virtually any business sector. Contact us to discuss your specific needs.
          </p>
          <Link href="/contact">
            <Button size="lg" className="font-medium">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Industries; 