import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 
import './index.css'
import App from './App.tsx'
import { WishlistProvider } from './Context/wishlistContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> 
    <WishlistProvider>
      <App />
    </WishlistProvider>
    </BrowserRouter>
  </StrictMode>
)
