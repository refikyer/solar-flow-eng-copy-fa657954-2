import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Leaf, Home, Shield, Zap, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Massive Savings',
    description: 'Save up to 90% on your electricity bills and earn money by selling excess energy back to the grid.',
    color: 'emerald'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Reduce your carbon footprint by generating clean, renewable energy for your home.',
    color: 'green'
  },
  {
    icon: Home,
    title: 'Increase Home Value',
    description: 'Solar installations increase your home value by an average of 4-6% according to recent studies.',
    color: 'blue'
  },
  {
    icon: Shield,
    title: '25-Year Warranty',
    description: 'Premium equipment with comprehensive warranties and professional installation guaranteed.',
    color: 'purple'
  },
  {
    icon: Zap,
    title: 'Energy Independence',
    description: 'Generate your own power and protect yourself from rising electricity rates.',
    color: 'amber'
  },
  {
    icon: TrendingUp,
    title: 'Tax Incentives',
    description: 'Take advantage of federal tax credits and local rebates to reduce installation costs.',
    color: 'indigo'
  }
];

export default function Benefits() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Solar Energy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your home into a clean energy powerhouse while saving thousands every year. 
            Here's what makes solar the smart choice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`w-14 h-14 rounded-xl bg-${benefit.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-7 h-7 text-${benefit.color}-600`} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}