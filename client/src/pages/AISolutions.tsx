import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';
import { 
  ArrowRight, 
  MessageSquare, 
  Bot, 
  Zap, 
  Clock, 
  Building2, 
  Hotel, 
  UtensilsCrossed, 
  ShoppingBag,
  Car,
  Plane,
  Check,
  Globe,
  Code,
  Database,
  Languages
} from 'lucide-react';
import { AnimatedElement } from '@/components/ui/animated-element';

// Component for feature cards
const FeatureCard = ({ icon: Icon, title, children }: { icon: any, title: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 h-full">
    <div className="mb-5 feature-icon">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="heading-sm mb-3">{title}</h3>
    {children}
  </div>
);

// Component for solution cards
const SolutionCard = ({ 
  title, 
  description, 
  features, 
  icon: Icon, 
  link 
}: { 
  title: string, 
  description: string, 
  features: string[], 
  icon: any, 
  link: string 
}) => (
  <AnimatedElement animation="fade" className="card card-hover overflow-hidden border group h-full">
    <div className="h-1 w-full bg-primary/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-corporate-accent opacity-80 group-hover:translate-x-0 -translate-x-full transition-transform duration-700"></div>
    </div>
    <div className="p-6 sm:p-8">
      <div className="flex items-start gap-5">
        <div className="feature-icon">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <h3 className="heading-md mb-3 text-neutral-900">{title}</h3>
          <p className="text-neutral-700 mb-5">{description}</p>
          
          <ul className="mb-6 space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <Check className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                <span className="text-neutral-700 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto pt-2">
            <Link href={link}>
              <Button 
                variant="ghost" 
                className="text-primary hover:bg-primary/5 p-0 h-auto font-medium group"
              >
                Learn more
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </AnimatedElement>
);

// Component for industry cards
const IndustryCard = ({ icon: Icon, title, description, link }: { icon: any, title: string, description: string, link: string }) => (
  <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 h-full flex flex-col">
    <div className="mb-4 feature-icon">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="heading-sm mb-3">{title}</h3>
    <p className="text-neutral-600 text-sm mb-5">{description}</p>
    <div className="mt-auto">
      <Link href={link}>
        <Button 
          variant="ghost" 
          className="text-primary hover:bg-primary/5 p-0 h-auto font-medium group"
        >
          Learn more
          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
  </div>
);

const AISolutions = () => {
  return (
    <>
      <Helmet>
        <title>Expert AI Solutions for Business Growth in Dubai & UAE | YAFA Cloud Services</title>
        <meta name="description" content="Leverage practical AI solutions (Chatbots, Automation, Agents) tailored for Dubai & UAE businesses by YAFA Cloud Services. Boost efficiency & customer engagement. Get your free AI consultation!" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GQDDYJSFNG"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GQDDYJSFNG');
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="corporate-gradient text-white relative py-16 md:py-24">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white/90 bg-white/10 rounded-full mb-6">
              AI SOLUTIONS FOR UAE BUSINESSES
            </div>
            <h1 className="heading-xl mb-6 text-white">
              Unlock Growth & Efficiency: Powerful AI Solutions for Your Dubai & UAE Business
            </h1>
            <p className="text-body-lg text-white/80 mb-8">
              Practical, results-driven AI solutions specifically designed for businesses in Dubai and across the UAE. We deliver tangible improvements in efficiency, customer engagement, and overall business performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-medium w-full sm:w-auto justify-center shadow-md">
                  Request Free AI Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#solutions">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 w-full sm:w-auto justify-center shadow-md">
                  Explore AI Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatedElement animation="fade">
              <p className="text-body-lg text-neutral-700 mb-6">
                In the dynamic and competitive landscape of Dubai and the wider UAE, staying ahead means working smarter, not just harder. Are repetitive tasks consuming valuable staff time? Are you missing opportunities to engage customers instantly, 24/7? Many businesses face these challenges, hindering growth and impacting customer satisfaction.
              </p>
              <p className="text-body-lg text-neutral-700 mb-6">
                The solution lies in strategically implementing Artificial Intelligence (AI). YAFA Cloud Services LLC, based right here in the UAE, specializes in developing practical, results-driven AI solutions specifically designed for Dubai and UAE businesses. We cut through the hype to deliver tangible improvements in efficiency, customer engagement, and overall business performance across various sectors.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Demystifying AI Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <AnimatedElement animation="fade" className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-lg mb-6">
              Demystifying AI: Practical Applications for Real Business Impact
            </h2>
            <p className="text-body-lg text-neutral-600">
              Forget confusing jargon. For us, AI is about using proven technologies like machine learning (ML) and natural language processing (NLP) to solve concrete business problems. Our focus is on delivering practical AI solutions in the UAE that provide clear ROI.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedElement animation="fade" delay="100">
              <FeatureCard icon={Zap} title="Automate Manual Processes">
                <p className="text-neutral-600 text-sm">
                  Eliminate time-consuming repetitive tasks that drain your staff productivity and increase operational costs.
                </p>
              </FeatureCard>
            </AnimatedElement>

            <AnimatedElement animation="fade" delay="200">
              <FeatureCard icon={Clock} title="24/7 Customer Support">
                <p className="text-neutral-600 text-sm">
                  Provide instant, intelligent customer support anytime, ensuring queries never go unanswered, even outside business hours.
                </p>
              </FeatureCard>
            </AnimatedElement>

            <AnimatedElement animation="fade" delay="300">
              <FeatureCard icon={MessageSquare} title="Effective Lead Capture">
                <p className="text-neutral-600 text-sm">
                  Capture and qualify leads more effectively with AI that engages visitors at the right moment with the right questions.
                </p>
              </FeatureCard>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Core AI Solutions Section */}
      <section id="solutions" className="py-16 md:py-24 bg-neutral-50">
        <div className="container">
          <AnimatedElement animation="fade" className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-4">
              OUR AI SERVICES
            </div>
            <h2 className="heading-lg mb-6">
              Our Core AI Solutions: Tailored for Success in the UAE Market
            </h2>
            <p className="text-body-lg text-neutral-600">
              We offer a suite of AI services, adaptable to your specific needs and integrated seamlessly with your existing cloud infrastructure (whether on AWS, GCP, Azure, or hybrid setups).
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <SolutionCard
              title="AI Chatbots: Your 24/7 Digital Workforce"
              description="Instantly answer customer queries, take bookings, or qualify leads – even outside business hours. Our expert AI chatbot development in Dubai creates intelligent, conversational bots for WhatsApp and web."
              features={[
                "Enhance Customer Service with immediate responses to FAQs",
                "Boost Lead Generation by engaging website visitors proactively",
                "Streamline Transactions with automated booking and ordering",
                "Integrate Seamlessly with your CRM and business tools"
              ]}
              icon={MessageSquare}
              link="/services/ai-chatbots"
            />

            <SolutionCard
              title="AI-Powered Automation: Reclaim Time & Reduce Costs"
              description="Stop wasting resources on repetitive manual tasks. Our business automation solutions across the UAE leverage AI to streamline workflows, improve accuracy, and free up your team."
              features={[
                "Data Entry & Processing with reduced errors",
                "Workflow Management with automated approvals and notifications",
                "Reporting & Analytics generated automatically from your data",
                "Cross-System Integration for smooth data flow between platforms"
              ]}
              icon={Zap}
              link="/services/ai-automation"
            />

            <SolutionCard
              title="Intelligent AI Agents: Advanced Support & Personalization"
              description="For tasks requiring deeper understanding and more complex interaction, our Intelligent AI Agents go beyond standard chatbots to provide sophisticated solutions."
              features={[
                "Handle Complex Customer Support issues with context awareness",
                "Act as Internal Experts providing quick information access for staff",
                "Deliver Personalized Sales & Service based on customer history",
                "Learn continuously to improve performance over time"
              ]}
              icon={Bot}
              link="/services/intelligent-ai-agents"
            />

            <SolutionCard
              title="Custom AI Solutions: Built for Your Unique Needs"
              description="Every business is different. We develop tailored AI solutions specific to your organization's challenges, integrating with your existing systems and workflows."
              features={[
                "Thorough business analysis to identify key opportunity areas",
                "Customized AI strategy aligned with your business goals",
                "Seamless integration with your current technology stack",
                "Ongoing support and optimization for maximum ROI"
              ]}
              icon={Database}
              link="/services/custom-ai-solutions"
            />
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <AnimatedElement animation="fade" className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-4">
              INDUSTRY FOCUS
            </div>
            <h2 className="heading-lg mb-6">
              Driving Success Across Key UAE Industries with Tailored AI
            </h2>
            <p className="text-body-lg text-neutral-600">
              Our AI solutions deliver significant value across the sectors driving Dubai's economy, with industry-specific implementations that address unique challenges.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <AnimatedElement animation="fade" delay="100">
              <IndustryCard 
                icon={Building2} 
                title="Real Estate" 
                description="Automate lead qualification & viewing schedules, provide instant property info via chatbot, analyze market trends and optimize property marketing."
                link="/services#real-estate"
              />
            </AnimatedElement>

            <AnimatedElement animation="fade" delay="200">
              <IndustryCard 
                icon={Hotel} 
                title="Hospitality" 
                description="Offer 24/7 AI concierge/booking bots, personalize guest offers, automate check-in/out processes, and optimize staffing based on demand forecasts."
                link="/services#hospitality"
              />
            </AnimatedElement>

            <AnimatedElement animation="fade" delay="300">
              <IndustryCard 
                icon={UtensilsCrossed} 
                title="Food & Beverage" 
                description="Streamline WhatsApp/online ordering, predict inventory needs to reduce waste, automate delivery dispatch communication and enhance customer engagement."
                link="/services#food-beverage"
              />
            </AnimatedElement>

            <AnimatedElement animation="fade" delay="400">
              <IndustryCard 
                icon={ShoppingBag} 
                title="E-commerce" 
                description="Provide AI-powered product recommendations, automate order tracking updates, offer instant support via chatbots, and optimize inventory management."
                link="/services#e-commerce"
              />
            </AnimatedElement>

            <AnimatedElement animation="fade" delay="500">
              <IndustryCard 
                icon={Car} 
                title="Car Rental" 
                description="Automate booking processes, manage fleet utilization with AI predictions, streamline customer communications, and optimize maintenance schedules."
                link="/services#car-rental"
              />
            </AnimatedElement>

            <AnimatedElement animation="fade" delay="600">
              <IndustryCard 
                icon={Plane} 
                title="Travel Agencies" 
                description="Deploy AI travel assistants for personalized recommendations, automate itinerary creation, provide 24/7 traveler support, and analyze travel trends."
                link="/services#travel-agencies"
              />
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container">
          <AnimatedElement animation="fade" className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-lg mb-6">
              Why Choose YAFA Cloud Services for AI in Dubai?
            </h2>
            <p className="text-body-lg text-neutral-600">
              Partner with a local team that combines deep technical expertise with a practical, results-focused approach to AI implementation.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedElement animation="fade" delay="100">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary flex-shrink-0">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="heading-sm mb-2">Deep Local & Technical Expertise</h3>
                  <p className="text-neutral-600 text-sm">
                    15+ years in Cloud & AI, 10+ years operating in the MENA region. We understand the nuances of the Dubai and UAE business environment.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fade" delay="200">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary flex-shrink-0">
                  <Code className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="heading-sm mb-2">Multi-Cloud Proficiency</h3>
                  <p className="text-neutral-600 text-sm">
                    Expertise across AWS, GCP, and Azure ensures the best platform fit for your AI implementations and existing infrastructure.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fade" delay="300">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary flex-shrink-0">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="heading-sm mb-2">Practical, ROI-Focused Approach</h3>
                  <p className="text-neutral-600 text-sm">
                    We build solutions that deliver measurable results, focusing on business outcomes rather than just technical implementations.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fade" delay="400">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary flex-shrink-0">
                  <Languages className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="heading-sm mb-2">Multilingual Communication</h3>
                  <p className="text-neutral-600 text-sm">
                    We connect with you effectively in Arabic, English, and Turkish, ensuring clear communication throughout your project.
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-corporate-dark to-corporate-blue text-white relative">
        <div className="absolute inset-0 hero-pattern opacity-5"></div>
        <div className="container relative z-10">
          <AnimatedElement animation="fade" className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6 text-[#003366] font-bold bg-white bg-opacity-90 py-3 px-4 rounded-lg">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-[#003366] text-base md:text-lg mb-8 mx-auto max-w-2xl font-medium bg-white bg-opacity-90 py-4 px-6 rounded-lg">
              The future of business in the UAE is intelligent and automated. Don't get left behind. Partner with YAFA Cloud Services to harness the power of practical AI solutions tailored specifically for your success in Dubai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/ferasawadi90/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-medium w-full sm:w-auto justify-center shadow-md">
                  Schedule Your Free AI Consultation
                  <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded font-medium">Calendly →</span>
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" className="bg-[#3480cc] text-white hover:bg-[#3480cc]/90 w-full sm:w-auto justify-center shadow-md font-medium">
                  Contact Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
};

export default AISolutions; 