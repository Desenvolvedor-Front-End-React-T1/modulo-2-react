import { useState } from "react"

function Semana2() {
    // JS

    // funcoes, declaracoes de variáveis ...
    // TODA VEZ QUE UMA VARIÁVEL APARECER NO HTML
    // E ESSA VARIÁVEL FOR ALTERADA, O REACT PRECISA SABER DISSO,
    // ENTAO COLOCAMOS O USESTATE
    // let idade = 33

    const [idade, setIdade] = useState(15)
    
    // const [variavel, FuncaoParaMudarVariavel] = useState(ValorInicialDaVariavel)

    // document.getElementById('btnAumentarIdade').addEventListener('click', function() {

    function aumentarIdade() {
        setIdade(idade + 1)
    }

    function diminuirIdade() {
        setIdade(idade - 1)
    }

    function controleExibicao() {
        if (idade >= 18) {
            return <p>Voce é maior de idade!</p>
        }
    }
    
    // HTML
    return (
        <>
            <h1>Conteúdo da Semana 3</h1>

            <span>A idade é: {idade}</span>
            <button onClick={aumentarIdade}>Aumentar a Idade</button>
            <button onClick={diminuirIdade}>Diminuir a Idade</button>

            {/* SE IDADE É MAIOR OU IGUAL A 18, EXIBE ALGO DIFERENTE */}
            {/* {idade >= 18 && <p>Voce é maior de idade!</p>} */}

            {controleExibicao()}
        </>
    )
}

export default Semana2  