import type { Language } from '@app/providers/i18n';
import type { Environment, Platform } from '@app/store';

export interface Service {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
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
