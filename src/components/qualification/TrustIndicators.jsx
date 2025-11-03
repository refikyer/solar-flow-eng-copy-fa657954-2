
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Users, Award } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function TrustIndicators() {
  const { language } = useLanguage();
  const t = translations[language].trust;

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg text-center border border-purple-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}>

            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">50,000+</div>
            <div className="text-gray-600">{t.happyCustomers}</div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg text-center border border-purple-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>

            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-fuchsia-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent mb-2">4.9/5</div>
            <div className="text-gray-600">{t.avgRating}</div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg text-center border border-purple-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}>

            <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-fuchsia-600" />
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent mb-2">25 {language === 'de' ? 'Jahre' : language === 'fr' ? 'ans' : 'Years'}</div>
            <div className="text-gray-600">{translations[language].hero.warranty}</div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg text-center border border-purple-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}>

            <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-pink-600" />
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">2,400 CHF</div>
            <div className="text-gray-600">{t.avgSavings}</div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 text-white rounded-3xl p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}>

          <h3 className="text-3xl font-bold mb-4">
            {t.whyChoose}
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-5xl font-bold mb-2">0 CHF</div>
              <div className="text-blue-100">{t.upfrontCost}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">30%</div>
              <div className="text-purple-100">{t.taxCredit}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">40%</div>
              <div className="text-fuchsia-100">{t.billReduction}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
