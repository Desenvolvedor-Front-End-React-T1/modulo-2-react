import { useState } from "react"

function PaginaLogin() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    function conectar() {
        alert(`${email} e ${senha}`)
    }

    return (
        <>
            <h1>Login</h1>
            <input 
                type="email"
                value={email}
                placeholder="Digite seu e-mail"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password"
                value={senha}
                placeholder="Digite sua senha"
                onChange={(e) => setSenha(e.target.value)}
            />

            <button onClick={conectar}>Conectar</button>
        </>
    )
}

export default PaginaLogin