import type { ServiceListParams, ServiceListResponse } from '@shared/types';

import { mockServices } from '../data';

const DEFAULT_PAGE_SIZE = 20;

export function getServices(params: ServiceListParams): ServiceListResponse {
  const { language, platform, env, page, pageSize = DEFAULT_PAGE_SIZE } = params;

  // Filter by visibility (language, platform, env)
  const filtered = mockServices.filter((service) => {
    const { languages, platforms, environments } = service.visibility;
    return (
      languages.includes(language) &&
      platforms.includes(platform) &&
      environments.includes(env)
    );
  });

  const totalCount = filtered.length;
  const startIndex = page * pageSize;
  const endIndex = startIndex + pageSize;
  const items = filtered.slice(startIndex, endIndex);
  const hasMore = endIndex < totalCount;

  return {
    items,
    nextCursor: hasMore ? page + 1 : null,
    totalCount,
  };
}
