import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Lead } from "@/api/entities";
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    address: '',
    monthly_electric_bill: '',
    property_type: '',
    roof_condition: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await Lead.create({
        ...formData,
        monthly_electric_bill: parseFloat(formData.monthly_electric_bill) || 0
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting lead:', error);
    }

    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            className="text-center bg-white rounded-3xl p-12 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You for Your Interest!
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We've received your information and will contact you within 24 hours with a personalized solar proposal.
            </p>
            <div className="bg-emerald-50 rounded-2xl p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-emerald-800 mb-2">What happens next?</h3>
              <ul className="text-emerald-700 space-y-2">
                <li>• A solar consultant will call you within 24 hours</li>
                <li>• We'll schedule your free home assessment</li>
                <li>• Receive your custom solar savings proposal</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Start Saving Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get a free, no-obligation consultation and personalized solar proposal for your home.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h3>
            <p className="text-gray-600 mb-8">Fill out the form below and we'll contact you within 24 hours.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="full_name" className="text-gray-700 font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="full_name"
                    required
                    value={formData.full_name}
                    onChange={(e) => handleInputChange('full_name', e.target.value)}
                    className="mt-2 h-12"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="mt-2 h-12"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-2 h-12"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <Label htmlFor="address" className="text-gray-700 font-medium">
                  Property Address
                </Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="mt-2 h-12"
                  placeholder="123 Main St, City, State, ZIP"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="monthly_electric_bill" className="text-gray-700 font-medium">
                    Monthly Electric Bill
                  </Label>
                  <Input
                    id="monthly_electric_bill"
                    type="number"
                    value={formData.monthly_electric_bill}
                    onChange={(e) => handleInputChange('monthly_electric_bill', e.target.value)}
                    className="mt-2 h-12"
                    placeholder="$150"
                  />
                </div>
                <div>
                  <Label className="text-gray-700 font-medium">
                    Property Type
                  </Label>
                  <Select value={formData.property_type} onValueChange={(value) => handleInputChange('property_type', value)}>
                    <SelectTrigger className="mt-2 h-12">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single_family">Single Family Home</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-gray-700 font-medium">
                    Roof Condition
                  </Label>
                  <Select value={formData.roof_condition} onValueChange={(value) => handleInputChange('roof_condition', value)}>
                    <SelectTrigger className="mt-2 h-12">
                      <SelectValue placeholder="Select roof condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Excellent</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="needs_repair">Needs Repair</SelectItem>
                      <SelectItem value="unsure">Not Sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-gray-700 font-medium">
                    Timeline
                  </Label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                    <SelectTrigger className="mt-2 h-12">
                      <SelectValue placeholder="When do you want to install?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">As soon as possible</SelectItem>
                      <SelectItem value="3_months">Within 3 months</SelectItem>
                      <SelectItem value="6_months">Within 6 months</SelectItem>
                      <SelectItem value="1_year">Within 1 year</SelectItem>
                      <SelectItem value="just_exploring">Just exploring</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 h-12 text-lg"
              >
                {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-emerald-600 to-green-600 text-white rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Ready to Talk?</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-emerald-100">(555) 123-SOLAR</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-emerald-100">info@solarflow.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Business Hours</div>
                    <div className="text-emerald-100">Mon-Fri: 8AM-6PM</div>
                    <div className="text-emerald-100">Sat: 9AM-4PM</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Service Areas</div>
                    <div className="text-emerald-100">All of California, Texas,</div>
                    <div className="text-emerald-100">Arizona & Florida</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Why Choose SolarFlow?</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                  25-year equipment warranty
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                  Licensed & insured installers
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                  Free maintenance for 5 years
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                  No upfront costs available
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                  Help with all permits & paperwork
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}