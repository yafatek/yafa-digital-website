import React from 'react';
import { PriceSummaryProps } from './types';
import { Button } from "../../../components/ui/button";
import { DownloadIcon } from 'lucide-react';

const PriceSummary: React.FC<PriceSummaryProps> = ({
  config,
  monthlyFees,
  vatAmount,
  setupFee,
  totalPrice,
  isDownloading,
  handleDownloadQuote,
  getServiceName,
  availableFeatures
}) => {
  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
      <h4 className="text-lg font-semibold mb-4">Summary</h4>
      
      <div className="space-y-6">
        {/* Selected configuration summary */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Service Type:</span>
            <span className="font-medium">{getServiceName(config.serviceType)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Region:</span>
            <span className="font-medium capitalize">
              {config.region.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Resources:</span>
            <span className="font-medium">
              {config.cpuCores} cores, {config.ramGB} GB RAM, {config.storageGB} GB storage
            </span>
          </div>
          {config.features.length > 0 && (
            <div className="flex justify-between">
              <span className="text-gray-500">Features:</span>
              <span className="font-medium text-right">
                {config.features.map(id => 
                  availableFeatures.find(f => f.id === id)?.name || id
                ).join(', ')}
              </span>
            </div>
          )}
        </div>
        
        {/* Price breakdown */}
        <div className="space-y-2">
          <div className="flex justify-between pb-2 text-sm">
            <span className="text-gray-500">Monthly Fee (Pre-VAT):</span>
            <span className="font-medium">AED {monthlyFees.toFixed(2)}</span>
          </div>
          <div className="flex justify-between pb-2 text-sm">
            <span className="text-gray-500">VAT (5%):</span>
            <span className="font-medium">AED {vatAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between pb-2 text-sm">
            <span className="text-gray-500">Setup Fee:</span>
            <span className="font-medium">AED {setupFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between pt-2 border-t">
            <span className="font-semibold">Total (Setup + First Month):</span>
            <span className="font-bold text-lg">AED {totalPrice.toFixed(2)}</span>
          </div>
        </div>
        
        {/* Additional notes about pricing */}
        <div className="text-xs text-gray-500 space-y-1">
          <p>• All prices are in UAE Dirhams (AED)</p>
          <p>• Monthly fees include a 5% service fee on top of base costs</p>
          <p>• VAT is calculated at 5% on monthly fees</p>
          <p>• Setup fee is a one-time charge equal to 10% of monthly fee</p>
        </div>
        
        {/* Quote download button */}
        <Button 
          onClick={handleDownloadQuote}
          disabled={isDownloading}
          className="w-full"
        >
          <DownloadIcon className="h-4 w-4 mr-2" />
          {isDownloading ? 'Preparing Quote...' : 'Download Quote'}
        </Button>
      </div>
    </div>
  );
};

export default PriceSummary; 