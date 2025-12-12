import type { Platform } from '@app/store';

/**
 * Detects user's platform from User Agent string.
 * Returns 'ios' for iOS devices, 'android' for Android, 'android' as default.
 */
export function detectPlatform(): Platform {
  const userAgent = navigator.userAgent.toLowerCase();

  // Check for iOS devices (iPhone, iPad, iPod)
  if (/iphone|ipad|ipod/.test(userAgent)) {
    return 'ios';
  }

  // Check for Android devices
  if (/android/.test(userAgent)) {
    return 'android';
  }

  // Default to android for other platforms (desktop, etc.)
  return 'android';
}
