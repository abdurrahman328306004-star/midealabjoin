import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { use3DCards } from './hooks/use3DCards';

function AppWithEffects() {
  useScrollAnimation();
  use3DCards();
  
  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithEffects />
  </StrictMode>
);