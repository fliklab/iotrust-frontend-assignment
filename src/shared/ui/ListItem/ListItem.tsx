import type { ReactNode } from 'react';

import type { ImageAsset } from '@shared/types';

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
        <picture>
          {icon.webp && <source srcSet={icon.webp} type="image/webp" />}
          <img
            src={icon.original}
            alt={iconAlt}
            className={styles.icon}
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
}
