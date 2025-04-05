import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';
import { apiRequest } from '@/lib/queryClient';
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
import { useToast } from '@/hooks/use-toast';
import { MapPin, Mail, Phone, Linkedin, Facebook, Instagram, CalendarCheck, ArrowRight, ChevronRight } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(2, { message: 'Subject must be at least 2 characters' }),
  service: z.string().min(1, { message: 'Please select a service' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      service: '',
      message: ''
    },
  });

  const mutation = useMutation({
    mutationFn: (data: FormValues) => {
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

  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="pt-24 pb-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-30"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-violet-50 blur-3xl opacity-30"></div>
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-emerald-50 backdrop-blur-lg border border-emerald-100 rounded-full px-4 py-1.5 text-emerald-600 text-sm font-medium mb-6">
            Get in Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-neutral-900 tracking-tight leading-tight mb-6">
            Ready to elevate your business?
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 font-light">
            Schedule your complimentary consultation and discuss your technical challenges with our Dubai-based experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/80 p-8 md:p-10 h-full">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-neutral-900 mb-2">Our Location</h3>
                    <p className="text-neutral-600">
                      Business Bay<br />
                      Dubai, UAE
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-neutral-900 mb-2">Email Us</h3>
                    <p className="text-neutral-600">admin@yafa.digital</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-violet-50 flex items-center justify-center text-violet-500 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-neutral-900 mb-2">Call Us / WhatsApp</h3>
                    <p className="text-neutral-600">+971565531542</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-neutral-100">
                <h3 className="text-xl font-medium text-neutral-900 mb-5">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="http://linkedin.com/company/yafacs" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a 
                    href="https://www.facebook.com/YafaTek" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a 
                    href="https://www.instagram.com/yafa_cs_official/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center hover:bg-rose-50 hover:text-rose-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </div>
              
              <div className="mt-12">
                <div className="bg-gradient-to-b from-blue-50/50 to-blue-50/80 rounded-xl p-6 border border-blue-100/50 relative overflow-hidden">
                  <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-blue-100/20"></div>
                  
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <CalendarCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-neutral-900 mb-2">Quick Scheduling</h3>
                      <p className="text-neutral-600 text-sm mb-4">
                        Prefer to schedule directly? Use our Calendly link for instant booking.
                      </p>
                      <a href="https://calendly.com/ferasawadi90/30min" target="_blank" rel="noopener noreferrer">
                        <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-sm text-sm">
                          Book via Calendly
                          <ChevronRight className="ml-1 h-3.5 w-3.5" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/80 p-8 md:p-10">
              <h3 className="text-2xl font-medium text-neutral-900 mb-8">Send us a message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral-700 font-medium">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              {...field} 
                              className="rounded-lg border-neutral-200 focus:border-neutral-300 bg-white"
                            />
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
                          <FormLabel className="text-neutral-700 font-medium">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your email" 
                              {...field} 
                              className="rounded-lg border-neutral-200 focus:border-neutral-300 bg-white"
                            />
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
                        <FormLabel className="text-neutral-700 font-medium">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="How can we help you?" 
                            {...field} 
                            className="rounded-lg border-neutral-200 focus:border-neutral-300 bg-white"
                          />
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
                        <FormLabel className="text-neutral-700 font-medium">Service of Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-lg border-neutral-200 focus:border-neutral-300 bg-white">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="cloud-infrastructure">Cloud Infrastructure Services</SelectItem>
                            <SelectItem value="ai-chatbots">AI Chatbots (WhatsApp & Web)</SelectItem>
                            <SelectItem value="ai-automation">AI-Driven Automation</SelectItem>
                            <SelectItem value="ai-agents">Intelligent AI Agents</SelectItem>
                            <SelectItem value="edge-computing">Edge Computing & Custom IT Labs</SelectItem>
                            <SelectItem value="cost-optimization">Cloud Cost Optimization</SelectItem>
                            <SelectItem value="other">Other Services</SelectItem>
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
                        <FormLabel className="text-neutral-700 font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your business challenges and technical needs" 
                            className="resize-none rounded-lg border-neutral-200 focus:border-neutral-300 bg-white h-32" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg shadow-sm"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
