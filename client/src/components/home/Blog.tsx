import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, ExternalLink, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { AnimatedElement } from '@/components/ui/animated-element';

// Import blog post images
import aiCloudImg from '../../assets/blog/ai-cloud.svg';
import aiDataImg from '../../assets/blog/ai-data.svg';
import cybersecurityImg from '../../assets/blog/cybersecurity.svg';
import cloudComputingImg from '../../assets/blog/cloud-computing.svg';

const blogCategories = ['All', 'Cloud Services', 'AI & Automation', 'Local Business', 'Industry Specific'];

const blogPosts = [
  {
    id: 1,
    title: 'Choosing AWS vs GCP vs Azure for Your Dubai Startup',
    category: 'Cloud Services',
    date: 'June 10, 2023',
    readTime: '8 min read',
    description: 'A comprehensive comparison of the top three cloud providers with specific insights for UAE-based startups looking to choose the right platform.',
    href: '/blog/cloud-provider-comparison-uae',
    bgColor: 'bg-primary',
    image: cloudComputingImg
  },
  {
    id: 2,
    title: 'How WhatsApp Chatbots Increase Hotel Bookings in the UAE',
    category: 'Industry Specific',
    date: 'May 22, 2023',
    readTime: '6 min read',
    description: 'Case studies and implementation strategies for hospitality businesses looking to leverage AI chatbots to increase bookings and improve guest experiences.',
    href: '/blog/whatsapp-chatbots-hotel-industry-uae',
    bgColor: 'bg-corporate-accent',
    image: aiCloudImg
  },
  {
    id: 3,
    title: 'Reducing Food Waste in Dubai Restaurants with AI',
    category: 'AI & Automation',
    date: 'May 5, 2023',
    readTime: '5 min read',
    description: 'How F&B businesses in Dubai are using AI-powered inventory management and demand prediction to minimize waste and increase profitability.',
    href: '/blog/ai-food-waste-reduction-dubai',
    bgColor: 'bg-corporate-dark',
    image: aiDataImg
  }
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section id="blog" className="section bg-neutral-50 border-t border-neutral-200">
      <div className="container">
        <AnimatedElement animation="fade" className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-4">
            Insights & Resources
          </div>
          <h2 className="heading-lg mb-4">
            UAE Business Technology Insights
          </h2>
          <p className="text-body-lg text-neutral-600 mx-auto">
            Stay updated with the latest technology trends, best practices, and success stories specific to the UAE and MENA region business landscape.
          </p>
        </AnimatedElement>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {blogCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              className={activeCategory === category 
                ? 'bg-primary text-white transition-all' 
                : 'bg-white text-neutral-700 hover:bg-neutral-50 transition-all'}
              onClick={() => setActiveCategory(category)}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <AnimatedElement 
              key={post.id} 
              animation="slide" 
              delay={index === 0 ? '100' : index === 1 ? '200' : '300'}
            >
              <article className="card card-hover h-full flex flex-col">
                {/* Post header image */}
                <div className={`w-full h-48 ${post.bgColor} flex items-center justify-center overflow-hidden`}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Post content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Category tag */}
                  <div className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full self-start mb-4">
                    {post.category}
                  </div>
                  
                  {/* Post title */}
                  <h3 className="heading-sm mb-2">
                    <span 
                      className="cursor-pointer hover:text-primary transition-colors"
                      onClick={() => window.location.href = post.href}
                    >
                      {post.title}
                    </span>
                  </h3>
                  
                  {/* Post meta */}
                  <div className="flex items-center text-neutral-500 text-sm mb-4">
                    <Calendar className="h-3.5 w-3.5 mr-1.5" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="h-3.5 w-3.5 mr-1.5" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  {/* Post excerpt */}
                  <p className="text-neutral-600 text-sm mb-5 flex-grow">
                    {post.description}
                  </p>
                  
                  {/* Read more link */}
                  <div className="mt-auto pt-2">
                    <span 
                      className="inline-flex items-center text-primary font-medium cursor-pointer hover:underline group"
                      onClick={() => window.location.href = post.href}
                    >
                      <BookOpen className="h-4 w-4 mr-1.5" />
                      Read article
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            </AnimatedElement>
          ))}
        </div>
        
        {/* View more posts button */}
        <div className="mt-12 text-center">
          <Link href="/blog">
            <Button variant="outline" className="group">
              More Articles
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        {/* Newsletter signup */}
        <AnimatedElement animation="fade" className="mt-16 bg-neutral-100 rounded-lg p-8 md:p-10 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <ExternalLink className="h-5 w-5" />
            </div>
            <h3 className="heading-md mb-2">Stay Updated on UAE Tech Trends</h3>
            <p className="text-neutral-600 max-w-lg mx-auto">
              Subscribe to our newsletter for the latest insights on cloud technology, AI innovations, and digital transformation in the UAE.
            </p>
          </div>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              required
            />
            <Button type="submit" className="whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Blog;
