import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, ExternalLink, BookOpen, ChevronRight } from 'lucide-react';
import { useState } from 'react';

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
    slug: 'cloud-provider-comparison-uae',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    image: cloudComputingImg
  },
  {
    id: 2,
    title: 'How WhatsApp Chatbots Increase Hotel Bookings in the UAE',
    category: 'Industry Specific',
    date: 'May 22, 2023',
    readTime: '6 min read',
    description: 'Case studies and implementation strategies for hospitality businesses looking to leverage AI chatbots to increase bookings and improve guest experiences.',
    slug: 'whatsapp-chatbots-hotel-industry-uae',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-600',
    image: aiCloudImg
  },
  {
    id: 3,
    title: 'Reducing Food Waste in Dubai Restaurants with AI',
    category: 'AI & Automation',
    date: 'May 5, 2023',
    readTime: '5 min read',
    description: 'How F&B businesses in Dubai are using AI-powered inventory management and demand prediction to minimize waste and increase profitability.',
    slug: 'ai-food-waste-reduction-dubai',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600',
    image: aiDataImg
  }
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section id="blog" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f5f5f7]/50 to-[#f5f5f7]/80"></div>
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-violet-50 backdrop-blur-lg border border-violet-100 rounded-full px-4 py-1.5 text-violet-600 text-sm font-medium mb-6">
            Insights & Resources
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
            UAE business technology insights
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 font-light">
            Stay updated with the latest technology trends and success stories specific to the Dubai business landscape.
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {blogCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              className={activeCategory === category 
                ? 'bg-neutral-900 text-white rounded-full shadow-sm transition-all' 
                : 'bg-white text-neutral-700 hover:bg-neutral-50 rounded-full transition-all border-neutral-200 hover:border-neutral-300'}
              onClick={() => setActiveCategory(category)}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl shadow-sm border border-neutral-200/80 overflow-hidden hover:shadow-md hover:border-neutral-300/80 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Post header image */}
              <div className={`w-full h-48 ${post.bgColor} flex items-center justify-center overflow-hidden relative`}>
                {/* Decorative elements */}
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-white/10 opacity-30"></div>
                <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-white/10 opacity-20"></div>
                
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-36 h-36 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Post content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                {/* Category tag */}
                <div className={`${post.bgColor} ${post.textColor} text-xs font-medium px-3 py-1 rounded-full self-start mb-4`}>
                  {post.category}
                </div>
                
                {/* Post title */}
                <h3 className="text-xl font-medium text-neutral-900 mb-3 group-hover:text-neutral-800 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="cursor-pointer">
                      {post.title}
                    </span>
                  </Link>
                </h3>
                
                {/* Post meta */}
                <div className="flex items-center text-neutral-500 text-sm mb-4">
                  <Calendar className="h-3.5 w-3.5 mr-1.5" />
                  <span className="mr-4">{post.date}</span>
                  <Clock className="h-3.5 w-3.5 mr-1.5" />
                  <span>{post.readTime}</span>
                </div>
                
                {/* Post excerpt */}
                <p className="text-neutral-600 mb-6 flex-grow">
                  {post.description}
                </p>
                
                {/* Read more link */}
                <div className="mt-auto pt-2">
                  <Link href={`/blog/${post.slug}`}>
                    <Button 
                      variant="ghost" 
                      className={`${post.textColor} hover:bg-${post.bgColor.slice(3)} px-4 py-2 rounded-full border border-transparent hover:border-${post.textColor.slice(5)}/50 group text-sm`}
                    >
                      <BookOpen className="h-4 w-4 mr-1.5" />
                      Read article
                      <ChevronRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* View more posts button */}
        <div className="mt-12 text-center">
          <Link href="/blog">
            <Button variant="outline" className="rounded-full border-neutral-200 hover:border-neutral-300 bg-white text-neutral-800 group">
              More Articles
              <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Link>
        </div>
        
        {/* Newsletter signup */}
        <div className="mt-20 bg-gradient-to-b from-white to-neutral-50 rounded-2xl shadow-sm border border-neutral-200/80 p-8 md:p-12 relative overflow-hidden max-w-4xl mx-auto">
          <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-violet-50 blur-3xl opacity-30"></div>
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-blue-50 blur-3xl opacity-30"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-50 text-violet-500 mb-4">
                <ExternalLink className="h-5 w-5" />
              </div>
              <h3 className="text-2xl md:text-3xl font-medium text-neutral-900 mb-3">Stay updated on UAE tech trends</h3>
              <p className="text-neutral-600 max-w-lg mx-auto">
                Subscribe to our newsletter for the latest insights on cloud technology, AI innovations, and digital transformation in the UAE.
              </p>
            </div>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-full border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 bg-white"
                required
              />
              <Button type="submit" className="bg-violet-600 hover:bg-violet-700 text-white rounded-full shadow-sm whitespace-nowrap">
                Subscribe
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
