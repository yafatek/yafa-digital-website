import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AnimatedElement } from "@/components/ui/animated-element";
import { CheckCircle, ArrowRight, Code, Calendar, Zap } from "lucide-react";

// Types
type WebsiteType = 'landing-page' | 'corporate' | 'e-commerce' | 'custom';
type TimelineOption = 'standard' | 'expedited' | 'urgent';

interface WebDevFeature {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface WebDevConfig {
  websiteType: WebsiteType;
  features: string[]; // IDs of selected features
  timeline: TimelineOption;
  includeHosting: boolean;
  includeMaintenance: boolean;
}

// Pricing data
const WEBSITE_BASE_PRICES = {
  'landing-page': 2500,
  'corporate': 4500,
  'e-commerce': 7500,
  'custom': 10000
};

const TIMELINE_MULTIPLIERS = {
  'standard': 1, // 4-6 weeks
  'expedited': 1.3, // 2-3 weeks
  'urgent': 1.75 // 1 week
};

const HOSTING_ANNUAL_FEE = 599;
const MAINTENANCE_MONTHLY_FEE = 299;

// Available features
const WEB_DEV_FEATURES: WebDevFeature[] = [
  {
    id: 'responsive',
    name: 'Responsive Design',
    description: 'Optimized for all devices and screen sizes',
    price: 750
  },
  {
    id: 'cms',
    name: 'Content Management System',
    description: 'Easy-to-use CMS for updating content',
    price: 1200
  },
  {
    id: 'seo',
    name: 'SEO Optimization',
    description: 'On-page SEO and performance optimization',
    price: 800
  },
  {
    id: 'analytics',
    name: 'Analytics Integration',
    description: 'Detailed visitor tracking and reporting',
    price: 500
  },
  {
    id: 'multilingual',
    name: 'Multilingual Support',
    description: 'Content in multiple languages',
    price: 1500
  },
  {
    id: 'payment',
    name: 'Payment Processing',
    description: 'Secure payment gateway integration',
    price: 1200
  },
  {
    id: 'custom-forms',
    name: 'Custom Forms & Applications',
    description: 'Interactive forms with validation',
    price: 1000
  },
  {
    id: 'membership',
    name: 'Membership Portal',
    description: 'User registration and account management',
    price: 1800
  },
  {
    id: 'api',
    name: 'API Integration',
    description: 'Connect to third-party services',
    price: 1500
  }
];

export function WebDevCalculator() {
  const [config, setConfig] = useState<WebDevConfig>({
    websiteType: 'corporate',
    features: ['responsive', 'cms', 'seo'],
    timeline: 'standard',
    includeHosting: true,
    includeMaintenance: false
  });
  
  const [totalPrice, setTotalPrice] = useState(0);
  const [monthlyFees, setMonthlyFees] = useState(0);
  const [annualFees, setAnnualFees] = useState(0);
  const [deliveryTime, setDeliveryTime] = useState('');
  
  // Calculate prices whenever configuration changes
  useEffect(() => {
    // Base price calculation
    let basePrice = WEBSITE_BASE_PRICES[config.websiteType];
    
    // Add feature prices
    const featurePrice = config.features.reduce((sum, featureId) => {
      const feature = WEB_DEV_FEATURES.find(f => f.id === featureId);
      return sum + (feature?.price || 0);
    }, 0);
    
    // Apply timeline multiplier
    const timelineMultiplier = TIMELINE_MULTIPLIERS[config.timeline];
    
    // Calculate total one-time price
    const calculatedTotal = (basePrice + featurePrice) * timelineMultiplier;
    setTotalPrice(calculatedTotal);
    
    // Calculate recurring fees
    let monthly = 0;
    if (config.includeMaintenance) monthly += MAINTENANCE_MONTHLY_FEE;
    
    let annual = 0;
    if (config.includeHosting) annual += HOSTING_ANNUAL_FEE;
    
    setMonthlyFees(monthly);
    setAnnualFees(annual);
    
    // Determine delivery time
    let timeEstimate;
    switch(config.timeline) {
      case 'standard':
        timeEstimate = '4-6 weeks';
        break;
      case 'expedited':
        timeEstimate = '2-3 weeks';
        break;
      case 'urgent':
        timeEstimate = '7-10 days';
        break;
    }
    setDeliveryTime(timeEstimate);
    
  }, [config]);

  // Update config
  const updateConfig = (updates: Partial<WebDevConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  // Toggle feature selection
  const toggleFeature = (featureId: string) => {
    setConfig(prev => {
      const isSelected = prev.features.includes(featureId);
      
      if (isSelected) {
        return {
          ...prev,
          features: prev.features.filter(id => id !== featureId)
        };
      } else {
        return {
          ...prev,
          features: [...prev.features, featureId]
        };
      }
    });
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return `$${amount.toFixed(2)}`;
  };

  return (
    <AnimatedElement animation="fade" delay="100">
      <Card className="overflow-hidden bg-white shadow-lg border-0">
        <div className="p-6">
          <h3 className="text-2xl font-semibold tracking-tight mb-6">Web Development Calculator</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {/* Website Type Selection */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">1. Choose Website Type</h4>
                <RadioGroup 
                  value={config.websiteType}
                  onValueChange={(value) => updateConfig({ websiteType: value as WebsiteType })}
                  className="space-y-3"
                >
                  <div className="flex items-start">
                    <RadioGroupItem value="landing-page" id="landing-page" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="landing-page" className="font-medium">Landing Page</Label>
                      <p className="text-sm text-gray-500">
                        Single-page website focused on specific product or service
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <RadioGroupItem value="corporate" id="corporate" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="corporate" className="font-medium">Corporate Website</Label>
                      <p className="text-sm text-gray-500">
                        Multi-page website with company information and services
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <RadioGroupItem value="e-commerce" id="e-commerce" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="e-commerce" className="font-medium">E-Commerce Website</Label>
                      <p className="text-sm text-gray-500">
                        Online store with product catalog and checkout
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <RadioGroupItem value="custom" id="custom" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="custom" className="font-medium">Custom Web Application</Label>
                      <p className="text-sm text-gray-500">
                        Complex web application with custom functionality
                      </p>
                    </div>
                  </div>
                </RadioGroup>
              </div>
              
              {/* Features Selection */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">2. Select Additional Features</h4>
                <div className="grid grid-cols-1 gap-3">
                  {WEB_DEV_FEATURES.map(feature => (
                    <div key={feature.id} className="flex items-start">
                      <Checkbox 
                        id={`feature-${feature.id}`}
                        checked={config.features.includes(feature.id)}
                        onCheckedChange={() => toggleFeature(feature.id)}
                        className="mt-1"
                      />
                      <div className="ml-3">
                        <Label htmlFor={`feature-${feature.id}`} className="font-medium">
                          {feature.name} <span className="text-gray-500 font-normal">(+{formatCurrency(feature.price)})</span>
                        </Label>
                        <p className="text-sm text-gray-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Timeline Selection */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">3. Select Development Timeline</h4>
                <RadioGroup 
                  value={config.timeline}
                  onValueChange={(value) => updateConfig({ timeline: value as TimelineOption })}
                  className="space-y-3"
                >
                  <div className="flex items-start">
                    <RadioGroupItem value="standard" id="standard" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="standard" className="font-medium">Standard Timeline</Label>
                      <p className="text-sm text-gray-500">
                        4-6 weeks development time
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <RadioGroupItem value="expedited" id="expedited" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="expedited" className="font-medium">Expedited Timeline (+30%)</Label>
                      <p className="text-sm text-gray-500">
                        2-3 weeks development time
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <RadioGroupItem value="urgent" id="urgent" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="urgent" className="font-medium">Urgent Timeline (+75%)</Label>
                      <p className="text-sm text-gray-500">
                        7-10 days development time
                      </p>
                    </div>
                  </div>
                </RadioGroup>
              </div>
              
              {/* Additional Services */}
              <div>
                <h4 className="font-medium mb-3">4. Additional Services</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Checkbox 
                      id="hosting"
                      checked={config.includeHosting}
                      onCheckedChange={(checked) => updateConfig({ includeHosting: !!checked })}
                      className="mt-1"
                    />
                    <div className="ml-3">
                      <Label htmlFor="hosting" className="font-medium">
                        Managed Hosting <span className="text-gray-500 font-normal">(${HOSTING_ANNUAL_FEE}/year)</span>
                      </Label>
                      <p className="text-sm text-gray-500">
                        Secure cloud hosting with 99.9% uptime
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Checkbox 
                      id="maintenance"
                      checked={config.includeMaintenance}
                      onCheckedChange={(checked) => updateConfig({ includeMaintenance: !!checked })}
                      className="mt-1"
                    />
                    <div className="ml-3">
                      <Label htmlFor="maintenance" className="font-medium">
                        Maintenance & Support <span className="text-gray-500 font-normal">(${MAINTENANCE_MONTHLY_FEE}/month)</span>
                      </Label>
                      <p className="text-sm text-gray-500">
                        Regular updates, security patches, and support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Price summary section */}
            <div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Code className="h-5 w-5 mr-2" /> Project Summary
                </h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <div>
                      <span className="font-medium">Website Type</span>
                      <div className="text-sm text-gray-500">
                        {config.websiteType === 'landing-page' && 'Landing Page'}
                        {config.websiteType === 'corporate' && 'Corporate Website'}
                        {config.websiteType === 'e-commerce' && 'E-Commerce Website'}
                        {config.websiteType === 'custom' && 'Custom Web Application'}
                      </div>
                    </div>
                    <span>{formatCurrency(WEBSITE_BASE_PRICES[config.websiteType])}</span>
                  </div>
                  
                  <div className="py-2 border-b">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Selected Features</span>
                      <span>
                        {formatCurrency(config.features.reduce((sum, featureId) => {
                          const feature = WEB_DEV_FEATURES.find(f => f.id === featureId);
                          return sum + (feature?.price || 0);
                        }, 0))}
                      </span>
                    </div>
                    {config.features.length > 0 ? (
                      <ul className="space-y-1.5">
                        {config.features.map(featureId => {
                          const feature = WEB_DEV_FEATURES.find(f => f.id === featureId);
                          return feature ? (
                            <li key={feature.id} className="text-sm flex justify-between">
                              <span className="text-gray-600">{feature.name}</span>
                              <span>{formatCurrency(feature.price)}</span>
                            </li>
                          ) : null;
                        })}
                      </ul>
                    ) : (
                      <p className="text-sm text-gray-500 italic">No additional features selected</p>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b">
                    <div>
                      <span className="font-medium">Timeline</span>
                      <div className="text-sm text-gray-500 flex items-center mt-1">
                        <Calendar className="h-4 w-4 mr-1" /> 
                        {deliveryTime} delivery
                      </div>
                    </div>
                    <div className="text-right">
                      {config.timeline !== 'standard' && (
                        <div className="text-sm text-amber-600">
                          {config.timeline === 'expedited' ? '+30%' : '+75%'}
                        </div>
                      )}
                      <div className="font-medium flex items-center">
                        <Zap className={`h-4 w-4 mr-1 ${config.timeline !== 'standard' ? 'text-amber-600' : 'text-gray-400'}`} />
                        {config.timeline === 'standard' ? 'Standard' : config.timeline === 'expedited' ? 'Expedited' : 'Urgent'}
                      </div>
                    </div>
                  </div>
                  
                  {(config.includeHosting || config.includeMaintenance) && (
                    <div className="py-2 border-b">
                      <div className="font-medium mb-2">Recurring Services</div>
                      {config.includeHosting && (
                        <div className="text-sm flex justify-between">
                          <span className="text-gray-600">Managed Hosting</span>
                          <span>{formatCurrency(HOSTING_ANNUAL_FEE)}/year</span>
                        </div>
                      )}
                      {config.includeMaintenance && (
                        <div className="text-sm flex justify-between">
                          <span className="text-gray-600">Maintenance & Support</span>
                          <span>{formatCurrency(MAINTENANCE_MONTHLY_FEE)}/month</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">Price Breakdown</h4>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="font-medium">One-time Development Fee</span>
                    <span className="font-bold text-xl">{formatCurrency(totalPrice)}</span>
                  </div>
                  
                  {monthlyFees > 0 && (
                    <div className="flex justify-between">
                      <span>Monthly Services</span>
                      <span className="font-medium">{formatCurrency(monthlyFees)}/month</span>
                    </div>
                  )}
                  
                  {annualFees > 0 && (
                    <div className="flex justify-between">
                      <span>Annual Services</span>
                      <span className="font-medium">{formatCurrency(annualFees)}/year</span>
                    </div>
                  )}
                </div>
                
                <div className="mt-6">
                  <Button className="w-full flex items-center justify-center gap-2">
                    Request Detailed Proposal <ArrowRight className="h-4 w-4" />
                  </Button>
                  <p className="text-xs text-center mt-2 text-gray-500">
                    Our team will prepare a detailed proposal based on your requirements
                  </p>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 border border-gray-200 rounded-md p-4">
                <h5 className="font-medium mb-2">Our Web Development Process:</h5>
                <ol className="space-y-2 pl-5 list-decimal">
                  <li className="text-sm text-gray-700">
                    <span className="font-medium">Discovery & Planning</span> - We analyze your requirements and create a detailed plan
                  </li>
                  <li className="text-sm text-gray-700">
                    <span className="font-medium">Design & Prototyping</span> - We create wireframes and visual designs for approval
                  </li>
                  <li className="text-sm text-gray-700">
                    <span className="font-medium">Development</span> - Our team builds your website with clean, optimized code
                  </li>
                  <li className="text-sm text-gray-700">
                    <span className="font-medium">Testing & QA</span> - Thorough testing across devices and browsers
                  </li>
                  <li className="text-sm text-gray-700">
                    <span className="font-medium">Launch & Training</span> - We deploy your site and provide training on its management
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </AnimatedElement>
  );
}