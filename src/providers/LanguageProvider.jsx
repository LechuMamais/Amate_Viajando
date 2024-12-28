import { createContext, useEffect, useState } from 'react';
import { languagesAvailable } from '../utils/languagesAvailable';
import i18n from 'i18next';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  console.log('LanguageProvider');

  const findSameLang = (lang) => {
    return languagesAvailable.find((language) => language.iso3code === lang);
  };

  const [language, setLanguage] = useState(findSameLang(localStorage.getItem('lang')));

  const checkAndSetLanguage = () => {
    const localSavedLang = localStorage.getItem('lang');
    if (localSavedLang) {
      const lang = findSameLang(localSavedLang);

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

        console.log('newLang', lang.iso2code);
        i18n.changeLanguage(lang.iso2code); // Aquí pasas el código que i18next entiende, como 'es', 'en', 'it', etc.

        location.reload();
      }
    });
  };

  useEffect(() => {
    checkAndSetLanguage();
    if (language?.iso3code) {
      i18n.changeLanguage(language.iso3code);
    }
  }, [language]);

  return <LanguageContext.Provider value={{ language, changeLanguage }}>{children}</LanguageContext.Provider>;
};
