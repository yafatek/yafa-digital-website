import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { AnimatedElement } from "../../components/ui/animated-element";
import { CheckCircle, ArrowRight, Code, Calendar, Zap, Download, DownloadIcon } from "lucide-react";
import { useToast } from "../../hooks/use-toast";
import jsPDF from "jspdf";
import 'jspdf-autotable';

// Types
type WebsiteType = 'portfolio' | 'corporate' | 'e-commerce' | 'custom';
type TimelineOption = 'standard' | 'expedited' | 'urgent';

interface WebDevFeature {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface WebDevConfig {
  websiteType: WebsiteType;
  features: string[]; // IDs of selected features
  timeline: TimelineOption;
  includeHosting: boolean;
  includeMaintenance: boolean;
}

// Pricing data
const WEBSITE_BASE_PRICES = {
  'portfolio': 3000,
  'corporate': 6000,
  'e-commerce': 10000,
  'custom': 20000
};

const TIMELINE_MULTIPLIERS = {
  'standard': 1, // 4-6 weeks
  'expedited': 1.15, // 2-3 weeks - 15% premium
  'urgent': 1.2 // 1 week - 20% premium
};

const HOSTING_ANNUAL_FEE = 1250; // Equivalent to 350 USD
const MAINTENANCE_MONTHLY_FEE = 999;

// Available features
const WEB_DEV_FEATURES: WebDevFeature[] = [
  {
    id: 'seo',
    name: 'SEO Optimization',
    description: 'On-page SEO and performance optimization',
    price: 3000
  },
  {
    id: 'analytics',
    name: 'Analytics Integration',
    description: 'Detailed visitor tracking and reporting',
    price: 500
  },
  {
    id: 'multilingual',
    name: 'Multilingual Support',
    description: 'Content in multiple languages',
    price: 1000
  },
  {
    id: 'payment',
    name: 'Payment Processing',
    description: 'Secure payment gateway integration',
    price: 2000
  },
  {
    id: 'membership',
    name: 'Membership Portal',
    description: 'User registration and account management',
    price: 5000
  },
  {
    id: 'api',
    name: 'API Integration',
    description: 'Connect to third-party services and platforms',
    price: 5000
  }
];

// Export both default and named export
function WebDevCalculator() {
  const { toast } = useToast();
  const [config, setConfig] = useState<WebDevConfig>({
    websiteType: 'corporate',
    features: ['seo', 'analytics'],
    timeline: 'standard',
    includeHosting: true,
    includeMaintenance: false
  });
  
  const [totalPrice, setTotalPrice] = useState(0);
  const [monthlyFees, setMonthlyFees] = useState(0);
  const [annualFees, setAnnualFees] = useState(0);
  const [deliveryTime, setDeliveryTime] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  
  // Calculate prices whenever configuration changes
  useEffect(() => {
    // Base price calculation
    let basePrice = WEBSITE_BASE_PRICES[config.websiteType];
    
    // Add feature prices
    const featurePrice = config.features.reduce((sum, featureId) => {
      const feature = WEB_DEV_FEATURES.find(f => f.id === featureId);
      return sum + (feature?.price || 0);
    }, 0);
    
    // Apply timeline multiplier
    const timelineMultiplier = TIMELINE_MULTIPLIERS[config.timeline];
    
    // Calculate total one-time price
    const calculatedTotal = (basePrice + featurePrice) * timelineMultiplier;
    setTotalPrice(calculatedTotal);
    
    // Calculate recurring fees
    let monthly = 0;
    if (config.includeMaintenance) monthly += MAINTENANCE_MONTHLY_FEE;
    
    let annual = 0;
    if (config.includeHosting) annual += HOSTING_ANNUAL_FEE;
    
    setMonthlyFees(monthly);
    setAnnualFees(annual);
    
    // Determine delivery time
    let timeEstimate;
    switch(config.timeline) {
      case 'standard':
        timeEstimate = '4-6 weeks';
        break;
      case 'expedited':
        timeEstimate = '2-3 weeks';
        break;
      case 'urgent':
        timeEstimate = '7-10 days';
        break;
    }
    setDeliveryTime(timeEstimate);
    
  }, [config]);

  // Update config
  const updateConfig = (updates: Partial<WebDevConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  // Toggle feature selection
  const toggleFeature = (featureId: string) => {
    setConfig(prev => {
      const isSelected = prev.features.includes(featureId);
      
      if (isSelected) {
        return {
          ...prev,
          features: prev.features.filter(id => id !== featureId)
        };
      } else {
        return {
          ...prev,
          features: [...prev.features, featureId]
        };
      }
    });
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return `${amount.toFixed(2)} AED`;
  };

  // Function to generate a PDF quote
  const generateQuotePDF = () => {
    try {
      console.log("Starting PDF generation...");
      
      // Create a new PDF document
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      
      // Generate quote reference
      const quoteRef = `WEB-${Date.now().toString().slice(-6)}`;
      
      // Create a filename with date and quote ID
      const date = new Date().toISOString().split('T')[0];
      const filename = `yafa-web-quote-${quoteRef}-${date}.pdf`;
      
      // Calculate quote valid until date (7 days from now)
      const validUntilDate = new Date();
      validUntilDate.setDate(validUntilDate.getDate() + 7); // Valid for 1 week
      const validUntil = validUntilDate.toLocaleDateString();
      
      // Add branded header
      // Header background
      doc.setFillColor(52, 128, 204); // #3480cc blue
      doc.rect(0, 0, pageWidth, 40, 'F');
      
      // Add logo - white version for visibility on blue background
      // This is a simple placeholder white logo - replace with your actual white logo
      const logoBase64 = "data:image/png;base64,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";
      
      try {
        doc.addImage(logoBase64, 'PNG', 20, 8, 24, 24);
      } catch (e) {
        console.error("Error adding logo:", e);
      }
      
      // Company name
      doc.setFont("helvetica", "bold");
      doc.setTextColor(255, 255, 255); // White text
      doc.setFontSize(24);
      doc.text("YAFA CLOUD SERVICES", 50, 25);
      
      // Quote title
      doc.setFont("helvetica", "normal");
      doc.setTextColor(50, 50, 50); // Dark gray text
      doc.setFontSize(18);
      doc.text("WEB DEVELOPMENT QUOTATION", 20, 50);
      
      // Quote reference & date
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100); // Gray text
      doc.text(`Ref: ${quoteRef}`, 20, 60);
      doc.text(`Issue Date: ${new Date().toLocaleDateString()}`, 20, 65);
      doc.text(`Valid Until: ${validUntil}`, 20, 70);
      
      // Right-aligned company info
      doc.setTextColor(50, 50, 50); // Dark gray text
      doc.setFontSize(9);
      const companyInfo = [
        "YAFA Digital",
        "Building 10, Office 209",
        "Dubai Digital Park",
        "Dubai, UAE",
        "admin@yafa.digital",
        "+971 56 553 1542"
      ];
      companyInfo.forEach((line, index) => {
        doc.text(line, pageWidth - 20, 50 + (index * 5), { align: "right" });
      });
      
      // Add divider
      doc.setDrawColor(230, 230, 230); // Light gray line
      doc.setLineWidth(0.5);
      doc.line(20, 80, pageWidth - 20, 80);
      
      // Project Configuration Section
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(52, 128, 204); // #3480cc blue
      doc.text("PROJECT CONFIGURATION", 20, 95);
      
      // Configuration details in a structured format
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(50, 50, 50); // Dark gray text
      
      // Website type
      let yPos = 105;
      doc.setFont("helvetica", "bold");
      doc.text("Website Type:", 20, yPos);
      doc.setFont("helvetica", "normal");
      let websiteTypeName = '';
      switch(config.websiteType) {
        case 'portfolio': websiteTypeName = 'Portfolio Website'; break;
        case 'corporate': websiteTypeName = 'Corporate Website'; break;
        case 'e-commerce': websiteTypeName = 'E-Commerce Website'; break;
        case 'custom': websiteTypeName = 'Custom Web Application'; break;
      }
      doc.text(websiteTypeName, 100, yPos);
      yPos += 10;
      
      // Timeline
      doc.setFont("helvetica", "bold");
      doc.text("Development Timeline:", 20, yPos);
      doc.setFont("helvetica", "normal");
      doc.text(deliveryTime, 100, yPos);
      yPos += 10;
      
      // Services
      doc.setFont("helvetica", "bold");
      doc.text("Selected Features:", 20, yPos);
      yPos += 8;
      
      // List selected features
      doc.setFont("helvetica", "normal");
      if (config.features.length > 0) {
        config.features.forEach(featureId => {
          const feature = WEB_DEV_FEATURES.find(f => f.id === featureId);
          if (feature) {
            doc.text(`• ${feature.name}`, 25, yPos);
            yPos += 8;
          }
        });
      } else {
        doc.text("No additional features selected", 25, yPos);
        yPos += 8;
      }
      
      // Recurring services
      doc.setFont("helvetica", "bold");
      doc.text("Recurring Services:", 20, yPos);
      yPos += 8;
      
      doc.setFont("helvetica", "normal");
      if (config.includeHosting || config.includeMaintenance) {
        if (config.includeHosting) {
          doc.text(`• Managed Hosting (${formatCurrency(HOSTING_ANNUAL_FEE)}/year)`, 25, yPos);
          yPos += 8;
        }
        if (config.includeMaintenance) {
          doc.text(`• Maintenance & Support (${formatCurrency(MAINTENANCE_MONTHLY_FEE)}/month)`, 25, yPos);
          yPos += 8;
        }
      } else {
        doc.text("No recurring services selected", 25, yPos);
        yPos += 8;
      }
      
      // Add divider
      doc.setDrawColor(230, 230, 230); // Light gray line
      doc.line(20, yPos + 5, pageWidth - 20, yPos + 5);
      
      // Pricing Section
      yPos += 20;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(52, 128, 204); // #3480cc blue
      doc.text("PRICING DETAILS", 20, yPos);
      
      // Pricing table
      const tableStartY = yPos + 10;
      const tableWidth = pageWidth - 40;
      
      // Draw table header
      doc.setFillColor(240, 240, 240); // Light gray background
      doc.rect(20, tableStartY, tableWidth, 10, 'F');
      
      // Table headers
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(50, 50, 50);
      doc.text("Item", 25, tableStartY + 7);
      doc.text("Amount (AED)", tableWidth - 30, tableStartY + 7, { align: "right" });
      
      // Add table content
      let rowY = tableStartY + 10;
      
      // Function to add a row
      const addRow = (label: string, value: string, highlight = false, isDiscount = false) => {
        if (highlight) {
          doc.setFillColor(245, 245, 245); // Very light gray for highlighted rows
          doc.rect(20, rowY, tableWidth, 10, 'F');
        }
        
        doc.setFont("helvetica", highlight ? "bold" : "normal");
        doc.setTextColor(isDiscount ? 0 : 50, isDiscount ? 128 : 50, isDiscount ? 0 : 50); // Green for discounts
        doc.text(label, 25, rowY + 7);
        doc.text(value, tableWidth - 30, rowY + 7, { align: "right" });
        
        // Add light border
        doc.setDrawColor(230, 230, 230);
        doc.line(20, rowY + 10, 20 + tableWidth, rowY + 10);
        
        rowY += 10;
      };
      
      // Base price row
      addRow("Base Website Price", formatCurrency(WEBSITE_BASE_PRICES[config.websiteType]));
      
      // Feature prices
      if (config.features.length > 0) {
        config.features.forEach(featureId => {
          const feature = WEB_DEV_FEATURES.find(f => f.id === featureId);
          if (feature) {
            addRow(feature.name, formatCurrency(feature.price));
          }
        });
      }
      
      // Timeline multiplier
      if (config.timeline !== 'standard') {
        const multiplier = TIMELINE_MULTIPLIERS[config.timeline];
        const baseAndFeatures = WEBSITE_BASE_PRICES[config.websiteType] + config.features.reduce((sum, featureId) => {
          const feature = WEB_DEV_FEATURES.find(f => f.id === featureId);
          return sum + (feature?.price || 0);
        }, 0);
        const premium = baseAndFeatures * (multiplier - 1);
        
        addRow(`${config.timeline.charAt(0).toUpperCase() + config.timeline.slice(1)} Timeline Premium`, 
               formatCurrency(premium), false, false);
      }
      
      // Subtotal
      addRow("Subtotal", formatCurrency(totalPrice), true);
      
      // VAT 5%
      const vat = totalPrice * 0.05;
      addRow("VAT (5%)", formatCurrency(vat));
      
      // Total development cost
      addRow("Total Development Cost", formatCurrency(totalPrice + vat), true);
      
      // Add divider
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.7);
      doc.line(20, rowY, 20 + tableWidth, rowY);
      rowY += 15;
      
      // Recurring services
      if (config.includeHosting || config.includeMaintenance) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(52, 128, 204); // #3480cc blue
        doc.text("RECURRING SERVICES", 20, rowY);
        rowY += 15;
        
        // Create a new table for recurring services
        doc.setFillColor(240, 240, 240); // Light gray background
        doc.rect(20, rowY, tableWidth, 10, 'F');
        
        // Table headers
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(50, 50, 50);
        doc.text("Service", 25, rowY + 7);
        doc.text("Amount (AED)", tableWidth - 30, rowY + 7, { align: "right" });
        
        rowY += 10;
      }
      
      if (config.includeHosting) {
        const hostingVat = HOSTING_ANNUAL_FEE * 0.05;
        addRow("Managed Hosting (Annual)", formatCurrency(HOSTING_ANNUAL_FEE));
        addRow("VAT (5%)", formatCurrency(hostingVat));
        addRow("Total Annual Hosting", formatCurrency(HOSTING_ANNUAL_FEE + hostingVat), true);
      }
      
      if (config.includeMaintenance) {
        const maintenanceVat = MAINTENANCE_MONTHLY_FEE * 0.05;
        addRow("Maintenance & Support (Monthly)", formatCurrency(MAINTENANCE_MONTHLY_FEE));
        addRow("VAT (5%)", formatCurrency(maintenanceVat));
        addRow("Total Monthly Maintenance", formatCurrency(MAINTENANCE_MONTHLY_FEE + maintenanceVat), true);
      }
      
      // Terms & conditions
      const termsY = rowY + 15;
      
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(52, 128, 204);
      doc.text("TERMS & CONDITIONS", 20, termsY);
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      
      const terms = [
        "1. This quotation is valid for 7 days from the issue date.",
        "2. All prices are exclusive of applicable taxes.",
        "3. Project timeline begins after receipt of 50% deposit and required content/assets.",
        "4. Payment terms: 50% deposit to commence work; 50% upon project completion.",
        "5. Revisions: Up to 2 rounds of revisions are included in the quote."
      ];
      
      let termsTextY = termsY + 10;
      terms.forEach((term, index) => {
        doc.text(term, 20, termsTextY);
        termsTextY += 5;
      });
      
      // Add footer
      const footerY = Math.min(termsTextY + 20, pageHeight - 25);
      
      doc.setDrawColor(52, 128, 204);
      doc.setLineWidth(0.5);
      doc.line(20, footerY, pageWidth - 20, footerY);
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      
      // Check if we need a new page for contact info
      if (footerY > pageHeight - 35) {
        doc.addPage();
        doc.setDrawColor(52, 128, 204);
        doc.setLineWidth(0.5);
        doc.line(20, 20, pageWidth - 20, 20);
        doc.text("For questions about this quote, please contact: admin@yafa.digital | +971 56 553 1542", pageWidth / 2, 35, { align: "center" });
        doc.text("Thank you for considering YAFA Cloud Services", pageWidth / 2, 45, { align: "center" });
      } else {
        doc.text("For questions about this quote, please contact: admin@yafa.digital | +971 56 553 1542", pageWidth / 2, footerY + 10, { align: "center" });
        doc.text("Thank you for considering YAFA Cloud Services", pageWidth / 2, footerY + 20, { align: "center" });
      }
      
      console.log("Saving PDF...");
      // Save the PDF
      doc.save(filename);
      console.log("PDF saved successfully!");
      
      return { filename, quoteRef };
    } catch (error) {
      console.error('PDF generation error:', error);
      throw new Error('Failed to generate PDF: ' + (error instanceof Error ? error.message : String(error)));
    }
  };

  // Function to generate a fallback HTML quote
  const generateHtmlQuote = () => {
    // Generate quote reference
    const quoteRef = `WEB-${Date.now().toString().slice(-6)}`;
    
    // Create a filename with date and quote ID
    const date = new Date().toISOString().split('T')[0];
    const filename = `yafa-web-quote-${quoteRef}-${date}.html`;
    
    // Calculate quote valid until date (7 days from now)
    const validUntilDate = new Date();
    validUntilDate.setDate(validUntilDate.getDate() + 7); // Valid for 1 week
    const validUntil = validUntilDate.toLocaleDateString();
    
    // Determine website type name
    let websiteTypeName = '';
    switch(config.websiteType) {
      case 'portfolio': websiteTypeName = 'Portfolio Website'; break;
      case 'corporate': websiteTypeName = 'Corporate Website'; break;
      case 'e-commerce': websiteTypeName = 'E-Commerce Website'; break;
      case 'custom': websiteTypeName = 'Custom Web Application'; break;
    }
    
    // Generate HTML content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>YAFA Cloud Services - Web Development Quote</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: 'Inter', Arial, sans-serif; 
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 0;
          }
          .header {
            background-color: #3480cc;
            color: white;
            padding: 30px 40px;
            margin-bottom: 30px;
            position: relative;
          }
          .header h1 {
            font-size: 28px;
            font-weight: 700;
            margin: 0;
            padding-left: 40px;
          }
          .header .logo {
            position: absolute;
            top: 50%;
            left: 30px;
            transform: translateY(-50%);
            width: 30px;
            height: 30px;
          }
          .content {
            padding: 0 40px 40px;
          }
          .quote-info {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
          }
          .quote-details h2 {
            font-size: 22px;
            color: #333;
            margin-bottom: 15px;
          }
          .quote-details p {
            margin: 5px 0;
            font-size: 14px;
            color: #666;
          }
          .company-info {
            text-align: right;
            font-size: 13px;
            color: #555;
          }
          .company-info p {
            margin: 2px 0;
          }
          .section {
            margin: 35px 0;
          }
          .section-title {
            color: #3480cc;
            font-size: 16px;
            font-weight: 600;
            border-bottom: 1px solid #e5e5e5;
            padding-bottom: 8px;
            margin-bottom: 15px;
            text-transform: uppercase;
          }
          .config-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 15px 30px;
          }
          .config-item {
            display: flex;
            justify-content: space-between;
          }
          .config-label {
            font-weight: 500;
            color: #555;
          }
          .config-value {
            font-weight: 400;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 10px 0 20px;
          }
          table th {
            background-color: #f5f5f5;
            padding: 12px 15px;
            text-align: left;
            font-weight: 600;
            color: #333;
            border-bottom: 1px solid #ddd;
          }
          table td {
            padding: 12px 15px;
            border-bottom: 1px solid #eee;
          }
          table tr:last-child td {
            border-bottom: none;
          }
          .amount {
            text-align: right;
          }
          .highlight {
            font-weight: 600;
            background-color: #f9f9f9;
          }
          .features-list {
            margin: 15px 0;
            padding-left: 20px;
          }
          .features-list li {
            margin: 5px 0;
          }
          .terms {
            font-size: 12px;
            color: #666;
            border-top: 1px solid #eee;
            padding-top: 20px;
          }
          .terms ol {
            padding-left: 20px;
            margin: 10px 0;
          }
          .terms li {
            margin: 5px 0;
          }
          .footer {
            margin-top: 40px;
            text-align: center;
            font-size: 12px;
            color: #666;
            border-top: 1px solid #3480cc;
            padding-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <img class="logo" src="data:image/png;base64,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" alt="YAFA Logo" />
          <h1>YAFA CLOUD SERVICES</h1>
        </div>
        
        <div class="content">
          <div class="quote-info">
            <div class="quote-details">
              <h2>WEB DEVELOPMENT QUOTATION</h2>
              <p>Ref: ${quoteRef}</p>
              <p>Issue Date: ${new Date().toLocaleDateString()}</p>
              <p>Valid Until: ${validUntil}</p>
            </div>
            
            <div class="company-info">
              <p>YAFA Digital</p>
              <p>Building 10, Office 209</p>
              <p>Dubai Digital Park</p>
              <p>Dubai, UAE</p>
              <p>admin@yafa.digital</p>
              <p>+971 56 553 1542</p>
            </div>
          </div>
          
          <div class="section">
            <h3 class="section-title">PROJECT CONFIGURATION</h3>
            <div class="config-grid">
              <div class="config-item">
                <span class="config-label">Website Type:</span>
                <span class="config-value">${websiteTypeName}</span>
              </div>
              <div class="config-item">
                <span class="config-label">Development Timeline:</span>
                <span class="config-value">${deliveryTime}</span>
              </div>
              
              <div class="config-item">
                <span class="config-label">Managed Hosting:</span>
                <span class="config-value">${config.includeHosting ? 'Yes' : 'No'}</span>
              </div>
              <div class="config-item">
                <span class="config-label">Maintenance & Support:</span>
                <span class="config-value">${config.includeMaintenance ? 'Yes' : 'No'}</span>
              </div>
            </div>
            
            <div style="margin-top: 20px;">
              <div class="config-label">Selected Features:</div>
              ${config.features.length > 0 ? `
                <ul class="features-list">
                  ${config.features.map(featureId => {
                    const feature = WEB_DEV_FEATURES.find(f => f.id === featureId);
                    return feature ? `<li>${feature.name}</li>` : '';
                  }).join('')}
                </ul>
              ` : `<p>No additional features selected</p>`}
            </div>
          </div>
          
          <div class="section">
            <h3 class="section-title">PRICING DETAILS</h3>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th class="amount">Amount (AED)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Base Website Price</td>
                  <td class="amount">${formatCurrency(WEBSITE_BASE_PRICES[config.websiteType])}</td>
                </tr>
                
                ${config.features.map(featureId => {
                  const feature = WEB_DEV_FEATURES.find(f => f.id === featureId);
                  return feature ? `
                    <tr>
                      <td>${feature.name}</td>
                      <td class="amount">${formatCurrency(feature.price)}</td>
                    </tr>
                  ` : '';
                }).join('')}
                
                ${config.timeline !== 'standard' ? `
                  <tr>
                    <td>${config.timeline.charAt(0).toUpperCase() + config.timeline.slice(1)} Timeline Premium</td>
                    <td class="amount">${formatCurrency((WEBSITE_BASE_PRICES[config.websiteType] + 
                      config.features.reduce((sum, featureId) => {
                        const feature = WEB_DEV_FEATURES.find(f => f.id === featureId);
                        return sum + (feature?.price || 0);
                      }, 0)) * (TIMELINE_MULTIPLIERS[config.timeline] - 1))}</td>
                  </tr>
                ` : ''}
                
                <tr class="highlight">
                  <td>Subtotal</td>
                  <td class="amount">${formatCurrency(totalPrice)}</td>
                </tr>
                
                <tr>
                  <td>VAT (5%)</td>
                  <td class="amount">${formatCurrency(totalPrice * 0.05)}</td>
                </tr>
                
                <tr class="highlight">
                  <td>Total Development Cost</td>
                  <td class="amount">${formatCurrency(totalPrice + (totalPrice * 0.05))}</td>
                </tr>
                
                ${config.includeHosting ? `
                  <tr>
                    <td colspan="2" style="padding-top: 20px; font-weight: bold; background-color: #f5f5f5; text-transform: uppercase;">Recurring Services</td>
                  </tr>
                  
                  <tr>
                    <td>Managed Hosting (Annual)</td>
                    <td class="amount">${formatCurrency(HOSTING_ANNUAL_FEE)}</td>
                  </tr>
                  
                  <tr>
                    <td>VAT (5%)</td>
                    <td class="amount">${formatCurrency(HOSTING_ANNUAL_FEE * 0.05)}</td>
                  </tr>
                  
                  <tr class="highlight">
                    <td>Total Annual Hosting</td>
                    <td class="amount">${formatCurrency(HOSTING_ANNUAL_FEE + (HOSTING_ANNUAL_FEE * 0.05))}</td>
                  </tr>
                ` : ''}
                
                ${config.includeMaintenance ? `
                  ${!config.includeHosting ? `
                    <tr>
                      <td colspan="2" style="padding-top: 20px; font-weight: bold; background-color: #f5f5f5; text-transform: uppercase;">Recurring Services</td>
                    </tr>
                  ` : ''}
                  
                  <tr>
                    <td>Maintenance & Support (Monthly)</td>
                    <td class="amount">${formatCurrency(MAINTENANCE_MONTHLY_FEE)}</td>
                  </tr>
                  
                  <tr>
                    <td>VAT (5%)</td>
                    <td class="amount">${formatCurrency(MAINTENANCE_MONTHLY_FEE * 0.05)}</td>
                  </tr>
                  
                  <tr class="highlight">
                    <td>Total Monthly Maintenance</td>
                    <td class="amount">${formatCurrency(MAINTENANCE_MONTHLY_FEE + (MAINTENANCE_MONTHLY_FEE * 0.05))}</td>
                  </tr>
                ` : ''}
              </tbody>
            </table>
          </div>
          
          <div class="terms">
            <h3 class="section-title">TERMS & CONDITIONS</h3>
            <ol>
              <li>This quotation is valid for 7 days from the issue date.</li>
              <li>All prices are exclusive of applicable taxes.</li>
              <li>Project timeline begins after receipt of 50% deposit and required content/assets.</li>
              <li>Payment terms: 50% deposit to commence work; 50% upon project completion.</li>
              <li>Revisions: Up to 2 rounds of revisions are included in the quote.</li>
            </ol>
          </div>
          
          <div class="footer">
            <p>For questions about this quote, please contact: admin@yafa.digital | +971 56 553 1542</p>
            <p>Thank you for considering YAFA Cloud Services</p>
          </div>
        </div>
      </body>
      </html>
    `;
    
    // Create a Blob with the HTML content
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary anchor element and trigger download
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    return { filename, quoteRef };
  };
  
  // Handle quote download
  const handleDownloadQuote = () => {
    setIsDownloading(true);
    console.log("Download quote button clicked");
    try {
      let result = { filename: "", quoteRef: "" };
      let format = "PDF";
      
      // Try PDF first
      try {
        console.log("Attempting to generate PDF quote");
        result = generateQuotePDF();
        console.log("PDF quote generated successfully:", result.filename);
      } catch (pdfError) {
        // If PDF fails, fall back to HTML
        console.error("PDF generation failed, falling back to HTML:", pdfError);
        result = generateHtmlQuote();
        format = "HTML";
        console.log("HTML quote generated as fallback:", result.filename);
      }
      
      toast({
        title: `${format} Quote downloaded`,
        description: `Quote ${result.quoteRef} has been downloaded as ${result.filename}`,
        duration: 3000,
      });
    } catch (error) {
      console.error("Quote generation failed completely:", error);
      toast({
        title: "Download failed",
        description: "There was a problem generating your quote. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsDownloading(false);
    }
  };

  // Handle contact sales button
  const handleContactSales = () => {
    // Create query params with the current configuration
    const queryParams = new URLSearchParams();
    queryParams.append('source', 'web-calculator');
    queryParams.append('websiteType', config.websiteType);
    queryParams.append('timeline', config.timeline);
    queryParams.append('includeHosting', config.includeHosting.toString());
    queryParams.append('includeMaintenance', config.includeMaintenance.toString());
    queryParams.append('features', config.features.join(','));
    queryParams.append('totalPrice', totalPrice.toString());
    
    // Navigate to contact page with params
    window.location.href = `/contact?${queryParams.toString()}`;
    
    toast({
      title: "Redirecting to contact form",
      description: "Your project details will be shared with our sales team.",
      duration: 3000,
    });
  };

  return (
    <AnimatedElement animation="fade" delay="100">
      <Card className="overflow-hidden bg-white shadow-lg border-0">
        <div className="p-6">
          <h3 className="text-2xl font-semibold tracking-tight mb-6">Web Development Calculator</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {/* Website Type Selection */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">1. Choose Website Type</h4>
                <RadioGroup 
                  value={config.websiteType}
                  onValueChange={(value) => updateConfig({ websiteType: value as WebsiteType })}
                  className="space-y-3"
                >
                  <div className="flex items-start">
                    <RadioGroupItem value="portfolio" id="portfolio" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="portfolio" className="font-medium">Portfolio</Label>
                      <p className="text-sm text-gray-500">
                        Single-page website focused on specific product or service
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <RadioGroupItem value="corporate" id="corporate" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="corporate" className="font-medium">Corporate Website</Label>
                      <p className="text-sm text-gray-500">
                        Multi-page website with company information and services
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <RadioGroupItem value="e-commerce" id="e-commerce" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="e-commerce" className="font-medium">E-Commerce Website</Label>
                      <p className="text-sm text-gray-500">
                        Online store with product catalog and checkout
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <RadioGroupItem value="custom" id="custom" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="custom" className="font-medium">Custom Web Application</Label>
                      <p className="text-sm text-gray-500">
                        Complex web application with custom functionality
                      </p>
                    </div>
                  </div>
                </RadioGroup>
              </div>
              
              {/* Features Selection */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">2. Select Additional Features</h4>
                <div className="grid grid-cols-1 gap-3">
                  {WEB_DEV_FEATURES.map(feature => (
                    <div key={feature.id} className="flex items-start">
                      <Checkbox 
                        id={`feature-${feature.id}`}
                        checked={config.features.includes(feature.id)}
                        onCheckedChange={() => toggleFeature(feature.id)}
                        className="mt-1"
                      />
                      <div className="ml-3">
                        <Label htmlFor={`feature-${feature.id}`} className="font-medium">
                          {feature.name} <span className="text-gray-500 font-normal">(+{formatCurrency(feature.price)})</span>
                        </Label>
                        <p className="text-sm text-gray-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Timeline Selection */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">3. Select Development Timeline</h4>
                <RadioGroup 
                  value={config.timeline}
                  onValueChange={(value) => updateConfig({ timeline: value as TimelineOption })}
                  className="space-y-3"
                >
                  <div className="flex items-start">
                    <RadioGroupItem value="standard" id="standard" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="standard" className="font-medium">Standard Timeline</Label>
                      <p className="text-sm text-gray-500">
                        4-6 weeks development time
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <RadioGroupItem value="expedited" id="expedited" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="expedited" className="font-medium">Expedited Timeline (+15%)</Label>
                      <p className="text-sm text-gray-500">
                        2-3 weeks development time
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <RadioGroupItem value="urgent" id="urgent" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="urgent" className="font-medium">Urgent Timeline (+20%)</Label>
                      <p className="text-sm text-gray-500">
                        7-10 days development time
                      </p>
                    </div>
                  </div>
                </RadioGroup>
              </div>
              
              {/* Additional Services */}
              <div>
                <h4 className="font-medium mb-3">4. Additional Services</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Checkbox 
                      id="hosting"
                      checked={config.includeHosting}
                      onCheckedChange={(checked) => updateConfig({ includeHosting: !!checked })}
                      className="mt-1"
                    />
                    <div className="ml-3">
                      <Label htmlFor="hosting" className="font-medium">
                        Managed Hosting <span className="text-gray-500 font-normal">(${HOSTING_ANNUAL_FEE}/year)</span>
                      </Label>
                      <p className="text-sm text-gray-500">
                        Secure cloud hosting with 99.9% uptime
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Checkbox 
                      id="maintenance"
                      checked={config.includeMaintenance}
                      onCheckedChange={(checked) => updateConfig({ includeMaintenance: !!checked })}
                      className="mt-1"
                    />
                    <div className="ml-3">
                      <Label htmlFor="maintenance" className="font-medium">
                        Maintenance & Support <span className="text-gray-500 font-normal">(${MAINTENANCE_MONTHLY_FEE}/month)</span>
                      </Label>
                      <p className="text-sm text-gray-500">
                        Regular updates, security patches, and support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Price summary section */}
            <div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Code className="h-5 w-5 mr-2" /> Project Summary
                </h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <div>
                      <span className="font-medium">Website Type</span>
                      <div className="text-sm text-gray-500">
                        {config.websiteType === 'portfolio' && 'Portfolio'}
                        {config.websiteType === 'corporate' && 'Corporate Website'}
                        {config.websiteType === 'e-commerce' && 'E-Commerce Website'}
                        {config.websiteType === 'custom' && 'Custom Web Application'}
                      </div>
                    </div>
                    <span>{formatCurrency(WEBSITE_BASE_PRICES[config.websiteType])}</span>
                  </div>
                  
                  <div className="py-2 border-b">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Selected Features</span>
                      <span>
                        {formatCurrency(config.features.reduce((sum, featureId) => {
                          const feature = WEB_DEV_FEATURES.find(f => f.id === featureId);
                          return sum + (feature?.price || 0);
                        }, 0))}
                      </span>
                    </div>
                    {config.features.length > 0 ? (
                      <ul className="space-y-1.5">
                        {config.features.map(featureId => {
                          const feature = WEB_DEV_FEATURES.find(f => f.id === featureId);
                          return feature ? (
                            <li key={feature.id} className="text-sm flex justify-between">
                              <span className="text-gray-600">{feature.name}</span>
                              <span>{formatCurrency(feature.price)}</span>
                            </li>
                          ) : null;
                        })}
                      </ul>
                    ) : (
                      <p className="text-sm text-gray-500 italic">No additional features selected</p>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b">
                    <div>
                      <span className="font-medium">Timeline</span>
                      <div className="text-sm text-gray-500 flex items-center mt-1">
                        <Calendar className="h-4 w-4 mr-1" /> 
                        {deliveryTime} delivery
                      </div>
                    </div>
                    <div className="text-right">
                      {config.timeline !== 'standard' && (
                        <div className="text-sm text-amber-600">
                          {config.timeline === 'expedited' ? '+15%' : '+20%'}
                        </div>
                      )}
                      <div className="font-medium flex items-center">
                        <Zap className={`h-4 w-4 mr-1 ${config.timeline !== 'standard' ? 'text-amber-600' : 'text-gray-400'}`} />
                        {config.timeline === 'standard' ? 'Standard' : config.timeline === 'expedited' ? 'Expedited' : 'Urgent'}
                      </div>
                    </div>
                  </div>
                  
                  {(config.includeHosting || config.includeMaintenance) && (
                    <div className="py-2 border-b">
                      <div className="font-medium mb-2">Recurring Services</div>
                      {config.includeHosting && (
                        <div className="text-sm flex justify-between">
                          <span className="text-gray-600">Managed Hosting</span>
                          <span>{formatCurrency(HOSTING_ANNUAL_FEE)}/year</span>
                        </div>
                      )}
                      {config.includeMaintenance && (
                        <div className="text-sm flex justify-between">
                          <span className="text-gray-600">Maintenance & Support</span>
                          <span>{formatCurrency(MAINTENANCE_MONTHLY_FEE)}/month</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">Price Breakdown</h4>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between pb-2">
                      <span>Subtotal</span>
                      <span className="font-medium">{formatCurrency(totalPrice)}</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span>VAT (5%)</span>
                      <span className="font-medium">{formatCurrency(totalPrice * 0.05)}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="font-medium">One-time Development Fee</span>
                      <span className="font-bold text-xl">{formatCurrency(totalPrice * 1.05)}</span>
                    </div>
                  </div>
                  
                  {monthlyFees > 0 && (
                    <div className="pt-3 border-t">
                      <div className="flex justify-between pb-1">
                        <span>Monthly Services</span>
                        <span>{formatCurrency(monthlyFees)}</span>
                      </div>
                      <div className="flex justify-between pb-1">
                        <span>VAT (5%)</span>
                        <span>{formatCurrency(monthlyFees * 0.05)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Total Monthly</span>
                        <span className="font-medium">{formatCurrency(monthlyFees * 1.05)}/month</span>
                      </div>
                    </div>
                  )}
                  
                  {annualFees > 0 && (
                    <div className="pt-3 border-t">
                      <div className="flex justify-between pb-1">
                        <span>Annual Services</span>
                        <span>{formatCurrency(annualFees)}</span>
                      </div>
                      <div className="flex justify-between pb-1">
                        <span>VAT (5%)</span>
                        <span>{formatCurrency(annualFees * 0.05)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Total Annual</span>
                        <span className="font-medium">{formatCurrency(annualFees * 1.05)}/year</span>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-center gap-2"
                    onClick={handleDownloadQuote}
                    disabled={isDownloading}
                  >
                    {isDownloading ? 'Generating...' : 'Download Quote'} 
                    {!isDownloading && <DownloadIcon className="h-4 w-4" />}
                  </Button>
                  
                  <Button 
                    className="w-full flex items-center justify-center gap-2"
                    onClick={handleContactSales}
                  >
                    Contact Sales <ArrowRight className="h-4 w-4" />
                  </Button>
                  
                  <p className="text-xs text-center mt-2 text-gray-500">
                    Our team will prepare a detailed proposal based on your requirements
                  </p>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 border border-gray-200 rounded-md p-4">
                <h5 className="font-medium mb-2">Our Web Development Process:</h5>
                <ol className="space-y-2 pl-5 list-decimal">
                  <li className="text-sm text-gray-700">
                    <span className="font-medium">Discovery & Planning</span> - We analyze your requirements and create a detailed plan
                  </li>
                  <li className="text-sm text-gray-700">
                    <span className="font-medium">Design & Prototyping</span> - We create wireframes and visual designs for approval
                  </li>
                  <li className="text-sm text-gray-700">
                    <span className="font-medium">Development</span> - Our team builds your website with clean, optimized code
                  </li>
                  <li className="text-sm text-gray-700">
                    <span className="font-medium">Testing & QA</span> - Thorough testing across devices and browsers
                  </li>
                  <li className="text-sm text-gray-700">
                    <span className="font-medium">Launch & Training</span> - We deploy your site and provide training on its management
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </AnimatedElement>
  );
}

export { WebDevCalculator };
export default WebDevCalculator;