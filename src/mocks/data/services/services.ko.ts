import type { Service } from '@shared/types';

import { createImageAsset } from './common';

// 한국어 사용자용 서비스 데이터
export const servicesKo: Omit<Service, 'visibility'>[] = [
  {
    id: 'ftso-portal',
    name: 'FTSO Portal',
    description:
      'FTSO Portal은 사용자가 원하는 FTSO provider에 Vote Power 쉽고 빠르게 위임할 수 있는 기능을 제공하는 디센트의 서비스입니다. 사용자는 Vote Power 위임을 통해 패시브인컴(passive income)을 보상으로 받을 수 있습니다.',
    icon: createImageAsset('icon_ftso.png'),
    url: 'https://ftsoportal.com/',
  },
  {
    id: 'astar-portal',
    name: 'Astar Portal',
    description:
      '아스타포탈은 Astar Network에서 제공하는 모든 것을 사용하기 위한 Astar Network의 공식 애플리케이션입니다.',
    icon: createImageAsset('icon_astar.png'),
    url: 'https://portal.astar.network/',
  },
  {
    id: '1inch',
    name: '1inch',
    description:
      '1inch는 모든 주요 DEX 거래소의 유동성과 가격 정보를 하나의 플랫폼에서 제공합니다. 원하는 거래의 가격을 쉽게 조회하여 토큰을 교환할 수 있습니다.',
    icon: createImageAsset('icon_1inch.png'),
    url: 'https://app.1inch.io/',
  },
  {
    id: 'xdsea',
    name: 'XDSea',
    description:
      'XDSea는 XDC 네트워크에 구축된 NFT를 사고 파는 세계 최초이자 최대 규모의 P2P 분산형 시장입니다.',
    icon: createImageAsset('icon_xdsea.png'),
    url: 'https://xdsea.com/',
  },
  {
    id: 'compound',
    name: 'Compound',
    description:
      'Compound는 담보를 통해 이자를 얻거나 자산을 빌릴 수 있는 이더리움 기반의 머니 마켓 프로토콜입니다. 컴파운드의 유동성 풀에 자산을 공급하면 복리이자를 얻을 수 있습니다.',
    icon: createImageAsset('icon_compound.png'),
    url: 'https://app.compound.finance/',
  },
  {
    id: 'pooltogether',
    name: 'PoolTogether',
    description:
      'PoolTogether는 저축을 재미있게 하는 이더리움 기반의 서비스입니다. 자산을 예치하면 "저축 티켓"을 받아 \'풀\'에 참여합니다. 각 저축 티켓은 풀에서 발생한 이자를 받을 수있는 기회를 제공하지만, 당첨되지 않더라도 손실이 없습니다.',
    icon: createImageAsset('icon_pooltogether.png'),
    url: 'https://app.pooltogether.com/',
  },
  {
    id: 'opensea',
    name: 'OpenSea',
    description:
      'OpenSea는 수집품, 게임 아이템, 디지털 아트와 같은 이더리움 기반의 디지털 상품 및 디지털 자산을 거래할 수 있는 마켓 플레이스입니다.',
    icon: createImageAsset('icon_opensea.png'),
    url: 'https://opensea.io/',
  },
  {
    id: 'bluewhale',
    name: 'BlueWhale',
    description:
      '블루웨일 프로토콜은 사용하기 쉬운 디파이 서비스를 지향하는 프로젝트입니다. 디파이 대시보드, DEX 어그리게이터, 자동 재예치 서비스 등 탈중앙화 금융(DeFi) 관련 서비스 제공을 통해 클레이튼 디파이 생태계 활동을 더 쉽고 효율적으로 만듭니다.',
    icon: createImageAsset('icon_bluewhale.png'),
    url: 'https://bwpm.io/',
  },
];
