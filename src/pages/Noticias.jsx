import CardEsporte from '../components/CardEsporte'

/**
 * Exercício de Notícias (antes estava direto no App.jsx).
 *
 * Conteúdo: renderização de lista com .map, props no componente
 * CardEsporte, evento onClick e o "input travado".
 */
function Noticias() {

    const tiposNoticia = ["Esporte", "Entretenimento", "Jornalismo"]
    const noticias = [
        {
            id: 1,
            titulo: 'Brasil x Itália na semi da Liga das Nações',
            imagem: 'https://s2-home-globo.glbimg.com/mcnN4AOaenqqhb_pn4w_x4XWDa4=/0x46:1280x766/fit-in/629x354/middle/smart/filters:strip_icc():strip_exif()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/W/H/VzgiExTOSHtuobrkyM6A/brasilxjapao-vnl-4.jpg',
            tipo: 'esporte'
        },
        {
            id: 2,
            titulo: 'Sem Pirlo, Leonardo e Maldini pedem para sair da Federação Italiana',
            imagem: 'https://s2-home-globo.glbimg.com/VqLrKqfA-W2m9Xf7h3CbvzNF55w=/0x233:3840x2393/fit-in/629x354/middle/smart/filters:strip_icc():strip_exif()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2026/p/K/BLi2knSlqtovOgmXhy1A/cv1-7644-z5gecxvq-20260723025429-jpeg.jpg',
            tipo: 'esporte'
        },
        {
            id: 3,
            titulo: 'Entenda nova regra para evitar cera em lesões de goleiros que será testada no futebol inglês',
            imagem: 'https://s2-home-globo.glbimg.com/PfDHXCrN6jPCgV8DTgWzsAZ1mko=/0x78:2795x1650/fit-in/629x354/middle/smart/filters:strip_icc():strip_exif()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/F/O/Mz0SacTuAHLgcrataq1w/gettyimages-2176917933.jpg',
            tipo: 'esporte'
        },
    ]
    // tiposNoticia.forEach(tipo => console.log(tipo))

    // Sem useState o input fica travado: dá para clicar, mas não dá para digitar.
    // Compare com a página /inputs-state.
    const nome = ""

    function clicarBotao() {
        alert('houve um clique no botão')
    }


    return (
        <>
            <h1>Notícias</h1>
            <h2>Quantidade de noticias: {noticias.length}</h2>

            <input placeholder='Digite seu nome' value={nome} />

            <div className='lista-tipos-noticia'>
                {tiposNoticia.map(tipo => (
                    <button key={tipo} className='tipo-noticia'>{tipo}</button>
                ))}
            </div>

            <div className='lista-noticias'>
                {noticias.map(noticia => (
                    <CardEsporte
                        key={noticia.id}
                        tituloNoticia={noticia.titulo}
                        imagemNoticia={noticia.imagem}
                    />
                ))}

                {/* Uso sem map (lista com laço de repetição para renderização) */}
                {/* <CardEsporte
          tituloNoticia="Brasil x Itália na semi da Liga das Nações"
          imagemNoticia={"https://s2-home-globo.glbimg.com/mcnN4AOaenqqhb_pn4w_x4XWDa4=/0x46:1280x766/fit-in/629x354/middle/smart/filters:strip_icc():strip_exif()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/W/H/VzgiExTOSHtuobrkyM6A/brasilxjapao-vnl-4.jpg"}
        /> */}

                {noticias.length === 0 && <p>Não existem notícias a serem exibidas</p>}
            </div>


            <button onClick={clicarBotao}>Clique aqui</button>
        </>
    )
}

export default Noticias
