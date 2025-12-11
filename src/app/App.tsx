import { HomeScreen } from '@features/home';

import { AppProviders } from './providers';

import '@shared/styles/global.css';

function App() {
  return (
    <AppProviders>
      <HomeScreen />
    </AppProviders>
  );
}

export default App;
