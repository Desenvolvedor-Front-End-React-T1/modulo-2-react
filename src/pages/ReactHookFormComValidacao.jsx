import { useForm } from 'react-hook-form'

function ReactHookFormComValidacao() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    function enviarFormulario(dados) {
        console.log(dados)
    }

    return (
        <>
            <h1>React Hook Form</h1>

            {/* cadastro de usuário */}
            <form onSubmit={handleSubmit(enviarFormulario)} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

                {/* Voce é obrigado a escrever para enviar o form */}
                <input placeholder="Nome"
                    {...register('nome', {
                        required: 'Nome é obrigatório'
                    })}
                />

                {errors.nome && (
                    <span>{errors.nome.message}</span>
                )}

                <input placeholder="E-mail"
                    {...register('email', {
                        required: 'E-mail é obrigatório',
                        pattern: {
                            // ReGex
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Digite um e-mail válido'
                        },
                        message: 'Digite um e-mail válido'
                    })} />

                {errors.email && (
                    <span>{errors.email.message}</span>
                )}

                <input placeholder="Senha"
                    {...register('senha', {
                        required: 'Senha é obrigatória',
                        minLength: {
                            value: 6,
                            message: 'Minimo de 6 caracteres'
                        }
                    })}
                />


                {errors.senha && (
                    <span>{errors.senha.message}</span>
                )}


                <button type='submit'>Cadastrar</button>
            </form>
        </>
    )
}

export default ReactHookFormComValidacao