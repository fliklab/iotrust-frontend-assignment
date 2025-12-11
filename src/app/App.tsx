import { CarouselBanner } from '@features/banner';
import { FavoriteList } from '@features/favorites';

import { AppProviders } from './providers';

import '@shared/styles/global.css';

function AppContent() {
  return (
    <div style={{ maxWidth: '480px', margin: '0 auto' }}>
      <CarouselBanner />
      <div style={{ padding: '0 16px' }}>
        <FavoriteList />
      </div>
    </div>
  );
}

function App() {
  return (
    <AppProviders>
      <AppContent />
    </AppProviders>
  );
}

export default App;
