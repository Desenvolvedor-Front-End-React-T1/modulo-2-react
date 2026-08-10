import { useState, useEffect } from "react"

function Contador() {
    // declaracao de estado:
    // const [variavel, funcaoParaMudarAVariavel] = useState()
    const [contador, setContador] = useState(0)      
    /**
     * setContador(parametro)
     * parametro -> é o novo valor da variavel contador
     */

    useEffect(() => {
        console.log("O valor do contador mudou")
        if (contador === 100) {
            alert("O contador chegou a 100")
        }
    }, [contador])

    return (
        <>
            <h1>Contador</h1>
            <h2>{contador}</h2>
            <button onClick={
                () => setContador(contador + 1)
            }>+1</button>
            <button onClick={
                () => setContador(contador - 1)
            }>-1</button>

            <button onClick={
                () => setContador(0)
            }>Zerar</button>
        </>
    )
}

export default Contador