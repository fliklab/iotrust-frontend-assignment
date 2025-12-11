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
  });
}
