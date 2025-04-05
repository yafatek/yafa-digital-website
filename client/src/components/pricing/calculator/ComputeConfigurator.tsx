import React from 'react';
import { ConfiguratorProps } from './types';
import { Server, Cpu, MemoryStick, HardDrive, Users } from 'lucide-react';
import { Label } from '../../../components/ui/label';
import { Slider } from '../../../components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';

const ComputeConfigurator: React.FC<ConfiguratorProps> = ({
  config,
  onConfigChange,
  formatCurrency,
  monthlyFees
}) => {
  const handleCpuChange = (value: number[]) => {
    onConfigChange({ cpuCores: value[0] });
  };

  const handleRamChange = (value: number[]) => {
    onConfigChange({ ramGB: value[0] });
  };

  const handleStorageChange = (value: number[]) => {
    onConfigChange({ storageGB: value[0] });
  };

  const handleUsersChange = (value: number[]) => {
    onConfigChange({ users: value[0] });
  };

  const handleRegionChange = (value: string) => {
    onConfigChange({ region: value as any });
  };

  const handleBackupFrequencyChange = (value: string) => {
    onConfigChange({ backupFrequency: value as any });
  };

  const handleSupportLevelChange = (value: string) => {
    onConfigChange({ supportLevel: value as any });
  };

  const handleSecurityLevelChange = (value: string) => {
    onConfigChange({ securityLevel: value as any });
  };

  // Calculate mini-summary data
  const computeCost = 
    (config.cpuCores * 1.0) + // 1.0 AED per core
    (config.ramGB * 0.5) +    // 0.5 AED per GB RAM
    (config.storageGB * 0.035); // 0.035 AED per GB storage

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Main configurator */}
      <div className="md:col-span-2 space-y-6">
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <Label htmlFor="cpu" className="flex items-center gap-1.5">
                <Cpu className="h-4 w-4" />
                <span>CPU Cores</span>
              </Label>
              <span className="text-sm font-medium">{config.cpuCores}</span>
            </div>
            <Slider
              id="cpu"
              min={1}
              max={32}
              step={1}
              value={[config.cpuCores]}
              onValueChange={handleCpuChange}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1 core</span>
              <span>32 cores</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <Label htmlFor="ram" className="flex items-center gap-1.5">
                <MemoryStick className="h-4 w-4" />
                <span>RAM</span>
              </Label>
              <span className="text-sm font-medium">{config.ramGB} GB</span>
            </div>
            <Slider
              id="ram"
              min={1}
              max={128}
              step={1}
              value={[config.ramGB]}
              onValueChange={handleRamChange}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1 GB</span>
              <span>128 GB</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <Label htmlFor="storage" className="flex items-center gap-1.5">
                <HardDrive className="h-4 w-4" />
                <span>Storage</span>
              </Label>
              <span className="text-sm font-medium">{config.storageGB} GB</span>
            </div>
            <Slider
              id="storage"
              min={10}
              max={2000}
              step={10}
              value={[config.storageGB]}
              onValueChange={handleStorageChange}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>10 GB</span>
              <span>2 TB</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <Label htmlFor="users" className="flex items-center gap-1.5">
                <Users className="h-4 w-4" />
                <span>Users</span>
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
      </div>

      {/* Mini-summary */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 h-fit">
        <h4 className="text-sm font-semibold mb-3">Your Cloud Compute</h4>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1.5 text-gray-600">
              <Server className="h-3.5 w-3.5" />
              <span>Configuration</span>
            </span>
            <span className="font-medium">{config.cpuCores} vCPU, {config.ramGB} GB RAM</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1.5 text-gray-600">
              <HardDrive className="h-3.5 w-3.5" />
              <span>Storage</span>
            </span>
            <span className="font-medium">{config.storageGB} GB</span>
          </div>
          
          <div className="flex items-center justify-between text-sm border-t pt-2 mt-2">
            <span className="text-gray-600">Compute Subtotal</span>
            <span className="font-medium">{formatCurrency(computeCost)}</span>
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

export default ComputeConfigurator; 