import type { Environment, Platform } from '@app/providers/device';
import type { Language } from '@app/providers/i18n';

import type { Service } from '@shared/types';

import { servicesEn } from './services.en';
import { servicesKo } from './services.ko';
import { serviceVisibility } from './visibility';

// 언어에 따라 서비스 데이터 선택
function getServicesByLanguage(
  language: Language
): Omit<Service, 'visibility'>[] {
  return language === 'ko' ? servicesKo : servicesEn;
}

// 필터링된 서비스 반환 (언어, 플랫폼, 환경 기준)
export function getFilteredServices(
  language: Language,
  platform: Platform,
  env: Environment
): Service[] {
  const services = getServicesByLanguage(language);

  return services
    .filter((service) => {
      const visibility = serviceVisibility[service.id];
      if (!visibility) return false;

      return (
        visibility.languages.includes(language) &&
        visibility.platforms.includes(platform) &&
        visibility.environments.includes(env)
      );
    })
    .map((service) => ({
      ...service,
      visibility: serviceVisibility[service.id],
    }));
}

// 모든 서비스 (visibility 포함)
export function getAllServices(): Service[] {
  const allServices = [...servicesKo, ...servicesEn];
  const uniqueServices = allServices.filter(
    (service, index, self) =>
      index === self.findIndex((s) => s.id === service.id)
  );

  return uniqueServices.map((service) => ({
    ...service,
    visibility: serviceVisibility[service.id],
  }));
}
