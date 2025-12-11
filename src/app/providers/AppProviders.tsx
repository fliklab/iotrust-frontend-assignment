import type { ReactNode } from 'react';

import { QueryProvider } from './query';

import './i18n/i18n';

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return <QueryProvider>{children}</QueryProvider>;
}
