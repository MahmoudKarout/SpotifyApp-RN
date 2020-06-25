import * as Localization from 'expo-localization';

import i18n from 'i18n-js';

import en from '../localization/language/en.json';
import es from '../localization/language/es.json';


// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
    en: en,
    es: es,
};
i18n.locale = Localization.locale;


// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

