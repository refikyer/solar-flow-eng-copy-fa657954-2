import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
    savings: '$3,200',
    text: 'Our solar system has exceeded all expectations. We\'ve eliminated our electric bills entirely and even sell energy back to the grid. The installation was professional and seamless.',
    systemSize: '8.2 kW'
  },
  {
    name: 'Michael Chen',
    location: 'San Diego, CA',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
    savings: '$2,850',
    text: 'The team walked us through every step of the process. Our home value increased significantly, and we\'re saving thousands every year. Best investment we\'ve made.',
    systemSize: '6.5 kW'
  },
  {
    name: 'Emma Rodriguez',
    location: 'Phoenix, AZ',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
    savings: '$4,100',
    text: 'Living in Arizona, solar was a no-brainer. Our system produces more energy than we use, and the federal tax credits made it incredibly affordable. Highly recommend!',
    systemSize: '10.1 kW'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join over 50,000 satisfied homeowners who are saving money and helping the environment with solar energy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-emerald-200" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.text}
                </p>
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                <div>
                  <div className="text-2xl font-bold text-emerald-600">{testimonial.savings}</div>
                  <div className="text-xs text-gray-500">Annual Savings</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">{testimonial.systemSize}</div>
                  <div className="text-xs text-gray-500">System Size</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Join 50,000+ Happy Solar Customers
            </h3>
            <div className="grid grid-cols-3 gap-8 mb-6">
              <div>
                <div className="text-3xl font-bold">4.9/5</div>
                <div className="text-emerald-100">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold">$2,400</div>
                <div className="text-emerald-100">Avg. Annual Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold">25 Years</div>
                <div className="text-emerald-100">Equipment Warranty</div>
              </div>
            </div>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get Your Free Quote Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}