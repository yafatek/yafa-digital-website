// Define all types needed for the cloud services calculator

// Basic enums and types
export type PricingTier = 'startup' | 'business' | 'enterprise';
export type ServiceType = 'cloud-compute' | 'storage' | 'security';
export type Region = 'uae' | 'middle-east' | 'global';
export type BackupFrequency = 'daily' | 'weekly' | 'monthly';
export type SupportLevel = 'basic' | 'priority' | '24-7';
export type SecurityLevel = 'basic' | 'advanced' | 'premium';

// Feature definition
export interface CloudServiceFeature {
  id: string;
  name: string;
  description: string;
  price: number;
}

// Main configuration type
export interface CloudServiceConfig {
  serviceType: ServiceType;
  tier: PricingTier;
  features: string[];
  region: Region;
  backupFrequency: BackupFrequency;
  supportLevel: SupportLevel;
  securityLevel: SecurityLevel;
  cpuCores: number;
  ramGB: number;
  storageGB: number;
  users: number;
}

// Props interfaces for components
export interface ServiceTabsProps {
  selectedService: ServiceType;
  onServiceChange: (service: ServiceType) => void;
}

export interface TierSelectorProps {
  selectedTier: PricingTier;
  onTierChange: (tier: PricingTier) => void;
}

export interface ConfiguratorProps {
  config: CloudServiceConfig;
  onConfigChange: (updates: Partial<CloudServiceConfig>) => void;
  formatCurrency: (amount: number) => string;
  monthlyFees: number;
}

export interface FeatureSelectorProps {
  availableFeatures: CloudServiceFeature[];
  selectedFeatures: string[];
  onToggleFeature: (featureId: string) => void;
}

export interface PriceSummaryProps {
  config: CloudServiceConfig;
  monthlyFees: number;
  vatAmount: number;
  setupFee: number;
  totalPrice: number;
  isDownloading: boolean;
  handleDownloadQuote: () => void;
  getServiceName: (serviceType: ServiceType) => string;
  availableFeatures: CloudServiceFeature[];
} 