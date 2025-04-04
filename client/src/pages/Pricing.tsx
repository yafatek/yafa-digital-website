import { Button } from "@/components/ui/button";
import { AnimatedElement } from "@/components/ui/animated-element";
import { CheckIcon } from "lucide-react";

export default function Pricing() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <section className="hero-section">
        <div className="hero-pattern"></div>
        <div className="container py-20 md:py-28">
          <AnimatedElement animation="fade" delay="none">
            <h1 className="heading-xl max-w-3xl mx-auto text-center mb-6">
              Transparent Cloud Service Pricing
            </h1>
          </AnimatedElement>
          <AnimatedElement animation="fade" delay="100">
            <p className="text-body-lg max-w-2xl mx-auto text-center mb-8">
              Choose the plan that fits your business needs with our straightforward pricing options.
              All plans include our core enterprise-grade cloud infrastructure.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Pricing section */}
      <section className="section bg-neutral-50/50">
        <div className="container">
          <div className="text-center mb-16">
            <AnimatedElement>
              <h2 className="section-title mx-auto text-center">Cloud Service Plans</h2>
            </AnimatedElement>
            <AnimatedElement delay="100">
              <p className="section-subtitle mx-auto text-center">
                Select the perfect plan for your business requirements with flexible options and enterprise-grade features.
              </p>
            </AnimatedElement>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Essential Plan */}
            <AnimatedElement animation="scale" delay="none">
              <div className="card h-full flex flex-col">
                <div className="px-6 pt-6 pb-8">
                  <h3 className="heading-md mb-2">Essential</h3>
                  <div className="text-sm text-neutral-600 mb-4">For small businesses and startups</div>
                  <div className="mb-6">
                    <span className="text-4xl font-medium">$199</span>
                    <span className="text-neutral-600">/month</span>
                  </div>
                  <Button className="w-full mb-6">Get Started</Button>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary/60 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-neutral-700">5 TB cloud storage</span>
                    </div>
                    <div className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary/60 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-neutral-700">3 concurrent projects</span>
                    </div>
                    <div className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary/60 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-neutral-700">Standard security features</span>
                    </div>
                    <div className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary/60 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-neutral-700">Email support</span>
                    </div>
                    <div className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary/60 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-neutral-700">99.9% uptime guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            {/* Business Plan */}
            <AnimatedElement animation="scale" delay="100">
              <div className="card h-full flex flex-col relative border-2 border-primary/10">
                <div className="absolute top-0 right-0 bg-primary/20 text-primary px-4 py-1 text-xs font-medium rounded-bl-lg rounded-tr-xl">
                  MOST POPULAR
                </div>
                <div className="px-6 pt-6 pb-8">
                  <h3 className="heading-md mb-2">Business</h3>
                  <div className="text-sm text-neutral-600 mb-4">For growing companies</div>
                  <div className="mb-6">
                    <span className="text-4xl font-medium">$499</span>
                    <span className="text-neutral-600">/month</span>
                  </div>
                  <Button className="w-full mb-6">Get Started</Button>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary/60 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-neutral-700">15 TB cloud storage</span>
                    </div>
                    <div className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary/60 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-neutral-700">10 concurrent projects</span>
                    </div>
                    <div className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary/60 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-neutral-700">Advanced security features</span>
                    </div>
                    <div className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary/60 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-neutral-700">Priority email & phone support</span>
                    </div>
                    <div className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary/60 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-neutral-700">99.95% uptime guarantee</span>
                    </div>
                    <div className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary/60 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-neutral-700">Advanced analytics</span>
                    </div>
                    <div className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary/60 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-neutral-700">Dedicated account manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            {/* Enterprise Plan */}
            <AnimatedElement animation="scale" delay="200">
              <div className="card h-full flex flex-col">
                <div className="px-6 pt-6 pb-8">
                  <h3 className="heading-md mb-2">Enterprise</h3>
                  <div className="text-sm text-neutral-600 mb-4">For large organizations</div>
                  <div className="mb-6">
                    <span className="text-4xl font-medium">Custom</span>
                  </div>
                  <Button className="w-full mb-6" variant="outline">Contact Sales</Button>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary/60 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-neutral-700">Unlimited cloud storage</span>
                    </div>
                    <div className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary/60 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-neutral-700">Unlimited projects</span>
                    </div>
                    <div className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary/60 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-neutral-700">Enterprise-grade security</span>
                    </div>
                    <div className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary/60 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-neutral-700">24/7 dedicated support</span>
                    </div>
                    <div className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary/60 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-neutral-700">99.99% uptime SLA</span>
                    </div>
                    <div className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary/60 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-neutral-700">Custom integrations</span>
                    </div>
                    <div className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary/60 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-neutral-700">Dedicated infrastructure</span>
                    </div>
                    <div className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary/60 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-neutral-700">Compliance assistance</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Custom solutions */}
      <section className="section-tight">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="heading-md mb-6">Need a custom solution?</h2>
            </AnimatedElement>
            <AnimatedElement delay="100">
              <p className="text-body mb-8">
                Our team can build a tailored cloud solution that perfectly matches your unique business requirements.
              </p>
            </AnimatedElement>
            <AnimatedElement delay="200">
              <Button size="lg">Contact Us</Button>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-neutral-50/50">
        <div className="container">
          <div className="text-center mb-16">
            <AnimatedElement>
              <h2 className="section-title mx-auto text-center">Frequently Asked Questions</h2>
            </AnimatedElement>
            <AnimatedElement delay="100">
              <p className="section-subtitle mx-auto text-center">
                Find answers to common questions about our cloud services and pricing plans.
              </p>
            </AnimatedElement>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <AnimatedElement>
                <div className="card p-6">
                  <h3 className="heading-sm mb-3">Can I upgrade or downgrade my plan?</h3>
                  <p className="text-neutral-700">
                    Yes, you can easily upgrade or downgrade your plan at any time. Changes to your subscription will be prorated and reflected in your next billing cycle.
                  </p>
                </div>
              </AnimatedElement>

              <AnimatedElement delay="100">
                <div className="card p-6">
                  <h3 className="heading-sm mb-3">Is there a free trial available?</h3>
                  <p className="text-neutral-700">
                    We offer a 14-day free trial for our Essential and Business plans. Enterprise plans include a customized proof-of-concept period tailored to your needs.
                  </p>
                </div>
              </AnimatedElement>

              <AnimatedElement delay="200">
                <div className="card p-6">
                  <h3 className="heading-sm mb-3">How does billing work?</h3>
                  <p className="text-neutral-700">
                    We offer monthly and annual billing options. Annual subscriptions include a 15% discount compared to monthly billing. All plans are billed in advance.
                  </p>
                </div>
              </AnimatedElement>

              <AnimatedElement delay="300">
                <div className="card p-6">
                  <h3 className="heading-sm mb-3">What kind of support is included?</h3>
                  <p className="text-neutral-700">
                    All plans include technical support, with response times varying by plan level. Essential plans include email support with 24-hour response times, Business plans add phone support with 4-hour response times, and Enterprise plans include 24/7 dedicated support.
                  </p>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="heading-md mb-6">Ready to transform your cloud infrastructure?</h2>
            </AnimatedElement>
            <AnimatedElement delay="100">
              <p className="text-body-lg mb-8">
                Join hundreds of satisfied businesses that rely on Yafa Cloud Services for their critical infrastructure needs.
              </p>
            </AnimatedElement>
            <AnimatedElement delay="200">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">Schedule a Demo</Button>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  );
}