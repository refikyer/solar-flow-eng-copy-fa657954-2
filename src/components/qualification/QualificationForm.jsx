
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { base44 } from '@/api/base44Client';
import { ArrowRight, ArrowLeft, CheckCircle, MapPin, Home, Calendar, User, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function QualificationForm() {
  const { language } = useLanguage();
  const t = translations[language];
  const tQuestions = t.questions;
  const tForm = t.form;
  const tSuccess = t.success;

  const questions = [
    {
      id: 'address',
      title: tQuestions.address.title,
      subtitle: tQuestions.address.subtitle,
      icon: MapPin,
      type: 'text',
      field: 'address',
      placeholder: tQuestions.address.placeholder
    },
    {
      id: 'bill',
      title: tQuestions.bill.title,
      subtitle: tQuestions.bill.subtitle,
      icon: 'CHF',
      type: 'select',
      field: 'monthly_electric_bill',
      options: [
        { value: '200', label: tQuestions.bill.below250 },
        { value: '500', label: tQuestions.bill.range250_750 },
        { value: '800', label: tQuestions.bill.over750 },
        { value: '0', label: tQuestions.bill.dontKnow }
      ]
    },
    {
      id: 'property',
      title: tQuestions.property.title,
      subtitle: tQuestions.property.subtitle,
      icon: Home,
      type: 'select',
      field: 'property_type',
      options: [
        { value: 'residential', label: tQuestions.property.residential },
        { value: 'apartment', label: tQuestions.property.apartment },
        { value: 'commercial', label: tQuestions.property.commercial }
      ]
    },
    {
      id: 'roof',
      title: tQuestions.roof.title,
      subtitle: tQuestions.roof.subtitle,
      icon: Home,
      type: 'select',
      field: 'roof_condition',
      options: [
        { value: 'excellent', label: tQuestions.roof.excellent },
        { value: 'good', label: tQuestions.roof.good },
        { value: 'needs_repair', label: tQuestions.roof.needsRepair },
        { value: 'unsure', label: tQuestions.roof.unsure }
      ]
    },
    {
      id: 'timeline',
      title: tQuestions.timeline.title,
      subtitle: tQuestions.timeline.subtitle,
      icon: Calendar,
      type: 'select',
      field: 'timeline',
      options: [
        { value: 'asap', label: tQuestions.timeline.asap },
        { value: '3_months', label: tQuestions.timeline.threeMonths },
        { value: '6_months', label: tQuestions.timeline.sixMonths },
        { value: '1_year', label: tQuestions.timeline.oneYear },
        { value: 'just_exploring', label: tQuestions.timeline.exploring }
      ]
    },
    {
      id: 'contact',
      title: tQuestions.contact.title,
      subtitle: tQuestions.contact.subtitle,
      icon: User,
      type: 'contact',
      fields: ['full_name', 'email', 'phone']
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);
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

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await base44.entities.Lead.create({
        ...formData,
        monthly_electric_bill: parseFloat(formData.monthly_electric_bill) || 0,
        status: 'new'
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting lead:', error);
    }
    setIsSubmitting(false);
  };

  const isStepValid = () => {
    if (currentQuestion.type === 'contact') {
      return formData.full_name && formData.email && formData.phone;
    }
    return formData[currentQuestion.field];
  };

  if (isSubmitted) {
    return (
      <section id="qualification-form" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div 
            className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 shadow-2xl border border-purple-100"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {tSuccess.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {tSuccess.subtitle}
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-xl mx-auto mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">{tSuccess.whatNext}</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{tSuccess.step1Title}</div>
                    <div className="text-gray-600 text-sm">{tSuccess.step1Desc}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-100 to-fuchsia-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-purple-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{tSuccess.step2Title}</div>
                    <div className="text-gray-600 text-sm">{tSuccess.step2Desc}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-br from-fuchsia-100 to-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-fuchsia-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{tSuccess.step3Title}</div>
                    <div className="text-gray-600 text-sm">{tSuccess.step3Desc}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2">{tSuccess.estimatedSavings}</div>
              <div className="text-5xl font-bold mb-2">{Math.round((parseFloat(formData.monthly_electric_bill) || 150) * 12 * 0.85).toLocaleString()} CHF</div>
              <div className="text-blue-100">{tSuccess.basedOnBill}</div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="qualification-form" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-600">
              {t.qualification.question} {currentStep + 1} {t.qualification.of} {questions.length}
            </span>
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {Math.round(progress)}% {t.qualification.complete}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-purple-100"
          >
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mr-4">
                  {currentQuestion.icon === 'CHF' ? (
                    <span className="text-blue-600 font-bold text-xl">CHF</span>
                  ) : (
                    <currentQuestion.icon className="w-7 h-7 text-blue-600" />
                  )}
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    {currentQuestion.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{currentQuestion.subtitle}</p>
                </div>
              </div>

              <div className="mt-8">
                {currentQuestion.type === 'text' && (
                  <Input
                    value={formData[currentQuestion.field]}
                    onChange={(e) => setFormData({ ...formData, [currentQuestion.field]: e.target.value })}
                    placeholder={currentQuestion.placeholder}
                    className="h-14 text-lg focus:ring-purple-500 focus:border-purple-500"
                  />
                )}

                {currentQuestion.type === 'select' && (
                  <div className="space-y-3">
                    {currentQuestion.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setFormData({ ...formData, [currentQuestion.field]: option.value })}
                        className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                          formData[currentQuestion.field] === option.value
                            ? 'border-purple-600 bg-gradient-to-r from-blue-50 to-purple-50'
                            : 'border-gray-200 hover:border-purple-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">{option.label}</span>
                          {formData[currentQuestion.field] === option.value && (
                            <CheckCircle className="w-5 h-5 text-purple-600" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {currentQuestion.type === 'contact' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {tQuestions.contact.fullName} *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                        <Input
                          value={formData.full_name}
                          onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                          placeholder="John Smith"
                          className="h-14 text-lg pl-12 focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {tQuestions.contact.email} *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="h-14 text-lg pl-12 focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {tQuestions.contact.phone} *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 123-4567"
                          className="h-14 text-lg pl-12 focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-4 mt-8">
                {currentStep > 0 && (
                  <Button
                    onClick={handleBack}
                    variant="outline"
                    className="h-14 px-8 text-lg border-purple-300 hover:bg-purple-50"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    {tForm.back}
                  </Button>
                )}
                
                {currentStep < questions.length - 1 ? (
                  <Button
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="flex-1 h-14 px-8 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    {tForm.continue}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!isStepValid() || isSubmitting}
                    className="flex-1 h-14 px-8 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    {isSubmitting ? tForm.submitting : tForm.getQuote}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
