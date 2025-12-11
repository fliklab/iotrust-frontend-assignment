import * as styles from './CarouselIndicator.css';

interface CarouselIndicatorProps {
  current: number;
  total: number;
}

export function CarouselIndicator({ current, total }: CarouselIndicatorProps) {
  return (
    <div className={styles.container}>
      <span className={styles.text}>
        {current} / {total}
      </span>
    </div>
  );
}
