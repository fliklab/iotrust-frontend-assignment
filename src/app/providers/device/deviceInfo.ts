export type Platform = 'android' | 'ios';
export type Environment = 'development' | 'staging' | 'production';

export const SUPPORTED_PLATFORMS: Platform[] = ['android', 'ios'];
export const DEFAULT_PLATFORM: Platform = 'android';

export const SUPPORTED_ENVIRONMENTS: Environment[] = [
  'development',
  'staging',
  'production',
];
export const DEFAULT_ENVIRONMENT: Environment = 'development';

export function isValidPlatform(platform: string): platform is Platform {
  return SUPPORTED_PLATFORMS.includes(platform as Platform);
}

export function isValidEnvironment(env: string): env is Environment {
  return SUPPORTED_ENVIRONMENTS.includes(env as Environment);
}

/**
 * Gets platform from query param for debugging purposes.
 * Returns the platform if valid, otherwise null.
 */
function getPlatformFromQueryParam(): Platform | null {
  const params = new URLSearchParams(window.location.search);
  const platform = params.get('platform');
  if (platform && isValidPlatform(platform)) {
    return platform;
  }
  return null;
}

function detectPlatformFromUserAgent(): Platform {
  const userAgent = navigator.userAgent.toLowerCase();

  if (/iphone|ipad|ipod/.test(userAgent)) {
    return 'ios';
  }

  if (/android/.test(userAgent)) {
    return 'android';
  }

  return DEFAULT_PLATFORM;
}

/**
 * 플랫폼 결정 우선순위:
 * 1. Query param (?platform=ios|android) - 디버깅용
 * 2. User Agent 감지 (iOS → ios, Android → android)
 * 3. 기본값: android
 */
export function detectPlatform(): Platform {
  const queryPlatform = getPlatformFromQueryParam();
  if (queryPlatform) {
    return queryPlatform;
  }

  return detectPlatformFromUserAgent();
}

/**
 * Gets environment from VITE_ENV variable.
 */
export function detectEnvironment(): Environment {
  const env = import.meta.env.VITE_ENV;
  if (isValidEnvironment(env)) {
    return env;
  }
  return DEFAULT_ENVIRONMENT;
}
