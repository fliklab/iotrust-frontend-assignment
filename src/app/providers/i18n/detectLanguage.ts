export type Language = 'ko' | 'en';

const SUPPORTED_LANGUAGES: Language[] = ['ko', 'en'];
const DEFAULT_LANGUAGE: Language = 'en';

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
