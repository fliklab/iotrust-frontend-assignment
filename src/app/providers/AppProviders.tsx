import type { ReactNode } from 'react';

import { ErrorBoundary, ErrorFallback } from '@shared/ui';

import './i18n/i18n';
import { QueryProvider } from './query';

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ErrorBoundary
      fallbackRender={({ reset }) => <ErrorFallback onRetry={reset} />}
    >
      <QueryProvider>{children}</QueryProvider>
    </ErrorBoundary>
  );
}
