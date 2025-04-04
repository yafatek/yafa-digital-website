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
  Eye 
} from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#003366] text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Our Services</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
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
                <Button className="bg-[#003366] text-white hover:bg-opacity-90">
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
                <Button className="bg-[#2E8B57] text-white hover:bg-opacity-90">
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
                <Button className="bg-[#003366] text-white hover:bg-opacity-90">
                  Enhance Your Digital Presence
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
                <Button className="bg-[#2E8B57] text-white hover:bg-opacity-90">
                  Secure Your Business Today
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
            <Button className="bg-[#2E8B57] text-white font-heading font-semibold px-8 py-3 text-lg hover:bg-opacity-90 transition-colors duration-300">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
