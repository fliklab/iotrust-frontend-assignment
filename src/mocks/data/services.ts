import type { Environment, Platform } from '@app/store';

import type { Language } from '@app/providers/i18n';

import type { Service } from '@shared/types';

const IMAGE_BASE_URL =
  'https://raw.githubusercontent.com/KyungeunKim/iotrust-frontend-homework/main/images';

// mock-data-guide에 정의된 실제 DApp 데이터
const realDApps: Service[] = [
  {
    id: 'moonpay',
    name: 'MoonPay',
    description:
      'MoonPay offers simple and safer way to buy crypto instantly using VISA/Mastercard payment',
    iconUrl: `${IMAGE_BASE_URL}/icon_moonpay.png`,
    url: 'https://buy.moonpay.com',
    visibility: {
      languages: ['en'], // 영어 사용자에게만
      platforms: ['ios'], // iOS 사용자에게만
      environments: ['development', 'staging', 'production'],
    },
  },
  {
    id: 'ftso-portal',
    name: 'FTSO Portal',
    description:
      "FTSO Portal is a service by D'CENT to provide fast and easy way to delegate Vote Power to the user's favorite FTSO provider. By delegating Vote Power, users can earn passive income as reward.",
    descriptionKo:
      'FTSO Portal은 사용자가 원하는 FTSO provider에 Vote Power 쉽고 빠르게 위임할 수 있는 기능을 제공하는 디센트의 서비스입니다. 사용자는 Vote Power 위임을 통해 패시브인컴(passive income)을 보상으로 받을 수 있습니다.',
    iconUrl: `${IMAGE_BASE_URL}/icon_ftso.png`,
    url: 'https://ftsoportal.com/',
    visibility: {
      languages: ['ko', 'en'],
      platforms: ['android', 'ios'],
      environments: ['development', 'staging', 'production'],
    },
  },
  {
    id: 'astar-portal',
    name: 'Astar Portal',
    description:
      'Astar Portal is the official Astar Network application for using everything that Astar Network offers.',
    descriptionKo:
      '아스타포탈은 Astar Network에서 제공하는 모든 것을 사용하기 위한 Astar Network의 공식 애플리케이션입니다.',
    iconUrl: `${IMAGE_BASE_URL}/icon_astar.png`,
    url: 'https://portal.astar.network/',
    visibility: {
      languages: ['ko', 'en'],
      platforms: ['android', 'ios'],
      environments: ['development', 'staging'], // dev/stage 환경에서만
    },
  },
  {
    id: '1inch',
    name: '1inch',
    description:
      "1inch is a decentralized exchange (DEX) aggregator. It's designed to roll liquidity and pricing from all major DEXes into one platform, making it easy to get the best price for the desired trade.",
    descriptionKo:
      '1inch는 모든 주요 DEX 거래소의 유동성과 가격 정보를 하나의 플랫폼에서 제공합니다. 원하는 거래의 가격을 쉽게 조회하여 토큰을 교환할 수 있습니다.',
    iconUrl: `${IMAGE_BASE_URL}/icon_1inch.png`,
    url: 'https://app.1inch.io/',
    visibility: {
      languages: ['ko', 'en'],
      platforms: ['android', 'ios'],
      environments: ['development', 'staging', 'production'],
    },
  },
  {
    id: 'xdsea',
    name: 'XDSea',
    description:
      'XDSea is the world's first and largest peer-to-peer decentralized marketplace for buying and selling NFTs built on the XDC Network.',
    descriptionKo:
      'XDSea는 XDC 네트워크에 구축된 NFT를 사고 파는 세계 최초이자 최대 규모의 P2P 분산형 시장입니다.',
    iconUrl: `${IMAGE_BASE_URL}/icon_xdsea.png`,
    url: 'https://xdsea.com/',
    visibility: {
      languages: ['ko', 'en'],
      platforms: ['android', 'ios'],
      environments: ['development', 'staging', 'production'],
    },
  },
  {
    id: 'compound',
    name: 'Compound',
    description:
      "Compound is Ethereum's algorithmic money market protocol that allows users to earn interest or borrow assets through collateral. Anyone can supply assets to Compound's liquidity pool and earn continuous compound interest immediately.",
    descriptionKo:
      'Compound는 담보를 통해 이자를 얻거나 자산을 빌릴 수 있는 이더리움 기반의 머니 마켓 프로토콜입니다. 컴파운드의 유동성 풀에 자산을 공급하면 복리이자를 얻을 수 있습니다.',
    iconUrl: `${IMAGE_BASE_URL}/icon_compound.png`,
    url: 'https://app.compound.finance/',
    visibility: {
      languages: ['ko', 'en'],
      platforms: ['android', 'ios'],
      environments: ['development', 'staging', 'production'],
    },
  },
  {
    id: 'pooltogether',
    name: 'PoolTogether',
    description:
      'PoolTogether is an Ethereum based application that makes saving money as fun as a game. You join a pool by getting a "savings ticket". Each Savings Ticket gives you a chance to win a prize, but even if you don\'t win, you keep all your money!',
    descriptionKo:
      'PoolTogether는 저축을 재미있게 하는 이더리움 기반의 서비스입니다. 자산을 예치하면 "저축 티켓"을 받아 \'풀\'에 참여합니다. 각 저축 티켓은 풀에서 발생한 이자를 받을 수있는 기회를 제공하지만, 당첨되지 않더라도 손실이 없습니다.',
    iconUrl: `${IMAGE_BASE_URL}/icon_pooltogether.png`,
    url: 'https://app.pooltogether.com/',
    visibility: {
      languages: ['ko', 'en'],
      platforms: ['android', 'ios'],
      environments: ['development', 'staging', 'production'],
    },
  },
  {
    id: 'opensea',
    name: 'OpenSea',
    description:
      'OpenSea is a marketplace for digital goods, including collectibles, game items, digital art, and other digital assets backed by blockchain such as Ethereum.',
    descriptionKo:
      'OpenSea는 수집품, 게임 아이템, 디지털 아트와 같은 이더리움 기반의 디지털 상품 및 디지털 자산을 거래할 수 있는 마켓 플레이스입니다.',
    iconUrl: `${IMAGE_BASE_URL}/icon_opensea.png`,
    url: 'https://opensea.io/',
    visibility: {
      languages: ['ko', 'en'],
      platforms: ['android', 'ios'],
      environments: ['development', 'staging', 'production'],
    },
  },
  {
    id: 'bluewhale',
    name: 'BlueWhale',
    description:
      '블루웨일 프로토콜은 사용하기 쉬운 디파이 서비스를 지향하는 프로젝트입니다. 디파이 대시보드, DEX 어그리게이터, 자동 재예치 서비스 등 탈중앙화 금융(DeFi) 관련 서비스 제공을 통해 클레이튼 디파이 생태계 활동을 더 쉽고 효율적으로 만듭니다.',
    iconUrl: `${IMAGE_BASE_URL}/icon_bluewhale.png`,
    url: 'https://bwpm.io/',
    visibility: {
      languages: ['ko'], // 한국어 사용자에게만
      platforms: ['android', 'ios'],
      environments: ['development', 'staging', 'production'],
    },
  },
];

// Service 타입에 descriptionKo 추가를 위한 확장
export interface ServiceWithLocale extends Service {
  descriptionKo?: string;
}

export const mockServices: ServiceWithLocale[] = realDApps as ServiceWithLocale[];

// 필터링된 서비스 반환 (언어, 플랫폼, 환경 기준)
export function getFilteredServices(
  language: Language,
  platform: Platform,
  env: Environment
): Service[] {
  return mockServices
    .filter((service) => {
      const { visibility } = service;
      return (
        visibility.languages.includes(language) &&
        visibility.platforms.includes(platform) &&
        visibility.environments.includes(env)
      );
    })
    .map((service) => {
      // 한국어인 경우 descriptionKo 사용
      if (language === 'ko' && service.descriptionKo) {
        return {
          ...service,
          description: service.descriptionKo,
        };
      }
      return service;
    });
}
