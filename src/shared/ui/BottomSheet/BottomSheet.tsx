import type { ReactNode } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

import { X } from 'lucide-react';

import * as styles from './bottomSheet.css';

const ANIMATION_DURATION = 300;

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
}

export function BottomSheet({
  isOpen,
  onClose,
  children,
  footer,
}: BottomSheetProps) {
  const [isClosing, setIsClosing] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keep rendered while closing animation plays
  const shouldRender = isOpen || isClosing;

  // Reset closing state when opened
  if (isOpen && isClosing) {
    setIsClosing(false);
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    closeTimeoutRef.current = setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, ANIMATION_DURATION);
  }, [isClosing, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (shouldRender) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [shouldRender]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isClosing) {
        handleClose();
      }
    };

    if (shouldRender) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [shouldRender, isClosing, handleClose]);

  if (!shouldRender) return null;

  const overlayClassName = `${styles.overlay} ${isClosing ? styles.overlayClosing : styles.overlayOpen}`;
  const containerClassName = `${styles.container} ${isClosing ? styles.containerClosing : styles.containerOpen}`;

  return (
    <div className={styles.wrapper}>
      <div className={overlayClassName} onClick={isClosing ? undefined : handleClose} />
      <div className={containerClassName}>
        <div className={styles.header}>
          <button
            className={styles.closeButton}
            onClick={handleClose}
            disabled={isClosing}
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>
        <div className={styles.content}>{children}</div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>
  );
}
