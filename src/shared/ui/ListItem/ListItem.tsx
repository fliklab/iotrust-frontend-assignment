import type { ReactNode } from 'react';

import * as styles from './listItem.css';

interface ListItemProps {
  iconUrl: string;
  iconAlt: string;
  title: string;
  subtitle: string;
  action?: ReactNode;
  onClick?: () => void;
}

export function ListItem({
  iconUrl,
  iconAlt,
  title,
  subtitle,
  action,
  onClick,
}: ListItemProps) {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.iconWrapper}>
        <img
          src={iconUrl}
          alt={iconAlt}
          className={styles.icon}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
}
