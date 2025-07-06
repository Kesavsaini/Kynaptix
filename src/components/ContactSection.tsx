
import { useState } from 'react';
import { Mail, Phone, MapPin} from 'lucide-react';
import { toast } from 'sonner';
import CalComp from './ui/CalComp';
import MailButton from './MailButton';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        <div className=''>
          <div className='w-full flex justify-center items-center gap-4 mb-8'>
        <MailButton/>
        </div>
        <CalComp/>
        </div>
     </div>
     
    </section>
  );
};

export default ContactSection;
