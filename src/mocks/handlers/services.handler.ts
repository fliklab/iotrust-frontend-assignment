import type { ServiceListParams, ServiceListResponse } from '@shared/types';

import { getFilteredServices } from '../data';

const DEFAULT_PAGE_SIZE = 20;

export function getServices(params: ServiceListParams): ServiceListResponse {
  const { language, platform, env, page, pageSize = DEFAULT_PAGE_SIZE } = params;

  // 언어/플랫폼/환경에 맞는 서비스 데이터 로드 (이미 필터링됨)
  const filtered = getFilteredServices(language, platform, env);

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
