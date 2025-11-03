import React from 'react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  const flags = [
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'fr', flag: '🇫🇷', name: 'Français' },
    { code: 'de', flag: '🇩🇪', name: 'Deutsch' }
  ];

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2 bg-white rounded-full shadow-lg p-2">
      {flags.map((item) => (
        <motion.button
          key={item.code}
          onClick={() => changeLanguage(item.code)}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl transition-all duration-200 ${
            language === item.code 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-110' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title={item.name}
        >
          {item.flag}
        </motion.button>
      ))}
    </div>
  );
}