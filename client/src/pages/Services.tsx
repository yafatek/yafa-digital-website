import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { 
  Cloud, 
  ShoppingCart, 
  ChartBarStacked, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  Server,
  Database,
  Globe,
  Upload,
  ShoppingBag,
  CreditCard,
  ChartPie,
  MessageSquare,
  ChartBar,
  Shield,
  Lock,
  Eye,
  Building2,
  Hotel,
  UtensilsCrossed,
  Car,
  Plane,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-36 pb-24 relative bg-gradient-to-b from-white to-[#f5f5f7] overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-30"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-violet-50 blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-block bg-blue-50 backdrop-blur-lg border border-blue-100 rounded-full px-4 py-1.5 text-blue-600 text-sm font-medium mb-6">
            OUR SERVICES
          </div>
          <h1 className="text-4xl md:text-6xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
            Comprehensive cloud & AI solutions
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 font-light max-w-3xl mx-auto">
            Tailored technology solutions that drive growth, efficiency, and innovation for businesses in Dubai and across the UAE.
          </p>
        </div>
      </section>

      {/* Cloud Solutions */}
      <section id="cloud" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-16">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-sm border border-blue-100/80 p-8 flex justify-center items-center h-80 relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-blue-200/30"></div>
                <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-blue-200/30"></div>
                <Cloud className="w-32 h-32 text-blue-500" />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="inline-block bg-blue-50 backdrop-blur-lg border border-blue-100 rounded-full px-4 py-1.5 text-blue-600 text-sm font-medium mb-6">
                Cloud Solutions
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
                Powerful cloud infrastructure for your business
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Our cloud solutions provide scalable, secure, and cost-effective infrastructure that adapts to your business needs. From storage and computing to advanced AI services, we handle the technology so you can focus on your core business.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-50 rounded-full p-1 mr-3 flex-shrink-0">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-neutral-900">AWS Cloud Storage</h3>
                    <p className="text-sm text-neutral-600">Secure, scalable data storage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 rounded-full p-1 mr-3 flex-shrink-0">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-neutral-900">AI Private Cloud</h3>
                    <p className="text-sm text-neutral-600">Dedicated AI infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 rounded-full p-1 mr-3 flex-shrink-0">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-neutral-900">Cloud Migration</h3>
                    <p className="text-sm text-neutral-600">Seamless transition to cloud</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 rounded-full p-1 mr-3 flex-shrink-0">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-neutral-900">Infrastructure Optimization</h3>
                    <p className="text-sm text-neutral-600">Improve performance & reduce costs</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact">
                <Button className="bg-neutral-900 text-white hover:bg-neutral-800 rounded-full shadow-sm font-normal">
                  Request cloud consultation
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Grid for Cloud Solutions */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200/80 p-8 hover:shadow-md hover:border-neutral-300/80 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-6">
                <Server className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">Cloud Hosting</h3>
              <p className="text-neutral-600 text-sm">
                Fast, reliable hosting for applications and websites with automatic scaling to handle traffic spikes.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200/80 p-8 hover:shadow-md hover:border-neutral-300/80 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-6">
                <Database className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">Database Management</h3>
              <p className="text-neutral-600 text-sm">
                Fully managed database services that are secure, reliable, and optimized for performance.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200/80 p-8 hover:shadow-md hover:border-neutral-300/80 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-6">
                <Upload className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">Backup & Recovery</h3>
              <p className="text-neutral-600 text-sm">
                Comprehensive backup solutions with quick recovery options to minimize downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* E-Commerce Solutions */}
      <section id="ecommerce" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 pl-0 md:pl-16">
              <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-2xl shadow-sm border border-violet-100/80 p-8 flex justify-center items-center h-80 relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-violet-200/30"></div>
                <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-violet-200/30"></div>
                <ShoppingCart className="w-32 h-32 text-violet-500" />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="inline-block bg-violet-50 backdrop-blur-lg border border-violet-100 rounded-full px-4 py-1.5 text-violet-600 text-sm font-medium mb-6">
                E-Commerce Solutions
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
                Transform your online retail experience
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Our e-commerce solutions help businesses create compelling online stores, optimize the customer journey, and implement AI-driven strategies to boost sales and customer loyalty.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-violet-50 rounded-full p-1 mr-3 flex-shrink-0">
                    <Check className="h-5 w-5 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-neutral-900">Shopify Setup & Migration</h3>
                    <p className="text-sm text-neutral-600">Expert platform implementation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-violet-50 rounded-full p-1 mr-3 flex-shrink-0">
                    <Check className="h-5 w-5 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-neutral-900">AI-driven Marketing</h3>
                    <p className="text-sm text-neutral-600">Smart targeting & personalization</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-violet-50 rounded-full p-1 mr-3 flex-shrink-0">
                    <Check className="h-5 w-5 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-neutral-900">Platform Integration</h3>
                    <p className="text-sm text-neutral-600">Seamless API connections</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-violet-50 rounded-full p-1 mr-3 flex-shrink-0">
                    <Check className="h-5 w-5 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-neutral-900">Conversion Optimization</h3>
                    <p className="text-sm text-neutral-600">Turn visitors into customers</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact">
                <Button className="bg-neutral-900 text-white hover:bg-neutral-800 rounded-full shadow-sm font-normal">
                  Boost your e-commerce business
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Grid for E-Commerce */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200/80 p-8 hover:shadow-md hover:border-neutral-300/80 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-50 text-violet-600 mb-6">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">Custom Store Development</h3>
              <p className="text-neutral-600 text-sm">
                Tailored e-commerce stores designed to reflect your brand identity and optimize the shopping experience.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200/80 p-8 hover:shadow-md hover:border-neutral-300/80 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-50 text-violet-600 mb-6">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">Multichannel Selling</h3>
              <p className="text-neutral-600 text-sm">
                Integrate your store with marketplaces like Amazon, eBay, and social media platforms to reach more customers.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200/80 p-8 hover:shadow-md hover:border-neutral-300/80 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-50 text-violet-600 mb-6">
                <CreditCard className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">Payment Processing</h3>
              <p className="text-neutral-600 text-sm">
                Secure, reliable payment solutions with multiple options to improve conversion rates and customer trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing */}
      <section id="marketing" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-16">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl shadow-sm border border-amber-100/80 p-8 flex justify-center items-center h-80 relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-amber-200/30"></div>
                <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-amber-200/30"></div>
                <ChartBarStacked className="w-32 h-32 text-amber-500" />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="inline-block bg-amber-50 backdrop-blur-lg border border-amber-100 rounded-full px-4 py-1.5 text-amber-600 text-sm font-medium mb-6">
                Digital Marketing
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
                Data-driven marketing strategies
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Our digital marketing services leverage AI and analytics to create targeted campaigns that drive traffic, generate leads, and increase conversions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-amber-50 rounded-full p-1 mr-3 flex-shrink-0">
                    <Check className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-neutral-900">AI Analytics</h3>
                    <p className="text-sm text-neutral-600">Data-driven insights & reporting</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-50 rounded-full p-1 mr-3 flex-shrink-0">
                    <Check className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-neutral-900">Multilingual AI Chatbots</h3>
                    <p className="text-sm text-neutral-600">24/7 automated customer support</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-50 rounded-full p-1 mr-3 flex-shrink-0">
                    <Check className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-neutral-900">SEO Optimization</h3>
                    <p className="text-sm text-neutral-600">Improve search visibility</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-50 rounded-full p-1 mr-3 flex-shrink-0">
                    <Check className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-neutral-900">Conversion Rate Optimization</h3>
                    <p className="text-sm text-neutral-600">Maximize marketing ROI</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact">
                <Button className="bg-neutral-900 text-white hover:bg-neutral-800 rounded-full shadow-sm font-normal">
                  Enhance your marketing strategy
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Grid for Digital Marketing */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200/80 p-8 hover:shadow-md hover:border-neutral-300/80 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 text-amber-600 mb-6">
                <ChartPie className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">Analytics & Reporting</h3>
              <p className="text-neutral-600 text-sm">
                Comprehensive analytics that track performance and provide actionable insights to improve your marketing efforts.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200/80 p-8 hover:shadow-md hover:border-neutral-300/80 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 text-amber-600 mb-6">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">AI Chatbot Development</h3>
              <p className="text-neutral-600 text-sm">
                Custom AI chatbots that engage visitors, answer questions, and generate leads 24/7.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200/80 p-8 hover:shadow-md hover:border-neutral-300/80 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 text-amber-600 mb-6">
                <ChartBar className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">PPC & Social Campaigns</h3>
              <p className="text-neutral-600 text-sm">
                Strategic paid advertising campaigns across search engines and social media platforms to drive targeted traffic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity Services */}
      <section id="security" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 pl-0 md:pl-16">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl shadow-sm border border-emerald-100/80 p-8 flex justify-center items-center h-80 relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-emerald-200/30"></div>
                <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-emerald-200/30"></div>
                <ShieldCheck className="w-32 h-32 text-emerald-500" />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="inline-block bg-emerald-50 backdrop-blur-lg border border-emerald-100 rounded-full px-4 py-1.5 text-emerald-600 text-sm font-medium mb-6">
                Cybersecurity Services
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
                Protect your business against threats
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Our cybersecurity services protect your business from evolving digital threats. We implement robust security measures to safeguard your data, systems, and reputation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-emerald-50 rounded-full p-1 mr-3 flex-shrink-0">
                    <Check className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-neutral-900">Network Security</h3>
                    <p className="text-sm text-neutral-600">Protect your digital infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-50 rounded-full p-1 mr-3 flex-shrink-0">
                    <Check className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-neutral-900">Data Protection</h3>
                    <p className="text-sm text-neutral-600">Secure sensitive information</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-50 rounded-full p-1 mr-3 flex-shrink-0">
                    <Check className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-neutral-900">Threat Detection</h3>
                    <p className="text-sm text-neutral-600">Early identification of risks</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-50 rounded-full p-1 mr-3 flex-shrink-0">
                    <Check className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-neutral-900">Response Planning</h3>
                    <p className="text-sm text-neutral-600">Swift action against breaches</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact">
                <Button className="bg-neutral-900 text-white hover:bg-neutral-800 rounded-full shadow-sm font-normal">
                  Strengthen your security
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Grid for Cybersecurity */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200/80 p-8 hover:shadow-md hover:border-neutral-300/80 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mb-6">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">Security Audits</h3>
              <p className="text-neutral-600 text-sm">
                Comprehensive assessments to identify vulnerabilities in your systems and processes.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200/80 p-8 hover:shadow-md hover:border-neutral-300/80 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mb-6">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">Encryption Solutions</h3>
              <p className="text-neutral-600 text-sm">
                Advanced encryption to protect sensitive data at rest and in transit.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200/80 p-8 hover:shadow-md hover:border-neutral-300/80 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 mb-6">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">24/7 Monitoring</h3>
              <p className="text-neutral-600 text-sm">
                Continuous security monitoring to detect and respond to threats in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-b from-white to-neutral-50 rounded-2xl shadow-sm border border-neutral-200/80 p-8 md:p-12 relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-violet-50 blur-3xl opacity-30"></div>
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-blue-50 blur-3xl opacity-30"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-block bg-violet-50 backdrop-blur-lg border border-violet-100 rounded-full px-4 py-1.5 text-violet-600 text-sm font-medium mb-6">
                GET STARTED TODAY
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
                Ready to get started?
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our services can help your business grow, innovate, and stay secure in the digital landscape.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800 rounded-full shadow-sm font-normal">
                  Schedule a consultation
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-specific Solutions */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-50 backdrop-blur-lg border border-blue-100 rounded-full px-4 py-1.5 text-blue-600 text-sm font-medium mb-6">
              INDUSTRY SOLUTIONS
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
              Specialized solutions by industry
            </h2>
            <p className="text-lg text-neutral-600">
              Our deep industry expertise allows us to deliver customized solutions that address the unique challenges and opportunities in your sector.
            </p>
          </div>

          {/* Real Estate */}
          <div id="real-estate" className="py-10 border-b border-neutral-100">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0 pr-0 md:pr-12">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-sm border border-blue-100/80 p-8 flex justify-center items-center aspect-square relative overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-blue-200/30"></div>
                  <div className="absolute -left-8 -bottom-8 w-24 h-24 rounded-full bg-blue-200/30"></div>
                  <Building2 className="w-24 h-24 text-blue-500" />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="inline-block bg-blue-50 backdrop-blur-lg border border-blue-100 rounded-full px-4 py-1.5 text-blue-600 text-sm font-medium mb-4">
                  Real Estate
                </div>
                <h3 className="text-2xl font-medium text-neutral-900 mb-4">Real Estate Solutions</h3>
                <p className="text-neutral-600 mb-6">
                  Empower your real estate business with scalable hosting for property listings, virtual tours, and AI-powered lead capture systems that work around the clock.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-blue-50 rounded-full p-1 mr-3 flex-shrink-0">
                      <Check className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-neutral-900">99.9%+ uptime for property listings</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-50 rounded-full p-1 mr-3 flex-shrink-0">
                      <Check className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-neutral-900">AI lead generation and qualification</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-50 rounded-full p-1 mr-3 flex-shrink-0">
                      <Check className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-neutral-900">Virtual tour hosting solutions</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-50 rounded-full p-1 mr-3 flex-shrink-0">
                      <Check className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-neutral-900">Automated reporting systems</h4>
                    </div>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-full border border-transparent hover:border-blue-200 shadow-sm font-normal">
                    Learn more about real estate solutions
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Hospitality */}
          <div id="hospitality" className="py-10 border-b border-neutral-100">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3 mb-8 md:mb-0 pl-0 md:pl-12">
                <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-2xl shadow-sm border border-violet-100/80 p-8 flex justify-center items-center aspect-square relative overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-violet-200/30"></div>
                  <div className="absolute -left-8 -bottom-8 w-24 h-24 rounded-full bg-violet-200/30"></div>
                  <Hotel className="w-24 h-24 text-violet-500" />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="inline-block bg-violet-50 backdrop-blur-lg border border-violet-100 rounded-full px-4 py-1.5 text-violet-600 text-sm font-medium mb-4">
                  Hospitality
                </div>
                <h3 className="text-2xl font-medium text-neutral-900 mb-4">Hospitality Solutions</h3>
                <p className="text-neutral-600 mb-6">
                  Enhance guest experiences and streamline operations with reliable booking engines, property management systems, and AI chatbots for 24/7 guest service.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-violet-50 rounded-full p-1 mr-3 flex-shrink-0">
                      <Check className="h-5 w-5 text-violet-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-neutral-900">Reliable hotel booking systems</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-violet-50 rounded-full p-1 mr-3 flex-shrink-0">
                      <Check className="h-5 w-5 text-violet-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-neutral-900">WhatsApp chatbots for guest services</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-violet-50 rounded-full p-1 mr-3 flex-shrink-0">
                      <Check className="h-5 w-5 text-violet-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-neutral-900">PMS integration and hosting</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-violet-50 rounded-full p-1 mr-3 flex-shrink-0">
                      <Check className="h-5 w-5 text-violet-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-neutral-900">Automated guest communications</h4>
                    </div>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="text-violet-600 bg-violet-50 hover:bg-violet-100 rounded-full border border-transparent hover:border-violet-200 shadow-sm font-normal">
                    Discover hospitality solutions
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Food & Beverage */}
          <div id="food-beverage" className="py-10 border-b border-neutral-100">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0 pr-0 md:pr-12">
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl shadow-sm border border-amber-100/80 p-8 flex justify-center items-center aspect-square relative overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-amber-200/30"></div>
                  <div className="absolute -left-8 -bottom-8 w-24 h-24 rounded-full bg-amber-200/30"></div>
                  <UtensilsCrossed className="w-24 h-24 text-amber-500" />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="inline-block bg-amber-50 backdrop-blur-lg border border-amber-100 rounded-full px-4 py-1.5 text-amber-600 text-sm font-medium mb-4">
                  Food & Beverage
                </div>
                <h3 className="text-2xl font-medium text-neutral-900 mb-4">Food & Beverage Solutions</h3>
                <p className="text-neutral-600 mb-6">
                  Serve your customers better with robust online ordering systems, inventory management automation, and AI-driven customer engagement tools.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-amber-50 rounded-full p-1 mr-3 flex-shrink-0">
                      <Check className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-neutral-900">Online ordering systems</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-amber-50 rounded-full p-1 mr-3 flex-shrink-0">
                      <Check className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-neutral-900">Inventory level automation</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-amber-50 rounded-full p-1 mr-3 flex-shrink-0">
                      <Check className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-neutral-900">WhatsApp ordering bots</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-amber-50 rounded-full p-1 mr-3 flex-shrink-0">
                      <Check className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-neutral-900">Kitchen management systems</h4>
                    </div>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="text-amber-600 bg-amber-50 hover:bg-amber-100 rounded-full border border-transparent hover:border-amber-200 shadow-sm font-normal">
                    Explore F&B solutions
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* E-commerce */}
          <div id="e-commerce" className="py-10 border-b border-neutral-100">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3 mb-8 md:mb-0 pl-0 md:pl-12">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl shadow-sm border border-emerald-100/80 p-8 flex justify-center items-center aspect-square relative overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-emerald-200/30"></div>
                  <div className="absolute -left-8 -bottom-8 w-24 h-24 rounded-full bg-emerald-200/30"></div>
                  <ShoppingBag className="w-24 h-24 text-emerald-500" />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="inline-block bg-emerald-50 backdrop-blur-lg border border-emerald-100 rounded-full px-4 py-1.5 text-emerald-600 text-sm font-medium mb-4">
                  E-commerce
                </div>
                <h3 className="text-2xl font-medium text-neutral-900 mb-4">E-commerce Solutions</h3>
                <p className="text-neutral-600 mb-6">
                  Build your online retail presence on rock-solid infrastructure with AI-powered customer support, ensuring performance even during peak sales periods.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-emerald-50 rounded-full p-1 mr-3 flex-shrink-0">
                      <Check className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-neutral-900">High-performance store hosting</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-50 rounded-full p-1 mr-3 flex-shrink-0">
                      <Check className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-neutral-900">AI-powered customer support</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-50 rounded-full p-1 mr-3 flex-shrink-0">
                      <Check className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-neutral-900">Order fulfillment automation</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-50 rounded-full p-1 mr-3 flex-shrink-0">
                      <Check className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-neutral-900">Product recommendation engines</h4>
                    </div>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-full border border-transparent hover:border-emerald-200 shadow-sm font-normal">
                    Talk to an expert
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Industries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
            {/* Car Rental */}
            <div id="car-rental" className="bg-white rounded-xl shadow-sm border border-neutral-200/80 p-6 hover:shadow-md hover:border-neutral-300/80 transition-all duration-300 group">
              <div className="flex items-start">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-50 text-rose-600 mr-5 flex-shrink-0">
                  <Car className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-900 mb-3">Car Rental Solutions</h3>
                  <p className="text-neutral-600 text-sm mb-4">Comprehensive booking systems and fleet management solutions for car rental businesses.</p>
                  <Link href="/contact">
                    <Button variant="ghost" className="text-rose-600 hover:bg-rose-50 p-0 h-auto text-sm group flex items-center">
                      Learn more
                      <ChevronRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Travel Agencies */}
            <div id="travel-agencies" className="bg-white rounded-xl shadow-sm border border-neutral-200/80 p-6 hover:shadow-md hover:border-neutral-300/80 transition-all duration-300 group">
              <div className="flex items-start">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-50 text-cyan-600 mr-5 flex-shrink-0">
                  <Plane className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-900 mb-3">Travel Agency Solutions</h3>
                  <p className="text-neutral-600 text-sm mb-4">Reservation systems and AI travel planning assistants to enhance your travel agency services.</p>
                  <Link href="/contact">
                    <Button variant="ghost" className="text-cyan-600 hover:bg-cyan-50 p-0 h-auto text-sm group flex items-center">
                      Learn more
                      <ChevronRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
