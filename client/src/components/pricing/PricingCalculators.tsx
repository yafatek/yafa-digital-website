import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PriceCalculator } from "./PriceCalculator";
import { ManagedServicesCalculator } from "./ManagedServicesCalculator";
import { WebDevCalculator } from "./WebDevCalculator";
import { ComparisonTable } from "./ComparisonTable";
import { AnimatedElement } from "@/components/ui/animated-element";
import { Server, Code, CloudLightning, BarChart3, Mail, Phone, CalendarClock } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function PricingCalculators() {
  const [activeTab, setActiveTab] = useState("comparison");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto"
    >
      <Tabs 
        defaultValue="comparison" 
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-10 p-1 bg-white rounded-full border border-neutral-200/50">
          <TabsTrigger 
            value="comparison" 
            className="flex items-center gap-2 py-2 data-[state=active]:bg-neutral-100 data-[state=active]:text-neutral-900 text-neutral-500 rounded-full transition-all"
          >
            <BarChart3 className="h-4 w-4" /> 
            <span>Pricing Tiers</span>
          </TabsTrigger>
          <TabsTrigger 
            value="cloud" 
            className="flex items-center gap-2 py-2 data-[state=active]:bg-neutral-100 data-[state=active]:text-neutral-900 text-neutral-500 rounded-full transition-all"
          >
            <CloudLightning className="h-4 w-4" /> 
            <span>Cloud Services</span>
          </TabsTrigger>
          <TabsTrigger 
            value="managed" 
            className="flex items-center gap-2 py-2 data-[state=active]:bg-neutral-100 data-[state=active]:text-neutral-900 text-neutral-500 rounded-full transition-all"
          >
            <Server className="h-4 w-4" /> 
            <span>Managed Services</span>
          </TabsTrigger>
          <TabsTrigger 
            value="web" 
            className="flex items-center gap-2 py-2 data-[state=active]:bg-neutral-100 data-[state=active]:text-neutral-900 text-neutral-500 rounded-full transition-all"
          >
            <Code className="h-4 w-4" /> 
            <span>Web Development</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="comparison">
          <ComparisonTable />
        </TabsContent>
        
        <TabsContent value="cloud">
          <div className="mb-8">
            <h3 className="text-xl font-medium text-neutral-900 mb-3">Cloud Services Calculator</h3>
            <p className="text-neutral-600 text-sm">
              Calculate the cost of your cloud infrastructure, including compute resources, storage, and security services.
              Adjust resources and see real-time pricing updates.
            </p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
            <PriceCalculator />
          </div>
        </TabsContent>
        
        <TabsContent value="managed">
          <div className="mb-8">
            <h3 className="text-xl font-medium text-neutral-900 mb-3">Managed Services Calculator</h3>
            <p className="text-neutral-600 text-sm">
              Estimate the cost of our fully managed cloud services, including monitoring, maintenance, 
              and ongoing support for your infrastructure.
            </p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
            <ManagedServicesCalculator />
          </div>
        </TabsContent>
        
        <TabsContent value="web">
          <div className="mb-8">
            <h3 className="text-xl font-medium text-neutral-900 mb-3">Web Development Calculator</h3>
            <p className="text-neutral-600 text-sm">
              Calculate the cost of custom web development services, from simple landing pages 
              to complex web applications and e-commerce platforms.
            </p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
            <WebDevCalculator />
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-20 bg-[#f8f8fa]/80 backdrop-blur-sm border border-neutral-200/50 rounded-2xl p-8 shadow-sm">
        <h3 className="text-xl font-medium text-neutral-900 text-center mb-5">Need a Custom Quote?</h3>
        <p className="text-center text-neutral-600 text-sm mb-8 max-w-3xl mx-auto">
          Our pricing calculators provide estimates based on standard configurations. 
          For a detailed quote tailored to your specific requirements, contact our sales team.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm border border-neutral-200/80 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-neutral-300/80">
            <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary mb-4 mx-auto">
              <Mail className="h-5 w-5" />
            </div>
            <h4 className="text-center font-medium text-neutral-900 mb-2">Email Us</h4>
            <p className="text-center text-sm text-neutral-500 mb-3">Send us your requirements</p>
            <a 
              href="mailto:admin@yafa.digital" 
              className="text-center block text-primary font-medium hover:underline"
            >
              admin@yafa.digital
            </a>
          </div>
          <div className="bg-white/90 backdrop-blur-sm border border-neutral-200/80 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-neutral-300/80">
            <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary mb-4 mx-auto">
              <Phone className="h-5 w-5" />
            </div>
            <h4 className="text-center font-medium text-neutral-900 mb-2">Call Us / WhatsApp</h4>
            <p className="text-center text-sm text-neutral-500 mb-3">Speak with a specialist</p>
            <a 
              href="tel:+971565531542" 
              className="text-center block text-primary font-medium hover:underline"
            >
              +971565531542
            </a>
          </div>
          <div className="bg-white/90 backdrop-blur-sm border border-neutral-200/80 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-neutral-300/80">
            <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary mb-4 mx-auto">
              <CalendarClock className="h-5 w-5" />
            </div>
            <h4 className="text-center font-medium text-neutral-900 mb-2">Schedule a Meeting</h4>
            <p className="text-center text-sm text-neutral-500 mb-3">Book a consultation</p>
            <a 
              href="/contact" 
              className="text-center block text-primary font-medium hover:underline"
            >
              View Calendar
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-10 text-center text-sm text-neutral-500 max-w-3xl mx-auto">
        <p className="mb-2">
          * All prices are in USD and do not include applicable taxes or fees.
        </p>
        <p>
          * Actual pricing may vary based on specific requirements, customizations, and service level agreements.
          The calculators provide estimates only and final pricing will be confirmed in your custom quote.
        </p>
      </div>
    </motion.div>
  );
}