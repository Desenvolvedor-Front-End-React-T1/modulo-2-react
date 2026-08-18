import { useEffect, useState } from "react"

function ChamadaApi() {

    /*
    Clone da Globo.com

        Função principal
        try/catch -> trata o erro

        - quando abro o site -> tempo de carregamento (promise await/async) -> carrega as noticias


        function fetchNoticias() {
            retornar true quando der 1 min
        }

        async function Noticias() {
            let carregando = true
            await fetchNoticias()
            carregando = false
        }

        P: qual hook é usado para identificar abertura da página?
        A - useState
        B - useEffect (Correta)

        P: qual hook eu utilizo para guardar as noticias para o usuario?
        A - useState (Correta)
        B - useEffect

        P: Qual hook utilizo para gerenciar o status do carregando?
        A - useState (Correto)
        B - useEffect

        P: O que preciso fazer agora para poder renderizar a lista de notícias?
        - usar o setNoticias
        - usar o map para percorrer o array de noticias
        - passar o loading pra false
    */

    const [noticias, setNoticias] = useState([])
    const [carregando, setCarregando] = useState(true)

    const esperar = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    
    // Quando o componente for montado/aberto, ele vai ser executado.
    // P: O que preciso fazer agora para poder renderizar a lista de notícias?
    useEffect(() => {
        console.log('Componente foi aberto.')

        async function buscarNoticias() {
            // Como usar o fetch para fazer um GET?
            const response = await fetch('http://localhost:3000/noticias')
            const dados = await response.json()

            await esperar(3000)
                    
            
            console.log('dados retornados do json-server (api)')
            console.log(dados)
            setNoticias(dados)
            setCarregando(false)
        }

        buscarNoticias()

    }, [])

    return (
        <>
            <h1>Chamada API</h1>

            {noticias.map(noticia =>
                <div key={noticia.id} className={`card-noticia ${noticia.tipo}`}>
                    {/* <img src={imagemURL} /> */}
                    <h2>{noticia.titulo}</h2>
                    <p>{noticia.descricao}</p>
                </div>
            )}

            {/* ternário >             
                se carregando == true -> exibe Loading
                se carregando == false -> Exibe a qtd de notícias
             */}
            {carregando ? <p>Loading</p> : <p>Quantidade de notícias: {noticias.length}</p>}
        </>
    )
}

export default ChamadaApi