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
  Languages,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import { AnimatedElement } from '@/components/ui/animated-element';

// Component for feature cards
const FeatureCard = ({ icon: Icon, title, children }: { icon: any, title: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-xl shadow-sm border border-neutral-200/80 p-8 h-full hover:shadow-md hover:border-neutral-300/80 transition-all duration-300">
    <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-50 text-violet-600">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="text-lg font-medium text-neutral-900 mb-3">{title}</h3>
    {children}
  </div>
);

// Component for solution cards
const SolutionCard = ({ 
  title, 
  description, 
  features, 
  icon: Icon, 
  link,
  bgColor = "bg-blue-50",
  textColor = "text-blue-600"
}: { 
  title: string, 
  description: string, 
  features: string[], 
  icon: any, 
  link: string,
  bgColor?: string,
  textColor?: string
}) => (
  <AnimatedElement animation="fade" className="bg-white rounded-2xl shadow-sm border border-neutral-200/80 overflow-hidden hover:shadow-md hover:border-neutral-300/80 transition-all duration-300 h-full group">
    <div className="p-8">
      <div className="flex flex-col">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${bgColor} ${textColor} mb-6`}>
          <Icon className="h-5 w-5" />
        </div>
        
        <h3 className="text-xl font-medium text-neutral-900 mb-4">{title}</h3>
        <p className="text-neutral-600 mb-6">{description}</p>
        
        <div className="bg-neutral-50 rounded-xl p-5 mb-6">
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <Check className={`h-4 w-4 ${textColor} mt-1 mr-3 flex-shrink-0`} />
                <span className="text-neutral-700 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto pt-2">
          <Link href={link}>
            <Button 
              variant="ghost" 
              className={`${textColor} hover:${bgColor} px-4 py-2 rounded-full border border-transparent hover:border-${textColor.slice(5)}/50 group text-sm`}
            >
              Learn more
              <ChevronRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </AnimatedElement>
);

// Component for industry cards
const IndustryCard = ({ 
  icon: Icon, 
  title, 
  description, 
  link,
  bgColor = "bg-neutral-50",
  textColor = "text-neutral-900" 
}: { 
  icon: any, 
  title: string, 
  description: string, 
  link: string,
  bgColor?: string,
  textColor?: string
}) => (
  <div className="bg-white rounded-xl shadow-sm border border-neutral-200/80 p-6 h-full flex flex-col hover:shadow-md hover:border-neutral-300/80 transition-all duration-300 group">
    <div className={`mb-4 inline-flex items-center justify-center w-10 h-10 rounded-full ${bgColor} ${textColor}`}>
      <Icon className="h-4 w-4" />
    </div>
    <h3 className="text-lg font-medium text-neutral-900 mb-3">{title}</h3>
    <p className="text-neutral-600 text-sm mb-5">{description}</p>
    <div className="mt-auto">
      <Link href={link}>
        <Button 
          variant="ghost" 
          className={`${textColor} hover:${bgColor} p-0 h-auto text-sm group flex items-center`}
        >
          Learn more
          <ChevronRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
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
      </Helmet>

      {/* Hero Section */}
      <section className="pt-36 pb-24 relative bg-gradient-to-b from-white to-[#f5f5f7] overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-30"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-violet-50 blur-3xl opacity-30"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-violet-50 backdrop-blur-lg border border-violet-100 rounded-full px-4 py-1.5 text-violet-600 text-sm font-medium mb-6">
              AI SOLUTIONS FOR UAE BUSINESSES
            </div>
            <h1 className="text-4xl md:text-6xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
              Powerful AI solutions for your Dubai business
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 font-light mb-10">
              Practical, results-driven AI solutions specifically designed for businesses in Dubai and across the UAE. We deliver tangible improvements in efficiency, customer engagement, and overall business performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact">
                <Button size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800 rounded-full shadow-sm font-normal w-full sm:w-auto justify-center">
                  Request free AI consultation
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#solutions">
                <Button size="lg" variant="outline" className="border-neutral-200 text-neutral-700 hover:bg-neutral-50 rounded-full w-full sm:w-auto justify-center hover:border-neutral-300">
                  Explore AI solutions
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatedElement animation="fade">
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                In the dynamic and competitive landscape of Dubai and the wider UAE, staying ahead means working smarter, not just harder. Are repetitive tasks consuming valuable staff time? Are you missing opportunities to engage customers instantly, 24/7? Many businesses face these challenges, hindering growth and impacting customer satisfaction.
              </p>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                The solution lies in strategically implementing Artificial Intelligence (AI). YAFA Cloud Services LLC, based right here in the UAE, specializes in developing practical, results-driven AI solutions specifically designed for Dubai and UAE businesses. We cut through the hype to deliver tangible improvements in efficiency, customer engagement, and overall business performance across various sectors.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Demystifying AI Section */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="container">
          <AnimatedElement animation="fade" className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-50 backdrop-blur-lg border border-blue-100 rounded-full px-4 py-1.5 text-blue-600 text-sm font-medium mb-6">
              PRACTICAL APPLICATIONS
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
              Demystifying AI for real business impact
            </h2>
            <p className="text-lg text-neutral-600">
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
      <section id="solutions" className="py-24 bg-white">
        <div className="container">
          <AnimatedElement animation="fade" className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-violet-50 backdrop-blur-lg border border-violet-100 rounded-full px-4 py-1.5 text-violet-600 text-sm font-medium mb-6">
              OUR AI SERVICES
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
              Our core AI solutions tailored for UAE success
            </h2>
            <p className="text-lg text-neutral-600">
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
              bgColor="bg-blue-50"
              textColor="text-blue-600"
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
              bgColor="bg-violet-50"
              textColor="text-violet-600"
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
              bgColor="bg-amber-50"
              textColor="text-amber-600"
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
              bgColor="bg-emerald-50"
              textColor="text-emerald-600"
            />
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="container">
          <AnimatedElement animation="fade" className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-50 backdrop-blur-lg border border-blue-100 rounded-full px-4 py-1.5 text-blue-600 text-sm font-medium mb-6">
              INDUSTRY FOCUS
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
              Driving success across key UAE industries
            </h2>
            <p className="text-lg text-neutral-600">
              Our AI solutions deliver significant value across the sectors driving Dubai's economy, with industry-specific implementations that address unique challenges.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <AnimatedElement animation="fade" delay="100">
              <IndustryCard 
                icon={Building2} 
                title="Real Estate" 
                description="Automate lead qualification & viewing schedules, provide instant property info via chatbot, analyze market trends and optimize property marketing."
                link="/services#real-estate"
                bgColor="bg-blue-50"
                textColor="text-blue-600"
              />
            </AnimatedElement>

            <AnimatedElement animation="fade" delay="200">
              <IndustryCard 
                icon={Hotel} 
                title="Hospitality" 
                description="Offer 24/7 AI concierge/booking bots, personalize guest offers, automate check-in/out processes, and optimize staffing based on demand forecasts."
                link="/services#hospitality"
                bgColor="bg-violet-50"
                textColor="text-violet-600"
              />
            </AnimatedElement>

            <AnimatedElement animation="fade" delay="300">
              <IndustryCard 
                icon={UtensilsCrossed} 
                title="Food & Beverage" 
                description="Streamline WhatsApp/online ordering, predict inventory needs to reduce waste, automate delivery dispatch communication and enhance customer engagement."
                link="/services#food-beverage"
                bgColor="bg-amber-50"
                textColor="text-amber-600"
              />
            </AnimatedElement>

            <AnimatedElement animation="fade" delay="400">
              <IndustryCard 
                icon={ShoppingBag} 
                title="E-commerce" 
                description="Provide AI-powered product recommendations, automate order tracking updates, offer instant support via chatbots, and optimize inventory management."
                link="/services#e-commerce"
                bgColor="bg-emerald-50"
                textColor="text-emerald-600"
              />
            </AnimatedElement>

            <AnimatedElement animation="fade" delay="500">
              <IndustryCard 
                icon={Car} 
                title="Car Rental" 
                description="Automate booking processes, manage fleet utilization with AI predictions, streamline customer communications, and optimize maintenance schedules."
                link="/services#car-rental"
                bgColor="bg-rose-50"
                textColor="text-rose-600"
              />
            </AnimatedElement>

            <AnimatedElement animation="fade" delay="600">
              <IndustryCard 
                icon={Plane} 
                title="Travel Agencies" 
                description="Deploy AI travel assistants for personalized recommendations, automate itinerary creation, provide 24/7 traveler support, and analyze travel trends."
                link="/services#travel-agencies"
                bgColor="bg-cyan-50"
                textColor="text-cyan-600"
              />
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <AnimatedElement animation="fade" className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-violet-50 backdrop-blur-lg border border-violet-100 rounded-full px-4 py-1.5 text-violet-600 text-sm font-medium mb-6">
              WHY YAFA CLOUD
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
              Why choose YAFA Cloud Services for AI in Dubai?
            </h2>
            <p className="text-lg text-neutral-600">
              Partner with a local team that combines deep technical expertise with a practical, results-focused approach to AI implementation.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedElement animation="fade" delay="100">
              <div className="bg-white rounded-xl shadow-sm border border-neutral-200/80 p-8 hover:shadow-md hover:border-neutral-300/80 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-6">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-3">Deep Local & Technical Expertise</h3>
                <p className="text-neutral-600 text-sm">
                  15+ years in Cloud & AI, 10+ years operating in the MENA region. We understand the nuances of the Dubai and UAE business environment.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fade" delay="200">
              <div className="bg-white rounded-xl shadow-sm border border-neutral-200/80 p-8 hover:shadow-md hover:border-neutral-300/80 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-50 text-violet-600 mb-6">
                  <Code className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-3">Multi-Cloud Proficiency</h3>
                <p className="text-neutral-600 text-sm">
                  Expertise across AWS, GCP, and Azure ensures the best platform fit for your AI implementations and existing infrastructure.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fade" delay="300">
              <div className="bg-white rounded-xl shadow-sm border border-neutral-200/80 p-8 hover:shadow-md hover:border-neutral-300/80 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 text-amber-600 mb-6">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-3">Practical, ROI-Focused Approach</h3>
                <p className="text-neutral-600 text-sm">
                  We build solutions that deliver measurable results, focusing on business outcomes rather than just technical implementations.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fade" delay="400">
              <div className="bg-white rounded-xl shadow-sm border border-neutral-200/80 p-8 hover:shadow-md hover:border-neutral-300/80 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mb-6">
                  <Languages className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-3">Multilingual Communication</h3>
                <p className="text-neutral-600 text-sm">
                  We connect with you effectively in Arabic, English, and Turkish, ensuring clear communication throughout your project.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-[#f5f5f7] relative">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-30"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-violet-50 blur-3xl opacity-30"></div>
        
        <div className="container relative z-10">
          <AnimatedElement animation="fade" className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/80 p-8 md:p-12 relative overflow-hidden">
              <div className="text-center mb-8">
                <div className="inline-block bg-violet-50 backdrop-blur-lg border border-violet-100 rounded-full px-4 py-1.5 text-violet-600 text-sm font-medium mb-6">
                  GET STARTED TODAY
                </div>
                <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
                  Ready to transform your business with AI?
                </h2>
                <p className="text-lg text-neutral-600 mb-8 max-w-xl mx-auto">
                  The future of business in the UAE is intelligent and automated. Don't get left behind. Partner with YAFA Cloud Services to harness the power of practical AI solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://calendly.com/ferasawadi90/30min" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800 rounded-full shadow-sm font-normal w-full sm:w-auto justify-center">
                      Schedule your free AI consultation
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="border-neutral-200 text-neutral-700 hover:bg-neutral-50 rounded-full hover:border-neutral-300 w-full sm:w-auto justify-center">
                      Contact our team
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
};

export default AISolutions; 