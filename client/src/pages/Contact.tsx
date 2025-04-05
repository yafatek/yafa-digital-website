import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { contactFormSchema } from '@/lib/validation';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook, Instagram, ArrowUpRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import type { ContactFormValues } from '@/lib/types';

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      service: '',
      message: ''
    },
  });

  const mutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-36 pb-24 relative bg-gradient-to-b from-white to-[#f5f5f7] overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-30"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-violet-50 blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-block bg-blue-50 backdrop-blur-lg border border-blue-100 rounded-full px-4 py-1.5 text-blue-600 text-sm font-medium mb-6">
            GET IN TOUCH
          </div>
          <h1 className="text-4xl md:text-6xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
            Contact us
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 font-light max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to discuss how we can help your business thrive.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="mb-10">
                <div className="inline-block bg-violet-50 backdrop-blur-lg border border-violet-100 rounded-full px-4 py-1.5 text-violet-600 text-sm font-medium mb-6">
                  CONTACT INFORMATION
                </div>
                <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
                  Get in touch
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Have questions about our services or want to discuss your project? Our team is ready to help you. Reach out to us using the contact form or through our contact information.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mr-5 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-neutral-900">Our Location</h3>
                    <p className="text-neutral-600">Business Bay<br />Dubai, UAE</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-50 text-violet-600 mr-5 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-neutral-900">Email Us</h3>
                    <p className="text-neutral-600">admin@yafa.digital</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 text-amber-600 mr-5 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-neutral-900">Call Us / WhatsApp</h3>
                    <p className="text-neutral-600">+971565531542</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-medium text-neutral-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="http://linkedin.com/company/yafacs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-300">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://www.facebook.com/YafaTek" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-300">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://www.instagram.com/yafa_cs_official/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-300">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 bg-white rounded-2xl shadow-sm border border-neutral-200/80 p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="mb-6">
                    <div className="inline-block bg-blue-50 backdrop-blur-lg border border-blue-100 rounded-full px-4 py-1.5 text-blue-600 text-sm font-medium mb-4">
                      MESSAGE US
                    </div>
                    <h3 className="text-2xl font-medium text-neutral-900">Send us a message</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" className="rounded-lg" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" className="rounded-lg" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help you?" className="rounded-lg" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service of Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-lg">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="cloud">Cloud Solutions</SelectItem>
                            <SelectItem value="ecommerce">E-Commerce Solutions</SelectItem>
                            <SelectItem value="marketing">Digital Marketing</SelectItem>
                            <SelectItem value="cybersecurity">Cybersecurity Services</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project or inquiry" 
                            className="resize-none rounded-lg" 
                            rows={5}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-neutral-900 text-white hover:bg-neutral-800 rounded-full shadow-sm font-normal"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? 'Sending...' : 'Send Message'}
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-2xl shadow-sm border border-neutral-200/80 overflow-hidden">
            {/* Replace with an actual map embed or a styled div */}
            <div className="w-full h-72 md:h-96 bg-neutral-100 flex items-center justify-center">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200/50 flex flex-col items-center max-w-xs">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-1">Dubai, UAE</h3>
                <p className="text-neutral-600 text-sm text-center">Business Bay</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-emerald-50 backdrop-blur-lg border border-emerald-100 rounded-full px-4 py-1.5 text-emerald-600 text-sm font-medium mb-6">
              WORKING HOURS
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
              Our office hours
            </h2>
            <p className="text-lg text-neutral-600">
              Our team is available during the following hours. For urgent matters outside these hours, please email our support team.
            </p>
          </div>
          
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/80 p-8 md:p-10">
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-neutral-100">
                  <span className="text-lg font-medium text-neutral-900">Monday - Friday</span>
                  <span className="text-neutral-600">10:00 AM - 7:00 PM GST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-neutral-900">Saturday - Sunday</span>
                  <span className="text-neutral-600">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
