import { type ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import * as styles from './modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.container} role="dialog" aria-modal="true">
        {children}
      </div>
    </>,
    document.body
  );
}

Modal.Title = function ModalTitle({ children }: { children: ReactNode }) {
  return <h2 className={styles.title}>{children}</h2>;
};

Modal.Divider = function ModalDivider() {
  return <div className={styles.divider} />;
};

Modal.Message = function ModalMessage({ children }: { children: ReactNode }) {
  return <p className={styles.message}>{children}</p>;
};

Modal.ButtonGroup = function ModalButtonGroup({
  children,
}: {
  children: ReactNode;
}) {
  return <div className={styles.buttonGroup}>{children}</div>;
};
