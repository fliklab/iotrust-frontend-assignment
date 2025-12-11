import type { Banner } from '../types';
import * as styles from './BannerItem.css';

interface BannerItemProps {
  banner: Banner;
}

export function BannerItem({ banner }: BannerItemProps) {
  const handleClick = () => {
    window.open(banner.linkUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.container}>
      <img
        src={banner.imageUrl}
        alt=""
        className={styles.image}
        loading="lazy"
      />
      <div className={styles.content}>
        <button className={styles.ctaButton} onClick={handleClick}>
          {banner.ctaText}
          <span className={styles.arrow}>›</span>
        </button>
      </div>
    </div>
  );
}
