import { useEffect, useState } from "react"
function Noticias() {
// P: qual hook é usado para identificar abertura da página?
// A - useState
// B - useEffect (correta)

// P: qual hook eu utilizo para guardar as noticias para o usuario?
// A - useState (correta)
// B - useEffect

// P: Qual hook utilizo para gerenciar o status do carregando?
// A - useState (correta)
// B - useEffect

// P: O que preciso fazer agora para poder renderizar a lista de notícias?
// - usar o setNoticias
// - usar o map para percorrer o array de noticias
// - passar o loading pra false

    // Se a variável é renderizada no HTML e é atualizada no JS
    // utiliza useState
    const [noticias, setNoticias] = useState([])

    // para identificar mudança de algo, utilizamos useEffect
    useEffect(() => {
        console.log('componente aberto')
        // adiciona o código do fetch
    }, [])

    useEffect(() => {
        // pega qualquer mudanca no componente
    })

    useEffect(() => {
        // qualquer mudança na variável noticias
        // ela mudou o tamanho
        // ela foi zerada
    }, [noticias])
   return (
      <>
        {noticias.map(noticia => <span>{noticia.titulo}</span>)}
      </>
   )
}

export default Noticias