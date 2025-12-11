import type { ReactNode } from 'react';

import * as styles from './sectionTitle.css';

interface SectionTitleProps {
  children: ReactNode;
  action?: ReactNode;
}

export function SectionTitle({ children, action }: SectionTitleProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{children}</h3>
      {action && <span className={styles.action}>{action}</span>}
    </div>
  );
}
