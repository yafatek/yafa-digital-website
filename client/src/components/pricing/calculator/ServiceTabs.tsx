import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { CloudLightning, Database, ShieldCheck } from "lucide-react";
import { ServiceTabsProps, ServiceType } from './types';

const ServiceTabs: React.FC<ServiceTabsProps> = ({ selectedService, onServiceChange }) => {
  const handleValueChange = (value: string) => {
    onServiceChange(value as ServiceType);
  };

  return (
    <Tabs 
      value={selectedService} 
      onValueChange={handleValueChange} 
      className="w-full"
    >
      <TabsList className="grid w-full grid-cols-3 bg-transparent">
        <TabsTrigger 
          value="cloud-compute" 
          className="flex items-center gap-1.5 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 border"
        >
          <CloudLightning className="w-4 h-4" />
          <span className="hidden sm:inline">Cloud Compute</span>
          <span className="sm:hidden">Compute</span>
        </TabsTrigger>
        <TabsTrigger 
          value="storage" 
          className="flex items-center gap-1.5 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 border"
        >
          <Database className="w-4 h-4" />
          <span className="hidden sm:inline">Cloud Storage</span>
          <span className="sm:hidden">Storage</span>
        </TabsTrigger>
        <TabsTrigger 
          value="security" 
          className="flex items-center gap-1.5 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 border"
        >
          <ShieldCheck className="w-4 h-4" />
          <span className="hidden sm:inline">Security Services</span>
          <span className="sm:hidden">Security</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ServiceTabs; 