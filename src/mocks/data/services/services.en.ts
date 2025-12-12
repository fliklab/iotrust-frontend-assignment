import type { Service } from '@shared/types';

import { IMAGE_BASE_URL } from './common';

// 영어 사용자용 서비스 데이터
export const servicesEn: Omit<Service, 'visibility'>[] = [
  {
    id: 'moonpay',
    name: 'MoonPay',
    description:
      'MoonPay offers simple and safer way to buy crypto instantly using VISA/Mastercard payment',
    iconUrl: `${IMAGE_BASE_URL}/icon_moonpay.png`,
    url: 'https://buy.moonpay.com',
  },
  {
    id: 'ftso-portal',
    name: 'FTSO Portal',
    description:
      "FTSO Portal is a service by D'CENT to provide fast and easy way to delegate Vote Power to the user's favorite FTSO provider. By delegating Vote Power, users can earn passive income as reward.",
    iconUrl: `${IMAGE_BASE_URL}/icon_ftso.png`,
    url: 'https://ftsoportal.com/',
  },
  {
    id: 'astar-portal',
    name: 'Astar Portal',
    description:
      'Astar Portal is the official Astar Network application for using everything that Astar Network offers.',
    iconUrl: `${IMAGE_BASE_URL}/icon_astar.png`,
    url: 'https://portal.astar.network/',
  },
  {
    id: '1inch',
    name: '1inch',
    description:
      "1inch is a decentralized exchange (DEX) aggregator. It's designed to roll liquidity and pricing from all major DEXes into one platform, making it easy to get the best price for the desired trade.",
    iconUrl: `${IMAGE_BASE_URL}/icon_1inch.png`,
    url: 'https://app.1inch.io/',
  },
  {
    id: 'xdsea',
    name: 'XDSea',
    description:
      "XDSea is the world's first and largest peer-to-peer decentralized marketplace for buying and selling NFTs built on the XDC Network.",
    iconUrl: `${IMAGE_BASE_URL}/icon_xdsea.png`,
    url: 'https://xdsea.com/',
  },
  {
    id: 'compound',
    name: 'Compound',
    description:
      "Compound is Ethereum's algorithmic money market protocol that allows users to earn interest or borrow assets through collateral. Anyone can supply assets to Compound's liquidity pool and earn continuous compound interest immediately.",
    iconUrl: `${IMAGE_BASE_URL}/icon_compound.png`,
    url: 'https://app.compound.finance/',
  },
  {
    id: 'pooltogether',
    name: 'PoolTogether',
    description:
      'PoolTogether is an Ethereum based application that makes saving money as fun as a game. You join a pool by getting a "savings ticket". Each Savings Ticket gives you a chance to win a prize, but even if you don\'t win, you keep all your money!',
    iconUrl: `${IMAGE_BASE_URL}/icon_pooltogether.png`,
    url: 'https://app.pooltogether.com/',
  },
  {
    id: 'opensea',
    name: 'OpenSea',
    description:
      'OpenSea is a marketplace for digital goods, including collectibles, game items, digital art, and other digital assets backed by blockchain such as Ethereum.',
    iconUrl: `${IMAGE_BASE_URL}/icon_opensea.png`,
    url: 'https://opensea.io/',
  },
];
