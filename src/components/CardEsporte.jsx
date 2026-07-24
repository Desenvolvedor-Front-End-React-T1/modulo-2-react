function CardEsporte({ tituloNoticia, imagemNoticia }) {

    // const tituloNoticia = "Brasil x Itália na semi da Liga das Nações"
    // const imagemNoticia = "https://s2-home-globo.glbimg.com/mcnN4AOaenqqhb_pn4w_x4XWDa4=/0x46:1280x766/fit-in/629x354/middle/smart/filters:strip_icc():strip_exif()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/W/H/VzgiExTOSHtuobrkyM6A/brasilxjapao-vnl-4.jpg"

    return (
        <div className="card-noticia">            
            <img src={imagemNoticia} alt={tituloNoticia} />
            <h2>{tituloNoticia}</h2>
        </div>
    )
}

export default CardEsporte
// Como usar o componente: <CardEsporte />