import { type ImgHTMLAttributes, useState } from 'react';

import type { ImageAsset } from '@shared/types';

import * as styles from './optimizedImage.css';

interface OptimizedImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  image: ImageAsset;
  alt: string;
  width?: number | string;
  height?: number | string;
  rounded?: boolean;
  className?: string;
}

export function OptimizedImage({
  image,
  alt,
  width,
  height,
  rounded = false,
  className,
  ...props
}: OptimizedImageProps) {
  const [hasError, setHasError] = useState(false);

  const containerStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div
      className={`${styles.container} ${rounded ? styles.rounded : ''} ${className ?? ''}`}
      style={containerStyle}
    >
      {hasError ? (
        <div className={styles.fallback} />
      ) : (
        <picture>
          {image.webp && <source srcSet={image.webp} type="image/webp" />}
          <img
            src={image.original}
            alt={alt}
            loading="lazy"
            decoding="async"
            className={styles.image}
            onError={handleError}
            {...props}
          />
        </picture>
      )}
    </div>
  );
}
