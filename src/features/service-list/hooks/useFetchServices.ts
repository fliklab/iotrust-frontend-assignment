import { useInfiniteQuery } from '@tanstack/react-query';

import { useAppStore } from '@app/store';

import { fetchServices } from '../api';

const PAGE_SIZE = 20;

export function useFetchServices() {
  const { language, platform, env } = useAppStore();

  return useInfiniteQuery({
    queryKey: ['services', { language, platform, env }],
    queryFn: ({ pageParam = 0 }) =>
      fetchServices({
        language,
        platform,
        env,
        page: pageParam,
        pageSize: PAGE_SIZE,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    retry: (failureCount, error) => {
      if (failureCount < 3) {
        console.warn(`[Services] 재시도 ${failureCount}/3...`, error);
        return true;
      }
      console.warn(`[Services] 최대 재시도 횟수 초과`, error);
      return false;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000),
  });
}
