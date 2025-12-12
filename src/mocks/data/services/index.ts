import type { Environment, Platform } from '@app/providers/device';
import type { Language } from '@app/providers/i18n';

import type { Service } from '@shared/types';

import { servicesEn } from './services.en';
import { servicesKo } from './services.ko';
import { serviceVisibility } from './visibility';

const TEST_LARGE_LIST = import.meta.env.VITE_TEST_LARGE_LIST === 'true';
const LARGE_LIST_COUNT = 1000;

// 언어에 따라 서비스 데이터 선택
function getServicesByLanguage(
  language: Language
): Omit<Service, 'visibility'>[] {
  return language === 'ko' ? servicesKo : servicesEn;
}

// 대량 데이터 생성 (테스트용)
function generateLargeList(baseServices: Service[], count: number): Service[] {
  const result: Service[] = [];
  for (let i = 0; i < count; i++) {
    const baseService = baseServices[i % baseServices.length];
    result.push({
      ...baseService,
      id: `${baseService.id}-${i}`,
      name: `${baseService.name} #${i + 1}`,
    });
  }
  return result;
}

// 필터링된 서비스 반환 (언어, 플랫폼, 환경 기준)
export function getFilteredServices(
  language: Language,
  platform: Platform,
  env: Environment
): Service[] {
  const services = getServicesByLanguage(language);

  const filtered = services
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

  if (TEST_LARGE_LIST) {
    return generateLargeList(filtered, LARGE_LIST_COUNT);
  }

  return filtered;
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
