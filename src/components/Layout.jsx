import { Link, NavLink, Outlet } from 'react-router-dom'

/**
 * Moldura que aparece em todas as páginas.
 *
 * O <Outlet /> é o "buraco" onde o React Router encaixa a página
 * da rota atual (as rotas filhas declaradas em App.jsx).
 *
 * NavLink funciona como o Link, mas sabe se a rota está ativa —
 * por isso usamos ele para destacar o link da página atual.
 */
function Layout() {
    return (
        <div className="layout">
            <header className="topbar">
                <Link to="/" className="topbar-logo">Aulas de React</Link>

                <nav className="topbar-nav">
                    <NavLink to="/">Início</NavLink>
                    <NavLink to="/filmes">Filmes</NavLink>
                    <NavLink to="/noticias">Notícias</NavLink>
                    <NavLink to="/mercado">Mercado</NavLink>
                </nav>
            </header>

            <main className="conteudo">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
