function CardLocalizacao({ imagem, cidade, rua, cidadeEstado, email, telefone, horarioFuncionamento }) {
    return (
        <div className="card-localizacao">
            <img src={imagem} />
            <h2>{cidade}</h2>
            <div>
                <p>{rua}</p>
                <p>{cidadeEstado}</p>
                <p>{email}</p>
                <p>{telefone}</p>
            </div>
            <p>{horarioFuncionamento}</p>
        </div>
    )

}

export default CardLocalizacao  