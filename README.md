# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


```
# Exemplo de console.log
console.log('Olá mundo')
```

## Navegação (react-router-dom)

O projeto usa `react-router-dom`. A página inicial (`/`) só lista os exercícios
e leva o aluno para a rota de cada um — não é mais preciso comentar/descomentar
componentes no `main.jsx`.

| Arquivo | Papel |
| --- | --- |
| `src/main.jsx` | Envolve o app no `<BrowserRouter>` |
| `src/App.jsx` | Todas as `<Route>`, agrupadas por tema |
| `src/components/Layout.jsx` | Menu do topo + `<Outlet />` (moldura de todas as páginas) |
| `src/pages/Home.jsx` | Lista de exercícios com `<Link>` |
| `src/data/exercicios.js` | Título, descrição e tema de cada exercício |

### Rotas

| Tema | Rota | Página |
| --- | --- | --- |
| — | `/` | `Home.jsx` |
| Fundamentos | `/aula` | `Aula.jsx` |
| Estado (useState) | `/semana2` | `Semana2.jsx` |
| Estado (useState) | `/contador` | `Contador.jsx` |
| Estado (useState) | `/inputs-state` | `InputsState.jsx` |
| Formulários | `/login` | `PaginaLogin.jsx` |
| Formulários | `/contato-bikcraft` | `ContatoBikcraft.jsx` |
| Formulários | `/contato` | `Contato.jsx` |
| Listas e Filtros | `/filmes` | `Filmes.jsx` |
| Listas e Filtros | `/noticias` | `Noticias.jsx` |
| Listas e Filtros | `/mercado` | `Mercado.jsx` |
| Listas e Filtros | `/lista-tarefas` | `ListaTarefas.jsx` |
| — | `*` | `NaoEncontrada.jsx` (404) |

### Como adicionar um exercício novo

1. Crie o arquivo em `src/pages/`.
2. Importe ele no `App.jsx` e adicione uma `<Route>` dentro do tema certo.
3. Adicione o item em `src/data/exercicios.js` para virar card na página inicial.