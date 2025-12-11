import { useCallback, useEffect, useRef, useState } from 'react';

interface UseBannerCarouselOptions {
  totalCount: number;
  autoPlayInterval?: number;
  enabled?: boolean;
}

interface DragState {
  startX: number;
  currentX: number;
  isDragging: boolean;
}

export function useBannerCarousel({
  totalCount,
  autoPlayInterval = 5000,
  enabled = true,
}: UseBannerCarouselOptions) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const dragStateRef = useRef<DragState>({
    startX: 0,
    currentX: 0,
    isDragging: false,
  });

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

  // Drag handlers
  const handleDragStart = useCallback((clientX: number) => {
    dragStateRef.current = {
      startX: clientX,
      currentX: clientX,
      isDragging: true,
    };
    setIsDragging(true);
  }, []);

  const handleDragMove = useCallback((clientX: number) => {
    if (!dragStateRef.current.isDragging) return;

    dragStateRef.current.currentX = clientX;
    const diff = clientX - dragStateRef.current.startX;
    setDragOffset(diff);
  }, []);

  const handleDragEnd = useCallback(() => {
    if (!dragStateRef.current.isDragging) return;

    const diff = dragStateRef.current.currentX - dragStateRef.current.startX;
    const threshold = 50;

    if (diff > threshold && currentIndex > 0) {
      handleManualNavigation(goToPrev);
    } else if (diff < -threshold && currentIndex < totalCount - 1) {
      handleManualNavigation(goToNext);
    }

    dragStateRef.current.isDragging = false;
    setIsDragging(false);
    setDragOffset(0);
  }, [currentIndex, totalCount, goToNext, goToPrev, handleManualNavigation]);

  // Mouse events
  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      handleDragStart(e.clientX);
    },
    [handleDragStart]
  );

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      handleDragMove(e.clientX);
    },
    [handleDragMove]
  );

  const onMouseUp = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  const onMouseLeave = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  // Touch events
  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      handleDragStart(e.touches[0].clientX);
    },
    [handleDragStart]
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleDragMove(e.touches[0].clientX);
    },
    [handleDragMove]
  );

  const onTouchEnd = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  return {
    currentIndex,
    dragOffset,
    isDragging,
    goToNext: () => handleManualNavigation(goToNext),
    goToPrev: () => handleManualNavigation(goToPrev),
    goToIndex: (index: number) => handleManualNavigation(() => goToIndex(index)),
    dragHandlers: {
      onMouseDown,
      onMouseMove,
      onMouseUp,
      onMouseLeave,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
    },
  };
}
