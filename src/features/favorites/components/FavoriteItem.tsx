import { Bookmark } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import type { Favorite } from '../types';
import * as styles from './FavoriteItem.css';

interface FavoriteItemProps {
  favorite: Favorite;
  onDelete: (id: string) => void;
}

export function FavoriteItem({ favorite, onDelete }: FavoriteItemProps) {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <img
          src={favorite.iconUrl}
          alt={favorite.name}
          className={styles.icon}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.name}>{favorite.name}</div>
        <div className={styles.url}>{favorite.url}</div>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => onDelete(favorite.id)}
        aria-label={t('common.delete')}
      >
        <Bookmark size={20} fill="currentColor" />
        <span className={styles.deleteText}>{t('common.delete')}</span>
      </button>
    </div>
  );
}
