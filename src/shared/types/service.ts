import type { Environment, Platform } from '@app/providers/device';
import type { Language } from '@app/providers/i18n';

import type { ImageAsset } from './image';

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: ImageAsset;
  url: string;
  visibility: {
    languages: Language[];
    platforms: Platform[];
    environments: Environment[];
  };
}

export interface ServiceListParams {
  language: Language;
  platform: Platform;
  env: Environment;
  page: number;
  pageSize: number;
}

export interface ServiceListResponse {
  items: Service[];
  nextCursor: number | null;
  totalCount: number;
}
