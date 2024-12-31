import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(HttpApi) // Permite cargar los archivos JSON
    .use(LanguageDetector) // Detecta el idioma del navegador o localStorage    // Chequear que estén en el mismo tipo de code!!!!!
    .use(initReactI18next) // Integra con React
    .init({
        supportedLngs: ['es', 'en', 'pt', 'it'],
        fallbackLng: 'en',
        backend: {
            loadPath: '/lang/{{lng}}/{{ns}}.json' || '/public/lang/{{lng}}/{{ns}}.json'// Ruta de los archivos JSON
        },
        interpolation: {
            escapeValue: false // React ya escapa los valores por defecto
        }
    });

export default i18n;
