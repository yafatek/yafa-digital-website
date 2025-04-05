import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AnimatedElement } from "@/components/ui/animated-element";
import { CheckCircle, ArrowRight, Server, PieChart, Globe, Download } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import jsPDF from "jspdf";
import 'jspdf-autotable';
// @ts-ignore
import { UserOptions } from "jspdf-autotable";

// Extend the jsPDF type definition
declare module "jspdf" {
  interface jsPDF {
    autoTable: (options: UserOptions) => jsPDF;
    lastAutoTable: {
      finalY: number;
    };
  }
}

// Types
type ServiceTier = 'essential' | 'professional' | 'enterprise';
type ProjectSize = 'small' | 'medium' | 'large' | 'enterprise';

interface ManagedServiceConfig {
  projectSize: ProjectSize;
  servers: number;
  databases: number;
  includeMonitoring: boolean;
  includeSecurity: boolean;
  includeBackups: boolean;
  supportLevel: 'standard' | 'enhanced' | 'premium';
  commitment: 'monthly' | 'annual';
}

// Base pricing constants
const BASE_PRICES = {
  PROJECT_SIZE: {
    small: 1500,
    medium: 3000,
    large: 6000,
    enterprise: 12000
  },
  SERVER: 250,
  DATABASE: 350,
  MONITORING: 800,
  SECURITY: 1200,
  BACKUPS: 650,
  SUPPORT_LEVEL: {
    standard: 0,
    enhanced: 1500,
    premium: 3500
  },
  ANNUAL_DISCOUNT: 0.15 // 15% discount for annual commitment
};

// Helper function to format currency consistently
const formatCurrency = (amount: number) => {
  return `${amount.toFixed(2)} AED`;
};

// Function to generate an actual PDF quote
function generateQuotePDF(config: ManagedServiceConfig, pricing: {
  monthly: number, 
  discounted: number, 
  annual: number, 
  savings: number
}) {
  try {
    console.log("Starting PDF generation...");
    
    // Create a new PDF document
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    
    // Generate quote reference
    const quoteRef = `MSQ-${Date.now().toString().slice(-6)}`;
    
    // Create a filename with date and quote ID
    const date = new Date().toISOString().split('T')[0];
    const filename = `yafa-managed-services-quote-${quoteRef}-${date}.pdf`;
    
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
    doc.text("MANAGED SERVICES QUOTATION", 20, 50);
    
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
    
    // Client Configuration Section
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(52, 128, 204); // #3480cc blue
    doc.text("CLIENT CONFIGURATION", 20, 95);
    
    // Configuration details in a structured format
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(50, 50, 50); // Dark gray text
    
    // Two-column layout for configuration
    const leftCol = 20;
    const rightCol = pageWidth / 2 + 10;
    let yPos = 105;
    
    // Left column
    doc.setFont("helvetica", "bold");
    doc.text("Project Size:", leftCol, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(config.projectSize.charAt(0).toUpperCase() + config.projectSize.slice(1), leftCol + 60, yPos);
    yPos += 8;
    
    doc.setFont("helvetica", "bold");
    doc.text("Number of Servers:", leftCol, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(config.servers.toString(), leftCol + 60, yPos);
    yPos += 8;
    
    doc.setFont("helvetica", "bold");
    doc.text("Number of Databases:", leftCol, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(config.databases.toString(), leftCol + 60, yPos);
    yPos += 8;
    
    doc.setFont("helvetica", "bold");
    doc.text("Support Level:", leftCol, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(config.supportLevel.charAt(0).toUpperCase() + config.supportLevel.slice(1), leftCol + 60, yPos);
    
    // Right column
    yPos = 105;
    
    doc.setFont("helvetica", "bold");
    doc.text("24/7 Monitoring:", rightCol, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(config.includeMonitoring ? 'Included' : 'Not included', rightCol + 60, yPos);
    yPos += 8;
    
    doc.setFont("helvetica", "bold");
    doc.text("Security Services:", rightCol, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(config.includeSecurity ? 'Included' : 'Not included', rightCol + 60, yPos);
    yPos += 8;
    
    doc.setFont("helvetica", "bold");
    doc.text("Automated Backups:", rightCol, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(config.includeBackups ? 'Included' : 'Not included', rightCol + 60, yPos);
    
    doc.setFont("helvetica", "bold");
    doc.text("Billing Commitment:", rightCol, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(config.commitment.charAt(0).toUpperCase() + config.commitment.slice(1), rightCol + 60, yPos);
    
    // Add divider
    doc.setDrawColor(230, 230, 230); // Light gray line
    doc.line(20, 140, pageWidth - 20, 140);
    
    // Pricing Section
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(52, 128, 204); // #3480cc blue
    doc.text("PRICING DETAILS", 20, 150);
    
    // Pricing table with nice formatting
    const tableStartY = 160;
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
    
    // Monthly Service Fee
    addRow("Base Project Size Fee", formatCurrency(BASE_PRICES.PROJECT_SIZE[config.projectSize]));
    addRow("Server Management", formatCurrency(config.servers * BASE_PRICES.SERVER));
    addRow("Database Management", formatCurrency(config.databases * BASE_PRICES.DATABASE));
    
    if (config.includeMonitoring) {
      addRow("24/7 Monitoring Service", formatCurrency(BASE_PRICES.MONITORING));
    }
    
    if (config.includeSecurity) {
      addRow("Security Management", formatCurrency(BASE_PRICES.SECURITY));
    }
    
    if (config.includeBackups) {
      addRow("Automated Backup Service", formatCurrency(BASE_PRICES.BACKUPS));
    }
    
    if (config.supportLevel !== 'standard') {
      addRow(`${config.supportLevel.charAt(0).toUpperCase() + config.supportLevel.slice(1)} Support`, 
        formatCurrency(BASE_PRICES.SUPPORT_LEVEL[config.supportLevel]));
    }
    
    // Monthly subtotal
    addRow("Monthly Subtotal", formatCurrency(pricing.monthly), true);
    
    // Calculate VAT at 5%
    const monthlyVAT = pricing.monthly * 0.05;
    addRow("VAT (5%)", formatCurrency(monthlyVAT));
    
    // Monthly total with VAT
    addRow("Total Monthly Fee (with VAT)", formatCurrency(pricing.monthly + monthlyVAT), true);
    
    // Add annual pricing if that's selected
    if (config.commitment === 'annual') {
      // Add discount
      addRow("Annual Commitment Discount (15%)", formatCurrency(-pricing.savings), false, true);
      
      // Discounted monthly price
      addRow("Discounted Monthly Fee", formatCurrency(pricing.discounted));
      
      // Discounted monthly VAT
      const discountedVAT = pricing.discounted * 0.05;
      addRow("VAT (5%)", formatCurrency(discountedVAT));
      
      // Total monthly after discount with VAT
      addRow("Total Monthly Fee with Discount", formatCurrency(pricing.discounted + discountedVAT), true);
      
      // Annual total
      const annualTotal = pricing.annual;
      const annualVAT = annualTotal * 0.05;
      addRow("Annual Prepayment Total", formatCurrency(annualTotal));
      addRow("VAT (5%)", formatCurrency(annualVAT));
      addRow("Total Annual Fee (with VAT)", formatCurrency(annualTotal + annualVAT), true);
    }
    
    // Service inclusions - check if there's enough space or need for new page
    const inclusionsStartY = rowY + 20;
    
    // Service inclusions
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(52, 128, 204); // #3480cc blue
    doc.text("SERVICE INCLUSIONS", 20, inclusionsStartY);
    
    // List of included services
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(50, 50, 50);
    
    const inclusions = [
      "Full infrastructure management and monitoring",
      "Proactive maintenance and system updates",
      "Performance optimization and tuning",
      "Monthly reporting and performance insights",
      "Dedicated support per selected service level",
      "System security monitoring and updates"
    ];
    
    if (config.supportLevel === 'premium') {
      inclusions.push("Dedicated technical account manager");
    }
    
    let inclusionY = inclusionsStartY + 10;
    inclusions.forEach((item, index) => {
      doc.setDrawColor(230, 230, 230);
      doc.rect(20, inclusionY, 3, 3, 'F');
      doc.text(item, 26, inclusionY + 3);
      inclusionY += 8;
    });
    
    // Check if we need a new page for terms
    if (inclusionY + 50 > pageHeight) {
      doc.addPage();
      inclusionY = 20; // Reset Y position for the new page
    }
    
    // Terms & conditions
    const termsY = inclusionY + 15;
    
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
      "3. Service implementation typically begins within 5-7 business days of order confirmation.",
      "4. Payment terms: Due upon acceptance for monthly plans; may be invoiced monthly, quarterly, or annually per agreement.",
      "5. Customized solutions available upon request."
    ];
    
    let termsTextY = termsY + 10;
    terms.forEach((term, index) => {
      doc.text(term, 20, termsTextY);
      termsTextY += 5;
    });
    
    // Add footer - check current page height
    const footerY = Math.min(termsTextY + 15, pageHeight - 25);
    
    doc.setDrawColor(52, 128, 204);
    doc.setLineWidth(0.5);
    doc.line(20, footerY, pageWidth - 20, footerY);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text("For questions about this quote, please contact: admin@yafa.digital | +971 56 553 1542", pageWidth / 2, footerY + 10, { align: "center" });
    doc.text("Thank you for considering YAFA Cloud Services", pageWidth / 2, footerY + 15, { align: "center" });
    
    console.log("Saving PDF...");
    // Save the PDF
    doc.save(filename);
    console.log("PDF saved successfully!");
    
    return { filename, quoteRef };
  } catch (error) {
    console.error('PDF generation error:', error);
    throw new Error('Failed to generate PDF: ' + (error instanceof Error ? error.message : String(error)));
  }
}

// Function to generate a fallback HTML quote
function generateHtmlQuote(config: ManagedServiceConfig, pricing: {
  monthly: number, 
  discounted: number, 
  annual: number, 
  savings: number
}) {
  // Generate quote reference
  const quoteRef = `MSQ-${Date.now().toString().slice(-6)}`;
  
  // Create a filename with date and quote ID
  const date = new Date().toISOString().split('T')[0];
  const filename = `yafa-managed-services-quote-${quoteRef}-${date}.html`;
  
  // Calculate quote valid until date (7 days from now)
  const validUntilDate = new Date();
  validUntilDate.setDate(validUntilDate.getDate() + 7); // Valid for 1 week
  const validUntil = validUntilDate.toLocaleDateString();
  
  // Generate HTML content
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>YAFA Cloud Services - Managed Services Quote</title>
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
        .discount {
          color: #2e8b57;
        }
        .inclusions {
          margin: 15px 0;
        }
        .inclusion-item {
          margin: 8px 0;
          display: flex;
          align-items: flex-start;
        }
        .bullet {
          display: inline-block;
          width: 6px;
          height: 6px;
          background-color: #3480cc;
          border-radius: 50%;
          margin-right: 10px;
          margin-top: 8px;
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
            <h2>MANAGED SERVICES QUOTATION</h2>
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
          <h3 class="section-title">CLIENT CONFIGURATION</h3>
          <div class="config-grid">
            <div class="config-item">
              <span class="config-label">Project Size:</span>
              <span class="config-value">${config.projectSize.charAt(0).toUpperCase() + config.projectSize.slice(1)}</span>
            </div>
            <div class="config-item">
              <span class="config-label">24/7 Monitoring:</span>
              <span class="config-value">${config.includeMonitoring ? 'Included' : 'Not included'}</span>
            </div>
            <div class="config-item">
              <span class="config-label">Number of Servers:</span>
              <span class="config-value">${config.servers}</span>
            </div>
            <div class="config-item">
              <span class="config-label">Security Services:</span>
              <span class="config-value">${config.includeSecurity ? 'Included' : 'Not included'}</span>
            </div>
            <div class="config-item">
              <span class="config-label">Number of Databases:</span>
              <span class="config-value">${config.databases}</span>
            </div>
            <div class="config-item">
              <span class="config-label">Automated Backups:</span>
              <span class="config-value">${config.includeBackups ? 'Included' : 'Not included'}</span>
            </div>
            <div class="config-item">
              <span class="config-label">Support Level:</span>
              <span class="config-value">${config.supportLevel.charAt(0).toUpperCase() + config.supportLevel.slice(1)}</span>
            </div>
            <div class="config-item">
              <span class="config-label">Billing Commitment:</span>
              <span class="config-value">${config.commitment.charAt(0).toUpperCase() + config.commitment.slice(1)}</span>
            </div>
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
              <!-- Base Pricing -->
              <tr>
                <td>Base Project Size Fee</td>
                <td class="amount">${formatCurrency(BASE_PRICES.PROJECT_SIZE[config.projectSize])}</td>
              </tr>
              <tr>
                <td>Server Management (${config.servers} servers)</td>
                <td class="amount">${formatCurrency(config.servers * BASE_PRICES.SERVER)}</td>
              </tr>
              <tr>
                <td>Database Management (${config.databases} databases)</td>
                <td class="amount">${formatCurrency(config.databases * BASE_PRICES.DATABASE)}</td>
              </tr>
              ${config.includeMonitoring ? `
                <tr>
                  <td>24/7 Monitoring Service</td>
                  <td class="amount">${formatCurrency(BASE_PRICES.MONITORING)}</td>
                </tr>
              ` : ''}
              ${config.includeSecurity ? `
                <tr>
                  <td>Security Management</td>
                  <td class="amount">${formatCurrency(BASE_PRICES.SECURITY)}</td>
                </tr>
              ` : ''}
              ${config.includeBackups ? `
                <tr>
                  <td>Automated Backup Service</td>
                  <td class="amount">${formatCurrency(BASE_PRICES.BACKUPS)}</td>
                </tr>
              ` : ''}
              ${config.supportLevel !== 'standard' ? `
                <tr>
                  <td>${config.supportLevel.charAt(0).toUpperCase() + config.supportLevel.slice(1)} Support</td>
                  <td class="amount">${formatCurrency(BASE_PRICES.SUPPORT_LEVEL[config.supportLevel])}</td>
                </tr>
              ` : ''}
              
              <!-- Monthly pricing -->
              <tr class="highlight">
                <td>Monthly Subtotal</td>
                <td class="amount">${formatCurrency(pricing.monthly)}</td>
              </tr>
              <tr>
                <td>VAT (5%)</td>
                <td class="amount">${formatCurrency(pricing.monthly * 0.05)}</td>
              </tr>
              <tr class="highlight">
                <td>Total Monthly Fee (with VAT)</td>
                <td class="amount">${formatCurrency(pricing.monthly * 1.05)}</td>
              </tr>
              
              <!-- Annual pricing if applicable -->
              ${config.commitment === 'annual' ? `
                <tr>
                  <td class="discount">Annual Commitment Discount (15%)</td>
                  <td class="amount discount">-${formatCurrency(pricing.savings)}</td>
                </tr>
                <tr>
                  <td>Discounted Monthly Fee</td>
                  <td class="amount">${formatCurrency(pricing.discounted)}</td>
                </tr>
                <tr>
                  <td>VAT (5%)</td>
                  <td class="amount">${formatCurrency(pricing.discounted * 0.05)}</td>
                </tr>
                <tr class="highlight">
                  <td>Monthly Total with Discount</td>
                  <td class="amount">${formatCurrency(pricing.discounted * 1.05)}</td>
                </tr>
                <tr>
                  <td>Annual Payment Total</td>
                  <td class="amount">${formatCurrency(pricing.annual)}</td>
                </tr>
                <tr>
                  <td>VAT (5%)</td>
                  <td class="amount">${formatCurrency(pricing.annual * 0.05)}</td>
                </tr>
                <tr class="highlight">
                  <td>Total Annual Fee (with VAT)</td>
                  <td class="amount">${formatCurrency(pricing.annual * 1.05)}</td>
                </tr>
              ` : ''}
            </tbody>
          </table>
        </div>
        
        <div class="section">
          <h3 class="section-title">SERVICE INCLUSIONS</h3>
          <div class="inclusions">
            <div class="inclusion-item">
              <span class="bullet"></span>
              <span>Full infrastructure management</span>
            </div>
            <div class="inclusion-item">
              <span class="bullet"></span>
              <span>Proactive maintenance and updates</span>
            </div>
            <div class="inclusion-item">
              <span class="bullet"></span>
              <span>Performance optimization</span>
            </div>
            <div class="inclusion-item">
              <span class="bullet"></span>
              <span>Monthly reporting and insights</span>
            </div>
            <div class="inclusion-item">
              <span class="bullet"></span>
              <span>Dedicated support per selected service level</span>
            </div>
            <div class="inclusion-item">
              <span class="bullet"></span>
              <span>System security monitoring and updates</span>
            </div>
            ${config.supportLevel === 'premium' ? `
            <div class="inclusion-item">
              <span class="bullet"></span>
              <span>Dedicated technical account manager</span>
            </div>
            ` : ''}
          </div>
        </div>
        
        <div class="terms">
          <h3 class="section-title">TERMS & CONDITIONS</h3>
          <ol>
            <li>This quotation is valid for 7 days from the issue date.</li>
            <li>All prices are exclusive of applicable taxes.</li>
            <li>Service implementation typically begins within 5-7 business days of order confirmation.</li>
            <li>Payment terms: Due upon acceptance for monthly plans; may be invoiced monthly, quarterly, or annually per agreement.</li>
            <li>Customized solutions available upon request.</li>
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
}

export function ManagedServicesCalculator() {
  const [config, setConfig] = useState<ManagedServiceConfig>({
    projectSize: 'medium',
    servers: 5,
    databases: 2,
    includeMonitoring: true,
    includeSecurity: true,
    includeBackups: true,
    supportLevel: 'enhanced',
    commitment: 'monthly'
  });
  
  const [monthlyPrice, setMonthlyPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [annualPrice, setAnnualPrice] = useState(0);
  const [savings, setSavings] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();
  
  // Calculate prices whenever configuration changes
  useEffect(() => {
    // Base price calculation
    const basePrice = BASE_PRICES.PROJECT_SIZE[config.projectSize];
    const serverCost = config.servers * BASE_PRICES.SERVER;
    const databaseCost = config.databases * BASE_PRICES.DATABASE;
    
    let additionalServices = 0;
    if (config.includeMonitoring) additionalServices += BASE_PRICES.MONITORING;
    if (config.includeSecurity) additionalServices += BASE_PRICES.SECURITY;
    if (config.includeBackups) additionalServices += BASE_PRICES.BACKUPS;
    
    const supportCost = BASE_PRICES.SUPPORT_LEVEL[config.supportLevel];
    
    const total = basePrice + serverCost + databaseCost + additionalServices + supportCost;
    setMonthlyPrice(total);
    
    // Calculate annual price and savings
    if (config.commitment === 'annual') {
      const discounted = total * (1 - BASE_PRICES.ANNUAL_DISCOUNT);
      setDiscountedPrice(discounted);
      setAnnualPrice(discounted * 12);
      setSavings(total * 12 - discounted * 12);
    } else {
      setDiscountedPrice(total);
      setAnnualPrice(total * 12);
      setSavings(0);
    }
  }, [config]);

  // Update config
  const updateConfig = (updates: Partial<ManagedServiceConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  // Get project size description
  const getProjectSizeDescription = (size: ProjectSize) => {
    switch(size) {
      case 'small': return 'Up to 10 employees, 5 servers, 2 databases';
      case 'medium': return '11-50 employees, 10 servers, 5 databases';
      case 'large': return '51-200 employees, 20 servers, 10 databases';
      case 'enterprise': return '200+ employees, 30+ servers, 15+ databases';
    }
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
        result = generateQuotePDF(config, {
          monthly: monthlyPrice,
          discounted: discountedPrice,
          annual: annualPrice,
          savings: savings
        });
        console.log("PDF quote generated successfully:", result.filename);
      } catch (pdfError) {
        // If PDF fails, fall back to HTML
        console.error("PDF generation failed, falling back to HTML:", pdfError);
        result = generateHtmlQuote(config, {
          monthly: monthlyPrice,
          discounted: discountedPrice,
          annual: annualPrice,
          savings: savings
        });
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

  // Handle contact sales
  const handleContactSales = () => {
    // Generate quote reference
    const quoteRef = `MSQ-${Date.now().toString().slice(-6)}`;
    
    // Create query params
    const queryParams = new URLSearchParams({
      subject: `Managed Services Quote ${quoteRef} - ${config.projectSize} Plan`,
      quoteRef: quoteRef,
      projectSize: config.projectSize,
      servers: config.servers.toString(),
      databases: config.databases.toString(),
      commitment: config.commitment,
      monthlyPrice: `${discountedPrice.toFixed(2)} AED`
    }).toString();
    
    // Use direct navigation instead of the wouter hook
    window.location.href = `/contact?${queryParams}`;
  };

  return (
    <AnimatedElement animation="fade" delay="100">
      <Card className="overflow-hidden bg-white shadow-lg border-0">
        <div className="p-6">
          <h3 className="text-2xl font-semibold tracking-tight mb-6">Managed Services Calculator</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="project-size" className="text-sm font-medium block mb-2">
                    Project Size
                  </Label>
                  <Select 
                    value={config.projectSize} 
                    onValueChange={(value) => updateConfig({ projectSize: value as ProjectSize })}
                  >
                    <SelectTrigger id="project-size">
                      <SelectValue placeholder="Select project size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small Business</SelectItem>
                      <SelectItem value="medium">Medium Business</SelectItem>
                      <SelectItem value="large">Large Business</SelectItem>
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-gray-500 mt-1">
                    {getProjectSizeDescription(config.projectSize)}
                  </p>
                </div>

                <div>
                  <Label htmlFor="servers" className="text-sm font-medium">
                    Number of Servers: {config.servers}
                  </Label>
                  <Slider
                    id="servers"
                    min={1}
                    max={50}
                    step={1}
                    value={[config.servers]}
                    onValueChange={([value]) => updateConfig({ servers: value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="databases" className="text-sm font-medium">
                    Number of Databases: {config.databases}
                  </Label>
                  <Slider
                    id="databases"
                    min={0}
                    max={20}
                    step={1}
                    value={[config.databases]}
                    onValueChange={([value]) => updateConfig({ databases: value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">Additional Services</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="monitoring">24/7 Monitoring</Label>
                        <p className="text-xs text-gray-500">
                          Real-time performance and uptime monitoring
                        </p>
                      </div>
                      <Switch 
                        id="monitoring" 
                        checked={config.includeMonitoring}
                        onCheckedChange={(checked) => updateConfig({ includeMonitoring: checked })}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="security">Security Services</Label>
                        <p className="text-xs text-gray-500">
                          Advanced firewall and threat detection
                        </p>
                      </div>
                      <Switch 
                        id="security" 
                        checked={config.includeSecurity}
                        onCheckedChange={(checked) => updateConfig({ includeSecurity: checked })}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="backups">Automated Backups</Label>
                        <p className="text-xs text-gray-500">
                          Daily backups with 30-day retention
                        </p>
                      </div>
                      <Switch 
                        id="backups" 
                        checked={config.includeBackups}
                        onCheckedChange={(checked) => updateConfig({ includeBackups: checked })}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="support-level" className="text-sm font-medium block mb-2">
                    Support Level
                  </Label>
                  <Select 
                    value={config.supportLevel} 
                    onValueChange={(value) => updateConfig({ supportLevel: value as any })}
                  >
                    <SelectTrigger id="support-level">
                      <SelectValue placeholder="Select support level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard (Business hours)</SelectItem>
                      <SelectItem value="enhanced">Enhanced (16/5)</SelectItem>
                      <SelectItem value="premium">Premium (24/7)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="commitment" className="text-sm font-medium block mb-2">
                    Billing Commitment
                  </Label>
                  <Select 
                    value={config.commitment} 
                    onValueChange={(value) => updateConfig({ commitment: value as any })}
                  >
                    <SelectTrigger id="commitment">
                      <SelectValue placeholder="Select billing commitment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly (No commitment)</SelectItem>
                      <SelectItem value="annual">Annual (15% discount)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-medium mb-4 flex items-center">
                  <Server className="h-5 w-5 mr-2" /> Service Configuration
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 mr-2 text-gray-500" />
                      <span>Project Size</span>
                    </div>
                    <span className="font-medium capitalize">{config.projectSize}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Server className="h-5 w-5 mr-2 text-gray-500" />
                      <span>Servers</span>
                    </div>
                    <span className="font-medium">{config.servers}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <PieChart className="h-5 w-5 mr-2 text-gray-500" />
                      <span>Databases</span>
                    </div>
                    <span className="font-medium">{config.databases}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>24/7 Monitoring</span>
                    <span className="font-medium">{config.includeMonitoring ? 'Included' : 'Not included'}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Security Services</span>
                    <span className="font-medium">{config.includeSecurity ? 'Included' : 'Not included'}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Automated Backups</span>
                    <span className="font-medium">{config.includeBackups ? 'Included' : 'Not included'}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Support Level</span>
                    <span className="font-medium capitalize">{config.supportLevel}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Billing Commitment</span>
                    <span className="font-medium capitalize">{config.commitment}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">Price Breakdown</h4>
                
                <div className="space-y-4">
                  {/* Monthly pricing */}
                  <div className="space-y-2">
                    <div className="flex justify-between pb-2">
                      <span>Monthly Subtotal</span>
                      <span className="font-medium">{formatCurrency(monthlyPrice)}</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span>VAT (5%)</span>
                      <span className="font-medium">{formatCurrency(monthlyPrice * 0.05)}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="font-medium">Total Monthly Fee</span>
                      <span className="font-bold text-xl">{formatCurrency(monthlyPrice * 1.05)}</span>
                    </div>
                  </div>
                  
                  {/* Annual pricing if applicable */}
                  {config.commitment === 'annual' && (
                    <div className="pt-4 border-t mt-2">
                      <div className="flex justify-between pb-1">
                        <span className="text-green-700">Annual Commitment Discount (15%)</span>
                        <span className="text-green-700">-{formatCurrency(monthlyPrice * 0.15)}</span>
                      </div>
                      
                      <div className="flex justify-between pb-1 mt-2">
                        <span>Discounted Monthly Fee</span>
                        <span>{formatCurrency(discountedPrice)}</span>
                      </div>
                      <div className="flex justify-between pb-1">
                        <span>VAT (5%)</span>
                        <span>{formatCurrency(discountedPrice * 0.05)}</span>
                      </div>
                      <div className="flex justify-between pb-1 font-medium">
                        <span>Monthly Total with Discount</span>
                        <span>{formatCurrency(discountedPrice * 1.05)}</span>
                      </div>
                      
                      <div className="pt-3 mt-2 border-t">
                        <div className="flex justify-between pb-1">
                          <span>Annual Payment Total</span>
                          <span>{formatCurrency(annualPrice)}</span>
                        </div>
                        <div className="flex justify-between pb-1">
                          <span>VAT (5%)</span>
                          <span>{formatCurrency(annualPrice * 0.05)}</span>
                        </div>
                        <div className="flex justify-between font-medium">
                          <span>Total Annual Fee (with VAT)</span>
                          <span>{formatCurrency(annualPrice * 1.05)}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    className="w-full border-[#3480cc] text-[#3480cc] hover:bg-[#3480cc]/10"
                    onClick={handleDownloadQuote}
                    disabled={isDownloading}
                  >
                    {isDownloading ? 'Generating...' : 'Download Quote'}
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    className="w-full flex items-center justify-center gap-2 bg-[#3480cc] hover:bg-[#3480cc]/90 text-white"
                    onClick={handleContactSales}
                  >
                    Contact Sales <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="mt-4">
                  <p className="text-xs text-center text-gray-500">
                    Custom configurations available. Contact our sales team for a detailed quote.
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <h5 className="font-medium mb-3">What's Included:</h5>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Full infrastructure management</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Proactive maintenance and updates</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Performance optimization</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Monthly reporting and insights</span>
                  </li>
                  {config.supportLevel === 'premium' && (
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Dedicated technical account manager</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </AnimatedElement>
  );
}