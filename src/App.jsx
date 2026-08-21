import { Routes, Route } from 'react-router-dom'
import './App.css'

import Layout from './components/Layout'

// Página inicial: só lista os exercícios e redireciona para eles
import Home from './pages/Home'

// Fundamentos
import Aula from './pages/Aula'

// Estado (useState)
import Semana2 from './pages/Semana2'
import Contador from './pages/Contador'
import InputsState from './pages/InputsState'

// Formulários
import PaginaLogin from './pages/PaginaLogin'
import ContatoBikcraft from './pages/ContatoBikcraft'
import Contato from './pages/Contato'
import ReactHookForm from './pages/ReactHookForm'

// Listas e Filtros
import Filmes from './pages/Filmes'
import Noticias from './pages/Noticias'
import Mercado from './pages/Mercado'
import ListaTarefas from './pages/ListaTarefas'

import NaoEncontrada from './pages/NaoEncontrada'
import ChamadaApi from './pages/ChamadaApi'
import ReactHookFormComValidacao from './pages/ReactHookFormComValidacao'

/**
 * Aqui fica TODA a navegação do projeto.
 *
 * <Routes>  -> olha a URL atual e escolhe uma única <Route>
 * <Route>   -> liga um endereço (path) a uma página (element)
 *
 * As rotas estão dentro de um <Route element={<Layout />}> para que
 * todas compartilhem o mesmo menu do topo. O <Layout /> renderiza o
 * <Outlet />, e é nele que a página escolhida aparece.
 *
 * Para criar um exercício novo:
 * 1) crie o arquivo em src/pages/
 * 2) importe ele aqui e adicione uma <Route> no tema certo
 * 3) adicione o item em src/data/exercicios.js para virar card na Home
 */
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>

        {/* Página inicial - lista de exercícios */}
        <Route path="/" element={<Home />} />

        {/* --- Fundamentos --- */}
        <Route path="/aula" element={<Aula />} />

        {/* --- Estado (useState) --- */}
        <Route path="/semana2" element={<Semana2 />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/inputs-state" element={<InputsState />} />

        {/* --- Formulários --- */}
        <Route path="/login" element={<PaginaLogin />} />
        <Route path="/contato-bikcraft" element={<ContatoBikcraft />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/react-hook-form" element={<ReactHookForm />} />
        <Route path="/react-hook-form-com-validacao" element={<ReactHookFormComValidacao />} />
        {/* --- Listas e Filtros --- */}
        <Route path="/filmes" element={<Filmes />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/mercado" element={<Mercado />} />
        <Route path="/lista-tarefas" element={<ListaTarefas />} />

        <Route path="/chamada-api" element={<ChamadaApi />} />

        {/* Qualquer endereço que não existe */}
        <Route path="*" element={<NaoEncontrada />} />

      </Route>
    </Routes>
  )
}

export default App
