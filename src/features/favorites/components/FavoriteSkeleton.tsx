import { Skeleton } from '@shared/ui';

import * as styles from './FavoriteSkeleton.css';

export function FavoriteSkeleton() {
  return (
    <div className={styles.container}>
      <Skeleton width={56} height={56} variant="rounded" />
      <div className={styles.content}>
        <Skeleton width="60%" height={17} style={{ marginBottom: '4px' }} />
        <Skeleton width="80%" height={14} />
      </div>
    </div>
  );
}
