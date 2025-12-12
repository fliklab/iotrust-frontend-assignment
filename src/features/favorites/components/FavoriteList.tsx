import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ErrorFallback, SectionTitle } from '@shared/ui';

import { useFavorites } from '../hooks';
import { DeleteFavoriteModal } from './DeleteFavoriteModal';
import { FavoriteItem } from './FavoriteItem';
import * as styles from './FavoriteList.css';
import { FavoriteSkeleton } from './FavoriteSkeleton';

export function FavoriteList() {
  const { t } = useTranslation();
  const { favorites, isLoading, isError, refetch, deleteFavorite } =
    useFavorites();
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
        <SectionTitle>{t('dapp_favorite_title')}</SectionTitle>
        {Array.from({ length: 3 }).map((_, i) => (
          <FavoriteSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles.container}>
        <SectionTitle>{t('dapp_favorite_title')}</SectionTitle>
        <ErrorFallback onRetry={() => refetch()} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <SectionTitle>{t('dapp_favorite_title')}</SectionTitle>
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
