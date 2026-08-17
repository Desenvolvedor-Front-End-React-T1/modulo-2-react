import { Link } from 'react-router-dom'
import exercicios, { temas } from '../data/exercicios'

/**
 * Página inicial (rota "/").
 *
 * Ela não mostra conteúdo de aula: ela só lista os exercícios
 * e leva o usuário para a rota de cada um.
 *
 * O <Link to="/filmes"> troca a página SEM recarregar o navegador,
 * diferente do <a href="/filmes">.
 */
function Home() {
    return (
        <>
            <h1>Aulas de React</h1>
            <p className="home-intro">
                Escolha um exercício abaixo para abrir a página dele.
                São {exercicios.length} exercícios divididos em {temas.length} temas.
            </p>

            {temas.map(tema => {
                const exerciciosDoTema = exercicios.filter(ex => ex.tema === tema)

                return (
                    <section key={tema} className="tema">
                        <h2>{tema}</h2>

                        <div className="lista-exercicios">
                            {exerciciosDoTema.map(exercicio => (
                                <Link
                                    key={exercicio.rota}
                                    to={exercicio.rota}
                                    className="card-exercicio"
                                >
                                    <h3>{exercicio.titulo}</h3>
                                    <p>{exercicio.descricao}</p>
                                    <span className="card-exercicio-rota">{exercicio.rota}</span>
                                </Link>
                            ))}
                        </div>
                    </section>
                )
            })}
        </>
    )
}

export default Home
