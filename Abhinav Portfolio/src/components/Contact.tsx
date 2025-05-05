import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactInfo 
              Icon={Mail}
              title="Email"
              content="abhinav.kumar9888@gmail.com"
            />
            <ContactInfo 
              Icon={Phone}
              title="Phone"
              content="+1 (555) 123-4567"
            />
            <ContactInfo 
              Icon={MapPin}
              title="Location"
              content="San Francisco, CA"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ 
  Icon, 
  title, 
  content 
}: { 
  Icon: React.ElementType; 
  title: string; 
  content: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 bg-indigo-100 rounded-lg">
        <Icon size={24} className="text-indigo-600" />
      </div>
      <div>
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}

function Input({ 
  label, 
  ...props 
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        {...props}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>
  );
}