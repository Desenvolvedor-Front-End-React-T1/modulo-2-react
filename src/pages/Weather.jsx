import { useState } from 'react'

function WeatherPage() {

    const [local, setLocal] = useState('')

    const [temperatura, setTemperatura] = useState()
    const [umidade, setUmidade] = useState()
    const [velocidadeVento, setVelocidadeVento] = useState()

    function buscarInformacoes() {
        getTemperatura()
    }

    async function getTemperatura() {
        const response = await fetch('.../temperatura?local=' + local)
        const dado = await response.json()
        setTemperatura(dado)
    }


    return (
        <>
            <input placeholder="Cidade, estado, país" value={local} onChange={(e) => setLocal(e.target.value)} />    
            <button onClick={buscarInformacoes}>Fazer pesquisa</button>
            <h2>Dados da cidade</h2>
            <p>Temperatura: {temperatura}</p>
        </>
    )
}

export default WeatherPage 