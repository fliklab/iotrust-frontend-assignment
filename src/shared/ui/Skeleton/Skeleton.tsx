import type { CSSProperties } from 'react';

import * as styles from './skeleton.css';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  variant?: 'rectangular' | 'circular' | 'rounded';
  className?: string;
  style?: CSSProperties;
}

export function Skeleton({
  width,
  height,
  variant = 'rectangular',
  className,
  style,
}: SkeletonProps) {
  const variantClass =
    variant === 'circular'
      ? styles.circle
      : variant === 'rounded'
        ? styles.rounded
        : '';

  return (
    <div
      className={`${styles.skeleton} ${variantClass} ${className ?? ''}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        ...style,
      }}
    />
  );
}
