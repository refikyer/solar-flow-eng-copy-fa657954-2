import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sun, Zap, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [email, setEmail] = useState('');

  const scrollToCalculator = () => {
    document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-emerald-300 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 px-6 py-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-full flex items-center justify-center">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">SolarFlow</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={scrollToCalculator} className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Calculator
            </button>
            <button onClick={() => document.getElementById('process').scrollIntoView({ behavior: 'smooth' })} className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              How It Works
            </button>
            <button onClick={scrollToContact} className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Contact
            </button>
            <Button onClick={scrollToContact} className="bg-emerald-600 hover:bg-emerald-700 px-6">
              Get Free Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Join 50,000+ homeowners who switched
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Cut Your
                <span className="bg-gradient-to-r from-emerald-600 to-amber-500 bg-clip-text text-transparent"> Electric Bill </span>
                by 90%
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Generate clean, renewable energy and save thousands every year with premium solar installations. 
                25-year warranty included.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">$2,400</div>
                <div className="text-gray-600">Average Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">25 Years</div>
                <div className="text-gray-600">Equipment Warranty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">30%</div>
                <div className="text-gray-600">Federal Tax Credit</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToCalculator}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg h-auto"
              >
                Calculate My Savings
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToContact}
                className="border-gray-300 text-gray-700 px-8 py-4 text-lg h-auto hover:bg-gray-50"
              >
                Get Free Consultation
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Beautiful home with solar panels" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              
              {/* Floating savings card */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-gray-600">Monthly Savings</div>
                  <TrendingDown className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">$247</div>
                <div className="text-xs text-gray-500">vs. traditional electricity</div>
                <div className="mt-3 bg-emerald-50 rounded-lg p-2">
                  <div className="text-xs text-emerald-700 font-medium">Your system pays for itself in 6.2 years</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}