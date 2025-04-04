import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { 
  Check, Users, Globe, Headphones, Award, 
  Target, Clock, Zap, Shield, Lightbulb 
} from 'lucide-react';
import { AnimatedElement } from "@/components/ui/animated-element";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <section className="hero-section">
        <div className="hero-pattern"></div>
        <div className="container py-20 md:py-28">
          <AnimatedElement animation="fade" delay="none">
            <h1 className="heading-xl max-w-3xl mx-auto text-center mb-6">
              About Yafa Cloud Services
            </h1>
          </AnimatedElement>
          <AnimatedElement animation="fade" delay="100">
            <p className="text-body-lg max-w-2xl mx-auto text-center mb-8">
              We're a team of cloud and AI experts dedicated to helping businesses transform their digital infrastructure.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Who we are section */}
      <section className="section bg-neutral-50/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement>
              <div>
                <h2 className="heading-lg mb-6">Who We Are</h2>
                <div className="space-y-6">
                  <p className="text-body">
                    Founded in 2018, Yafa Cloud Services began with a vision to bridge the gap between advanced cloud technology and businesses of all sizes. Our founders recognized that many organizations were struggling to harness the full potential of cloud computing and AI.
                  </p>
                  <p className="text-body">
                    What started as a small consultancy quickly grew into a comprehensive cloud services provider, as we expanded our expertise to include e-commerce solutions, digital marketing, and enterprise security services.
                  </p>
                  <p className="text-body">
                    Today, we're proud to serve clients across various industries, from innovative startups to established enterprises. Our commitment to excellence and customer satisfaction remains at the core of everything we do.
                  </p>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay="100">
              <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="feature-icon mx-auto mb-6 w-20 h-20">
                      <Globe className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-medium text-primary/80 mb-2">Global Reach</h3>
                    <p className="text-sm text-neutral-600 max-w-[220px] mx-auto">
                      Serving clients across 4 continents with cloud solutions
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Mission section */}
      <section className="section-tight">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <AnimatedElement>
              <h2 className="heading-lg mb-6">Our Mission</h2>
            </AnimatedElement>
            <AnimatedElement delay="100">
              <p className="text-body-lg">
                To empower businesses with innovative cloud and AI solutions that drive growth, efficiency, and security in an increasingly digital world.
              </p>
            </AnimatedElement>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedElement delay="100">
              <div className="card h-full p-6">
                <div className="feature-icon mb-6">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="heading-sm mb-3">Transform</h3>
                <p className="text-body-sm">
                  We help businesses transform their operations through cloud-native approaches that enable agility and scalability.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement delay="200">
              <div className="card h-full p-6">
                <div className="feature-icon mb-6">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="heading-sm mb-3">Innovate</h3>
                <p className="text-body-sm">
                  We drive innovation through AI and machine learning solutions that create competitive advantages.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement delay="300">
              <div className="card h-full p-6">
                <div className="feature-icon mb-6">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="heading-sm mb-3">Protect</h3>
                <p className="text-body-sm">
                  We secure digital assets with comprehensive cybersecurity strategies and solutions.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="section bg-neutral-50/50">
        <div className="container">
          <div className="text-center mb-16">
            <AnimatedElement>
              <h2 className="section-title">Our Core Values</h2>
            </AnimatedElement>
            <AnimatedElement delay="100">
              <p className="section-subtitle">
                These principles guide our work and define our company culture
              </p>
            </AnimatedElement>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            <AnimatedElement>
              <div className="highlight-item">
                <Award className="highlight-icon" />
                <div>
                  <h3 className="heading-xs mb-2">Excellence</h3>
                  <p className="text-neutral-700 text-sm">
                    We are committed to delivering the highest quality solutions and services, constantly pushing the boundaries of what's possible.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement delay="100">
              <div className="highlight-item">
                <Target className="highlight-icon" />
                <div>
                  <h3 className="heading-xs mb-2">Innovation</h3>
                  <p className="text-neutral-700 text-sm">
                    We embrace change and continually seek new and better ways to solve problems and create value for our clients.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement delay="200">
              <div className="highlight-item">
                <Users className="highlight-icon" />
                <div>
                  <h3 className="heading-xs mb-2">Collaboration</h3>
                  <p className="text-neutral-700 text-sm">
                    We believe in the power of teamwork, both within our organization and in partnership with our clients.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement delay="150">
              <div className="highlight-item">
                <Clock className="highlight-icon" />
                <div>
                  <h3 className="heading-xs mb-2">Reliability</h3>
                  <p className="text-neutral-700 text-sm">
                    We deliver on our promises, ensuring clients can depend on us for consistent, high-quality service.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement delay="250">
              <div className="highlight-item">
                <Globe className="highlight-icon" />
                <div>
                  <h3 className="heading-xs mb-2">Global Perspective</h3>
                  <p className="text-neutral-700 text-sm">
                    We embrace diversity and bring a global mindset to solving our clients' most complex challenges.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement delay="350">
              <div className="highlight-item">
                <Headphones className="highlight-icon" />
                <div>
                  <h3 className="heading-xs mb-2">Client Focus</h3>
                  <p className="text-neutral-700 text-sm">
                    Our clients' success is our success. We're dedicated to understanding their needs and exceeding their expectations.
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <AnimatedElement>
              <h2 className="section-title">Our Leadership Team</h2>
            </AnimatedElement>
            <AnimatedElement delay="100">
              <p className="section-subtitle">
                Meet the experienced professionals leading Yafa Cloud Services
              </p>
            </AnimatedElement>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'David Wilson', title: 'CEO & Founder' },
              { name: 'Sarah Ahmad', title: 'Chief Technology Officer' },
              { name: 'Michael Lee', title: 'Chief Cloud Architect' },
              { name: 'Rebecca Johnson', title: 'Head of AI Development' },
              { name: 'Carlos Rodriguez', title: 'Cybersecurity Director' },
              { name: 'Jennifer Wang', title: 'Client Success Manager' }
            ].map((member, index) => (
              <AnimatedElement key={index} delay={(index * 100).toString() as any}>
                <div className="card overflow-hidden">
                  <div className="bg-neutral-100 aspect-[4/3] flex items-center justify-center">
                    <svg className="w-20 h-20 text-primary/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="heading-sm mb-1">{member.name}</h3>
                    <p className="text-neutral-600 text-sm">{member.title}</p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Awards section */}
      <section className="section-tight bg-neutral-50/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="heading-md mb-6">Certifications & Partnerships</h2>
            </AnimatedElement>
            <AnimatedElement delay="100">
              <p className="text-body mb-12">
                We maintain the highest level of expertise through industry certifications and strategic partnerships.
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay="200">
              <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                {["AWS Partner", "Microsoft Gold", "Google Cloud", "IBM Partner"].map((partner, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-sm min-w-[100px] text-neutral-700 text-sm">
                    {partner}
                  </div>
                ))}
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="cta-section">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="heading-md mb-6">Ready to Transform Your Business?</h2>
            </AnimatedElement>
            <AnimatedElement delay="100">
              <p className="text-body-lg mb-8">
                Let's discuss how our cloud and AI solutions can help you achieve your goals.
              </p>
            </AnimatedElement>
            <AnimatedElement delay="200">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg">Contact Us Today</Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg">Explore Our Services</Button>
                </Link>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
