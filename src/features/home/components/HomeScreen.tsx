import { CarouselBanner } from '@features/banner';
import { FavoriteList } from '@features/favorites';
import { ServiceList } from '@features/service-list';

import * as styles from './HomeScreen.css';

export function HomeScreen() {
  return (
    <div className={styles.container}>
      <CarouselBanner />
      <div className={styles.content}>
        <FavoriteList />
        <ServiceList />
      </div>
    </div>
  );
}
