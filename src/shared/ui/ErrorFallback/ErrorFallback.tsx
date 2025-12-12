import { useTranslation } from 'react-i18next';

import * as styles from './errorFallback.css';

interface ErrorFallbackProps {
  message?: string;
  retryText?: string;
  onRetry?: () => void;
}

// i18n이 준비되지 않은 경우 fallback 텍스트 사용
const ERROR_TEXT_FALLBACK = 'An error occurred';
const RETRY_TEXT_FALLBACK = 'Retry';

export function ErrorFallback({
  message,
  retryText,
  onRetry,
}: ErrorFallbackProps) {
  const { t, ready } = useTranslation();

  const errorMessage =
    message ?? (ready ? t('common.error') : ERROR_TEXT_FALLBACK);
  const buttonText =
    retryText ?? (ready ? t('common.retry') : RETRY_TEXT_FALLBACK);

  return (
    <div className={styles.container}>
      <p className={styles.message}>{errorMessage}</p>
      {onRetry && (
        <button className={styles.retryButton} onClick={onRetry}>
          {buttonText}
        </button>
      )}
    </div>
  );
}
