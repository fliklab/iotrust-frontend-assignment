import { Bookmark } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { ListItem } from '@shared/ui';

import type { Favorite } from '../types';
import * as styles from './FavoriteItem.css';

interface FavoriteItemProps {
  favorite: Favorite;
  onDelete: (id: string) => void;
}

export function FavoriteItem({ favorite, onDelete }: FavoriteItemProps) {
  const { t } = useTranslation();

  const handleClick = () => {
    window.open(favorite.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <ListItem
      iconUrl={favorite.iconUrl}
      iconAlt={favorite.name}
      title={favorite.name}
      subtitle={favorite.url}
      onClick={handleClick}
      action={
        <button
          className={styles.deleteButton}
          onClick={(e) => {
            e.stopPropagation();
            onDelete(favorite.id);
          }}
          aria-label={t('dapp_favorite_delete')}
        >
          <Bookmark size={20} fill="currentColor" />
          <span className={styles.deleteText}>{t('dapp_favorite_delete')}</span>
        </button>
      }
    />
  );
}
