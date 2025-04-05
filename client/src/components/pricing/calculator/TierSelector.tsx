import React from 'react';
import { PricingTier, TierSelectorProps } from './types';
import { Button } from "../../../components/ui/button";

const TierSelector: React.FC<TierSelectorProps> = ({ selectedTier, onTierChange }) => {
  return (
    <div>
      <h4 className="font-medium mb-3">Choose Your Plan</h4>
      <div className="grid grid-cols-3 gap-4">
        <TierCard 
          tier="startup"
          title="Startup"
          description="Best for small startups and personal projects"
          isSelected={selectedTier === 'startup'}
          onSelect={onTierChange}
        />
        <TierCard 
          tier="business"
          title="Business"
          description="For growing businesses and teams"
          isSelected={selectedTier === 'business'}
          onSelect={onTierChange}
          isRecommended={true}
        />
        <TierCard 
          tier="enterprise"
          title="Enterprise"
          description="Advanced features for large organizations"
          isSelected={selectedTier === 'enterprise'}
          onSelect={onTierChange}
        />
      </div>
    </div>
  );
};

interface TierCardProps {
  tier: PricingTier;
  title: string;
  description: string;
  isSelected: boolean;
  isRecommended?: boolean;
  onSelect: (tier: PricingTier) => void;
}

const TierCard: React.FC<TierCardProps> = ({ 
  tier, 
  title, 
  description, 
  isSelected, 
  isRecommended = false,
  onSelect 
}) => {
  return (
    <div 
      className={`relative rounded-lg border p-4 cursor-pointer transition-all hover:border-blue-400 hover:shadow-sm text-center
        ${isSelected ? 'border-blue-600 bg-blue-50 shadow-sm' : 'border-gray-200'}`}
      onClick={() => onSelect(tier)}
    >
      {isRecommended && (
        <div className="absolute -top-2 left-0 right-0 flex justify-center">
          <span className="bg-amber-500 text-white text-xs px-3 py-0.5 rounded-full">
            Recommended
          </span>
        </div>
      )}
      <h5 className={`font-semibold text-lg mt-2 ${isRecommended ? 'mt-4' : ''}`}>{title}</h5>
      <p className="text-sm text-gray-500 mt-1 mb-3">{description}</p>
      <Button 
        variant={isSelected ? "default" : "outline"}
        size="sm" 
        className="w-full"
        onClick={() => onSelect(tier)}
      >
        {isSelected ? 'Selected' : 'Select'}
      </Button>
    </div>
  );
};

export default TierSelector; 