import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import id from './locales/id';

const detectionOptions = {
  // order: ['path', 'queryString', 'subdomain', 'localStorage', 'cookie', 'htmlTag'],
  order: ['localStorage', 'path', 'cookie'],
  lookupFromPathIndex: 0,
  lookupCookie: 'i18next',
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: en
      },
      id: {
        translation: id
      }
    },
    fallbackLng: 'en',
    keySeparator: false,
    detection: detectionOptions,
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    cookieOptions: { path: '/', sameSite: 'strict' }
  });

i18next.on('languageChanged', (lng) => {
  console.log('berubah', lng);
});

export default i18next;
