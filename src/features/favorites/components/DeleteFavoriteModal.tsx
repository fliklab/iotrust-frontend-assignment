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
      <Modal.Message>{t('favorites.deleteMessage')}</Modal.Message>
      <Modal.ButtonGroup>
        <div className={styles.buttonWrapper}>
          <Button variant="secondary" fullWidth onClick={onClose}>
            {t('common.cancel')}
          </Button>
        </div>
        <div className={styles.buttonWrapper}>
          <Button variant="secondary" fullWidth onClick={handleConfirm}>
            {t('common.ok')}
          </Button>
        </div>
      </Modal.ButtonGroup>
    </Modal>
  );
}
