import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedElement } from "@/components/ui/animated-element";
import { Card } from "@/components/ui/card";

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
    buttonText: "Get Started"
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
    buttonText: "Choose Business",
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
  return (
    <AnimatedElement animation="fade" delay="100">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-4">Service Tiers</h2>
        <p className="text-center text-gray-500 mb-12 max-w-3xl mx-auto">
          Choose the right service tier for your business needs. All plans include core cloud infrastructure services 
          with different levels of support and additional features.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Features column */}
          <div className="hidden lg:block">
            <div className="h-[220px]"></div> {/* Space for pricing cards */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-6 pl-4">Features</h4>
              <ul className="space-y-4">
                {pricingFeatures.map((feature, index) => (
                  <li 
                    key={index} 
                    className="pl-4 py-2.5 flex items-center text-sm font-medium text-gray-700"
                  >
                    {feature.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Pricing plan columns */}
          {pricingPlans.map((plan, index) => (
            <div key={index}>
              <Card className={`overflow-hidden relative ${plan.popular ? 'border-2 border-primary shadow-lg' : 'border border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-primary"></div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <div className="mt-3 text-2xl font-bold">{plan.price}</div>
                  <p className="mt-2 text-sm text-gray-500 min-h-[50px]">{plan.description}</p>
                  
                  <Button 
                    className={`mt-6 w-full ${plan.popular ? '' : 'bg-gray-800 hover:bg-gray-700'}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.buttonText}
                  </Button>
                  
                  {plan.popular && (
                    <div className="text-xs text-center mt-2 text-green-600 font-medium">
                      Most popular choice
                    </div>
                  )}
                </div>
              </Card>
              
              {/* Mobile feature list */}
              <div className="mt-4 block lg:hidden">
                <h4 className="text-sm font-semibold mb-2">{plan.name} Features</h4>
                <ul className="space-y-2">
                  {pricingFeatures.map((feature, featureIndex) => {
                    const included = 
                      index === 0 ? feature.startupIncluded :
                      index === 1 ? feature.businessIncluded :
                      feature.enterpriseIncluded;
                    
                    return included ? (
                      <li key={featureIndex} className="flex text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature.name}</span>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>
              
              {/* Desktop checkmarks */}
              <div className="hidden lg:block mt-8">
                <div className="h-12"></div> {/* Space for "Features" heading */}
                <ul className="space-y-4">
                  {pricingFeatures.map((feature, featureIndex) => {
                    const included = 
                      index === 0 ? feature.startupIncluded :
                      index === 1 ? feature.businessIncluded :
                      feature.enterpriseIncluded;
                    
                    return (
                      <li key={featureIndex} className="py-2.5 flex justify-center">
                        {included ? (
                          <Check className="h-5 w-5 text-green-500" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300" />
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">Not sure which plan is right for you?</h3>
          <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
            Our team can help you choose the perfect solution for your business needs.
            Contact us for a personalized consultation and recommendations.
          </p>
          <Button size="lg" className="px-8">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </AnimatedElement>
  );
}