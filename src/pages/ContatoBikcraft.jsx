import { useState } from 'react'

function ContatoBikcraft() {
    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")

    function enviarMensagem() {
        const usuario = {
            nome,
            telefone,
            email,
            mensagem
        }
        console.log(usuario)
    }

    return (
        <>
            <h1>ContatoBikcraft</h1>    
            <div>
                <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                <input type="text" placeholder="(21) 9999-9999" value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
                <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <textarea placeholder="O que voce precisa?" value={mensagem} onChange={(e) => setMensagem(e.target.value)}/>
                <button onClick={enviarMensagem}>Enviar Mensagem</button>
            </div>
        </>
    )
}

export default ContatoBikcraft