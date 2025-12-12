import { Skeleton } from '@shared/ui';

import * as styles from './ServiceSkeleton.css';

export function ServiceSkeleton() {
  return (
    <div className={styles.container}>
      <Skeleton width={56} height={56} variant="rounded" />
      <div className={styles.content}>
        <Skeleton width="50%" height={17} style={{ marginBottom: '4px' }} />
        <Skeleton width="80%" height={14} />
      </div>
    </div>
  );
}
