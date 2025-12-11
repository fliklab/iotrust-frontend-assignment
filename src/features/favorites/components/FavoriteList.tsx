import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SectionTitle, Skeleton } from '@shared/ui';

import { useFavorites } from '../hooks';
import { DeleteFavoriteModal } from './DeleteFavoriteModal';
import { FavoriteItem } from './FavoriteItem';
import * as styles from './FavoriteList.css';

export function FavoriteList() {
  const { t } = useTranslation();
  const { favorites, isLoading, deleteFavorite } = useFavorites();
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

  const handleDeleteClick = (id: string) => {
    setDeleteTargetId(id);
  };

  const handleConfirmDelete = () => {
    if (deleteTargetId) {
      deleteFavorite(deleteTargetId);
      setDeleteTargetId(null);
    }
  };

  const handleCloseModal = () => {
    setDeleteTargetId(null);
  };

  if (isLoading) {
    return (
      <div className={styles.container}>
        <SectionTitle>{t('favorites.title')}</SectionTitle>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} style={{ padding: '12px 0', display: 'flex', gap: '12px' }}>
            <Skeleton width={64} height={64} variant="rounded" />
            <div style={{ flex: 1 }}>
              <Skeleton width="60%" height={20} style={{ marginBottom: '8px' }} />
              <Skeleton width="80%" height={14} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <SectionTitle>{t('favorites.title')}</SectionTitle>
      {favorites.length === 0 ? (
        <div className={styles.emptyState}>{t('favorites.empty')}</div>
      ) : (
        favorites.map((favorite) => (
          <FavoriteItem
            key={favorite.id}
            favorite={favorite}
            onDelete={handleDeleteClick}
          />
        ))
      )}
      <DeleteFavoriteModal
        isOpen={deleteTargetId !== null}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
