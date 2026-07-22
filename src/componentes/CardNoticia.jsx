/**
 * tipo jornalismo -> vermelho
 * tipo esporte -> verde
 * tipo entretenimento -> laranja
 */
function CardNoticia({ titulo, descricao, tipo, imagemURL }) {

    return (
        <div className={`card-noticia ${tipo}`}>
            <img src={imagemURL} />
            <h2>{titulo}</h2>
            <p>{descricao}</p>
        </div>
    )
}

export default CardNoticia