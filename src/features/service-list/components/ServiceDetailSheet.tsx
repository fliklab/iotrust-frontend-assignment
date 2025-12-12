import { useTranslation } from 'react-i18next';

import { BottomSheet } from '@shared/ui';

import type { Service } from '../types';
import * as styles from './ServiceDetailSheet.css';

interface ServiceDetailSheetProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ServiceDetailSheet({
  service,
  isOpen,
  onClose,
}: ServiceDetailSheetProps) {
  const { t } = useTranslation();

  if (!service) return null;

  const handleGo = () => {
    window.open(service.url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <div className={styles.footerContainer}>
          <button className={styles.goButton} onClick={handleGo}>
            {t('go_to_dapp')}
          </button>
        </div>
      }
    >
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <img
            src={service.iconUrl}
            alt={service.name}
            className={styles.icon}
          />
        </div>
        <div className={styles.serviceName}>{service.name}</div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionLabel}>{t('services.description')}</div>
        <div className={styles.description}>{service.description}</div>
      </div>
    </BottomSheet>
  );
}
