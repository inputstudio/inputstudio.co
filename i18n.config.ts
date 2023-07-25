import en from './locales/en.json';
import fr from './locales/fr.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  messages: {
    en,
    fr,
  },
}));
