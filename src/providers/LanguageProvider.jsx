import { createContext, useEffect, useMemo, useState } from 'react';
import { languagesAvailable } from '../utils/languagesAvailable';
import i18n from 'i18next';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const findSameLang = (lang) => languagesAvailable.find((language) => language.iso3code === lang);

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

  const changeLanguage = useMemo(
    () => (newLang) => {
      languagesAvailable.map((lang) => {
        if (lang.iso3code === newLang) {
          setLanguage(lang);
          localStorage.setItem('lang', newLang);

          i18n.changeLanguage(lang.iso2code); // Aquí pasas el código que i18next entiende, como 'es', 'en', 'it', etc.

          location.reload();
        }
      });
    },
    [], // No depende de ninguna variable, por lo que su referencia no cambiará.
  );

  useEffect(() => {
    checkAndSetLanguage();
    if (language?.iso2code) {
      i18n.changeLanguage(language.iso2code);
    }
  }, [language]);

  const value = useMemo(() => ({ language, changeLanguage }), [language, changeLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
