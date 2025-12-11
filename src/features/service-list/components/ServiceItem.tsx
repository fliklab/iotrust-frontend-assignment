import { ChevronRight } from 'lucide-react';

import type { Service } from '../types';
import * as styles from './ServiceItem.css';

interface ServiceItemProps {
  service: Service;
  onClick?: (service: Service) => void;
}

export function ServiceItem({ service, onClick }: ServiceItemProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(service);
    } else {
      window.open(service.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.iconWrapper}>
        <img
          src={service.iconUrl}
          alt={service.name}
          className={styles.icon}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.name}>{service.name}</div>
        <div className={styles.description}>{service.description}</div>
      </div>
      <ChevronRight size={20} className={styles.arrow} />
    </div>
  );
}
