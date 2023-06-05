import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import translationEn from './locales/en/translations.json';
import translationRu from './locales/ru/translations.json';

const resources = {
    en: {
      translation: translationEn
    },
    ru: {
      translation: translationRu
    }
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        resources,
        fallbackLng: 'en',
    });

export default i18n;