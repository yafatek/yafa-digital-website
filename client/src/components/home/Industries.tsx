import React from 'react';
import { Link } from 'wouter';
import { 
  Building2, 
  Hotel, 
  UtensilsCrossed,
  ShoppingBag,
  Car,
  Plane,
  ArrowRight,
  ChevronRight,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    href: '/services#real-estate',
    color: 'blue'
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
    href: '/services#hospitality',
    color: 'violet'
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
    href: '/services#food-beverage',
    color: 'amber'
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
    href: '/services#e-commerce',
    color: 'emerald'
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
    <section id="industries" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#f5f5f7]/80 to-transparent"></div>
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-amber-50 backdrop-blur-lg border border-amber-100 rounded-full px-4 py-1.5 text-amber-600 text-sm font-medium mb-6">
            Industry Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
            Tailored for your industry
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 font-light">
            We combine technical expertise with industry knowledge to deliver solutions crafted for your specific sector.
          </p>
        </div>
        
        {/* Featured industries grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {industries.map((industry, index) => (
            <div 
              key={industry.id}
              className="bg-white rounded-2xl shadow-sm border border-neutral-200/80 overflow-hidden hover:shadow-md hover:border-neutral-300/80 transition-all duration-300 group h-full"
            >
              <div className="p-8 md:p-10">
                <div className={`w-14 h-14 rounded-2xl bg-${industry.color}-50 flex items-center justify-center shadow-sm mb-6 text-${industry.color}-500`}>
                  {industry.icon && React.createElement(industry.icon, { className: "h-7 w-7" })}
                </div>
                
                <h3 className="text-2xl font-medium text-neutral-900 mb-4">{industry.title}</h3>
                <p className="text-neutral-600 mb-6">{industry.description}</p>
                
                <div className="space-y-3 mb-8">
                  {industry.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-${industry.color}-50 flex items-center justify-center mt-0.5 mr-3`}>
                        <Check className={`h-3 w-3 text-${industry.color}-500`} />
                      </div>
                      <span className="text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <Link href={industry.href}>
                    <Button 
                      variant="ghost" 
                      className={`text-${industry.color}-500 hover:bg-${industry.color}-50 px-4 py-2 rounded-full border border-transparent hover:border-${industry.color}-200/50 group`}
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
        
        {/* Additional industries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {additionalIndustries.map((industry, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-neutral-50 to-white rounded-2xl border border-neutral-200/80 p-6 hover:shadow-md hover:border-neutral-300/80 transition-all duration-300 h-full flex items-start"
            >
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mr-5 text-neutral-500 flex-shrink-0">
                {industry.icon && React.createElement(industry.icon, { className: "h-6 w-6" })}
              </div>
              <div>
                <h3 className="text-xl font-medium text-neutral-900 mb-3">{industry.title}</h3>
                <p className="text-neutral-600 mb-4">{industry.description}</p>
                <Link href={industry.href}>
                  <Button 
                    variant="ghost" 
                    className="text-neutral-700 hover:bg-neutral-100 px-3 py-1.5 rounded-full text-sm"
                  >
                    Learn more
                    <ChevronRight className="h-3.5 w-3.5 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-b from-[#f5f5f7] to-white rounded-2xl border border-neutral-200/80 p-8 md:p-12 relative overflow-hidden shadow-sm">
            <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-blue-50 blur-3xl opacity-30"></div>
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-violet-50 blur-3xl opacity-30"></div>
            
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-medium text-neutral-900 mb-4">Don't see your industry?</h3>
              <p className="text-neutral-600 mb-8">
                Our technology solutions can be adapted to virtually any business sector. Contact us to discuss your specific needs.
              </p>
              <Link href="/contact">
                <Button className="bg-neutral-900 hover:bg-neutral-800 text-white rounded-full shadow-sm">
                  Contact Us
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

export default Industries; 