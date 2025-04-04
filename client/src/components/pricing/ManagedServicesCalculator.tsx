import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AnimatedElement } from "@/components/ui/animated-element";
import { CheckCircle, ArrowRight, Server, PieChart, Globe } from "lucide-react";
import { Switch } from "@/components/ui/switch";

// Types
type ServiceTier = 'essential' | 'professional' | 'enterprise';
type ProjectSize = 'small' | 'medium' | 'large' | 'enterprise';

interface ManagedServiceConfig {
  projectSize: ProjectSize;
  servers: number;
  databases: number;
  includeMonitoring: boolean;
  includeSecurity: boolean;
  includeBackups: boolean;
  supportLevel: 'standard' | 'enhanced' | 'premium';
  commitment: 'monthly' | 'annual';
}

// Base pricing constants
const BASE_PRICES = {
  PROJECT_SIZE: {
    small: 500,
    medium: 1000,
    large: 2000,
    enterprise: 5000
  },
  SERVER: 75,
  DATABASE: 100,
  MONITORING: 300,
  SECURITY: 500,
  BACKUPS: 250,
  SUPPORT_LEVEL: {
    standard: 0,
    enhanced: 500,
    premium: 1200
  },
  ANNUAL_DISCOUNT: 0.15 // 15% discount for annual commitment
};

export function ManagedServicesCalculator() {
  const [config, setConfig] = useState<ManagedServiceConfig>({
    projectSize: 'medium',
    servers: 5,
    databases: 2,
    includeMonitoring: true,
    includeSecurity: true,
    includeBackups: true,
    supportLevel: 'enhanced',
    commitment: 'monthly'
  });
  
  const [monthlyPrice, setMonthlyPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [annualPrice, setAnnualPrice] = useState(0);
  const [savings, setSavings] = useState(0);
  
  // Calculate prices whenever configuration changes
  useEffect(() => {
    // Base price calculation
    const basePrice = BASE_PRICES.PROJECT_SIZE[config.projectSize];
    const serverCost = config.servers * BASE_PRICES.SERVER;
    const databaseCost = config.databases * BASE_PRICES.DATABASE;
    
    let additionalServices = 0;
    if (config.includeMonitoring) additionalServices += BASE_PRICES.MONITORING;
    if (config.includeSecurity) additionalServices += BASE_PRICES.SECURITY;
    if (config.includeBackups) additionalServices += BASE_PRICES.BACKUPS;
    
    const supportCost = BASE_PRICES.SUPPORT_LEVEL[config.supportLevel];
    
    const total = basePrice + serverCost + databaseCost + additionalServices + supportCost;
    setMonthlyPrice(total);
    
    // Calculate annual price and savings
    if (config.commitment === 'annual') {
      const discounted = total * (1 - BASE_PRICES.ANNUAL_DISCOUNT);
      setDiscountedPrice(discounted);
      setAnnualPrice(discounted * 12);
      setSavings(total * 12 - discounted * 12);
    } else {
      setDiscountedPrice(total);
      setAnnualPrice(total * 12);
      setSavings(0);
    }
  }, [config]);

  // Update config
  const updateConfig = (updates: Partial<ManagedServiceConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  // Format currency amounts
  const formatCurrency = (amount: number) => {
    return `$${amount.toFixed(2)}`;
  };

  // Get project size description
  const getProjectSizeDescription = (size: ProjectSize) => {
    switch(size) {
      case 'small': return 'Up to 10 employees, 5 servers, 2 databases';
      case 'medium': return '11-50 employees, 10 servers, 5 databases';
      case 'large': return '51-200 employees, 20 servers, 10 databases';
      case 'enterprise': return '200+ employees, 30+ servers, 15+ databases';
    }
  };

  return (
    <AnimatedElement animation="fade" delay="100">
      <Card className="overflow-hidden bg-white shadow-lg border-0">
        <div className="p-6">
          <h3 className="text-2xl font-semibold tracking-tight mb-6">Managed Services Calculator</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="project-size" className="text-sm font-medium block mb-2">
                    Project Size
                  </Label>
                  <Select 
                    value={config.projectSize} 
                    onValueChange={(value) => updateConfig({ projectSize: value as ProjectSize })}
                  >
                    <SelectTrigger id="project-size">
                      <SelectValue placeholder="Select project size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small Business</SelectItem>
                      <SelectItem value="medium">Medium Business</SelectItem>
                      <SelectItem value="large">Large Business</SelectItem>
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-gray-500 mt-1">
                    {getProjectSizeDescription(config.projectSize)}
                  </p>
                </div>

                <div>
                  <Label htmlFor="servers" className="text-sm font-medium">
                    Number of Servers: {config.servers}
                  </Label>
                  <Slider
                    id="servers"
                    min={1}
                    max={50}
                    step={1}
                    value={[config.servers]}
                    onValueChange={([value]) => updateConfig({ servers: value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="databases" className="text-sm font-medium">
                    Number of Databases: {config.databases}
                  </Label>
                  <Slider
                    id="databases"
                    min={0}
                    max={20}
                    step={1}
                    value={[config.databases]}
                    onValueChange={([value]) => updateConfig({ databases: value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">Additional Services</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="monitoring">24/7 Monitoring</Label>
                        <p className="text-xs text-gray-500">
                          Real-time performance and uptime monitoring
                        </p>
                      </div>
                      <Switch 
                        id="monitoring" 
                        checked={config.includeMonitoring}
                        onCheckedChange={(checked) => updateConfig({ includeMonitoring: checked })}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="security">Security Services</Label>
                        <p className="text-xs text-gray-500">
                          Advanced firewall and threat detection
                        </p>
                      </div>
                      <Switch 
                        id="security" 
                        checked={config.includeSecurity}
                        onCheckedChange={(checked) => updateConfig({ includeSecurity: checked })}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="backups">Automated Backups</Label>
                        <p className="text-xs text-gray-500">
                          Daily backups with 30-day retention
                        </p>
                      </div>
                      <Switch 
                        id="backups" 
                        checked={config.includeBackups}
                        onCheckedChange={(checked) => updateConfig({ includeBackups: checked })}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="support-level" className="text-sm font-medium block mb-2">
                    Support Level
                  </Label>
                  <Select 
                    value={config.supportLevel} 
                    onValueChange={(value) => updateConfig({ supportLevel: value as any })}
                  >
                    <SelectTrigger id="support-level">
                      <SelectValue placeholder="Select support level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard (Business hours)</SelectItem>
                      <SelectItem value="enhanced">Enhanced (16/5)</SelectItem>
                      <SelectItem value="premium">Premium (24/7)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="commitment" className="text-sm font-medium block mb-2">
                    Billing Commitment
                  </Label>
                  <Select 
                    value={config.commitment} 
                    onValueChange={(value) => updateConfig({ commitment: value as any })}
                  >
                    <SelectTrigger id="commitment">
                      <SelectValue placeholder="Select billing commitment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly (No commitment)</SelectItem>
                      <SelectItem value="annual">Annual (15% discount)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-medium mb-4 flex items-center">
                  <Server className="h-5 w-5 mr-2" /> Service Configuration
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 mr-2 text-gray-500" />
                      <span>Project Size</span>
                    </div>
                    <span className="font-medium capitalize">{config.projectSize}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Server className="h-5 w-5 mr-2 text-gray-500" />
                      <span>Servers</span>
                    </div>
                    <span className="font-medium">{config.servers}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <PieChart className="h-5 w-5 mr-2 text-gray-500" />
                      <span>Databases</span>
                    </div>
                    <span className="font-medium">{config.databases}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>24/7 Monitoring</span>
                    <span className="font-medium">{config.includeMonitoring ? 'Included' : 'Not included'}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Security Services</span>
                    <span className="font-medium">{config.includeSecurity ? 'Included' : 'Not included'}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Automated Backups</span>
                    <span className="font-medium">{config.includeBackups ? 'Included' : 'Not included'}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Support Level</span>
                    <span className="font-medium capitalize">{config.supportLevel}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Billing Commitment</span>
                    <span className="font-medium capitalize">{config.commitment}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">Price Breakdown</h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Monthly Price</span>
                    <span className="font-medium">{formatCurrency(monthlyPrice)}</span>
                  </div>
                  
                  {config.commitment === 'annual' && (
                    <div className="flex justify-between text-green-600">
                      <span>Annual Discount (15%)</span>
                      <span className="font-medium">-{formatCurrency(monthlyPrice * BASE_PRICES.ANNUAL_DISCOUNT)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between pt-2 border-t">
                    <span className="font-semibold">Monthly Total</span>
                    <span className="font-bold text-lg">{formatCurrency(discountedPrice)}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Annual Cost</span>
                    <span>{formatCurrency(annualPrice)}</span>
                  </div>
                  
                  {config.commitment === 'annual' && savings > 0 && (
                    <div className="flex justify-between text-sm text-green-600 font-medium">
                      <span>Annual Savings</span>
                      <span>{formatCurrency(savings)}</span>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    Download Quote
                  </Button>
                  <Button className="w-full flex items-center justify-center gap-2">
                    Contact Sales <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="mt-4">
                  <p className="text-xs text-center text-gray-500">
                    Custom configurations available. Contact our sales team for a detailed quote.
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <h5 className="font-medium mb-3">What's Included:</h5>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Full infrastructure management</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Proactive maintenance and updates</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Performance optimization</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Monthly reporting and insights</span>
                  </li>
                  {config.supportLevel === 'premium' && (
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Dedicated technical account manager</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </AnimatedElement>
  );
}