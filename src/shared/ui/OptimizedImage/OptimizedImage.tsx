import type { ImgHTMLAttributes } from 'react';

import * as styles from './optimizedImage.css';

interface OptimizedImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  webpSrc?: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  rounded?: boolean;
  className?: string;
}

export function OptimizedImage({
  src,
  webpSrc,
  alt,
  width,
  height,
  rounded = false,
  className,
  ...props
}: OptimizedImageProps) {
  const containerStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <div
      className={`${styles.container} ${rounded ? styles.rounded : ''} ${className ?? ''}`}
      style={containerStyle}
    >
      <picture>
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={styles.image}
          {...props}
        />
      </picture>
    </div>
  );
}
