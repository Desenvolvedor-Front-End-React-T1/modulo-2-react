// Sua missão: Renderizar catálogo de mercado

// 3) Adicione um campo de busca para identificar se o item existe no catálogo
// Deverá ser usado: useState, onChange, .map

import { useState, useEffect } from 'react'

function Mercado() {

    const [busca, setBusca] = useState('') // ro
    const [lista, setLista] = useState([
        { produto: 'Arroz', preco: 10 },
        { produto: 'Feijão', preco: 8 },
    ])

    const [listaFiltrada, setListaFiltrada] = useState(lista)


    useEffect(() => {

        // só vai ser executado aqui quando o usuario digitar
        const consulta = lista.filter(item => item.produto.toLowerCase().includes(busca.toLowerCase()))

        setListaFiltrada(consulta)
    }, [busca])

    return (
        <>
            <h1>Mercado</h1>

            <input value={busca}
                onChange={(e) => setBusca(e.target.value)}
                type="text"
                placeholder="Buscar produto..."
                style={{ border: '1px solid black', margin: '10px', padding: '10px' }} />

            <button onClick={consultar}>Pesquisar</button>

            <h2>Produtos Disponíveis:</h2>
            {listaFiltrada.map(item => (
                <div key={item.produto} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                    <p>Produto: {item.produto}</p>
                    <p>Preço: {item.preco}</p>
                </div>
            ))}

            {listaFiltrada.length === 0 && <p>Nenhum produto encontrado.</p>}
        </>
    )
}

export default Mercado