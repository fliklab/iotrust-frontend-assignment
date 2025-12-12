import { AppProviders } from './providers';
import { Router } from './router';

import '@shared/styles/global.css';

function App() {
  return (
    <AppProviders>
      <Router />
    </AppProviders>
  );
}

export default App;
