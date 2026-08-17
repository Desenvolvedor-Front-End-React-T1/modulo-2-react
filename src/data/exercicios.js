/**
 * Catálogo das aulas e exercícios.
 *
 * Cada item vira um card na página inicial (pages/Home.jsx).
 * Os temas são usados para agrupar os cards na tela.
 *
 * ATENÇÃO: ao adicionar um exercício aqui, registre também a
 * <Route> correspondente em App.jsx (é lá que fica a navegação).
 */

// Os temas também são usados no menu do topo (components/Layout.jsx)
export const temas = [
    'Fundamentos',
    'Estado (useState)',
    'Formulários',
    'Listas e Filtros',
]

const exercicios = [
    // --- Fundamentos ---
    {
        rota: '/aula',
        titulo: 'Aula 1 - JSX e Componentes',
        descricao: 'Fragment, interpolação de variáveis, renderização de lista com .map e renderização condicional.',
        tema: 'Fundamentos',
    },

    // --- Estado (useState) ---
    {
        rota: '/semana2',
        titulo: 'Semana 2 - Primeiro useState',
        descricao: 'Por que uma variável que aparece na tela precisa de useState. Aumenta e diminui a idade.',
        tema: 'Estado (useState)',
    },
    {
        rota: '/contador',
        titulo: 'Contador',
        descricao: 'useState + useEffect: soma, subtrai e zera. O useEffect avisa quando o contador chega a 10.',
        tema: 'Estado (useState)',
    },
    {
        rota: '/inputs-state',
        titulo: 'Inputs com State',
        descricao: 'Inputs controlados com value + onChange, incluindo um <select>.',
        tema: 'Estado (useState)',
    },

    // --- Formulários ---
    {
        rota: '/login',
        titulo: 'Página de Login',
        descricao: 'Validação de e-mail e senha com useState e exibição da mensagem de retorno.',
        tema: 'Formulários',
    },
    {
        rota: '/contato-bikcraft',
        titulo: 'Contato Bikcraft',
        descricao: 'Formulário completo (nome, telefone, e-mail e mensagem) montando um objeto no envio.',
        tema: 'Formulários',
    },
    {
        rota: '/contato',
        titulo: 'Contato (esboço)',
        descricao: 'Estrutura da página de contato: menu, formulário e footer. Ainda em construção.',
        tema: 'Formulários',
    },

    // --- Listas e Filtros ---
    {
        rota: '/filmes',
        titulo: 'Exercício de Filmes',
        descricao: 'Array de filmes no useState, componente CardFilme e busca por nome com filter + useEffect.',
        tema: 'Listas e Filtros',
    },
    {
        rota: '/noticias',
        titulo: 'Exercício de Notícias',
        descricao: 'Lista de notícias renderizada com .map no componente CardEsporte e botões por tipo.',
        tema: 'Listas e Filtros',
    },
    {
        rota: '/mercado',
        titulo: 'Exercício de Mercado',
        descricao: 'Catálogo de produtos com campo de busca e mensagem de "nenhum produto encontrado".',
        tema: 'Listas e Filtros',
    },
    {
        rota: '/lista-tarefas',
        titulo: 'Lista de Tarefas',
        descricao: 'Adicionar tarefas sem usar .push (spread operator) e os três tipos de useEffect.',
        tema: 'Listas e Filtros',
    },
]

export default exercicios
