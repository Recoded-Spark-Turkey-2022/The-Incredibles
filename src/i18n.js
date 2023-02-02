import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import transaltionEN from './locales/en.json';
import transaltionAR from './locales/ar.json';
import transaltionTR from './locales/tr.json';

const resources = {
  en: {
    translation: transaltionEN,
  },
  ar: {
    translation: transaltionAR,
  },
  tr: {
    translation: transaltionTR,
  },
};
i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'en', 

    interpolation: {
      escapeValue: false, 
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
