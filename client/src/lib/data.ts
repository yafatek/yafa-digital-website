import { BlogPost, CaseStudy, Service, Testimonial } from './types';

// Blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Cloud Computing',
    slug: 'future-ai-cloud-computing',
    summary: 'Explore how artificial intelligence is revolutionizing cloud computing and creating new possibilities for businesses of all sizes.',
    content: 'AI and cloud computing are increasingly becoming intertwined, creating powerful new capabilities for businesses. This article explores the latest trends and future directions of AI in cloud environments.',
    category: 'AI & Machine Learning',
    date: 'May 15, 2023',
    author: 'David Wilson',
    tags: ['AI', 'Cloud Computing', 'Machine Learning', 'Future Tech']
  },
  {
    id: '2',
    title: '5 Essential Cybersecurity Best Practices for 2023',
    slug: 'cybersecurity-best-practices-2023',
    summary: 'Protect your business from the latest cyber threats with these essential security practices every organization should implement.',
    content: 'As cyber threats evolve, so must your security practices. This guide outlines the most critical cybersecurity measures businesses should implement to stay protected in the current threat landscape.',
    category: 'Cybersecurity',
    date: 'April 28, 2023',
    author: 'Rebecca Martinez',
    tags: ['Cybersecurity', 'Data Protection', 'Best Practices', 'Network Security']
  },
  {
    id: '3',
    title: 'How AI is Transforming E-commerce Customer Experience',
    slug: 'ai-ecommerce-transformation',
    summary: 'Discover how AI-powered chatbots, recommendation engines, and personalization are revolutionizing online shopping experiences.',
    content: 'AI technologies are reshaping the e-commerce landscape, enabling more personalized and efficient shopping experiences. Learn how leading companies are implementing AI solutions to boost sales and customer satisfaction.',
    category: 'E-Commerce',
    date: 'April 10, 2023',
    author: 'Sarah Ahmad',
    tags: ['E-Commerce', 'AI', 'Customer Experience', 'Personalization']
  },
  {
    id: '4',
    title: 'Cloud Migration: Key Strategies for a Seamless Transition',
    slug: 'cloud-migration-strategies',
    summary: 'Learn the essential steps and best practices for migrating your business infrastructure to the cloud with minimal disruption.',
    content: 'Moving to the cloud requires careful planning and execution. This comprehensive guide covers everything from assessment and planning to implementation and post-migration optimization.',
    category: 'Cloud Computing',
    date: 'March 22, 2023',
    author: 'Michael Lee',
    tags: ['Cloud Migration', 'Digital Transformation', 'AWS', 'Infrastructure']
  },
  {
    id: '5',
    title: 'Building Multilingual AI Chatbots for Global Businesses',
    slug: 'multilingual-ai-chatbots',
    summary: 'A comprehensive guide to developing AI chatbots that can effectively communicate with customers in multiple languages.',
    content: 'Global businesses need communication solutions that cross language barriers. Learn how to develop, train, and deploy AI chatbots that can smoothly interact with users in their preferred language.',
    category: 'AI & Machine Learning',
    date: 'March 8, 2023',
    author: 'Jennifer Wang',
    tags: ['AI Chatbots', 'Multilingual', 'Customer Service', 'Global Business']
  },
  {
    id: '6',
    title: 'Zero Trust Security: Implementation Guide for Modern Enterprises',
    slug: 'zero-trust-security-implementation',
    summary: 'Explore how to implement a Zero Trust security model to protect your organization in today\'s distributed work environment.',
    content: 'The traditional security perimeter has dissolved. Zero Trust offers a more effective approach to security in a world of remote work, cloud services, and sophisticated threats. This article provides a roadmap for implementation.',
    category: 'Cybersecurity',
    date: 'February 18, 2023',
    author: 'Carlos Rodriguez',
    tags: ['Zero Trust', 'Cybersecurity', 'Network Security', 'Access Control']
  }
];

// Services data
export const services: Service[] = [
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    slug: 'cloud-solutions',
    category: 'Infrastructure',
    icon: 'Cloud',
    features: [
      'AWS Cloud Storage Solutions',
      'AI Private Cloud Solutions',
      'Cloud Migration & Optimization'
    ],
    description: 'Our cloud solutions provide scalable, secure, and cost-effective infrastructure that adapts to your business needs.'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    slug: 'ecommerce-solutions',
    category: 'Web',
    icon: 'ShoppingCart',
    features: [
      'Shopify Account Setup and Migration',
      'AI-driven Marketing Strategies',
      'E-commerce Platform Integration'
    ],
    description: 'Our e-commerce solutions help businesses create compelling online stores and optimize the customer journey.'
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    category: 'Marketing',
    icon: 'BarChart',
    features: [
      'AI Analytics',
      'Multilingual AI Chatbots',
      'Data-Driven Marketing Campaigns'
    ],
    description: 'Our digital marketing services leverage AI and analytics to create targeted campaigns that drive traffic and generate leads.'
  },
  {
    id: 'security',
    title: 'Cybersecurity Services',
    slug: 'cybersecurity-services',
    category: 'Security',
    icon: 'ShieldCheck',
    features: [
      'Network Security',
      'Data Protection',
      'Threat Detection and Response'
    ],
    description: 'Our cybersecurity services protect your business from evolving digital threats and implement robust security measures.'
  }
];

// Case studies data
export const caseStudies: CaseStudy[] = [
  {
    id: 'retailplus',
    title: 'E-commerce Platform Migration & AI Integration',
    slug: 'retailplus-ecommerce-migration',
    client: 'RetailPlus',
    category: 'E-Commerce',
    challenge: 'RetailPlus needed to migrate their legacy e-commerce platform to a more scalable and AI-ready infrastructure to support their growing business.',
    solution: 'We implemented a comprehensive AWS cloud migration, integrating AI-driven inventory management and personalized recommendation engines.',
    results: [
      '35% increase in sales within the first quarter',
      '52% improvement in page load speed',
      '40% reduction in infrastructure costs',
      'Enhanced inventory forecasting accuracy by 28%'
    ],
    testimonial: {
      quote: "Yafa Cloud Services transformed our e-commerce platform with their AWS expertise. Our site is now faster, more secure, and our sales have increased dramatically.",
      author: "Sarah Johnson, CEO, RetailPlus"
    },
    bgColor: 'from-blue-600 to-blue-900'
  },
  {
    id: 'servicenow',
    title: 'Multilingual AI Chatbot Implementation',
    slug: 'servicenow-ai-chatbot',
    client: 'ServiceNow Inc.',
    category: 'AI Solutions',
    challenge: 'ServiceNow Inc. was facing increasing customer service costs and slow response times, particularly for their international clients requiring support in multiple languages.',
    solution: 'We developed and deployed a sophisticated multilingual AI chatbot capable of handling customer inquiries in 12 languages, integrated with their existing CRM system.',
    results: [
      '40% reduction in customer service costs',
      '75% improvement in response times',
      'Successful handling of 70% of inquiries without human intervention',
      'Support for 12 languages with 95% accuracy'
    ],
    testimonial: {
      quote: "The AI chatbot solution developed by Yafa Cloud Services has revolutionized our customer service. It handles 70% of inquiries automatically and in multiple languages.",
      author: "Michael Chen, CTO, ServiceNow Inc."
    },
    bgColor: 'from-green-600 to-green-900'
  },
  {
    id: 'finsecure',
    title: 'Enterprise-Grade Security Infrastructure',
    slug: 'finsecure-security-infrastructure',
    client: 'FinSecure Bank',
    category: 'Cybersecurity',
    challenge: 'FinSecure Bank needed to strengthen their cybersecurity infrastructure to meet stringent financial regulations and protect against increasingly sophisticated cyber threats.',
    solution: 'We implemented a comprehensive cybersecurity solution including network security, data protection, threat detection systems, and employee security training.',
    results: [
      'Successfully passed all regulatory compliance audits',
      'Prevented several potential data breaches',
      '95% reduction in phishing vulnerability',
      'Decreased incident response time by 60%'
    ],
    testimonial: {
      quote: "Their cybersecurity expertise is unmatched. Yafa Cloud Services implemented a comprehensive security solution that gives us peace of mind and meets all regulatory requirements.",
      author: "Rebecca Martinez, CISO, FinSecure Bank"
    },
    bgColor: 'from-blue-600 to-blue-900'
  }
];

// Testimonials data
export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Yafa Cloud Services transformed our e-commerce platform with their AWS expertise. Our site is now faster, more secure, and our sales have increased dramatically.",
    name: "Sarah Johnson",
    position: "CEO, RetailPlus",
    avatar: generateAvatarUrl("Sarah Johnson")
  },
  {
    id: 2,
    text: "The AI chatbot solution developed by Yafa Cloud Services has revolutionized our customer service. It handles 70% of inquiries automatically and in multiple languages.",
    name: "Michael Chen",
    position: "CTO, ServiceNow Inc.",
    avatar: generateAvatarUrl("Michael Chen")
  },
  {
    id: 3,
    text: "Their cybersecurity expertise is unmatched. Yafa Cloud Services implemented a comprehensive security solution that gives us peace of mind and meets all regulatory requirements.",
    name: "Rebecca Martinez",
    position: "CISO, FinSecure Bank",
    avatar: generateAvatarUrl("Rebecca Martinez")
  }
];

// Function to generate a consistent avatar based on name
function generateAvatarUrl(name: string) {
  const colors = ['4299E1', '48BB78', 'ED8936', '9F7AEA', 'ED64A6'];
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  const colorIndex = name.length % colors.length;
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><rect width="48" height="48" fill="%23${colors[colorIndex]}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="white">${initials}</text></svg>`;
}
