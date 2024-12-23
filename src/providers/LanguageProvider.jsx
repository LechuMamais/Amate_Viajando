import { createContext, useEffect, useState } from 'react';
import { languagesAvailable } from '../utils/languagesAvailable';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState({ iso3code: localStorage.getItem('lang') });

  const checkAndSetLanguage = () => {
    const localSavedLang = localStorage.getItem('lang');
    if (localSavedLang) {
      const lang = languagesAvailable.find((lang) => lang.iso3code === localSavedLang);

      if (lang) {
        setLanguage(lang);
      }
    } else {
      const navigatorLang = (navigator.language || navigator.userLanguage).slice(0, 2);
      const defaultLang = languagesAvailable[0];
      setLanguage(defaultLang);
      languagesAvailable.map((lang) => {
        if (lang.iso2code === navigatorLang) {
          setLanguage(lang);
          localStorage.setItem('lang', lang.iso3code);
        }
      });
    }
  };

  const changeLanguage = (newLang) => {
    languagesAvailable.map((lang) => {
      if (lang.iso3code === newLang) {
        setLanguage(lang);
        localStorage.setItem('lang', newLang);
        location.reload();
      }
    });
  };

  useEffect(() => {
    checkAndSetLanguage();
  }, []);

  return <LanguageContext.Provider value={{ language, changeLanguage }}>{children}</LanguageContext.Provider>;
};
