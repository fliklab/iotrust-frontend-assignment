import { useQuery } from '@tanstack/react-query';

import {
  DEFAULT_LANGUAGE,
  isValidLanguage,
  type Language,
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
  });
}
