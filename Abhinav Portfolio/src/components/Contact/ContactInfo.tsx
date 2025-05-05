// import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactCard } from './ContactCard';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'abhinav.kumar9888@gmail.com',
    delay: 0.1
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+91 9988441975',
    delay: 0.2
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'Ludhiana, Punjab, India',
    delay: 0.3
  }
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {contactInfo.map((info) => (
        <ContactCard key={info.title} {...info} />
      ))}
    </motion.div>
  );
}