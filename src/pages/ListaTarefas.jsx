import { useState, useEffect } from "react"

function ListaTarefas() {
    const [tarefa, setTarefa] = useState("")
    const [tarefas, setTarefas] = useState(["Estudar React"])

    function adicionarTarefa() {
        setTarefas([
            ...tarefas,
            tarefa
        ])
    }

    // Ele identifica qualquer coisa que acontece na tela
    useEffect(() => {
        console.log('Algo está sendo modificado')
    })

    // Executa no inicio
    useEffect(() => {
        console.log('Componente foi carregado')
        // GET fetch('/produtos')
    }, [])

    // Executa toda vez que houver mudanca no array tarefas
    useEffect(() => { 
        console.log('Array de tarefas foi modificado')
        document.title = `Tarefas: ${tarefas.length}`
        // POST fetch('/tarefas') -> registra na API o novo array de tarefas
    }, [tarefas])

    return (
        <>
            <h1>Lista de Tarefas</h1>            

            <input
                type="text"
                value={tarefa}
                placeholder="Digite uma tarefa"
                onChange={(e) => setTarefa(e.target.value)}
            />
            <button onClick={adicionarTarefa}>Adicionar tarefa</button>

            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>

            {/* // Sua missão: Criar uma página com lista de tarefas que o usuário tem para realizar.
            // 1) crie um array 'tarefas' por meio do useState
            // 2) Crie um input e botão de Adicionar tarefa
            //    O botão de Adicionar tarefa irá chamar uma função de adição de tarefas
            // 3) Na função de adição de tarefas deverá fazer uma espécie de push no array tarefas, lembrando que ele é um useState.

            Deverá ser usado: useState, onClick, onChange, .map, "fazer push sem usar .push" */}

        </>
    )
}

export default ListaTarefas