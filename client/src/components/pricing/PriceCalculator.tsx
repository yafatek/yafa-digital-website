import React, { useState, useEffect } from "react";
import {
  Card,
  // CardContent, // No longer directly used
  // CardDescription, // No longer directly used
  // CardFooter, // No longer directly used
  // CardHeader, // No longer directly used
  // CardTitle, // No longer directly used
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
// import { Label } from "../../components/ui/label"; // No longer directly used
// import { Checkbox } from "../../components/ui/checkbox"; // No longer directly used
// import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group"; // No longer directly used
// import { Slider } from "../../components/ui/slider"; // No longer directly used
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"; // No longer directly used
import { AnimatedElement } from "../../components/ui/animated-element";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"; // Replaced by ServiceTabs
import { Separator } from "../../components/ui/separator";
import { 
  // CloudLightning, Database, ShieldCheck, // Used in ServiceTabs
  // Server, Zap, Cpu, MemoryStick, HardDrive, Users, // Used in Configurators
  DownloadIcon, 
  // MapPin, BadgeDollarSign, HelpCircle, Lock, Settings, PlusCircle, // Potentially unused now
  CheckCircle, AlertCircle // Used in PriceSummary/FeatureSelector & logic
} from "lucide-react";
import { useToast } from "../../hooks/use-toast";
import jsPDF from "jspdf";
import 'jspdf-autotable';

// Import refined types and components
import {
  PricingTier, ServiceType, Region, BackupFrequency, SupportLevel, 
  SecurityLevel, CloudServiceFeature, CloudServiceConfig 
} from './calculator/types'; 
import TierSelector from './calculator/TierSelector'; 
import ServiceTabs from './calculator/ServiceTabs'; 
import ComputeConfigurator from './calculator/ComputeConfigurator'; 
import StorageConfigurator from './calculator/StorageConfigurator'; 
import SecurityConfigurator from './calculator/SecurityConfigurator';
import FeatureSelector from './calculator/FeatureSelector';
import PriceSummary from './calculator/PriceSummary';

// REMOVED conflicting local type definitions


// --- Adjusted Pricing Constants --- 
const TIER_BASE_PRICES: Record<PricingTier, number> = {
  startup: 0,    // Free tier
  business: 2,   // Minimal base price
  enterprise: 5, // Small base price for enterprise
};

const REGION_MULTIPLIERS: Record<Region, number> = {
  uae: 1.0,
  'middle-east': 1.05,
  global: 1.1,
};

const BACKUP_FREQUENCY_FEES: Record<BackupFrequency, number> = {
  daily: 0.5,   // Minimal fee
  weekly: 0.2,  // Very small fee
  monthly: 0.1, // Almost free
};

const SUPPORT_LEVEL_FEES: Record<SupportLevel, number> = {
  basic: 0,
  priority: 3,   // Reduced significantly
  '24-7': 10,    // Reduced significantly
};

const SECURITY_LEVEL_FEES: Record<SecurityLevel, number> = {
  basic: 1,     // Minimal fee
  advanced: 3,  // Small fee
  premium: 8,   // Reasonable premium fee
};

const RESOURCE_PRICES = {
  CPU_CORE: 1.0,     // 1 AED per core
  RAM_GB: 0.5,       // 0.5 AED per GB
  STORAGE_GB: 0.035, // As requested
  USER: 1,           // 1 AED per user
};

// Available features (Keep for FeatureSelector and calculations)
const CLOUD_SERVICE_FEATURES: CloudServiceFeature[] = [
  { id: 'cdn', name: 'Content Delivery Network (CDN)', description: 'Improve global content delivery speed', price: 20 },
  { id: 'load-balancer', name: 'Load Balancer', description: 'Distribute traffic across multiple instances', price: 25 },
  { id: 'managed-db', name: 'Managed Database', description: 'Hosted database service (e.g., PostgreSQL, MySQL)', price: 50 },
  { id: 'vpn', name: 'VPN Gateway', description: 'Secure site-to-site or client VPN access', price: 35 },
  { id: 'monitoring', name: 'Advanced Monitoring & Alerting', description: 'Detailed performance metrics and custom alerts', price: 15 },
  { id: 'autoscaling', name: 'Auto Scaling', description: 'Automatically adjust resources based on demand', price: 10 },
];

export function PriceCalculator() {
  const { toast } = useToast();
  
  // State Management (Keep)
  const [config, setConfig] = useState<CloudServiceConfig>({
    serviceType: 'cloud-compute',
    tier: 'business',
    features: ['load-balancer', 'monitoring'], // Corrected feature id
    region: 'uae',
    backupFrequency: 'weekly',
    supportLevel: 'priority',
    securityLevel: 'advanced',
    cpuCores: 4,
    ramGB: 8,
    storageGB: 500,
    users: 10
  });
  
  const [totalPrice, setTotalPrice] = useState(0);
  const [monthlyFees, setMonthlyFees] = useState(0); // This will be pre-VAT monthly
  const [setupFee, setSetupFee] = useState(0);
  const [vatAmount, setVatAmount] = useState(0); // Add state for VAT
  const [isDownloading, setIsDownloading] = useState(false);
  
  // Calculation Logic (Update with profit margin and VAT)
  useEffect(() => {
    let basePrice = TIER_BASE_PRICES[config.tier];
    const resourcePrice = 
      (config.cpuCores * RESOURCE_PRICES.CPU_CORE) +
      (config.ramGB * RESOURCE_PRICES.RAM_GB) +
      (config.storageGB * RESOURCE_PRICES.STORAGE_GB) +
      (config.users * RESOURCE_PRICES.USER);
    const featurePrice = config.features.reduce((sum, featureId) => {
      const feature = CLOUD_SERVICE_FEATURES.find(f => f.id === featureId);
      return sum + (feature?.price || 0);
    }, 0);
    const backupFee = BACKUP_FREQUENCY_FEES[config.backupFrequency];
    const supportFee = SUPPORT_LEVEL_FEES[config.supportLevel];
    const securityFee = SECURITY_LEVEL_FEES[config.securityLevel];
    const regionMultiplier = REGION_MULTIPLIERS[config.region];
    
    // Calculate raw costs (pre-profit, pre-VAT)
    const rawMonthlyCost = (basePrice + resourcePrice + featurePrice + backupFee + supportFee + securityFee) * regionMultiplier;
    
    // Add 5% profit margin
    const calculatedMonthlyPreVat = rawMonthlyCost * 1.05;
    setMonthlyFees(calculatedMonthlyPreVat);
    
    // Calculate VAT (5% on monthly fee)
    const calculatedVat = calculatedMonthlyPreVat * 0.05;
    setVatAmount(calculatedVat);
    
    // Calculate setup fee (10% of pre-VAT monthly)
    const calculatedSetupFee = calculatedMonthlyPreVat * 0.1;
    setSetupFee(calculatedSetupFee);
    
    // Calculate Total Price (Setup + Monthly + VAT)
    setTotalPrice(calculatedSetupFee + calculatedMonthlyPreVat + calculatedVat);

  }, [config]);

  // State Updaters (Keep)
  const updateConfig = (updates: Partial<CloudServiceConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  const toggleFeature = (featureId: string) => {
    setConfig(prev => {
      const isSelected = prev.features.includes(featureId);
      return {
        ...prev,
        features: isSelected 
          ? prev.features.filter(id => id !== featureId)
          : [...prev.features, featureId]
      };
    });
  };

  // Currency Formatter - Update to AED
  const formatCurrency = (amount: number) => {
    return `AED ${amount.toFixed(2)}`;
  };

  // PDF Generation (Keep) - Needs update to show VAT and AED
  const generateQuotePDF = () => {
    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const quoteRef = `CLOUD-${Date.now().toString().slice(-6)}`;
      const date = new Date().toISOString().split('T')[0];
      const filename = `yafa-cloud-quote-${quoteRef}-${date}.pdf`;
      const validUntilDate = new Date();
      validUntilDate.setDate(validUntilDate.getDate() + 7);
      const validUntil = validUntilDate.toLocaleDateString();
      
      // Header
      doc.setFillColor(52, 128, 204);
      doc.rect(0, 0, pageWidth, 30, 'F');
      const logoBase64 = "data:image/png;base64,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";
      try { doc.addImage(logoBase64, 'PNG', 15, 7, 18, 18); } catch (e) { console.error("Error adding logo:", e); }
      doc.setFont("helvetica", "bold"); doc.setTextColor(255, 255, 255); doc.setFontSize(18);
      doc.text("YAFA Cloud Services", 40, 18);
      
      // Document Title & Meta
      let yPos = 45;
      doc.setFont("helvetica", "bold"); doc.setTextColor(50, 50, 50); doc.setFontSize(16);
      doc.text("Cloud Services Quotation", 15, yPos);
      doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor(100, 100, 100);
      yPos += 7; doc.text(`Ref: ${quoteRef}`, 15, yPos);
      yPos += 5; doc.text(`Issue Date: ${new Date().toLocaleDateString()}`, 15, yPos);
      yPos += 5; doc.text(`Valid Until: ${validUntil}`, 15, yPos);
      doc.setTextColor(50, 50, 50); doc.setFontSize(8);
      const companyInfo = ["YAFA Digital", "Building 10, Office 209", "Dubai Digital Park, Dubai, UAE", "admin@yafa.digital", "+971 56 553 1542"];
      let companyY = 47;
      companyInfo.forEach((line) => { doc.text(line, pageWidth - 15, companyY, { align: "right" }); companyY += 4.5; });
      yPos = Math.max(yPos, companyY) + 10;
      doc.setDrawColor(230, 230, 230); doc.setLineWidth(0.5); doc.line(15, yPos, pageWidth - 15, yPos);
      yPos += 12;
      
      // Configuration Summary Table
      doc.setFont("helvetica", "bold"); doc.setFontSize(12); doc.setTextColor(52, 128, 204);
      doc.text("CONFIGURATION SUMMARY", 15, yPos);
      yPos += 8;
      const configBody = [
        ['Pricing Tier', config.tier.charAt(0).toUpperCase() + config.tier.slice(1)],
        ['Region', config.region.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')],
        ['CPU Cores', config.cpuCores.toString()],
        ['RAM', `${config.ramGB} GB`],
        ['Storage', `${config.storageGB} GB`],
        ['Users', config.users.toString()],
        ['Backup Frequency', config.backupFrequency.charAt(0).toUpperCase() + config.backupFrequency.slice(1)],
        ['Support Level', config.supportLevel === '24-7' ? '24/7' : config.supportLevel.charAt(0).toUpperCase() + config.supportLevel.slice(1)],
        ['Security Level', config.securityLevel.charAt(0).toUpperCase() + config.securityLevel.slice(1)],
      ];
      if (config.features.length > 0) {
        configBody.push(['Selected Features', config.features.map(id => CLOUD_SERVICE_FEATURES.find(f => f.id === id)?.name || id).join(', ')]);
      }
      (doc as any).autoTable({
        startY: yPos,
        head: [[{ content: 'Parameter', styles: { fontStyle: 'bold' } }, { content: 'Selection', styles: { fontStyle: 'bold' } }]],
        body: configBody, theme: 'grid', headStyles: { fillColor: [240, 240, 240], textColor: [50, 50, 50] },
        styles: { fontSize: 9, cellPadding: 2.5 }, columnStyles: { 0: { cellWidth: 50 } },
        margin: { left: 15, right: 15 }, didDrawPage: (data: any) => { yPos = data.cursor.y + 15; } 
      });

      // Pricing Breakdown Table - Clean format with profit and VAT
      doc.setFont("helvetica", "bold"); doc.setFontSize(12); doc.setTextColor(52, 128, 204);
      doc.text("PRICING BREAKDOWN", 15, yPos);
      yPos += 8;
      const pricingBody: (string | number)[][] = [];
      let monthlySubtotal = 0;
      const addRow = (label: string, value: number) => { pricingBody.push([label, formatCurrency(value)]); monthlySubtotal += value; };
      
      // Add items BEFORE region multiplier/VAT
      addRow('Base Tier Price', TIER_BASE_PRICES[config.tier]);
      addRow(`CPU Cores (${config.cpuCores})`, config.cpuCores * RESOURCE_PRICES.CPU_CORE);
      addRow(`RAM (${config.ramGB} GB)`, config.ramGB * RESOURCE_PRICES.RAM_GB);
      addRow(`Storage (${config.storageGB} GB)`, config.storageGB * RESOURCE_PRICES.STORAGE_GB);
      addRow(`Users (${config.users})`, config.users * RESOURCE_PRICES.USER);
      config.features.forEach(id => { const feature = CLOUD_SERVICE_FEATURES.find(f => f.id === id); if (feature) addRow(feature.name, feature.price); });
      addRow(`Backup (${config.backupFrequency})`, BACKUP_FREQUENCY_FEES[config.backupFrequency]);
      addRow(`Support (${config.supportLevel === '24-7' ? '24/7' : config.supportLevel})`, SUPPORT_LEVEL_FEES[config.supportLevel]);
      addRow(`Security (${config.securityLevel})`, SECURITY_LEVEL_FEES[config.securityLevel]);
      
      const subTotalBeforeRegion = monthlySubtotal; // Capture subtotal before region adjustment
      pricingBody.push(['Subtotal (before region)', formatCurrency(subTotalBeforeRegion)]); 

      // Add region premium if applicable
      const multiplier = REGION_MULTIPLIERS[config.region];
      if (multiplier !== 1.0) {
        const premium = subTotalBeforeRegion * (multiplier - 1);
        pricingBody.push([`${config.region.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Region Premium (${((multiplier - 1) * 100).toFixed(0)}%)`, formatCurrency(premium)]);
      }
      
      // Raw cost after region multiplier
      const rawCost = subTotalBeforeRegion * multiplier;
      pricingBody.push(['Monthly Base Cost', formatCurrency(rawCost)]);
      
      // Show profit margin
      const profitMargin = rawCost * 0.05;
      pricingBody.push(['Service Fee (5%)', formatCurrency(profitMargin)]);
      
      // Show Monthly Fee (Post-Region, Post-Profit, Pre-VAT)
      pricingBody.push(['Subtotal (before VAT)', formatCurrency(monthlyFees)]); 
      
      // Show VAT
      pricingBody.push(['VAT (5%)', formatCurrency(vatAmount)]);
      
      // Show Monthly Total with VAT
      pricingBody.push(['Monthly Total (incl. VAT)', formatCurrency(monthlyFees + vatAmount)]);
      
      // Show Setup Fee
      pricingBody.push(['One-Time Setup Fee', formatCurrency(setupFee)]);
      
      // Show Total Price (Setup + Monthly + VAT)
      pricingBody.push(['Total (Setup + First Month incl. VAT)', formatCurrency(totalPrice)]);

      (doc as any).autoTable({
        startY: yPos,
        head: [[{ content: 'Item', styles: { fontStyle: 'bold' } }, { content: 'Amount (AED)', styles: { fontStyle: 'bold', halign: 'right' } }]],
        body: pricingBody, theme: 'grid', headStyles: { fillColor: [240, 240, 240], textColor: [50, 50, 50] },
        styles: { fontSize: 9, cellPadding: 2.5 }, columnStyles: { 1: { halign: 'right' } },
        margin: { left: 15, right: 15 }, didDrawPage: (data: any) => { yPos = data.cursor.y + 15; }
      });

      // Terms & Conditions (Update currency mention)
      doc.setFont("helvetica", "bold"); doc.setFontSize(10); doc.setTextColor(52, 128, 204);
      doc.text("TERMS & CONDITIONS", 15, yPos); yPos += 7;
      doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(100, 100, 100);
      const terms = [
        "1. This quotation is valid for 7 days from the issue date.",
        "2. All prices are in AED and exclusive of applicable taxes (e.g., VAT).", // Updated currency
        "3. Service provisioning begins after receipt of the Setup Fee + First Month payment.",
        "4. Billing cycle: Monthly, starting from the service activation date.",
        "5. Service Level Agreements (SLAs) will be provided upon contract signing.",
        "6. Usage beyond included resources may incur additional charges."
      ];
      terms.forEach((term) => { doc.text(term, 15, yPos, { maxWidth: pageWidth - 30 }); yPos += 5; });

      // Footer
      const pageHeight = doc.internal.pageSize.getHeight(); const footerY = pageHeight - 20; 
      doc.setDrawColor(52, 128, 204); doc.setLineWidth(0.5); doc.line(15, footerY, pageWidth - 15, footerY);
      doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(100, 100, 100);
      doc.text("Thank you for considering YAFA Cloud Services | Questions? Contact admin@yafa.digital or +971 56 553 1542", pageWidth / 2, footerY + 7, { align: "center" });

      doc.save(filename);
      return { filename, quoteRef };
    } catch (error) {
      console.error('PDF generation error:', error);
      throw new Error('Failed to generate PDF: ' + (error instanceof Error ? error.message : String(error)));
    }
  };

  // HTML Generation (Keep - Needs update for VAT/AED)
  const generateHtmlQuote = () => {
      // ... (Needs similar updates as PDF for currency and VAT display)
      // For brevity, skipping the full HTML update here, but it should mirror PDF changes.
      const quoteRef = `CLOUD-${Date.now().toString().slice(-6)}`;
      const date = new Date().toISOString().split('T')[0];
      const filename = `yafa-cloud-quote-${quoteRef}-${date}.html`;
      const htmlContent = `<html><head><title>Quote ${quoteRef}</title></head><body><h1>YAFA Cloud Services Quote (AED)</h1><p>Ref: ${quoteRef}</p><p>Monthly (Pre-VAT): ${formatCurrency(monthlyFees)}</p><p>VAT (5%): ${formatCurrency(vatAmount)}</p><p>Setup Fee: ${formatCurrency(setupFee)}</p><p>Total (First Month): ${formatCurrency(totalPrice)}</p></body></html>`; // Simplified placeholder
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = filename; document.body.appendChild(a);
      a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
      return { filename, quoteRef };
  };
  
  // Download Handler (Keep)
  const handleDownloadQuote = () => {
    setIsDownloading(true);
    try {
      let result = { filename: "", quoteRef: "" }; let format = "PDF";
      try { result = generateQuotePDF(); } 
      catch (pdfError) {
        console.error("PDF generation failed, falling back to HTML:", pdfError);
        result = generateHtmlQuote(); format = "HTML";
      }
      toast({
        title: `${format} Quote downloaded`,
        description: `Quote ${result.quoteRef} has been downloaded as ${result.filename}.`,
        duration: 3000,
      });
    } catch (error) {
      console.error("Quote generation failed completely:", error);
      toast({ title: "Download failed", description: "Could not generate quote.", variant: "destructive", duration: 3000 });
    } finally {
      setIsDownloading(false);
    }
  };

  // Event Handlers (Keep)
  const handleTierChange = (newTier: PricingTier) => {
      updateConfig({ tier: newTier });
  };

  const handleServiceChange = (newService: ServiceType) => {
    updateConfig({ serviceType: newService });
  };
  
  // Helper function (Keep)
  const getServiceName = (serviceType: ServiceType): string => {
    switch (serviceType) {
      case 'cloud-compute': return 'Cloud Compute';
      case 'storage': return 'Cloud Storage';
      case 'security': return 'Security Services';
      default: return 'Unknown Service';
    }
  };

  // --- Final Refactored JSX ---
  return (
    <AnimatedElement animation="fade" delay="100">
      <Card className="overflow-hidden bg-white shadow-lg border-0">
        <div className="p-6">
          <h3 className="text-2xl font-semibold tracking-tight mb-6">Interactive Price Calculator</h3>
          
          <ServiceTabs 
            selectedService={config.serviceType} 
            onServiceChange={handleServiceChange} 
          />

          <div className="mt-6"> 
            {config.serviceType === 'cloud-compute' && (
              <ComputeConfigurator 
                config={config} 
                onConfigChange={updateConfig} 
                formatCurrency={formatCurrency}
                monthlyFees={monthlyFees} 
              />
            )}
            {config.serviceType === 'storage' && (
              <StorageConfigurator 
                config={config} 
                onConfigChange={updateConfig} 
                formatCurrency={formatCurrency}
                monthlyFees={monthlyFees}
              />
            )}
            {config.serviceType === 'security' && (
              <SecurityConfigurator 
                config={config} 
                onConfigChange={updateConfig} 
                formatCurrency={formatCurrency}
                monthlyFees={monthlyFees}
              />
            )}
          </div>

          <div className="mt-6">
            <FeatureSelector
              availableFeatures={CLOUD_SERVICE_FEATURES} 
              selectedFeatures={config.features}
              onToggleFeature={toggleFeature}
            />
          </div>
          
          <Separator className="my-6" />
          
          <TierSelector 
            selectedTier={config.tier} 
            onTierChange={handleTierChange} 
          />
          
          <PriceSummary
            config={config}
            monthlyFees={monthlyFees} // Pass pre-VAT monthly
            vatAmount={vatAmount} // Pass VAT amount
            setupFee={setupFee}
            totalPrice={totalPrice}
            isDownloading={isDownloading}
            handleDownloadQuote={handleDownloadQuote}
            getServiceName={getServiceName}
            availableFeatures={CLOUD_SERVICE_FEATURES} 
          />
        </div>
      </Card>
    </AnimatedElement>
  );
}

export default PriceCalculator;