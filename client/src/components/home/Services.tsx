import { Link } from 'wouter';
import { 
  Cloud, 
  ShoppingCart, 
  ChartBarStacked, 
  ShieldCheck, 
  Check, 
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Cloud Solutions',
    icon: <Cloud className="h-8 w-8" />,
    color: 'bg-[#003366]',
    features: [
      'AWS Cloud Storage Solutions',
      'AI Private Cloud Solutions',
      'Cloud Migration & Optimization'
    ],
    href: '/services#cloud'
  },
  {
    id: 2,
    title: 'E-Commerce Solutions',
    icon: <ShoppingCart className="h-8 w-8" />,
    color: 'bg-[#2E8B57]',
    features: [
      'Shopify Account Setup and Migration',
      'AI-driven Marketing Strategies',
      'E-commerce Platform Integration'
    ],
    href: '/services#ecommerce'
  },
  {
    id: 3,
    title: 'Digital Marketing',
    icon: <ChartBarStacked className="h-8 w-8" />,
    color: 'bg-[#003366]',
    features: [
      'AI Analytics',
      'Multilingual AI Chatbots',
      'Data-Driven Marketing Campaigns'
    ],
    href: '/services#marketing'
  },
  {
    id: 4,
    title: 'Cybersecurity Services',
    icon: <ShieldCheck className="h-8 w-8" />,
    color: 'bg-[#2E8B57]',
    features: [
      'Network Security',
      'Data Protection',
      'Threat Detection and Response'
    ],
    href: '/services#security'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#003366] mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide a comprehensive range of cloud and AI solutions to help your business grow, scale, and stay secure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden service-card transition-transform duration-300">
              <div className={`h-3 ${service.color}`}></div>
              <div className="p-6">
                <div className={`w-16 h-16 mb-6 rounded-full ${service.color} bg-opacity-10 flex items-center justify-center text-${service.color === 'bg-[#003366]' ? '[#003366]' : '[#2E8B57]'}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-[#003366]">{service.title}</h3>
                <ul className="space-y-2 mb-6 text-gray-700">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-[#2E8B57] mt-1 mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={service.href}>
                  <a className="inline-block text-[#2E8B57] font-medium hover:underline">
                    Learn more <ArrowRight className="h-4 w-4 ml-1 inline" />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
