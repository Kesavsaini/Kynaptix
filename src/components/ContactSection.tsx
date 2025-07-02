
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success('Thank you! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@aiagency.com',
      subtitle: 'We respond within 2 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'San Francisco, CA',
      subtitle: 'By appointment only'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Your <span className="text-gradient">AI Future</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Ready to transform your business with AI? Get in touch with our experts and 
            discover how we can help you achieve unprecedented growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="glass-effect border border-white/10 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <MessageCircle className="w-6 h-6 text-neon-blue mr-3" />
              <h3 className="text-2xl font-bold text-white">Send us a message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-neon-blue"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-neon-blue"
                  />
                </div>
              </div>
              
              <div>
                <Input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-neon-blue"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-neon-blue resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/25"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & CTA */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-neon-blue/20 to-neon-purple/20">
                    <info.icon className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                    <p className="text-neon-blue font-medium">{info.content}</p>
                    <p className="text-white/60 text-sm">{info.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="glass-effect border border-white/10 rounded-xl p-6">
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <Calendar className="w-5 h-5 text-neon-purple mr-2" />
                Quick Actions
              </h4>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-white/20 text-white hover:bg-white/10"
                >
                  Schedule a Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-white/20 text-white hover:bg-white/10"
                >
                  Download AI Readiness Guide
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-white/20 text-white hover:bg-white/10"
                >
                  View Case Studies
                </Button>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="text-center p-4 glass-effect border border-white/10 rounded-xl">
              <div className="text-neon-green font-semibold mb-1">⚡ Fast Response</div>
              <div className="text-white/70 text-sm">We typically respond within 2 hours during business hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
