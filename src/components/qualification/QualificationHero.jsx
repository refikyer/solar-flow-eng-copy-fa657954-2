
import React from 'react';
import { Button } from "@/components/ui/button";
import { Sun, ArrowRight, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function QualificationHero() {
  const { language } = useLanguage();
  const t = translations[language].qualification;
  const tHero = translations[language].hero;

  const scrollToForm = () => {
    document.getElementById('qualification-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-fuchsia-300 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 px-6 py-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">SolarFlow</span>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>

            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4 mr-2" />
              {t.quickQuestions}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              {t.title.split('up to 40%')[0]}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
                {t.title.includes('40%') ? ' up to 40% ' : ' bis zu 40% '}
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t.subtitle}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 py-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">2,400 CHF</div>
                <div className="text-gray-600">{tHero.avgSavings}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">25 {language === 'de' ? 'Jahre' : language === 'fr' ? 'ans' : 'Years'}</div>
                <div className="text-gray-600">{tHero.warranty}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">30%</div>
                <div className="text-gray-600">{tHero.taxCredit}</div>
              </div>
            </div>

            {/* CTA */}
            <Button
              onClick={scrollToForm}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-xl h-auto shadow-2xl hover:shadow-purple-200 transition-all duration-300">
              {t.getQuote}
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>

            <p className="text-gray-500 text-sm">
              ✓ {t.noCard}  ✓ {t.freeConsult}  ✓ {t.takesSeconds}
            </p>
          </motion.div>

          {/* Value Props */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">CHF</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{t.massiveSavings}</h3>
              <p className="text-gray-600 text-sm">{t.savingsDesc}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-fuchsia-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{t.warrantyTitle}</h3>
              <p className="text-gray-600 text-sm">{t.warrantyDesc}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
              <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-fuchsia-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{t.independence}</h3>
              <p className="text-gray-600 text-sm">{t.independenceDesc}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
