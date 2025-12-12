import { useQuery } from '@tanstack/react-query';

import {
  DEFAULT_LANGUAGE,
  type Language,
  isValidLanguage,
} from '@app/providers/i18n';
import { useAppStore } from '@app/store';

import { fetchBanners } from '../api';

export function useFetchBannerList() {
  const storeLanguage = useAppStore((state) => state.language);
  const language: Language = isValidLanguage(storeLanguage)
    ? storeLanguage
    : DEFAULT_LANGUAGE;

  return useQuery({
    queryKey: ['banners', language],
    queryFn: () => fetchBanners({ language }),
    retry: (failureCount, error) => {
      if (failureCount < 3) {
        console.warn(`[Banners] 재시도 ${failureCount}/3...`, error);
        return true;
      }
      console.warn(`[Banners] 최대 재시도 횟수 초과`, error);
      return false;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000),
  });
}
