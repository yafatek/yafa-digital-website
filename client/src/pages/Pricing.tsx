import { Button } from "@/components/ui/button";
import { AnimatedElement } from "@/components/ui/animated-element";
import { CheckIcon, ShieldCheck, BadgeCheck, Clock, Zap, Server, Lock, Users } from "lucide-react";
import { PricingCalculators } from "@/components/pricing/PricingCalculators";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Pricing() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [tiersRef, tiersInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="bg-white">
      {/* Hero section */}
      <section className="relative overflow-hidden pt-28 pb-24">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[#f8f8fa]"></div>
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-blue-50/30 blur-3xl"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-violet-50/30 blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block bg-neutral-900/5 backdrop-blur-sm border border-neutral-200 rounded-full px-5 py-1.5 text-neutral-700 text-sm font-medium tracking-wide mb-6">
              TRANSPARENT PRICING
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium text-neutral-900 tracking-tight leading-[1.1] mb-6">
              Enterprise-grade cloud for every business
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-600 font-light max-w-3xl mx-auto leading-relaxed mb-10">
              Select from our straightforward pricing plans with no hidden fees or surprise charges.
              Find the perfect plan for your business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 w-full rounded-full">
                  Contact Sales
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-radial from-blue-50/10 to-transparent rounded-full opacity-70"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            ref={tiersRef}
            initial={{ opacity: 0, y: 20 }}
            animate={tiersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight leading-tight mb-5">
              Our Cloud Service Plans
            </h2>
            <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
              Select the perfect plan for your business requirements with flexible options 
              and enterprise-grade features.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Essential Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={tiersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative group"
            >
              <div className="relative bg-white rounded-2xl border border-blue-100 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-blue-200 flex flex-col h-full">
                <div className="mb-7">
                  <h3 className="text-xl font-medium text-neutral-900 mb-2">Essential</h3>
                  <p className="text-sm text-neutral-500 mb-5">For small businesses and startups</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-semibold">$199</span>
                    <span className="text-neutral-600 ml-2">/month</span>
                  </div>
                </div>
                
                <Button className="w-full mb-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300">
                  <a href="/contact" className="w-full h-full flex items-center justify-center text-white">
                    Contact Sales
                  </a>
                </Button>
                
                <div className="space-y-4 flex-grow">
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-neutral-700 text-sm">5 TB cloud storage</span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-neutral-700 text-sm">3 concurrent projects</span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-neutral-700 text-sm">Standard security features</span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-neutral-700 text-sm">Email support</span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-neutral-700 text-sm">99.9% uptime guarantee</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Business Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={tiersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl border border-blue-100 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md flex flex-col h-full z-10">
                <div className="absolute top-0 right-0 bg-blue-100 text-blue-700 px-4 py-1.5 text-xs font-medium rounded-bl-xl rounded-tr-xl">
                  MOST POPULAR
                </div>
                
                <div className="mb-7">
                  <h3 className="text-xl font-medium text-neutral-900 mb-2">Business</h3>
                  <p className="text-sm text-neutral-500 mb-5">For growing companies</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-semibold">$499</span>
                    <span className="text-neutral-600 ml-2">/month</span>
                  </div>
                </div>
                
                <Button className="w-full mb-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300">
                  <a href="/contact" className="w-full h-full flex items-center justify-center text-white">
                    Contact Sales
                  </a>
                </Button>
                
                <div className="space-y-4 flex-grow">
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-neutral-700 text-sm">15 TB cloud storage</span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-neutral-700 text-sm">10 concurrent projects</span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-neutral-700 text-sm">Advanced security features</span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-neutral-700 text-sm">Priority email & phone support</span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-neutral-700 text-sm">99.95% uptime guarantee</span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-neutral-700 text-sm">Advanced analytics</span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-neutral-700 text-sm">Dedicated account manager</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={tiersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative group"
            >
              <div className="relative bg-white rounded-2xl border border-blue-100 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-blue-200 flex flex-col h-full">
                <div className="mb-7">
                  <h3 className="text-xl font-medium text-neutral-900 mb-2">Enterprise</h3>
                  <p className="text-sm text-neutral-500 mb-5">For large organizations</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-semibold">Custom</span>
                  </div>
                </div>
                
                <Button className="w-full mb-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300">
                  <a href="/contact" className="w-full h-full flex items-center justify-center text-white">
                    Contact Sales
                  </a>
                </Button>
                
                <div className="space-y-4 flex-grow">
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-neutral-700 text-sm">Unlimited cloud storage</span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-neutral-700 text-sm">Unlimited projects</span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-neutral-700 text-sm">Enterprise-grade security</span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-neutral-700 text-sm">24/7 dedicated support</span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-neutral-700 text-sm">99.99% uptime SLA</span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-neutral-700 text-sm">Custom integrations</span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-neutral-700 text-sm">Dedicated infrastructure</span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-neutral-700 text-sm">Compliance assistance</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features highlight section */}
      <section className="py-24 bg-[#f8f8fa] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjAgMEgwVjYwSDYwVjBaIiBmaWxsPSIjMDAwMDAwIi8+PC9zdmc+')]"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 mb-5">
              Enterprise-Grade Features
            </h2>
            <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
              Every plan includes core features designed for businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: ShieldCheck,
                title: "Advanced Security",
                description: "Enterprise-level security protocols to protect your business data and applications"
              },
              {
                icon: Zap,
                title: "High Performance",
                description: "Optimized infrastructure designed for maximum speed and reliability"
              },
              {
                icon: Clock,
                title: "24/7 Monitoring",
                description: "Continuous monitoring and alerts to ensure your systems are always running"
              },
              {
                icon: Server,
                title: "Scalable Resources",
                description: "Easily scale your resources up or down based on your business needs"
              },
              {
                icon: Lock,
                title: "Data Protection",
                description: "Regular backups and disaster recovery options to keep your data safe"
              },
              {
                icon: BadgeCheck,
                title: "Compliance Ready",
                description: "Infrastructure designed to help you meet industry compliance requirements"
              },
              {
                icon: Users,
                title: "Expert Support",
                description: "Access to our team of cloud experts for guidance and troubleshooting"
              },
              {
                icon: ShieldCheck,
                title: "Secure Access",
                description: "Role-based access controls and secure authentication methods"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm border border-neutral-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-neutral-300/80">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-5">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Pricing Calculators Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 mb-5">
              Calculate Your Custom Price
            </h2>
            <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
              Use our interactive calculators to get an accurate estimate for your specific needs
            </p>
          </div>
          
          <PricingCalculators />
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-[#f8f8fa] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 mb-5">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
              Find answers to common questions about our cloud services and pricing
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm border border-neutral-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-neutral-300/80">
                <h3 className="text-lg font-medium text-neutral-900 mb-3">Can I upgrade or downgrade my plan?</h3>
                <p className="text-neutral-600 text-sm">
                  Yes, you can easily upgrade or downgrade your plan at any time. Changes to your subscription will be prorated and reflected in your next billing cycle.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-neutral-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-neutral-300/80">
                <h3 className="text-lg font-medium text-neutral-900 mb-3">Is there a free trial available?</h3>
                <p className="text-neutral-600 text-sm">
                  We offer personalized demo sessions for all plans. Enterprise plans include a customized proof-of-concept period tailored to your specific business needs.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-neutral-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-neutral-300/80">
                <h3 className="text-lg font-medium text-neutral-900 mb-3">How does billing work?</h3>
                <p className="text-neutral-600 text-sm">
                  We offer monthly and annual billing options. Annual subscriptions include a 15% discount compared to monthly billing. All plans are billed in advance.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-neutral-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-neutral-300/80">
                <h3 className="text-lg font-medium text-neutral-900 mb-3">What kind of support is included?</h3>
                <p className="text-neutral-600 text-sm">
                  All plans include technical support, with response times varying by plan level. Essential plans include email support with 24-hour response times, Business plans add phone support with 4-hour response times, and Enterprise plans include 24/7 dedicated support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-blue-50/30 blur-3xl"></div>
        <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-violet-50/30 blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 mb-6">
              Ready to transform your cloud infrastructure?
            </h2>
            <p className="text-lg text-neutral-600 font-light mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied businesses that rely on YAFA Cloud Services 
              for their critical infrastructure needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 w-full rounded-full">
                <a href="/contact" className="w-full h-full flex items-center justify-center text-white">
                  Schedule a Demo
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}