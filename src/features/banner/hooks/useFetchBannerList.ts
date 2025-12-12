import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { fetchBanners } from '../api';

export function useFetchBannerList() {
  const { i18n } = useTranslation();
  const language = (i18n.language as 'ko' | 'en') || 'en';

  return useQuery({
    queryKey: ['banners', language],
    queryFn: () => fetchBanners({ language }),
  });
}
