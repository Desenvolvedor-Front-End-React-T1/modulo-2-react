function CardFilme({ nome, diretor, tipo, ano, descricao }) {
    return (
        <div>
            <h3>{nome}</h3>
            <h4>{diretor} &#176; {tipo} &#176; {ano}</h4>
            <p>{descricao}</p>
            <hr />
        </div>
    )
}

export default CardFilme