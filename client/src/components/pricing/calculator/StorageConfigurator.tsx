import React from 'react';
import { ConfiguratorProps } from './types';
import { Database, HardDrive, Shield, Clock } from 'lucide-react';
import { Label } from '../../../components/ui/label';
import { Slider } from '../../../components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';

const StorageConfigurator: React.FC<ConfiguratorProps> = ({
  config,
  onConfigChange,
  formatCurrency,
  monthlyFees
}) => {
  const handleStorageChange = (value: number[]) => {
    onConfigChange({ storageGB: value[0] });
  };

  const handleRegionChange = (value: string) => {
    onConfigChange({ region: value as any });
  };

  const handleBackupFrequencyChange = (value: string) => {
    onConfigChange({ backupFrequency: value as any });
  };

  const handleSecurityLevelChange = (value: string) => {
    onConfigChange({ securityLevel: value as any });
  };

  // Calculate mini-summary data
  const storageCost = config.storageGB * 0.035; // 0.035 AED per GB

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Main configurator */}
      <div className="md:col-span-2 space-y-6">
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <Label htmlFor="storage" className="flex items-center gap-1.5">
                <HardDrive className="h-4 w-4" />
                <span>Storage Size</span>
              </Label>
              <span className="text-sm font-medium">{config.storageGB} GB</span>
            </div>
            <Slider
              id="storage"
              min={10}
              max={10000}
              step={10}
              value={[config.storageGB]}
              onValueChange={handleStorageChange}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>10 GB</span>
              <span>10 TB</span>
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
            <Label htmlFor="backup">Backup Frequency</Label>
            <Select
              value={config.backupFrequency}
              onValueChange={handleBackupFrequencyChange}
            >
              <SelectTrigger id="backup">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
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
        </div>

        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
          <h5 className="text-sm font-semibold mb-2 text-blue-800">Storage Information</h5>
          <p className="text-xs text-blue-700 mb-2">
            Our cloud storage service provides:
          </p>
          <ul className="text-xs text-blue-700 list-disc pl-4 space-y-1">
            <li>Competitive pricing at just AED 0.035 per GB</li>
            <li>Regional data centers with low latency access</li>
            <li>High redundancy and durability (99.999999999%)</li>
            <li>Multiple backup options to suit your needs</li>
            <li>Configurable security with encryption at rest and in transit</li>
          </ul>
        </div>
      </div>

      {/* Mini-summary */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 h-fit">
        <h4 className="text-sm font-semibold mb-3">Your Cloud Storage</h4>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1.5 text-gray-600">
              <Database className="h-3.5 w-3.5" />
              <span>Storage Size</span>
            </span>
            <span className="font-medium">{config.storageGB} GB</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1.5 text-gray-600">
              <Clock className="h-3.5 w-3.5" />
              <span>Backup Frequency</span>
            </span>
            <span className="font-medium capitalize">{config.backupFrequency}</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1.5 text-gray-600">
              <Shield className="h-3.5 w-3.5" />
              <span>Security Level</span>
            </span>
            <span className="font-medium capitalize">{config.securityLevel}</span>
          </div>
          
          <div className="flex items-center justify-between text-sm border-t pt-2 mt-2">
            <span className="text-gray-600">Storage Subtotal</span>
            <span className="font-medium">{formatCurrency(storageCost)}</span>
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

export default StorageConfigurator; 