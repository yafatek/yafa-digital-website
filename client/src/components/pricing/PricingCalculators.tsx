import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PriceCalculator } from "./PriceCalculator";
import { ManagedServicesCalculator } from "./ManagedServicesCalculator";
import { WebDevCalculator } from "./WebDevCalculator";
import { ComparisonTable } from "./ComparisonTable";
import { AnimatedElement } from "@/components/ui/animated-element";
import { Server, Code, CloudLightning, BarChart3 } from "lucide-react";

export function PricingCalculators() {
  const [activeTab, setActiveTab] = useState("comparison");
  
  return (
    <div className="container mx-auto py-12">
      <AnimatedElement animation="fade">
        <h2 className="text-3xl font-bold text-center mb-2">Transparent Pricing</h2>
        <p className="text-center text-gray-500 mb-12 max-w-3xl mx-auto">
          Get accurate estimates for your cloud services with our interactive pricing calculators.
          Choose the calculator that best fits your needs or compare our standard pricing tiers.
        </p>
        
        <Tabs 
          defaultValue="comparison" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="max-w-6xl mx-auto"
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="comparison" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" /> Pricing Tiers
            </TabsTrigger>
            <TabsTrigger value="cloud" className="flex items-center gap-2">
              <CloudLightning className="h-4 w-4" /> Cloud Services
            </TabsTrigger>
            <TabsTrigger value="managed" className="flex items-center gap-2">
              <Server className="h-4 w-4" /> Managed Services
            </TabsTrigger>
            <TabsTrigger value="web" className="flex items-center gap-2">
              <Code className="h-4 w-4" /> Web Development
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="comparison">
            <ComparisonTable />
          </TabsContent>
          
          <TabsContent value="cloud">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Cloud Services Calculator</h3>
              <p className="text-gray-500">
                Calculate the cost of your cloud infrastructure, including compute resources, storage, and security services.
                Adjust resources and see real-time pricing updates.
              </p>
            </div>
            <PriceCalculator />
          </TabsContent>
          
          <TabsContent value="managed">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Managed Services Calculator</h3>
              <p className="text-gray-500">
                Estimate the cost of our fully managed cloud services, including monitoring, maintenance, 
                and ongoing support for your infrastructure.
              </p>
            </div>
            <ManagedServicesCalculator />
          </TabsContent>
          
          <TabsContent value="web">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Web Development Calculator</h3>
              <p className="text-gray-500">
                Calculate the cost of custom web development services, from simple landing pages 
                to complex web applications and e-commerce platforms.
              </p>
            </div>
            <WebDevCalculator />
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-4">Need a Custom Quote?</h3>
          <p className="text-center text-gray-600 mb-6">
            Our pricing calculators provide estimates based on standard configurations. 
            For a detailed quote tailored to your specific requirements, contact our sales team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-5 rounded-lg text-center shadow-sm">
              <h4 className="font-semibold mb-2">Email Us</h4>
              <p className="text-sm text-gray-500 mb-2">Send us your requirements</p>
              <p className="text-primary font-medium">admin@yafa.digital</p>
            </div>
            <div className="bg-white p-5 rounded-lg text-center shadow-sm">
              <h4 className="font-semibold mb-2">Call Us / WhatsApp</h4>
              <p className="text-sm text-gray-500 mb-2">Speak with a specialist</p>
              <p className="text-primary font-medium">+971565531542</p>
            </div>
            <div className="bg-white p-5 rounded-lg text-center shadow-sm">
              <h4 className="font-semibold mb-2">Schedule a Meeting</h4>
              <p className="text-sm text-gray-500 mb-2">Book a consultation</p>
              <a 
                href="https://calendly.com/ferasawadi90/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                View Calendar
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center text-sm text-gray-500 max-w-3xl mx-auto">
          <p className="mb-2">
            * All prices are in USD and do not include applicable taxes or fees.
          </p>
          <p>
            * Actual pricing may vary based on specific requirements, customizations, and service level agreements.
            The calculators provide estimates only and final pricing will be confirmed in your custom quote.
          </p>
        </div>
      </AnimatedElement>
    </div>
  );
}