import React from 'react';
import { CloudServiceFeature, FeatureSelectorProps } from './types';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../../components/ui/tooltip";

const FeatureSelector: React.FC<FeatureSelectorProps> = ({ 
  availableFeatures, 
  selectedFeatures, 
  onToggleFeature 
}) => {
  return (
    <div>
      <h4 className="font-medium mb-3">Additional Features</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {availableFeatures.map((feature) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
            isSelected={selectedFeatures.includes(feature.id)}
            onToggle={() => onToggleFeature(feature.id)}
          />
        ))}
      </div>
    </div>
  );
};

interface FeatureCardProps {
  feature: CloudServiceFeature;
  isSelected: boolean;
  onToggle: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, isSelected, onToggle }) => {
  return (
    <div 
      className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all
        ${isSelected 
          ? 'border-blue-300 bg-blue-50' 
          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
        }`}
      onClick={onToggle}
    >
      <div className="pt-1 text-blue-600">
        {isSelected 
          ? <CheckCircle className="h-5 w-5" /> 
          : <AlertCircle className="h-5 w-5 text-gray-400" />
        }
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-sm">{feature.name}</h5>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded-full ml-1">
                  +AED {feature.price.toFixed(2)}
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">Added to monthly fee</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-xs text-gray-500 mt-1">{feature.description}</p>
      </div>
    </div>
  );
};

export default FeatureSelector; 