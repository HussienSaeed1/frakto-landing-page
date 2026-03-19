'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children, initialLanguage = 'en' }) {
  const [language, setLanguage] = useState(initialLanguage);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true);
      const params = new URLSearchParams(window.location.search);
      const langParam = params.get('lang');
      const validLang = ['en', 'ar'];

      if (langParam && validLang.includes(langParam)) {
        localStorage.setItem('language', langParam);
        setLanguage(langParam);
      } else {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage && validLang.includes(storedLanguage) && storedLanguage !== language) {
          setLanguage(storedLanguage);
        }
      }
    }
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    if (isMounted) {
      localStorage.setItem('language', newLanguage);
    }
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
