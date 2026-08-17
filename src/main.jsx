import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

/**
 * O BrowserRouter é quem "liga" o React Router na aplicação:
 * ele observa a URL do navegador e avisa as <Routes> do App.jsx.
 *
 * Antes trocávamos de página comentando/descomentando componentes aqui.
 * Agora cada exercício tem seu próprio endereço (ex: /filmes).
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
