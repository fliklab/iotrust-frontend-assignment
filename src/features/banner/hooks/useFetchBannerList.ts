import { useQuery } from '@tanstack/react-query';

import { fetchBanners } from '../api';

export function useFetchBannerList() {
  return useQuery({
    queryKey: ['banners'],
    queryFn: fetchBanners,
  });
}
