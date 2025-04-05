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
  Plane
} from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#003366] text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white">Our Services</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white">
            Comprehensive cloud and AI solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Cloud Solutions */}
      <section id="cloud" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-12">
              <div className="bg-gradient-to-br from-blue-900 to-blue-600 rounded-lg shadow-xl p-8 flex justify-center items-center h-80">
                <Cloud className="w-32 h-32 text-white opacity-80" />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="inline-block px-4 py-2 rounded-full bg-[#003366] bg-opacity-10 text-[#003366] text-sm font-medium mb-4">
                Cloud Solutions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#003366] mb-6">
                Powerful Cloud Infrastructure for Your Business
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Our cloud solutions provide scalable, secure, and cost-effective infrastructure that adapts to your business needs. From storage and computing to advanced AI services, we handle the technology so you can focus on your core business.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold">AWS Cloud Storage</h3>
                    <p className="text-sm text-gray-600">Secure, scalable data storage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold">AI Private Cloud</h3>
                    <p className="text-sm text-gray-600">Dedicated AI infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold">Cloud Migration</h3>
                    <p className="text-sm text-gray-600">Seamless transition to cloud</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold">Infrastructure Optimization</h3>
                    <p className="text-sm text-gray-600">Improve performance & reduce costs</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact">
                <Button className="bg-[#3480cc] text-white hover:bg-[#3480cc]/90">
                  Request Cloud Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Grid for Cloud Solutions */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 rounded-full bg-[#003366] bg-opacity-10 flex items-center justify-center text-[#003366] mb-4">
                <Server className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#003366] mb-3">Cloud Hosting</h3>
              <p className="text-gray-700 mb-4">
                Fast, reliable hosting for applications and websites with automatic scaling to handle traffic spikes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 rounded-full bg-[#003366] bg-opacity-10 flex items-center justify-center text-[#003366] mb-4">
                <Database className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#003366] mb-3">Database Management</h3>
              <p className="text-gray-700 mb-4">
                Fully managed database services that are secure, reliable, and optimized for performance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 rounded-full bg-[#003366] bg-opacity-10 flex items-center justify-center text-[#003366] mb-4">
                <Upload className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#003366] mb-3">Backup & Recovery</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive backup solutions with quick recovery options to minimize downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* E-Commerce Solutions */}
      <section id="ecommerce" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 pl-0 md:pl-12">
              <div className="bg-gradient-to-br from-green-800 to-green-500 rounded-lg shadow-xl p-8 flex justify-center items-center h-80">
                <ShoppingCart className="w-32 h-32 text-white opacity-80" />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="inline-block px-4 py-2 rounded-full bg-[#2E8B57] bg-opacity-10 text-[#2E8B57] text-sm font-medium mb-4">
                E-Commerce Solutions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#003366] mb-6">
                Transform Your Online Retail Experience
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Our e-commerce solutions help businesses create compelling online stores, optimize the customer journey, and implement AI-driven strategies to boost sales and customer loyalty.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold">Shopify Setup & Migration</h3>
                    <p className="text-sm text-gray-600">Expert platform implementation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold">AI-driven Marketing</h3>
                    <p className="text-sm text-gray-600">Smart targeting & personalization</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold">Platform Integration</h3>
                    <p className="text-sm text-gray-600">Seamless API connections</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold">Conversion Optimization</h3>
                    <p className="text-sm text-gray-600">Turn visitors into customers</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact">
                <Button className="bg-[#3480cc] text-white hover:bg-[#3480cc]/90">
                  Boost Your E-Commerce Business
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Grid for E-Commerce */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 rounded-full bg-[#2E8B57] bg-opacity-10 flex items-center justify-center text-[#2E8B57] mb-4">
                <ShoppingBag className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#003366] mb-3">Custom Store Development</h3>
              <p className="text-gray-700 mb-4">
                Tailored e-commerce stores designed to reflect your brand identity and optimize the shopping experience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 rounded-full bg-[#2E8B57] bg-opacity-10 flex items-center justify-center text-[#2E8B57] mb-4">
                <Globe className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#003366] mb-3">Multichannel Selling</h3>
              <p className="text-gray-700 mb-4">
                Integrate your store with marketplaces like Amazon, eBay, and social media platforms to reach more customers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 rounded-full bg-[#2E8B57] bg-opacity-10 flex items-center justify-center text-[#2E8B57] mb-4">
                <CreditCard className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#003366] mb-3">Payment Processing</h3>
              <p className="text-gray-700 mb-4">
                Secure, reliable payment solutions with multiple options to improve conversion rates and customer trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing */}
      <section id="marketing" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-12">
              <div className="bg-gradient-to-br from-blue-900 to-blue-600 rounded-lg shadow-xl p-8 flex justify-center items-center h-80">
                <ChartBarStacked className="w-32 h-32 text-white opacity-80" />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="inline-block px-4 py-2 rounded-full bg-[#003366] bg-opacity-10 text-[#003366] text-sm font-medium mb-4">
                Digital Marketing
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#003366] mb-6">
                Data-Driven Marketing Strategies
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Our digital marketing services leverage AI and analytics to create targeted campaigns that drive traffic, generate leads, and increase conversions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold">AI Analytics</h3>
                    <p className="text-sm text-gray-600">Data-driven insights & reporting</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold">Multilingual AI Chatbots</h3>
                    <p className="text-sm text-gray-600">24/7 automated customer support</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold">SEO Optimization</h3>
                    <p className="text-sm text-gray-600">Improve search visibility</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold">Conversion Rate Optimization</h3>
                    <p className="text-sm text-gray-600">Maximize marketing ROI</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact">
                <Button className="bg-[#3480cc] text-white hover:bg-[#3480cc]/90">
                  Enhance Your Marketing Strategy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Grid for Digital Marketing */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 rounded-full bg-[#003366] bg-opacity-10 flex items-center justify-center text-[#003366] mb-4">
                <ChartPie className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#003366] mb-3">Analytics & Reporting</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive analytics that track performance and provide actionable insights to improve your marketing efforts.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 rounded-full bg-[#003366] bg-opacity-10 flex items-center justify-center text-[#003366] mb-4">
                <MessageSquare className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#003366] mb-3">AI Chatbot Development</h3>
              <p className="text-gray-700 mb-4">
                Custom AI chatbots that engage visitors, answer questions, and generate leads 24/7.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 rounded-full bg-[#003366] bg-opacity-10 flex items-center justify-center text-[#003366] mb-4">
                <ChartBar className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#003366] mb-3">PPC & Social Campaigns</h3>
              <p className="text-gray-700 mb-4">
                Strategic paid advertising campaigns across search engines and social media platforms to drive targeted traffic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity Services */}
      <section id="security" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 pl-0 md:pl-12">
              <div className="bg-gradient-to-br from-green-800 to-green-500 rounded-lg shadow-xl p-8 flex justify-center items-center h-80">
                <ShieldCheck className="w-32 h-32 text-white opacity-80" />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="inline-block px-4 py-2 rounded-full bg-[#2E8B57] bg-opacity-10 text-[#2E8B57] text-sm font-medium mb-4">
                Cybersecurity Services
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#003366] mb-6">
                Protect Your Business Against Threats
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Our cybersecurity services protect your business from evolving digital threats. We implement robust security measures to safeguard your data, systems, and reputation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold">Network Security</h3>
                    <p className="text-sm text-gray-600">Protect your digital infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold">Data Protection</h3>
                    <p className="text-sm text-gray-600">Secure sensitive information</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold">Threat Detection</h3>
                    <p className="text-sm text-gray-600">Early identification of risks</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold">Response Planning</h3>
                    <p className="text-sm text-gray-600">Swift action against breaches</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact">
                <Button className="bg-[#3480cc] text-white hover:bg-[#3480cc]/90">
                  Strengthen Your Security
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Grid for Cybersecurity */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 rounded-full bg-[#2E8B57] bg-opacity-10 flex items-center justify-center text-[#2E8B57] mb-4">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#003366] mb-3">Security Audits</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive assessments to identify vulnerabilities in your systems and processes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 rounded-full bg-[#2E8B57] bg-opacity-10 flex items-center justify-center text-[#2E8B57] mb-4">
                <Lock className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#003366] mb-3">Encryption Solutions</h3>
              <p className="text-gray-700 mb-4">
                Advanced encryption to protect sensitive data at rest and in transit.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 rounded-full bg-[#2E8B57] bg-opacity-10 flex items-center justify-center text-[#2E8B57] mb-4">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#003366] mb-3">24/7 Monitoring</h3>
              <p className="text-gray-700 mb-4">
                Continuous security monitoring to detect and respond to threats in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#003366] mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Contact us today to discuss how our services can help your business grow, innovate, and stay secure in the digital landscape.
          </p>
          <Link href="/contact">
            <Button className="bg-[#3480cc] text-white font-heading font-semibold px-8 py-3 text-lg hover:bg-[#3480cc]/90 transition-colors duration-300">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Industry-specific Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-4">
              Industry Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#003366] mb-4">
              Specialized Solutions by Industry
            </h2>
            <p className="text-gray-700 mb-0 text-lg">
              Our deep industry expertise allows us to deliver customized solutions that address the unique challenges and opportunities in your sector.
            </p>
          </div>

          {/* Real Estate */}
          <div id="real-estate" className="py-10 border-b border-gray-200">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0 pr-0 md:pr-12">
                <div className="bg-gradient-to-br from-blue-900 to-blue-600 rounded-lg shadow-xl p-8 flex justify-center items-center aspect-square">
                  <Building2 className="w-24 h-24 text-white opacity-80" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-[#003366] mb-4">Real Estate Solutions</h3>
                <p className="text-gray-700 mb-6">
                  Empower your real estate business with scalable hosting for property listings, virtual tours, and AI-powered lead capture systems that work around the clock.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold">99.9%+ uptime for property listings</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold">AI lead generation and qualification</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold">Virtual tour hosting solutions</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold">Automated reporting systems</h4>
                    </div>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="bg-[#3480cc] text-white hover:bg-[#3480cc]/90">
                    Learn More about Real Estate Solutions
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Hospitality */}
          <div id="hospitality" className="py-10 border-b border-gray-200">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3 mb-8 md:mb-0 pl-0 md:pl-12">
                <div className="bg-gradient-to-br from-blue-700 to-blue-400 rounded-lg shadow-xl p-8 flex justify-center items-center aspect-square">
                  <Hotel className="w-24 h-24 text-white opacity-80" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-[#003366] mb-4">Hospitality Solutions</h3>
                <p className="text-gray-700 mb-6">
                  Enhance guest experiences and streamline operations with reliable booking engines, property management systems, and AI chatbots for 24/7 guest service.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold">Reliable hotel booking systems</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold">WhatsApp chatbots for guest services</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold">PMS integration and hosting</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold">Automated guest communications</h4>
                    </div>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="bg-[#3480cc] text-white hover:bg-[#3480cc]/90">
                    Discover Hospitality Solutions
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Food & Beverage */}
          <div id="food-beverage" className="py-10 border-b border-gray-200">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0 pr-0 md:pr-12">
                <div className="bg-gradient-to-br from-green-700 to-green-500 rounded-lg shadow-xl p-8 flex justify-center items-center aspect-square">
                  <UtensilsCrossed className="w-24 h-24 text-white opacity-80" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-[#003366] mb-4">Food & Beverage Solutions</h3>
                <p className="text-gray-700 mb-6">
                  Serve your customers better with robust online ordering systems, inventory management automation, and AI-driven customer engagement tools.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold">Online ordering systems</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold">Inventory level automation</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold">WhatsApp ordering bots</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold">Kitchen management systems</h4>
                    </div>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="bg-[#3480cc] text-white hover:bg-[#3480cc]/90">
                    Explore F&B Solutions
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* E-commerce */}
          <div id="e-commerce" className="py-10 border-b border-gray-200">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3 mb-8 md:mb-0 pl-0 md:pl-12">
                <div className="bg-gradient-to-br from-purple-700 to-purple-500 rounded-lg shadow-xl p-8 flex justify-center items-center aspect-square">
                  <ShoppingBag className="w-24 h-24 text-white opacity-80" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-[#003366] mb-4">E-commerce Solutions</h3>
                <p className="text-gray-700 mb-6">
                  Build your online retail presence on rock-solid infrastructure with AI-powered customer support, ensuring performance even during peak sales periods.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold">High-performance store hosting</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold">AI-powered customer support</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold">Order fulfillment automation</h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-[#2E8B57] mr-2 shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold">Product recommendation engines</h4>
                    </div>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="bg-[#3480cc] text-white hover:bg-[#3480cc]/90">
                    Talk to an Expert
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Industries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
            {/* Car Rental */}
            <div id="car-rental" className="flex items-start p-6 rounded-lg border border-gray-200 bg-gray-50/50 hover:shadow-sm transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#003366] bg-opacity-10 flex items-center justify-center text-[#003366] flex-shrink-0 mr-5">
                <Car className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Car Rental Solutions</h3>
                <p className="text-gray-600 mb-4">Comprehensive booking systems and fleet management solutions for car rental businesses.</p>
                <Link href="/contact">
                  <Button variant="outline" size="sm" className="text-[#003366] border-[#003366]">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Travel Agencies */}
            <div id="travel-agencies" className="flex items-start p-6 rounded-lg border border-gray-200 bg-gray-50/50 hover:shadow-sm transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#003366] bg-opacity-10 flex items-center justify-center text-[#003366] flex-shrink-0 mr-5">
                <Plane className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Travel Agency Solutions</h3>
                <p className="text-gray-600 mb-4">Reservation systems and AI travel planning assistants to enhance your travel agency services.</p>
                <Link href="/contact">
                  <Button variant="outline" size="sm" className="text-[#003366] border-[#003366]">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
