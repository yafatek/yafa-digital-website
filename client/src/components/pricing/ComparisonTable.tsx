import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface PricingFeature {
  name: string;
  startupIncluded: boolean;
  businessIncluded: boolean;
  enterpriseIncluded: boolean;
}

interface PricingPlan {
  name: string;
  price: string | React.ReactNode;
  description: string;
  buttonText: string;
  popular?: boolean;
}

const pricingFeatures: PricingFeature[] = [
  {
    name: "Cloud Computing Resources",
    startupIncluded: true,
    businessIncluded: true,
    enterpriseIncluded: true
  },
  {
    name: "Storage Solutions",
    startupIncluded: true,
    businessIncluded: true,
    enterpriseIncluded: true
  },
  {
    name: "Basic Security Features",
    startupIncluded: true,
    businessIncluded: true,
    enterpriseIncluded: true
  },
  {
    name: "24/7 Monitoring",
    startupIncluded: false,
    businessIncluded: true,
    enterpriseIncluded: true
  },
  {
    name: "Standard Support",
    startupIncluded: true,
    businessIncluded: false,
    enterpriseIncluded: false
  },
  {
    name: "Priority Support",
    startupIncluded: false,
    businessIncluded: true,
    enterpriseIncluded: false
  },
  {
    name: "Premium Support (24/7)",
    startupIncluded: false,
    businessIncluded: false,
    enterpriseIncluded: true
  },
  {
    name: "Dedicated Account Manager",
    startupIncluded: false,
    businessIncluded: false,
    enterpriseIncluded: true
  },
  {
    name: "Regular Security Audits",
    startupIncluded: false,
    businessIncluded: true,
    enterpriseIncluded: true
  },
  {
    name: "Custom Security Policies",
    startupIncluded: false,
    businessIncluded: false,
    enterpriseIncluded: true
  },
  {
    name: "Automated Backups",
    startupIncluded: false,
    businessIncluded: true,
    enterpriseIncluded: true
  },
  {
    name: "Disaster Recovery Planning",
    startupIncluded: false,
    businessIncluded: false,
    enterpriseIncluded: true
  },
  {
    name: "Custom API Integrations",
    startupIncluded: false,
    businessIncluded: true,
    enterpriseIncluded: true
  },
  {
    name: "Multi-region Deployment",
    startupIncluded: false,
    businessIncluded: false,
    enterpriseIncluded: true
  },
  {
    name: "Performance Optimization",
    startupIncluded: false,
    businessIncluded: true,
    enterpriseIncluded: true
  }
];

const pricingPlans: PricingPlan[] = [
  {
    name: "Startup",
    price: "From $99/mo",
    description: "Essential cloud services for startups and small businesses.",
    buttonText: "Contact Sales"
  },
  {
    name: "Business",
    price: (
      <span>
        From $299/mo
        <span className="ml-2 text-sm font-normal text-green-600">Save 10%</span>
      </span>
    ),
    description: "Advanced solutions for growing businesses with prioritized support.",
    buttonText: "Contact Sales",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    description: "Tailored solutions for large organizations with dedicated support.",
    buttonText: "Contact Sales"
  }
];

export function ComparisonTable() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Features column */}
          <div className="hidden lg:block">
            <div className="h-[210px]"></div> {/* Space for pricing cards */}
            <div className="mt-8">
              <h4 className="text-base font-medium text-neutral-900 mb-6 pl-4">Features</h4>
              <ul className="space-y-2">
                {pricingFeatures.map((feature, index) => (
                  <li 
                    key={index} 
                    className="pl-4 py-2.5 flex items-center text-sm font-light text-neutral-700 rounded-lg border-l-2 border-transparent hover:border-neutral-200 hover:bg-neutral-50 transition-all duration-200"
                  >
                    {feature.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Pricing plan columns */}
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              <div className={`bg-white rounded-2xl overflow-hidden relative ${
                plan.popular 
                  ? 'border-2 border-primary/20 shadow-md' 
                  : 'border border-neutral-200 shadow-sm'
              }`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary/10 backdrop-blur-sm border-l border-b border-primary/20 text-primary px-4 py-1.5 text-xs font-medium rounded-bl-xl rounded-tr-xl">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-lg font-medium text-neutral-900">{plan.name}</h3>
                  <div className="mt-3 text-2xl font-semibold text-neutral-900">{plan.price}</div>
                  <p className="mt-2 text-sm text-neutral-500 min-h-[50px]">{plan.description}</p>
                  
                  <Button 
                    className={`mt-6 w-full rounded-full transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    <a 
                      href="/contact" 
                      className="w-full h-full flex items-center justify-center text-white"
                    >
                      {plan.buttonText}
                    </a>
                  </Button>
                  
                  {plan.popular && (
                    <div className="text-xs text-center mt-2 text-green-600 font-medium">
                      Most popular choice
                    </div>
                  )}
                </div>
              </div>
              
              {/* Mobile feature list */}
              <div className="mt-6 block lg:hidden">
                <h4 className="text-sm font-medium mb-3 text-neutral-800">{plan.name} Features</h4>
                <div className="bg-white rounded-xl border border-neutral-200 p-4 shadow-sm">
                  <ul className="space-y-3">
                    {pricingFeatures.map((feature, featureIndex) => {
                      const included = 
                        index === 0 ? feature.startupIncluded :
                        index === 1 ? feature.businessIncluded :
                        feature.enterpriseIncluded;
                      
                      return included ? (
                        <li key={featureIndex} className="flex text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700 font-light">{feature.name}</span>
                        </li>
                      ) : null;
                    })}
                  </ul>
                </div>
              </div>
              
              {/* Desktop checkmarks */}
              <div className="hidden lg:block mt-8">
                <div className="h-12"></div> {/* Space for "Features" heading */}
                <ul className="space-y-2">
                  {pricingFeatures.map((feature, featureIndex) => {
                    const included = 
                      index === 0 ? feature.startupIncluded :
                      index === 1 ? feature.businessIncluded :
                      feature.enterpriseIncluded;
                    
                    return (
                      <li key={featureIndex} className="py-2.5 flex justify-center">
                        {included ? (
                          <div className="h-5 w-5 rounded-full bg-green-50 flex items-center justify-center">
                            <Check className="h-3 w-3 text-green-500" />
                          </div>
                        ) : (
                          <X className="h-5 w-5 text-neutral-300" />
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 max-w-2xl mx-auto">
          <div className="bg-[#f8f8fa]/80 backdrop-blur-sm border border-neutral-200/50 rounded-2xl p-8 shadow-sm text-center">
            <h3 className="text-lg font-medium text-neutral-900 mb-4">Not sure which plan is right for you?</h3>
            <p className="text-neutral-600 text-sm mb-6">
              Our team can help you choose the perfect solution for your business needs.
              Contact us for a personalized consultation and recommendations.
            </p>
            <Button className="px-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300">
              <a 
                href="/contact" 
                className="w-full h-full flex items-center justify-center text-white"
              >
                Schedule a Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}