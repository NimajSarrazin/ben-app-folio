import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      resume: 'CV',
      project: 'Project',
      contact: 'Contact',
    },
  },
  fr: {
    translation: {
      home: 'Accueil',
      about: 'A propos',
      services: 'Services',
      resume: 'CV',
      project: 'Projet',
      contact: 'Contact',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Langue par défaut
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
