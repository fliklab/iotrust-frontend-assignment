import type { Environment, Platform } from '@app/store';

import type { Language } from '@app/providers/i18n';

// 서비스별 노출 조건 정의
export interface ServiceVisibility {
  languages: Language[];
  platforms: Platform[];
  environments: Environment[];
}

// 각 서비스의 노출 조건
export const serviceVisibility: Record<string, ServiceVisibility> = {
  moonpay: {
    languages: ['en'],
    platforms: ['ios'],
    environments: ['development', 'staging', 'production'],
  },
  'ftso-portal': {
    languages: ['ko', 'en'],
    platforms: ['android', 'ios'],
    environments: ['development', 'staging', 'production'],
  },
  'astar-portal': {
    languages: ['ko', 'en'],
    platforms: ['android', 'ios'],
    environments: ['development', 'staging'], // dev/stage만
  },
  '1inch': {
    languages: ['ko', 'en'],
    platforms: ['android', 'ios'],
    environments: ['development', 'staging', 'production'],
  },
  xdsea: {
    languages: ['ko', 'en'],
    platforms: ['android', 'ios'],
    environments: ['development', 'staging', 'production'],
  },
  compound: {
    languages: ['ko', 'en'],
    platforms: ['android', 'ios'],
    environments: ['development', 'staging', 'production'],
  },
  pooltogether: {
    languages: ['ko', 'en'],
    platforms: ['android', 'ios'],
    environments: ['development', 'staging', 'production'],
  },
  opensea: {
    languages: ['ko', 'en'],
    platforms: ['android', 'ios'],
    environments: ['development', 'staging', 'production'],
  },
  bluewhale: {
    languages: ['ko'], // 한국어만
    platforms: ['android', 'ios'],
    environments: ['development', 'staging', 'production'],
  },
};
