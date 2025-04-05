import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { contactFormSchema } from '@/lib/validation';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
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
      <section className="bg-[#003366] text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white">
            We'd love to hear from you. Reach out to discuss how we can help your business thrive.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#003366] mb-6">Get In Touch</h2>
              <p className="text-gray-700 mb-8 text-lg">
                Have questions about our services or want to discuss your project? Our team is ready to help you. Reach out to us using the contact form or through our contact information.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#3480cc] bg-opacity-10 flex items-center justify-center text-[#3480cc] mr-4 shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg">Our Location</h3>
                    <p className="text-gray-700">Business Bay<br />Dubai, UAE</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#3480cc] bg-opacity-10 flex items-center justify-center text-[#3480cc] mr-4 shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg">Email Us</h3>
                    <p className="text-gray-700">admin@yafa.digital</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#3480cc] bg-opacity-10 flex items-center justify-center text-[#3480cc] mr-4 shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg">Call Us / WhatsApp</h3>
                    <p className="text-gray-700">+971565531542</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="font-heading font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="http://linkedin.com/company/yafacs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#3480cc] text-white flex items-center justify-center hover:bg-[#3480cc]/90 transition-colors duration-300">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://www.facebook.com/YafaTek" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#3480cc] text-white flex items-center justify-center hover:bg-[#3480cc]/90 transition-colors duration-300">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://www.instagram.com/yafa_cs_official/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#3480cc] text-white flex items-center justify-center hover:bg-[#3480cc]/90 transition-colors duration-300">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 bg-gray-50 p-8 rounded-lg shadow-lg">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <h3 className="text-2xl font-bold font-heading text-[#003366] mb-6">Send Us a Message</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
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
                            <Input placeholder="Your email" {...field} />
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
                          <Input placeholder="How can we help you?" {...field} />
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
                            <SelectTrigger>
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
                            className="resize-none" 
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
                    className="w-full bg-[#3480cc] text-white font-heading font-semibold hover:bg-[#3480cc]/90 transition-colors duration-300"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="aspect-video bg-gray-200 rounded-lg shadow-md overflow-hidden">
            {/* Replace with an actual map embed or a styled div */}
            <div className="w-full h-full bg-[#003366] bg-opacity-10 flex items-center justify-center">
              <MapPin className="h-16 w-16 text-[#003366] opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-[#003366] mb-4">Our Office Hours</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team is available during the following hours. For urgent matters outside these hours, please email our support team.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold font-heading text-[#003366] mb-4">Working Hours</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span>10:00 AM - 7:00 PM GST</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Saturday - Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
