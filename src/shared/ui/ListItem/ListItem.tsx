import type { ReactNode } from 'react';

import type { ImageAsset } from '@shared/types';

import { OptimizedImage } from '../OptimizedImage';
import * as styles from './listItem.css';

interface ListItemProps {
  icon: ImageAsset;
  iconAlt: string;
  title: string;
  subtitle: string;
  action?: ReactNode;
  onClick?: () => void;
}

export function ListItem({
  icon,
  iconAlt,
  title,
  subtitle,
  action,
  onClick,
}: ListItemProps) {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.iconWrapper}>
        <OptimizedImage image={icon} alt={iconAlt} className={styles.icon} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
}
