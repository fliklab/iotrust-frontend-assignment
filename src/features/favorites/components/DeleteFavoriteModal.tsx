import { useTranslation } from 'react-i18next';

import { Button, Modal } from '@shared/ui';

import * as styles from './DeleteFavoriteModal.css';

interface DeleteFavoriteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function DeleteFavoriteModal({
  isOpen,
  onClose,
  onConfirm,
}: DeleteFavoriteModalProps) {
  const { t } = useTranslation();

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Title>{t('favorites.deleteTitle')}</Modal.Title>
      <Modal.Divider />
      <Modal.Message>{t('dapp_favorite_delete_confirm')}</Modal.Message>
      <Modal.ButtonGroup>
        <div className={styles.buttonWrapper}>
          <Button variant="secondary" fullWidth onClick={onClose}>
            {t('button_cancel')}
          </Button>
        </div>
        <div className={styles.buttonWrapper}>
          <Button variant="secondary" fullWidth onClick={handleConfirm}>
            {t('button_confirm')}
          </Button>
        </div>
      </Modal.ButtonGroup>
    </Modal>
  );
}
