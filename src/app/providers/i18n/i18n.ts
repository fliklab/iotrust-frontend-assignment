import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { getInitialLanguage } from './detectLanguage';
import en from './en.json';
import ko from './ko.json';

i18n.use(initReactI18next).init({
  resources: {
    ko: { translation: ko },
    en: { translation: en },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
