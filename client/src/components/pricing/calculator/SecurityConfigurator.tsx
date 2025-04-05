import React from 'react';
import { ConfiguratorProps } from './types';
import { Shield, Lock, Settings, Users } from 'lucide-react';
import { Label } from '../../../components/ui/label';
import { Slider } from '../../../components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { Checkbox } from '../../../components/ui/checkbox';

const SecurityConfigurator: React.FC<ConfiguratorProps> = ({
  config,
  onConfigChange,
  formatCurrency,
  monthlyFees
}) => {
  const handleUsersChange = (value: number[]) => {
    onConfigChange({ users: value[0] });
  };

  const handleRegionChange = (value: string) => {
    onConfigChange({ region: value as any });
  };

  const handleSecurityLevelChange = (value: string) => {
    onConfigChange({ securityLevel: value as any });
  };

  const handleSupportLevelChange = (value: string) => {
    onConfigChange({ supportLevel: value as any });
  };

  // Calculate mini-summary data
  const securityCost = config.users * 1.0; // 1.0 AED per user
  let securityLevelCost = 0;
  
  switch (config.securityLevel) {
    case 'basic': securityLevelCost = 1; break;
    case 'advanced': securityLevelCost = 3; break;
    case 'premium': securityLevelCost = 8; break;
  }

  const securityFeatures = {
    basic: [
      'Basic firewall protection',
      'Standard DDoS protection',
      'Basic encryption (data at rest)',
    ],
    advanced: [
      'Advanced firewall protection',
      'Enhanced DDoS mitigation',
      'Full data encryption (rest & transit)',
      'Weekly vulnerability scanning',
      'Basic security alerts'
    ],
    premium: [
      'Enterprise-grade firewall protection',
      'Advanced DDoS protection with auto-scaling',
      'Military-grade encryption with key management',
      'Daily vulnerability scanning & remediation',
      'Real-time threat monitoring & alerting',
      'Security incident response team'
    ]
  };

  const currentSecurityFeatures = securityFeatures[config.securityLevel];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Main configurator */}
      <div className="md:col-span-2 space-y-6">
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <Label htmlFor="users" className="flex items-center gap-1.5">
                <Users className="h-4 w-4" />
                <span>Protected Users</span>
              </Label>
              <span className="text-sm font-medium">{config.users}</span>
            </div>
            <Slider
              id="users"
              min={1}
              max={100}
              step={1}
              value={[config.users]}
              onValueChange={handleUsersChange}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1 user</span>
              <span>100 users</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="region">Region</Label>
            <Select
              value={config.region}
              onValueChange={handleRegionChange}
            >
              <SelectTrigger id="region">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="uae">UAE</SelectItem>
                <SelectItem value="middle-east">Middle East</SelectItem>
                <SelectItem value="global">Global</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="security">Security Level</Label>
            <Select
              value={config.securityLevel}
              onValueChange={handleSecurityLevelChange}
            >
              <SelectTrigger id="security">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="basic">Basic</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="support">Support Level</Label>
            <Select
              value={config.supportLevel}
              onValueChange={handleSupportLevelChange}
            >
              <SelectTrigger id="support">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="basic">Basic</SelectItem>
                <SelectItem value="priority">Priority</SelectItem>
                <SelectItem value="24-7">24/7 Support</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="p-4 bg-green-50 rounded-lg border border-green-100">
          <h5 className="text-sm font-semibold mb-2 text-green-800 flex items-center gap-1.5">
            <Shield className="h-4 w-4" />
            <span>Security Features - {config.securityLevel.charAt(0).toUpperCase() + config.securityLevel.slice(1)}</span>
          </h5>
          <ul className="space-y-1.5">
            {currentSecurityFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <Checkbox id={`feature-${index}`} checked={true} disabled />
                <label 
                  htmlFor={`feature-${index}`}
                  className="text-xs text-green-800 leading-tight"
                >
                  {feature}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mini-summary */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 h-fit">
        <h4 className="text-sm font-semibold mb-3">Your Security Services</h4>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1.5 text-gray-600">
              <Users className="h-3.5 w-3.5" />
              <span>Protected Users</span>
            </span>
            <span className="font-medium">{config.users}</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1.5 text-gray-600">
              <Lock className="h-3.5 w-3.5" />
              <span>Security Level</span>
            </span>
            <span className="font-medium capitalize">{config.securityLevel}</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1.5 text-gray-600">
              <Settings className="h-3.5 w-3.5" />
              <span>Support Level</span>
            </span>
            <span className="font-medium capitalize">
              {config.supportLevel === '24-7' ? '24/7' : config.supportLevel}
            </span>
          </div>
          
          <div className="flex items-center justify-between text-sm border-t pt-2 mt-2">
            <span className="text-gray-600">User Security</span>
            <span className="font-medium">{formatCurrency(securityCost)}</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Security Level Fee</span>
            <span className="font-medium">{formatCurrency(securityLevelCost)}</span>
          </div>
          
          <div className="flex items-center justify-between text-sm border-t pt-2 mt-2">
            <span className="text-gray-600">Monthly Fees</span>
            <span className="font-medium">{formatCurrency(monthlyFees)}</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Monthly with VAT</span>
            <span className="font-medium">{formatCurrency(monthlyFees * 1.05)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityConfigurator; 