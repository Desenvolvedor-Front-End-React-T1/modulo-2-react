function Aula() {
    // "JS"   
    const nome = 'Yan'
    const userPremium = true

    const lista = ["Joao", "Marcos", `Jorge`]

    function bloqueadoUsuarioFree() {
        return <>
            <span>Este conteudo é apenas para usuários premium</span>
        </>
    }

    function recursoPremium() {
        return <div className="bg-black color-white">
            <span>Este recurso é para usuários premium</span>
        </div>
    }

    // "HTML"
    return (
        // Fragment -> React.Fragment
        // Objetivo: Agrupar tags html sem div        
        <>
            <h1>Ola, {nome}</h1>
            <button>Clique aqui</button>

            {/* Renderizacao de lista */}
            {lista.map(item => (
                <div key={item}>
                    <h3>{item}</h3>
                    <button>Editar</button>
                </div>
            ))}

            {/* Controle de variável para exibicao de conteudo */}
            {userPremium ? recursoPremium() : bloqueadoUsuarioFree()}
        </>
    )
}

export default Aula