function Noticia({ titulo, materia, imagem, video }) {
    return (
        <div>
            <Header />
            <h1>{titulo}</h1>
            <img src={imagem} />
            <p>{materia}</p>
            <Footer />
        </div>
    )
}

export default Noticia