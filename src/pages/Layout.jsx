
import React from 'react';
import { LanguageProvider } from './components/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function Layout({ children, currentPageName }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <LanguageSwitcher />
        {children}
      </div>
    </LanguageProvider>
  );
}
