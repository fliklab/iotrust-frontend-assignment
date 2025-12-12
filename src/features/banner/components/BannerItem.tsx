import type { Banner } from '../types';
import * as styles from './BannerItem.css';

interface BannerItemProps {
  banner: Banner;
}

/**
 * description 텍스트에서 **bold** 마크다운과 줄바꿈을 파싱하여 렌더링
 */
function renderDescription(description: string) {
  const lines = description.split('\n');
  return lines.map((line, lineIndex) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    const renderedParts = parts.map((part, partIndex) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <span key={partIndex} className={styles.descriptionBold}>
            {part.slice(2, -2)}
          </span>
        );
      }
      return part;
    });
    return (
      <span key={lineIndex}>
        {renderedParts}
        {lineIndex < lines.length - 1 && <br />}
      </span>
    );
  });
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
        {banner.description && (
          <p className={styles.description}>
            {renderDescription(banner.description)}
          </p>
        )}
        {banner.ctaText && (
          <button className={styles.ctaButton} onClick={handleClick}>
            {banner.ctaText}
            <span className={styles.arrow}>›</span>
          </button>
        )}
      </div>
    </div>
  );
}
