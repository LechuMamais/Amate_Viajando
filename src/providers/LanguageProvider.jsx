/*import { createContext, useEffect, useMemo, useState } from 'react';
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
    [],
  );

  useEffect(() => {
    checkAndSetLanguage();
    if (language?.iso2code) {
      i18n.changeLanguage(language.iso2code);
    }
  }, [language]);

  const value = useMemo(() => ({ language, changeLanguage }), [language, changeLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};*/

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// El componente está funcionando, aunque no está optimizado.
// El siguiente es una versión optimizada del provider que no recarga la página al cambiar el idioma.
// Pero, hay que chequear que funcione, ya que se debería volver a pedirle a la BD los datos en el idioma seleccionado.
// Vamos a intentar implementarlo después de agregar el alemán en toda la aplicación.

import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { languagesAvailable } from '../utils/languagesAvailable';
import i18n from 'i18next';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const findSameLang = useCallback((lang) => languagesAvailable.find((language) => language.iso3code === lang), []);

  const [language, setLanguage] = useState(() => {
    const localSavedLang = localStorage.getItem('lang');
    return localSavedLang ? findSameLang(localSavedLang) : languagesAvailable[0];
  });

  const checkAndSetLanguage = useCallback(() => {
    const localSavedLang = localStorage.getItem('lang');

    if (localSavedLang) {
      const lang = findSameLang(localSavedLang);
      if (lang) {
        setLanguage(lang);
      }
    } else {
      const navigatorLang = (navigator.language || navigator.userLanguage).slice(0, 2);
      const defaultLang = languagesAvailable.find((lang) => lang.iso2code === navigatorLang) || languagesAvailable[0];
      setLanguage(defaultLang);
      localStorage.setItem('lang', defaultLang.iso3code);
    }
  }, [findSameLang]);

  const changeLanguage = useCallback(
    (newLang) => {
      const lang = findSameLang(newLang);
      if (lang) {
        setLanguage(lang);
        localStorage.setItem('lang', newLang);
        i18n.changeLanguage(lang.iso2code); // Actualiza el idioma en i18next
      }
    },
    [findSameLang],
  );

  useEffect(() => {
    checkAndSetLanguage();
  }, [checkAndSetLanguage]);

  useEffect(() => {
    if (language?.iso2code) {
      i18n.changeLanguage(language.iso2code);
    }
  }, [language]);

  const value = useMemo(() => ({ language, changeLanguage }), [language, changeLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
