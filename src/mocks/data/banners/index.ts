import type { Language } from '@app/providers/i18n';

import type { Banner } from '@shared/types';

import { bannersEn } from './banners.en';
import { bannersKo } from './banners.ko';

// 언어에 따라 배너 반환
export function getBannersByLanguage(language: Language): Banner[] {
  return language === 'ko' ? bannersKo : bannersEn;
}

export { bannersEn, bannersKo };
