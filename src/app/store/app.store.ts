import { create } from 'zustand';

import {
  detectEnvironment,
  detectPlatform,
  type Environment,
  type Platform,
} from '@app/providers/device';
import { getInitialLanguage, type Language } from '@app/providers/i18n';

interface AppState {
  language: Language;
  platform: Platform;
  env: Environment;
  setLanguage: (language: Language) => void;
  setPlatform: (platform: Platform) => void;
}

export const useAppStore = create<AppState>((set) => ({
  language: getInitialLanguage(),
  platform: detectPlatform(),
  env: detectEnvironment(),
  setLanguage: (language) => set({ language }),
  setPlatform: (platform) => set({ platform }),
}));
