import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import  LanguageDetector from "i18next-browser-languagedetector";
import transaltionEN from './locales/en.json';
import transaltionAR from './locales/ar.json';
import transaltionTR from './locales/tr.json';



 
   const resources= {
      en: {
        translation: transaltionEN
      },
      ar: {
        translation:transaltionAR
      },
      tr: {
        translation:transaltionTR
      }
    };
    i18n
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
      // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
      // if you're using a language detector, do not define the lng option
  
      interpolation: {
        escapeValue: false // react already safes from xss
      },
      react:{
        useSuspense: false
      }
    });
  
    export default i18n;