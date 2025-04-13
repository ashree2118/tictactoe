import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Square from './ttt.jsx';

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <Square />
    
  </StrictMode>
);
