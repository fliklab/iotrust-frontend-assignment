import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useVirtualizer } from '@tanstack/react-virtual';

import { SectionTitle } from '@shared/ui';

import { useFetchServices, useServiceSearch } from '../hooks';
import type { Service } from '../types';
import { SearchInput } from './SearchInput';
import { ServiceDetailSheet } from './ServiceDetailSheet';
import { ServiceItem } from './ServiceItem';
import * as styles from './ServiceList.css';
import { ServiceSkeleton } from './ServiceSkeleton';

const ITEM_HEIGHT = 80;
const OVERSCAN = 5;
const MIN_FILTERED_ITEMS = 10;

function filterServices(services: Service[], search: string): Service[] {
  if (!search.trim()) return services;

  const searchLower = search.toLowerCase().trim();
  return services.filter(
    (service) =>
      service.name.toLowerCase().includes(searchLower) ||
      service.description.toLowerCase().includes(searchLower)
  );
}

export function ServiceList() {
  const { t } = useTranslation();
  const parentRef = useRef<HTMLDivElement>(null);
  const { searchTerm, setSearchTerm, debouncedSearch } = useServiceSearch();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useFetchServices();

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseSheet = () => {
    setSelectedService(null);
  };

  // All loaded items from server
  const allLoadedItems = useMemo(
    () => data?.pages.flatMap((page) => page.items) ?? [],
    [data]
  );

  // Client-side filtering
  const filteredItems = useMemo(
    () => filterServices(allLoadedItems, debouncedSearch),
    [allLoadedItems, debouncedSearch]
  );

  // NOTE: useVirtualizer는 React Compiler의 자동 최적화 대상에서 제외되지만 동작에는 문제 없음.
  const virtualizer = useVirtualizer({
    count: filteredItems.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ITEM_HEIGHT,
    overscan: OVERSCAN,
  });

  const virtualItems = virtualizer.getVirtualItems();

  // Fetch more if filtered results are too few and more data is available
  useEffect(() => {
    if (
      debouncedSearch &&
      filteredItems.length < MIN_FILTERED_ITEMS &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    debouncedSearch,
    filteredItems.length,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  ]);

  // Infinite scroll trigger (when not searching or scrolling to end)
  useEffect(() => {
    const lastItem = virtualItems[virtualItems.length - 1];
    if (!lastItem) return;

    if (
      lastItem.index >= filteredItems.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    virtualItems,
    filteredItems.length,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  ]);

  if (isLoading) {
    return (
      <div className={styles.container}>
        <SectionTitle>{t('services.title')}</SectionTitle>
        <div className={styles.searchWrapper}>
          <SearchInput value={searchTerm} onChange={setSearchTerm} />
        </div>
        {Array.from({ length: 5 }).map((_, i) => (
          <ServiceSkeleton key={i} />
        ))}
      </div>
    );
  }

  const showEmpty = filteredItems.length === 0 && !isFetchingNextPage;

  return (
    <div className={styles.container}>
      <SectionTitle>{t('services.title')}</SectionTitle>
      <div className={styles.searchWrapper}>
        <SearchInput value={searchTerm} onChange={setSearchTerm} />
      </div>

      {showEmpty ? (
        <div className={styles.emptyState}>
          {debouncedSearch
            ? t('services.noSearchResults')
            : t('services.empty')}
        </div>
      ) : (
        <div ref={parentRef} className={styles.listContainer}>
          <div
            className={styles.virtualListWrapper}
            style={{ height: virtualizer.getTotalSize() }}
          >
            {virtualItems.map((virtualItem) => {
              const service = filteredItems[virtualItem.index];
              return (
                <div
                  key={virtualItem.key}
                  className={styles.virtualItem}
                  style={{
                    height: virtualItem.size,
                    transform: `translateY(${virtualItem.start}px)`,
                  }}
                >
                  <ServiceItem
                    service={service}
                    onClick={handleServiceClick}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {isFetchingNextPage && (
        <div className={styles.loadingMore}>{t('common.loading')}</div>
      )}

      <ServiceDetailSheet
        service={selectedService}
        isOpen={selectedService !== null}
        onClose={handleCloseSheet}
      />
    </div>
  );
}
