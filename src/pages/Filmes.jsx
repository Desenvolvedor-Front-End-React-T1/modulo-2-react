/**
 * 10min-15min
 * Construa uma página de Filmes e um Card de Filme (/components)
 * O Array de filmes deverá existir dentro da página Filmes.jsx
 * e ele deve estar dentro de useState (ok)
 * 
 * A página de filme (Filmes.jsx) deve percorrer com .map cada filme 
 * e renderizar o Card de Filme (ok)
 * 
 * Adicionar um input de busca em Filmes.jsx e vincule a um useState
 * 
 * Card de Filme precisa conter: Nome do Filme, 
 * descricao, diretor, tipo, ano de lancamento (ok)
 * 
 * 
 * Adicione as funcoes de filtro realizadas anteriormente dentro de Filmes.jsx
 * 
 */


/** LÓGICA
 * 
 * 
 * 
 * 
 * Lista de Filmes -> ela ta na cabeca de cada um
[Interestelar, Gladiador, Rei Leao, A Origem]

-- Minha pergunta: Quais filmes voce ja viu que são produzidos pelo Nolan?

Resposta: Eu já vi os filmes "Interestelar" e "A Origem"

// function BuscarFilmesPorDiretor(diretor) {
//     retorna Filmes onde o diretor é igual a "Nolan" 
// }
function BuscarFilmesPorDiretor(diretor) {
    return filmes.filter(item => item.diretor === diretor)
}

// 
FILMES QUE VOCES ASSISTIRAM = [A Procura da Felicidade, Rei Leao, Avatar, Avengers]

Quero que voce me fale todos os filmes que já assistiu -> Retorna a lista original
Quero que voce me fale filmes que já assistiu, onde o filme tenha as letras:

Filmes comecando com A -> [Avatar, Avengers, A Procura da Felicidade] (Filmes Filtrados)
Filmes comecando com Av -> [Avatar, Avengers]  (Filmes Filtrados)
Filmes comecando com Ava -> [Avatar]  (Filmes Filtrados)


function buscaFilmes(nomeFilme) {
    return LISTA_ORIGINAL.filter(filme => filme === nomeFilme)
}

 */
import { useState, useEffect } from "react"
import CardFilme from "../components/CardFilme"

function Filmes() {

    const [filmes, setFilmes] = useState([
        {
            tipo: "Ficção Científica",
            nome: "Interestelar",
            ano: 2014,
            descricao: "Um grupo de astronautas viaja pelo espaço em busca de um novo planeta habitável para a humanidade.",
            diretor: "Christopher Nolan"
        },
        {
            tipo: "Ação",
            nome: "Mad Max: Estrada da Fúria",
            ano: 2015,
            descricao: "Em um mundo pós-apocalíptico, sobreviventes tentam escapar de um tirano durante uma perseguição pelo deserto.",
            diretor: "George Miller"
        },
        {
            tipo: "Drama",
            nome: "À Procura da Felicidade",
            ano: 2006,
            descricao: "Um pai enfrenta dificuldades financeiras enquanto tenta construir uma vida melhor para ele e seu filho.",
            diretor: "Gabriele Muccino"
        },
        {
            tipo: "Fantasia",
            nome: "O Senhor dos Anéis: A Sociedade do Anel",
            ano: 2001,
            descricao: "Um jovem hobbit inicia uma jornada para destruir um poderoso anel e impedir o avanço de um grande mal.",
            diretor: "Peter Jackson"
        },
        {
            tipo: "Animação",
            nome: "Toy Story",
            ano: 1995,
            descricao: "Os brinquedos de um garoto ganham vida quando os humanos não estão por perto.",
            diretor: "John Lasseter"
        },
        {
            tipo: "Suspense",
            nome: "Ilha do Medo",
            ano: 2010,
            descricao: "Um investigador visita uma instituição psiquiátrica isolada para descobrir o desaparecimento de uma paciente.",
            diretor: "Martin Scorsese"
        },
        {
            tipo: "Comédia",
            nome: "As Branquelas",
            ano: 2004,
            descricao: "Dois agentes do FBI se disfarçam para proteger duas jovens e investigar uma ameaça de sequestro.",
            diretor: "Keenen Ivory Wayans"
        },
        {
            tipo: "Terror",
            nome: "O Iluminado",
            ano: 1980,
            descricao: "Uma família passa o inverno em um hotel isolado onde acontecimentos misteriosos começam a afetar o pai.",
            diretor: "Stanley Kubrick"
        },
        {
            tipo: "Aventura",
            nome: "Jurassic Park",
            ano: 1993,
            descricao: "Um parque criado com dinossauros geneticamente recriados se transforma em uma situação perigosa.",
            diretor: "Steven Spielberg"
        },
        {
            tipo: "Romance",
            nome: "Diário de uma Paixão",
            ano: 2004,
            descricao: "Um casal vive uma história de amor marcada por diferenças sociais, separações e reencontros.",
            diretor: "Nick Cassavetes"
        }
    ])
    const [filmesFiltrados, setFilmesFiltrados] = useState(filmes)  

    const [busca, setBusca] = useState("")

    // useEffect -> serve para identificar mudanças em variáveis e executar algo quando isso acontecer
    // useEffect -> só será executado quando houver uma 
    // mudanca na variavel busca
    useEffect(() => {
        console.log("Mudou a busca: ", busca)
        
        const respostaConsulta = filmes.filter(filme => 
                filme.nome.toLowerCase().includes(busca.toLowerCase()))

        setFilmesFiltrados(respostaConsulta)
    }, [busca])

    return (
        <>
            <h1>Filmes.jsx</h1>
            <h1>Qtd de filmes: {filmes.length} - Filtrando por: {busca}</h1>
            <input 
                value={busca}
                placeholder="Digite o nome do filme" 
                onChange={(e) => setBusca(e.target.value)}
                />

            <h2>Acervo</h2>

            {/* LISTA DE FILMES */}
            {/* Componente de filme */}
            {filmesFiltrados.map(filme => (
                <CardFilme 
                    key={filme.nome}
                    nome={filme.nome}
                    diretor={filme.diretor}
                    tipo={filme.tipo}
                    ano={filme.ano}
                    descricao={filme.descricao}
                />
            ))}

        </>
    )
}

export default Filmes