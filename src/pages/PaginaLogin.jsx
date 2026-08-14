import { useState } from "react"

function PaginaLogin() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [validado, setValidado] = useState("")

    function conectar() {
        if (email === "yan.m.esteves@gmail.com" && senha === "123456") {
            setValidado("Bem vindo ao sistema")
            alert(`${email} e ${senha}`)
        } else {
            setValidado("Email e/ou senhas incorretos")
        }
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
            <p>{validado}</p>

            <button onClick={conectar}>Conectar</button>
        </>
    )
}

export default PaginaLogin