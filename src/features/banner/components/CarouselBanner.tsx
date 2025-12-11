import { useRef } from 'react';

import { Skeleton } from '@shared/ui';

import { useBannerCarousel, useFetchBannerList } from '../hooks';
import { BannerItem } from './BannerItem';
import * as styles from './CarouselBanner.css';
import { CarouselIndicator } from './CarouselIndicator';

export function CarouselBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, isError } = useFetchBannerList();
  const banners = data?.items ?? [];

  const { currentIndex, dragOffset, isDragging, dragHandlers } =
    useBannerCarousel({
      totalCount: banners.length,
      enabled: banners.length > 1,
    });

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.slide}>
          <Skeleton width="100%" height={120} />
        </div>
      </div>
    );
  }

  if (isError || banners.length === 0) {
    return null;
  }

  return (
    <div className={styles.container} ref={containerRef} {...dragHandlers}>
      <div
        className={styles.track}
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
          transition: isDragging ? 'none' : 'transform 0.25s ease-out',
          cursor: isDragging ? 'grabbing' : 'pointer',
        }}
      >
        {banners.map((banner) => (
          <div key={banner.id} className={styles.slide}>
            <BannerItem banner={banner} />
          </div>
        ))}
      </div>
      {banners.length > 1 && (
        <CarouselIndicator current={currentIndex + 1} total={banners.length} />
      )}
    </div>
  );
}
