import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AnimatedElement } from "@/components/ui/animated-element";
import { AlertCircle, ArrowRight, CheckCircle, CloudLightning, Database, Server, ShieldCheck } from "lucide-react";

// Pricing tiers
type PricingTier = 'startup' | 'business' | 'enterprise';
type ServiceType = 'cloud-compute' | 'storage' | 'security';

interface ResourceConfig {
  cpuCores?: number;
  ramGB?: number;
  storageGB?: number;
  users?: number;
  backupFrequency?: 'daily' | 'weekly' | 'monthly';
  supportLevel?: 'basic' | 'priority' | '24-7';
  region?: 'uae' | 'middle-east' | 'global';
  securityLevel?: 'basic' | 'advanced' | 'premium';
}

interface PricingOption {
  name: string;
  description: string;
  monthlyPrice: (config: ResourceConfig) => number;
  setupFee: (config: ResourceConfig) => number;
  discountedPrice?: (config: ResourceConfig) => number;
  features: string[];
  icon: React.ReactNode;
}

// Base pricing constants
const BASE_PRICES = {
  CPU_CORE: 25,
  RAM_GB: 10,
  STORAGE_GB: 0.15,
  BACKUP: {
    daily: 100,
    weekly: 50,
    monthly: 20
  },
  SUPPORT: {
    basic: 0,
    priority: 150,
    '24-7': 500
  },
  SECURITY: {
    basic: 100,
    advanced: 300,
    premium: 750
  },
  USER: 10,
  REGION_MULTIPLIER: {
    uae: 1.0,
    'middle-east': 1.1,
    global: 1.2
  }
};

// Tier discounts
const TIER_DISCOUNT = {
  startup: 0,
  business: 0.1, // 10% discount
  enterprise: 0.2 // 20% discount
};

// Service options with pricing formulas
const serviceOptions: Record<ServiceType, PricingOption> = {
  'cloud-compute': {
    name: 'Cloud Compute',
    description: 'Scalable computing resources for your applications',
    monthlyPrice: (config) => {
      const cpuPrice = (config.cpuCores || 1) * BASE_PRICES.CPU_CORE;
      const ramPrice = (config.ramGB || 1) * BASE_PRICES.RAM_GB;
      const regionMultiplier = BASE_PRICES.REGION_MULTIPLIER[config.region || 'uae'];
      return (cpuPrice + ramPrice) * regionMultiplier;
    },
    setupFee: () => 199,
    features: [
      'Scalable instances',
      'Load balancing',
      'Auto-scaling',
      'Global availability'
    ],
    icon: <CloudLightning className="h-6 w-6" />
  },
  'storage': {
    name: 'Cloud Storage',
    description: 'Secure and reliable data storage solutions',
    monthlyPrice: (config) => {
      const storagePrice = (config.storageGB || 100) * BASE_PRICES.STORAGE_GB;
      const backupPrice = BASE_PRICES.BACKUP[config.backupFrequency || 'monthly'];
      const regionMultiplier = BASE_PRICES.REGION_MULTIPLIER[config.region || 'uae'];
      return (storagePrice + backupPrice) * regionMultiplier;
    },
    setupFee: () => 99,
    features: [
      'Redundant storage',
      'Data encryption',
      'Automatic backups',
      'Fast data retrieval'
    ],
    icon: <Database className="h-6 w-6" />
  },
  'security': {
    name: 'Security Services',
    description: 'Enterprise-grade security for your cloud infrastructure',
    monthlyPrice: (config) => {
      const userPrice = (config.users || 5) * BASE_PRICES.USER;
      const securityPrice = BASE_PRICES.SECURITY[config.securityLevel || 'basic'];
      const regionMultiplier = BASE_PRICES.REGION_MULTIPLIER[config.region || 'uae'];
      return (userPrice + securityPrice) * regionMultiplier;
    },
    setupFee: (config) => {
      // Setup fee increases based on security level
      const baseFee = 299;
      const securityLevelMultiplier = 
        config.securityLevel === 'premium' ? 2 :
        config.securityLevel === 'advanced' ? 1.5 : 1;
      return baseFee * securityLevelMultiplier;
    },
    features: [
      'Threat detection',
      'DDoS protection',
      'Compliance monitoring',
      'Security audits'
    ],
    icon: <ShieldCheck className="h-6 w-6" />
  }
};

// Calculate the discounted price based on tier selection
function getDiscountedPrice(
  serviceType: ServiceType,
  tier: PricingTier,
  config: ResourceConfig
): number {
  const basePrice = serviceOptions[serviceType].monthlyPrice(config);
  const discount = TIER_DISCOUNT[tier];
  return basePrice * (1 - discount);
}

export function PriceCalculator() {
  const [serviceType, setServiceType] = useState<ServiceType>('cloud-compute');
  const [tier, setTier] = useState<PricingTier>('business');
  const [config, setConfig] = useState<ResourceConfig>({
    cpuCores: 4,
    ramGB: 8,
    storageGB: 500,
    users: 10,
    backupFrequency: 'weekly',
    supportLevel: 'priority',
    region: 'uae',
    securityLevel: 'advanced'
  });
  
  const [monthlyPrice, setMonthlyPrice] = useState(0);
  const [setupFee, setSetupFee] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [savings, setSavings] = useState(0);
  
  // Calculate prices whenever service type, tier, or configuration changes
  useEffect(() => {
    const baseMonthlyPrice = serviceOptions[serviceType].monthlyPrice(config);
    const setupFeeAmount = serviceOptions[serviceType].setupFee(config);
    const discountAmount = getDiscountedPrice(serviceType, tier, config);
    
    setMonthlyPrice(baseMonthlyPrice);
    setSetupFee(setupFeeAmount);
    setDiscountedPrice(discountAmount);
    setSavings(baseMonthlyPrice - discountAmount);
  }, [serviceType, tier, config]);

  // Update config based on service-specific controls
  const updateConfig = (updates: Partial<ResourceConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  // Format currency amounts
  const formatCurrency = (amount: number) => {
    return `$${amount.toFixed(2)}`;
  };

  return (
    <AnimatedElement animation="fade" delay="100">
      <Card className="overflow-hidden bg-white shadow-lg border-0">
        <div className="p-6">
          <h3 className="text-2xl font-semibold tracking-tight mb-6">Interactive Price Calculator</h3>
          
          <Tabs defaultValue="cloud-compute" onValueChange={(value) => setServiceType(value as ServiceType)}>
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="cloud-compute" className="flex items-center gap-2">
                <CloudLightning className="h-4 w-4" /> Compute
              </TabsTrigger>
              <TabsTrigger value="storage" className="flex items-center gap-2">
                <Database className="h-4 w-4" /> Storage
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> Security
              </TabsTrigger>
            </TabsList>
            
            {/* Cloud Compute Tab Content */}
            <TabsContent value="cloud-compute" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="cpu-cores" className="text-sm font-medium">
                    CPU Cores: {config.cpuCores}
                  </Label>
                  <Slider
                    id="cpu-cores"
                    min={1}
                    max={32}
                    step={1}
                    value={[config.cpuCores || 4]}
                    onValueChange={([value]) => updateConfig({ cpuCores: value })}
                    className="mt-2"
                  />

                  <Label htmlFor="ram" className="text-sm font-medium mt-6 block">
                    RAM (GB): {config.ramGB}
                  </Label>
                  <Slider
                    id="ram"
                    min={1}
                    max={64}
                    step={1}
                    value={[config.ramGB || 8]}
                    onValueChange={([value]) => updateConfig({ ramGB: value })}
                    className="mt-2"
                  />

                  <div className="mt-6">
                    <Label htmlFor="region" className="text-sm font-medium block mb-2">
                      Region
                    </Label>
                    <Select 
                      value={config.region} 
                      onValueChange={(value) => updateConfig({ region: value as any })}
                    >
                      <SelectTrigger id="region">
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="uae">UAE</SelectItem>
                        <SelectItem value="middle-east">Middle East</SelectItem>
                        <SelectItem value="global">Global</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Server className="h-5 w-5 mr-2" /> Configuration Summary
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">CPU Cores:</span>
                      <span className="font-medium">{config.cpuCores}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">RAM:</span>
                      <span className="font-medium">{config.ramGB} GB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Region:</span>
                      <span className="font-medium capitalize">{config.region}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Monthly Cost:</span>
                      <span className="font-medium">{formatCurrency(monthlyPrice)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Storage Tab Content */}
            <TabsContent value="storage" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="storage" className="text-sm font-medium">
                    Storage (GB): {config.storageGB}
                  </Label>
                  <Slider
                    id="storage"
                    min={100}
                    max={10000}
                    step={100}
                    value={[config.storageGB || 500]}
                    onValueChange={([value]) => updateConfig({ storageGB: value })}
                    className="mt-2"
                  />

                  <div className="mt-6">
                    <Label htmlFor="backup" className="text-sm font-medium block mb-2">
                      Backup Frequency
                    </Label>
                    <Select 
                      value={config.backupFrequency} 
                      onValueChange={(value) => updateConfig({ backupFrequency: value as any })}
                    >
                      <SelectTrigger id="backup">
                        <SelectValue placeholder="Select backup frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="mt-6">
                    <Label htmlFor="storage-region" className="text-sm font-medium block mb-2">
                      Region
                    </Label>
                    <Select 
                      value={config.region} 
                      onValueChange={(value) => updateConfig({ region: value as any })}
                    >
                      <SelectTrigger id="storage-region">
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="uae">UAE</SelectItem>
                        <SelectItem value="middle-east">Middle East</SelectItem>
                        <SelectItem value="global">Global</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Database className="h-5 w-5 mr-2" /> Storage Summary
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Storage:</span>
                      <span className="font-medium">{config.storageGB} GB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Backup:</span>
                      <span className="font-medium capitalize">{config.backupFrequency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Region:</span>
                      <span className="font-medium capitalize">{config.region}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Monthly Cost:</span>
                      <span className="font-medium">{formatCurrency(monthlyPrice)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Security Tab Content */}
            <TabsContent value="security" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="users" className="text-sm font-medium">
                    Number of Users: {config.users}
                  </Label>
                  <Slider
                    id="users"
                    min={1}
                    max={100}
                    step={1}
                    value={[config.users || 10]}
                    onValueChange={([value]) => updateConfig({ users: value })}
                    className="mt-2"
                  />

                  <div className="mt-6">
                    <Label htmlFor="security-level" className="text-sm font-medium block mb-2">
                      Security Level
                    </Label>
                    <Select 
                      value={config.securityLevel} 
                      onValueChange={(value) => updateConfig({ securityLevel: value as any })}
                    >
                      <SelectTrigger id="security-level">
                        <SelectValue placeholder="Select security level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                        <SelectItem value="premium">Premium</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="mt-6">
                    <Label htmlFor="security-region" className="text-sm font-medium block mb-2">
                      Region
                    </Label>
                    <Select 
                      value={config.region} 
                      onValueChange={(value) => updateConfig({ region: value as any })}
                    >
                      <SelectTrigger id="security-region">
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="uae">UAE</SelectItem>
                        <SelectItem value="middle-east">Middle East</SelectItem>
                        <SelectItem value="global">Global</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-medium mb-3 flex items-center">
                    <ShieldCheck className="h-5 w-5 mr-2" /> Security Summary
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Users:</span>
                      <span className="font-medium">{config.users}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Security Level:</span>
                      <span className="font-medium capitalize">{config.securityLevel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Region:</span>
                      <span className="font-medium capitalize">{config.region}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Monthly Cost:</span>
                      <span className="font-medium">{formatCurrency(monthlyPrice)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <Separator className="my-6" />
          
          {/* Pricing Tier Selection */}
          <div className="mb-6">
            <h4 className="text-base font-medium mb-3">Select Your Plan</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button 
                variant={tier === 'startup' ? 'default' : 'outline'} 
                className={`h-auto py-3 justify-start ${
                  tier === 'startup' 
                    ? 'bg-[#3480cc] hover:bg-[#3480cc]/90 text-white' 
                    : 'border-[#3480cc] text-[#3480cc] hover:bg-[#3480cc]/10'
                }`}
                onClick={() => setTier('startup')}
              >
                <div className="flex flex-col items-start text-left">
                  <span className="font-semibold">Startup</span>
                  <span className={`text-xs mt-1 ${tier === 'startup' ? 'text-white/80' : 'text-muted-foreground'}`}>Pay-as-you-go pricing</span>
                </div>
              </Button>
              
              <Button 
                variant={tier === 'business' ? 'default' : 'outline'} 
                className={`h-auto py-3 justify-start relative ${
                  tier === 'business' 
                    ? 'bg-[#3480cc] hover:bg-[#3480cc]/90 text-white' 
                    : 'border-[#3480cc] text-[#3480cc] hover:bg-[#3480cc]/10'
                }`}
                onClick={() => setTier('business')}
              >
                <div className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                  Popular
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="font-semibold">Business</span>
                  <span className={`text-xs mt-1 ${tier === 'business' ? 'text-white/80' : 'text-muted-foreground'}`}>10% discount on all services</span>
                </div>
              </Button>
              
              <Button 
                variant={tier === 'enterprise' ? 'default' : 'outline'} 
                className={`h-auto py-3 justify-start ${
                  tier === 'enterprise' 
                    ? 'bg-[#3480cc] hover:bg-[#3480cc]/90 text-white' 
                    : 'border-[#3480cc] text-[#3480cc] hover:bg-[#3480cc]/10'
                }`}
                onClick={() => setTier('enterprise')}
              >
                <div className="flex flex-col items-start text-left">
                  <span className="font-semibold">Enterprise</span>
                  <span className={`text-xs mt-1 ${tier === 'enterprise' ? 'text-white/80' : 'text-muted-foreground'}`}>20% discount + priority support</span>
                </div>
              </Button>
            </div>
          </div>
          
          {/* Pricing Summary */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-semibold">
                {serviceOptions[serviceType].name} ({tier.charAt(0).toUpperCase() + tier.slice(1)})
              </h4>
              <div className="flex items-center text-green-600">
                <CheckCircle className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">Recommended</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Monthly Price</span>
                    <span className="font-medium">{formatCurrency(monthlyPrice)}</span>
                  </div>
                  
                  {tier !== 'startup' && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({TIER_DISCOUNT[tier] * 100}%)</span>
                      <span className="font-medium">-{formatCurrency(savings)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between pt-2 border-t">
                    <span className="font-semibold">Monthly Total</span>
                    <span className="font-bold text-lg">{formatCurrency(discountedPrice)}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>One-time Setup Fee</span>
                    <span>{formatCurrency(setupFee)}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="w-full flex items-center gap-2 bg-[#3480cc] hover:bg-[#3480cc]/90 text-white">
                    Get Custom Quote <ArrowRight className="h-4 w-4" />
                  </Button>
                  <p className="text-xs text-center mt-2 text-gray-500">
                    Prices are subject to change based on specific requirements
                  </p>
                </div>
              </div>
              
              <div className="border-l pl-6 hidden md:block">
                <h5 className="font-medium mb-3">Included Features:</h5>
                <ul className="space-y-2">
                  {serviceOptions[serviceType].features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {tier === 'business' && (
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Priority support (8/5)</span>
                    </li>
                  )}
                  {tier === 'enterprise' && (
                    <>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Premium support (24/7)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Dedicated account manager</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 border border-blue-100 rounded-md p-4 flex gap-3">
              <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-700">
                <p className="font-medium mb-1">Looking for a tailored solution?</p>
                <p>Our team can help you customize a package that perfectly fits your business needs. Contact our sales team for a detailed consultation.</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </AnimatedElement>
  );
}