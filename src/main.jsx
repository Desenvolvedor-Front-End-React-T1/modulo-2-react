import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Aula from './pages/Aula.jsx'
import InputsState from './pages/InputsState.jsx'
import Contador from './pages/Contador.jsx'
import PaginaLogin from './pages/PaginaLogin.jsx'
import ListaTarefas from './pages/ListaTarefas.jsx'
import Semana2 from './pages/Semana2.jsx'
import Filmes from './pages/Filmes.jsx'
import Mercado from './pages/Mercado.jsx'
import ContatoBikcraft from './pages/ContatoBikcraft.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Aula /> */}
    {/* <InputsState /> */}
    {/* <Contador /> */}
    {/* <PaginaLogin /> */}
    {/* <ListaTarefas /> */}
    {/* <Semana2 /> */}
    {/* <Filmes /> */}
    {/* <Mercado /> */}
    <ContatoBikcraft />
  </StrictMode>,
)
