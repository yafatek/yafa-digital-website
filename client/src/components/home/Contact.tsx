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
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#003366] mb-6">Ready to Leverage Cloud & AI?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Schedule your complimentary consultation today and discuss your technical challenges with our Dubai-based experts. We're here to help your business reach its full potential with the right technology solutions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#003366] bg-opacity-10 flex items-center justify-center text-[#003366] mr-4 shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg">Our Location</h3>
                  <p className="text-gray-700">Business Bay<br />Dubai, UAE</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#2E8B57] bg-opacity-10 flex items-center justify-center text-[#2E8B57] mr-4 shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg">Email Us</h3>
                  <p className="text-gray-700">admin@yafa.digital</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#003366] bg-opacity-10 flex items-center justify-center text-[#003366] mr-4 shrink-0">
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
                <a href="http://linkedin.com/company/yafacs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#003366] text-white flex items-center justify-center hover:bg-opacity-90 transition-colors duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/YafaTek" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#003366] text-white flex items-center justify-center hover:bg-opacity-90 transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/yafa_cs_official/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#003366] text-white flex items-center justify-center hover:bg-opacity-90 transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-gray-50 p-8 rounded-lg shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <h3 className="text-2xl font-bold font-heading text-[#003366] mb-6">Schedule Your Consultation</h3>
                
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
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your business challenges and technical needs" 
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
                  className="w-full bg-[#2E8B57] text-white font-heading font-semibold hover:bg-opacity-90 transition-colors duration-300"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? 'Sending...' : 'Schedule Consultation'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
