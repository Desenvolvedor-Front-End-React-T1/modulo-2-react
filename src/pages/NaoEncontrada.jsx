import { Link } from 'react-router-dom'

/**
 * Página da rota "*" — qualquer endereço que não existe cai aqui.
 */
function NaoEncontrada() {
    return (
        <>
            <h1>404</h1>
            <h2>Essa página não existe</h2>
            <p>Confira o endereço ou volte para a lista de exercícios.</p>
            <Link to="/" className="botao-voltar">Voltar para o início</Link>
        </>
    )
}

export default NaoEncontrada
