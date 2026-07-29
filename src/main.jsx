import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Aula from './pages/Aula.jsx'
import InputsState from './pages/InputsState.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Aula /> */}
    <InputsState />
  </StrictMode>,
)
