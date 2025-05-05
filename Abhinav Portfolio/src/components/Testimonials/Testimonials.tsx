// import React from 'react';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    content: "Working with John was an incredible experience. His attention to detail and technical expertise helped us deliver our project ahead of schedule.",
    author: "Sarah Johnson",
    position: "Product Manager at TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    content: "One of the most talented developers I've worked with. His problem-solving skills and dedication to quality are outstanding.",
    author: "Michael Chen",
    position: "CTO at StartupX",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    content: "John's expertise in modern web technologies helped us transform our outdated platform into a cutting-edge application.",
    author: "Emily Davis",
    position: "Engineering Lead at InnovateCo",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.author} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}