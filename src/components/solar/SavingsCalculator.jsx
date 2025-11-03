import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, DollarSign, TrendingUp, Zap } from 'lucide-react';

export default function SavingsCalculator() {
  const [monthlyBill, setMonthlyBill] = useState('');
  const [stateValue, setStateValue] = useState('');
  const [roofSize, setRoofSize] = useState('');
  const [showResults, setShowResults] = useState(false);

  const calculateSavings = () => {
    if (monthlyBill && stateValue && roofSize) {
      setShowResults(true);
    }
  };

  const annualBill = monthlyBill * 12;
  const annualSavings = annualBill * 0.85; // 85% savings
  const systemCost = annualSavings * 6; // Payback period of 6 years
  const twentyYearSavings = annualSavings * 20;
  const federalTaxCredit = systemCost * 0.30;

  return (
    <section id="calculator" className="py-24 bg-gradient-to-br from-emerald-900 to-green-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-emerald-800 bg-opacity-50 text-emerald-100 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Calculator className="w-4 h-4 mr-2" />
            Free Savings Calculator
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            See How Much You Could Save
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Get a personalized estimate of your solar savings in just 30 seconds
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your Savings</h3>
            
            <div className="space-y-6">
              <div>
                <Label htmlFor="monthly-bill" className="text-gray-700 font-medium">
                  Average Monthly Electric Bill
                </Label>
                <div className="relative mt-2">
                  <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    id="monthly-bill"
                    type="number"
                    placeholder="Enter amount"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(e.target.value)}
                    className="pl-10 h-12 text-lg"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="state" className="text-gray-700 font-medium">
                  State
                </Label>
                <Select value={stateValue} onValueChange={setStateValue}>
                  <SelectTrigger className="h-12 mt-2">
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ca">California</SelectItem>
                    <SelectItem value="tx">Texas</SelectItem>
                    <SelectItem value="fl">Florida</SelectItem>
                    <SelectItem value="ny">New York</SelectItem>
                    <SelectItem value="az">Arizona</SelectItem>
                    <SelectItem value="nv">Nevada</SelectItem>
                    <SelectItem value="nc">North Carolina</SelectItem>
                    <SelectItem value="other">Other State</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="roof-size" className="text-gray-700 font-medium">
                  Roof Size (approx.)
                </Label>
                <Select value={roofSize} onValueChange={setRoofSize}>
                  <SelectTrigger className="h-12 mt-2">
                    <SelectValue placeholder="Select roof size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (Under 1,500 sq ft)</SelectItem>
                    <SelectItem value="medium">Medium (1,500-2,500 sq ft)</SelectItem>
                    <SelectItem value="large">Large (Over 2,500 sq ft)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={calculateSavings}
                className="w-full bg-emerald-600 hover:bg-emerald-700 h-12 text-lg"
                disabled={!monthlyBill || !stateValue || !roofSize}
              >
                Calculate My Savings
                <TrendingUp className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {showResults ? (
              <div className="space-y-6">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-300 border-opacity-30">
                  <div className="flex items-center mb-4">
                    <DollarSign className="w-6 h-6 text-emerald-300 mr-2" />
                    <h4 className="text-white font-semibold">Annual Savings</h4>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${Math.round(annualSavings).toLocaleString()}
                  </div>
                  <p className="text-emerald-200">Every year after installation</p>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-300 border-opacity-30">
                  <div className="flex items-center mb-4">
                    <Zap className="w-6 h-6 text-emerald-300 mr-2" />
                    <h4 className="text-white font-semibold">20-Year Total Savings</h4>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${Math.round(twentyYearSavings).toLocaleString()}
                  </div>
                  <p className="text-emerald-200">Over the system lifetime</p>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-300 border-opacity-30">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-6 h-6 text-emerald-300 mr-2" />
                    <h4 className="text-white font-semibold">Federal Tax Credit</h4>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${Math.round(federalTaxCredit).toLocaleString()}
                  </div>
                  <p className="text-emerald-200">30% of system cost</p>
                </div>

                <Button 
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-white text-emerald-800 hover:bg-gray-100 h-12 text-lg font-semibold"
                >
                  Get My Free Solar Quote
                </Button>
              </div>
            ) : (
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-300 border-opacity-30 text-center">
                <Calculator className="w-16 h-16 text-emerald-300 mx-auto mb-4" />
                <h4 className="text-white font-semibold text-lg mb-2">Ready to Calculate?</h4>
                <p className="text-emerald-200">
                  Fill out the form to see your personalized solar savings estimate
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}