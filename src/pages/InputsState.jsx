import { useState } from "react"

function InputsState() {
    // declaracao de estado:
    // const [variavel, funcaoParaMudarAVariavel] = useState()
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [curso, setCurso] = useState("")

    return (
        <>
            <h1>Usando State em Inputs</h1>

            <input 
                type="text" 
                value={nome} 
                placeholder="Digite seu nome"
                onChange={(e) => setNome(e.target.value)}
            />
            
            <input 
                type="email" 
                value={email} 
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <select value={curso} onChange={(e) => setCurso(e.target.value)}>
                <option value="">Selecione um curso</option>
                <option value="react">React</option>
                <option value="angular">Angular</option>
            </select>
            
            <h2>Bem vindo, {nome}</h2>
            <h3>Seu e-mail {email}</h3>
            <h3>Curso escolhido {curso}</h3>
        </>
    )
}

export default InputsState