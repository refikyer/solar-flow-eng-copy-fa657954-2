import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Home, Wrench, Sun, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Free Consultation',
    description: 'Schedule a no-obligation consultation with our solar experts to assess your home and energy needs.',
    duration: '30 minutes'
  },
  {
    icon: Home,
    title: 'Site Assessment',
    description: 'Our certified technicians visit your home to evaluate roof condition, shading, and optimal panel placement.',
    duration: '1-2 hours'
  },
  {
    icon: CheckCircle,
    title: 'Custom Design',
    description: 'Receive a detailed proposal with 3D renderings, energy production estimates, and financing options.',
    duration: '3-5 days'
  },
  {
    icon: Wrench,
    title: 'Professional Installation',
    description: 'Our licensed installers complete your system installation with minimal disruption to your daily routine.',
    duration: '1-3 days'
  },
  {
    icon: Sun,
    title: 'System Activation',
    description: 'After inspection and approval, your system goes live and you start saving money immediately.',
    duration: 'Same day'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple 5-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From initial consultation to system activation, we make going solar seamless and stress-free.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 lg:relative lg:top-0 lg:left-0 lg:transform-none lg:mx-auto lg:mb-6">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg lg:w-16 lg:h-16 lg:text-xl group-hover:bg-emerald-700 transition-colors duration-300 shadow-lg">
                    {index + 1}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 pt-10 lg:pt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                      <step.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    <div className="inline-flex items-center bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                      {step.duration}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-emerald-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Solar Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of homeowners who are already saving money with clean solar energy.
            </p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-300"
            >
              Schedule Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}