import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How much money can I actually save with solar?',
    answer: 'Most homeowners save 70-90% on their electricity bills. The average household saves $1,500-$3,000 annually, with total lifetime savings often exceeding $40,000. Your exact savings depend on your current electricity usage, local utility rates, and available sunlight.'
  },
  {
    question: 'What happens if my roof needs repairs after solar installation?',
    answer: 'We can temporarily remove and reinstall your solar panels if roof repairs are needed. Our systems are designed to last 25+ years, and we carefully inspect your roof before installation to ensure it\'s in good condition for the long term.'
  },
  {
    question: 'Do solar panels work during cloudy days or winter?',
    answer: 'Yes! Solar panels generate electricity even on cloudy days, though at reduced efficiency. In winter, panels can actually be more efficient due to cooler temperatures. Modern panels work well in various weather conditions and climates.'
  },
  {
    question: 'How much does a solar installation cost?',
    answer: 'System costs vary based on size and complexity, but most residential installations range from $15,000-$30,000 before incentives. After federal tax credits (30%) and local rebates, the net cost is typically $10,000-$21,000. Many customers pay $0 down with financing options.'
  },
  {
    question: 'What maintenance do solar panels require?',
    answer: 'Solar panels require minimal maintenance. Occasional cleaning and annual inspections are recommended. Our systems come with 25-year warranties, and most components are designed to last 30+ years with proper care.'
  },
  {
    question: 'How long does the installation process take?',
    answer: 'From contract signing to system activation, the typical timeline is 6-12 weeks. This includes permitting, equipment delivery, installation (1-3 days), and utility approval. We handle all paperwork and coordination for you.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Here are the most common questions we get about solar energy installations.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 mb-6">
            Have more questions? We're here to help.
          </p>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors duration-300"
          >
            Contact Our Experts
          </button>
        </motion.div>
      </div>
    </section>
  );
}