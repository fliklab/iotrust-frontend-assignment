export type Language = 'ko' | 'en';

export const SUPPORTED_LANGUAGES: Language[] = ['ko', 'en'];
export const DEFAULT_LANGUAGE: Language = 'en';

export function isValidLanguage(lang: string): lang is Language {
  return SUPPORTED_LANGUAGES.includes(lang as Language);
}

/**
 * Detects user's preferred language from browser settings.
 * Returns 'ko' if Korean is preferred, otherwise 'en'.
 */
export function detectLanguage(): Language {
  // Check navigator.language first (most specific)
  const primaryLang = navigator.language?.toLowerCase();
  if (primaryLang) {
    const langCode = primaryLang.split('-')[0] as Language;
    if (SUPPORTED_LANGUAGES.includes(langCode)) {
      return langCode;
    }
  }

  // Check navigator.languages array for fallback
  const languages = navigator.languages;
  if (languages?.length) {
    for (const lang of languages) {
      const langCode = lang.toLowerCase().split('-')[0] as Language;
      if (SUPPORTED_LANGUAGES.includes(langCode)) {
        return langCode;
      }
    }
  }

  return DEFAULT_LANGUAGE;
}

/**
 * Gets initial language from URL path or falls back to browser detection.
 * Priority: URL path > browser settings
 */
export function getInitialLanguage(): Language {
  const pathLang = window.location.pathname.split('/')[1];
  if (isValidLanguage(pathLang)) {
    return pathLang;
  }
  return detectLanguage();
}
