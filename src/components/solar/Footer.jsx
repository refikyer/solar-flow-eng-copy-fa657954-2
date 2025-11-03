
import React from 'react';
import { Sun, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">SolarFlow</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t.tagline}
            </p>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.location}</h4>
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
              <div className="text-gray-300">
                <div>Sentier de sales 9</div>
                <div>Genève 1205</div>
                <div className="mt-2">Switzerland</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 SolarFlow. {t.allRights}
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to={createPageUrl('PrivacyPolicy')} className="text-gray-400 hover:text-purple-400 transition-colors duration-300">{t.privacyPolicy}</Link>
              <Link to={createPageUrl('TermsOfService')} className="text-gray-400 hover:text-purple-400 transition-colors duration-300">{t.termsOfService}</Link>
              <Link to={createPageUrl('CookiePolicy')} className="text-gray-400 hover:text-purple-400 transition-colors duration-300">{t.cookiePolicy}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
