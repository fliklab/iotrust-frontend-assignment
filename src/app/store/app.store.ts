import { create } from 'zustand';

import type { Language } from '@app/providers/i18n';

export type Platform = 'android' | 'ios';
export type Environment = 'development' | 'staging' | 'production';

interface AppState {
  language: Language;
  platform: Platform;
  env: Environment;
  setLanguage: (language: Language) => void;
  setPlatform: (platform: Platform) => void;
}

const getEnv = (): Environment => {
  const env = import.meta.env.VITE_ENV;
  if (env === 'staging' || env === 'production') return env;
  return 'development';
};

export const useAppStore = create<AppState>((set) => ({
  language: 'ko',
  platform: 'android',
  env: getEnv(),
  setLanguage: (language) => set({ language }),
  setPlatform: (platform) => set({ platform }),
}));
