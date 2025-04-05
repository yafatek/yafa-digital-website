import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ArrowRight, Calendar, Clock, ChevronRight, Search, Filter, BookOpen, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { BlogPost } from '@/lib/types';
import { useRoute, Link } from 'wouter';

// Import blog post images
import aiCloudImg from '../assets/blog/ai-cloud.svg';
import aiDataImg from '../assets/blog/ai-data.svg';
import cybersecurityImg from '../assets/blog/cybersecurity.svg';
import cloudComputingImg from '../assets/blog/cloud-computing.svg';

const categories = ['All', 'Cloud Computing', 'AI & Automation', 'Cybersecurity', 'Local Business', 'Industry Specific'];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [, params] = useRoute('/blog/:slug');
  const slug = params?.slug;
  
  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts'],
  });

  // Dummy data to use when API hasn't loaded
  const dummyBlogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Choosing AWS vs GCP vs Azure for Your Dubai Startup',
      slug: 'cloud-provider-comparison-uae',
      category: 'Cloud Computing',
      date: 'June 10, 2023',
      summary: 'A comprehensive comparison of the top three cloud providers with specific insights for UAE-based startups looking to choose the right platform.',
      content: '',
      author: 'Feras Alawadi',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'How WhatsApp Chatbots Increase Hotel Bookings in the UAE',
      slug: 'whatsapp-chatbots-hotel-industry-uae',
      category: 'AI & Automation',
      date: 'May 22, 2023',
      summary: 'Case studies and implementation strategies for hospitality businesses looking to leverage AI chatbots to increase bookings and improve guest experiences.',
      content: '',
      author: 'Feras Alawadi',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Reducing Food Waste in Dubai Restaurants with AI',
      slug: 'ai-food-waste-reduction-dubai',
      category: 'AI & Automation',
      date: 'May 5, 2023',
      summary: 'How F&B businesses in Dubai are using AI-powered inventory management and demand prediction to minimize waste and increase profitability.',
      content: '',
      author: 'Feras Alawadi',
      readTime: '5 min read'
    },
    {
      id: 4,
      title: 'Cybersecurity Best Practices for UAE Businesses',
      slug: 'cybersecurity-best-practices-uae',
      category: 'Cybersecurity',
      date: 'April 18, 2023',
      summary: 'Essential security measures and compliance requirements for Dubai-based businesses to protect their digital assets and customer data.',
      content: '',
      author: 'Feras Alawadi',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Edge Computing Applications in Dubai\'s Retail Sector',
      slug: 'edge-computing-retail-dubai',
      category: 'Cloud Computing',
      date: 'April 2, 2023',
      summary: 'How edge computing is transforming the retail experience in Dubai malls and stores through real-time analytics and improved customer experiences.',
      content: '',
      author: 'Feras Alawadi',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Scaling Your E-commerce Platform with Kubernetes',
      slug: 'kubernetes-ecommerce-scaling',
      category: 'Cloud Computing',
      date: 'March 15, 2023',
      summary: 'A technical guide to scaling e-commerce applications in the UAE market using Kubernetes orchestration for reliable performance during peak shopping seasons.',
      content: '',
      author: 'Feras Alawadi',
      readTime: '9 min read'
    }
  ];

  const postsToDisplay = blogPosts || dummyBlogPosts;
  
  // Find the current post if we're on a single post page
  const currentPost = slug ? postsToDisplay.find(post => post.slug === slug) : null;

  const filteredPosts = postsToDisplay.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Function to get category styling
  const getCategoryStyle = (category: string) => {
    switch(category) {
      case 'AI & Automation':
        return { bg: 'bg-violet-50', text: 'text-violet-600' };
      case 'Cybersecurity':
        return { bg: 'bg-amber-50', text: 'text-amber-600' };
      case 'Local Business':
        return { bg: 'bg-emerald-50', text: 'text-emerald-600' };
      case 'Industry Specific':
        return { bg: 'bg-rose-50', text: 'text-rose-600' };
      case 'Cloud Computing':
      default:
        return { bg: 'bg-blue-50', text: 'text-blue-600' };
    }
  };

  // Function to get the appropriate image for each category
  const getCategoryImage = (category: string) => {
    switch(category) {
      case 'AI & Automation':
        return aiCloudImg;
      case 'Cybersecurity':
        return cybersecurityImg;
      case 'Cloud Computing':
        return cloudComputingImg;
      case 'Local Business':
      case 'Industry Specific':
      default:
        return aiDataImg;
    }
  };

  // If we're viewing a single blog post
  if (currentPost) {
    const style = getCategoryStyle(currentPost.category);
    
    return (
      <div className="min-h-screen bg-[#f5f5f7]">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-[#f5f5f7] relative pt-36 pb-20 overflow-hidden">
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-30"></div>
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-violet-50 blur-3xl opacity-30"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <Link href="/blog">
              <Button variant="ghost" className="mb-8 -ml-4 text-neutral-600 hover:text-neutral-900">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to all articles
              </Button>
            </Link>
            
            <div className={`${style.bg} ${style.text} text-xs font-medium px-3 py-1 rounded-full inline-block mb-6`}>
              {currentPost.category}
            </div>
            
            <h1 className="text-3xl md:text-5xl font-medium text-neutral-900 tracking-tight leading-tight mb-6 max-w-4xl">
              {currentPost.title}
            </h1>
            
            <div className="flex items-center text-neutral-500 text-sm mb-8">
              <div className="mr-6 flex items-center">
                <Calendar className="h-4 w-4 mr-1.5" />
                <span>{currentPost.date}</span>
              </div>
              <div className="mr-6 flex items-center">
                <Clock className="h-4 w-4 mr-1.5" />
                <span>{currentPost.readTime}</span>
              </div>
              <div className="flex items-center">
                <span>By {currentPost.author}</span>
              </div>
            </div>
            
            <div className={`w-full h-64 md:h-96 ${style.bg} rounded-2xl flex items-center justify-center overflow-hidden relative mb-16`}>
              {/* Decorative elements */}
              <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10 opacity-30"></div>
              <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-white/10 opacity-20"></div>
              
              <img 
                src={getCategoryImage(currentPost.category)} 
                alt={currentPost.title} 
                className="w-64 h-64 object-contain"
              />
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg">
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  {currentPost.summary}
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  This is where the full content would be displayed. The API would normally return the complete article content.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  For demonstration purposes, we're showing placeholder content. In a production environment, this would be replaced with the actual article content from your CMS or database.
                </p>
              </div>
              
              <div className="mt-16 pt-8 border-t border-neutral-200">
                <h3 className="text-xl font-medium text-neutral-900 mb-6">Related articles</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {postsToDisplay.filter(post => post.category === currentPost.category && post.id !== currentPost.id).slice(0, 2).map((post) => {
                    const postStyle = getCategoryStyle(post.category);
                    
                    return (
                      <article 
                        key={post.id}
                        className="bg-white rounded-xl shadow-sm border border-neutral-200/80 overflow-hidden hover:shadow-md hover:border-neutral-300/80 transition-all duration-300 flex items-start p-4 group"
                      >
                        <div className={`w-16 h-16 ${postStyle.bg} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                          <img 
                            src={getCategoryImage(post.category)} 
                            alt={post.title} 
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                        
                        <div>
                          <h4 className="text-base font-medium text-neutral-900 mb-1 group-hover:text-neutral-800 transition-colors">
                            <Link href={`/blog/${post.slug}`}>
                              <span className="cursor-pointer">{post.title}</span>
                            </Link>
                          </h4>
                          
                          <div className="flex items-center text-neutral-500 text-xs mb-0">
                            <span className="mr-2">{post.date}</span>
                            <span>·</span>
                            <span className="ml-2">{post.readTime}</span>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Signup */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="bg-gradient-to-b from-white to-neutral-50 rounded-2xl shadow-sm border border-neutral-200/80 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-violet-50 blur-3xl opacity-30"></div>
              <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-blue-50 blur-3xl opacity-30"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-50 text-violet-500 mb-4">
                    <ArrowRight className="h-5 w-5" />
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
      </div>
    );
  }

  // If we're viewing the blog listing page
  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-[#f5f5f7] relative pt-36 pb-20 overflow-hidden">
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-30"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-violet-50 blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="inline-block bg-blue-50 backdrop-blur-lg border border-blue-100 rounded-full px-4 py-1.5 text-blue-600 text-sm font-medium mb-6">
            Insights & Resources
          </div>
          <h1 className="text-4xl md:text-6xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
            UAE business technology insights
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 font-light max-w-3xl mx-auto mb-10">
            Stay updated with the latest technology trends, best practices, and success stories specific to the Dubai business landscape.
          </p>
          
          {/* Search bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Search className="h-4 w-4 text-neutral-400" />
              </div>
              <Input 
                type="text" 
                placeholder="Search articles..." 
                className="pl-10 bg-white border-neutral-200 rounded-full py-6"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Filters */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-medium text-neutral-900">Articles</h2>
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-neutral-500" />
                <span className="text-neutral-600 text-sm">Filter by:</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
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
          </div>

          {/* Blog Posts */}
          {isLoading ? (
            // Loading skeletons
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(6).fill(0).map((_, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm border border-neutral-200/80 overflow-hidden">
                  <Skeleton className="w-full h-48" />
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Skeleton className="h-6 w-24 rounded-full" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <Skeleton className="h-8 w-full mb-3 rounded-lg" />
                    <Skeleton className="h-20 w-full mb-4 rounded-lg" />
                    <Skeleton className="h-10 w-32 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-neutral-200/80">
              <h3 className="text-2xl font-medium text-neutral-900 mb-3">No articles found</h3>
              <p className="text-neutral-600 mb-6">Try adjusting your search or filter criteria</p>
              <Button 
                variant="outline" 
                className="rounded-full border-neutral-200"
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
              >
                Reset filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => {
                const style = getCategoryStyle(post.category);
                
                return (
                  <article 
                    key={post.id}
                    className="bg-white rounded-2xl shadow-sm border border-neutral-200/80 overflow-hidden hover:shadow-md hover:border-neutral-300/80 transition-all duration-300 flex flex-col h-full group"
                  >
                    {/* Post header image */}
                    <div className={`w-full h-48 ${style.bg} flex items-center justify-center overflow-hidden relative`}>
                      {/* Decorative elements */}
                      <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-white/10 opacity-30"></div>
                      <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-white/10 opacity-20"></div>
                      
                      <img 
                        src={getCategoryImage(post.category)} 
                        alt={post.title} 
                        className="w-36 h-36 object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Post content */}
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      {/* Category tag */}
                      <div className={`${style.bg} ${style.text} text-xs font-medium px-3 py-1 rounded-full self-start mb-4`}>
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
                        {post.summary}
                      </p>
                      
                      {/* Read more link */}
                      <div className="mt-auto pt-2">
                        <Link href={`/blog/${post.slug}`}>
                          <Button 
                            variant="ghost" 
                            className={`${style.text} hover:bg-${style.bg.slice(3)} px-4 py-2 rounded-full border border-transparent hover:border-${style.text.slice(5)}/50 group text-sm`}
                          >
                            <BookOpen className="h-4 w-4 mr-1.5" />
                            Read article
                            <ChevronRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Pagination */}
          {!isLoading && filteredPosts.length > 0 && (
            <div className="flex justify-center mt-16">
              <div className="flex space-x-2">
                <Button variant="outline" className="rounded-full border-neutral-200">
                  Previous
                </Button>
                <Button className="rounded-full bg-neutral-900 text-white">
                  1
                </Button>
                <Button variant="outline" className="rounded-full border-neutral-200">
                  2
                </Button>
                <Button variant="outline" className="rounded-full border-neutral-200">
                  3
                </Button>
                <Button variant="outline" className="rounded-full border-neutral-200">
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="bg-gradient-to-b from-white to-neutral-50 rounded-2xl shadow-sm border border-neutral-200/80 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-violet-50 blur-3xl opacity-30"></div>
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-blue-50 blur-3xl opacity-30"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-50 text-violet-500 mb-4">
                  <ArrowRight className="h-5 w-5" />
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
    </div>
  );
};

export default Blog;
