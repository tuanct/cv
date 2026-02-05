import en from './dictionaries/en.json';
import ja from './dictionaries/ja.json';
import vi from './dictionaries/vi.json';

export const locales = ['vi', 'en', 'ja'] as const;
export type Locale = (typeof locales)[number];

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, ja, vi };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: string): Dictionary {
  if (isLocale(locale)) return dictionaries[locale];
  return dictionaries.vi;
}

