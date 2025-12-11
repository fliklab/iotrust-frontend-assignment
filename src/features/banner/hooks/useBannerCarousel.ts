import { useCallback, useEffect, useRef, useState } from 'react';

interface UseBannerCarouselOptions {
  totalCount: number;
  autoPlayInterval?: number;
  enabled?: boolean;
}

export function useBannerCarousel({
  totalCount,
  autoPlayInterval = 5000,
  enabled = true,
}: UseBannerCarouselOptions) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalCount);
  }, [totalCount]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalCount) % totalCount);
  }, [totalCount]);

  const goToIndex = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (enabled && totalCount > 1) {
      intervalRef.current = window.setInterval(goToNext, autoPlayInterval);
    }
  }, [enabled, totalCount, autoPlayInterval, goToNext]);

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [resetInterval]);

  const handleManualNavigation = useCallback(
    (action: () => void) => {
      action();
      resetInterval();
    },
    [resetInterval]
  );

  return {
    currentIndex,
    goToNext: () => handleManualNavigation(goToNext),
    goToPrev: () => handleManualNavigation(goToPrev),
    goToIndex: (index: number) => handleManualNavigation(() => goToIndex(index)),
  };
}
