# Aulas de React — Módulo 2

Repositório de estudos do módulo 2 (SENAI / SCTEC). Cada aula e exercício vira
uma **página** com sua própria rota, e a página inicial (`/`) funciona como um
índice: ela lista todos os exercícios em cards agrupados por tema.

Conteúdo praticado aqui:

- JSX, componentes, props e renderização de listas com `.map`
- Renderização condicional (`&&` e ternário)
- Estado com `useState` (contador, inputs controlados, formulários)
- Efeitos com `useEffect` (montagem, dependências, atualização)
- Filtros e buscas em arrays
- Navegação com `react-router-dom` (`BrowserRouter`, `Routes`, `Link`, `NavLink`, `Outlet`)
- Chamada de API com `fetch` + `async/await` e estado de carregamento (`json-server`)

## Tecnologias

| Ferramenta | Versão | Para quê |
| --- | --- | --- |
| React | 19 | Biblioteca de interface |
| Vite | 8 | Servidor de desenvolvimento e build |
| react-router-dom | 7 | Navegação entre as páginas |
| ESLint | 10 | Análise estática do código |
| json-server | — | API falsa usada no exercício `/chamada-api` |

Pré-requisito: **Node.js 18 ou superior** (o projeto foi rodado com Node 24).

## Como instalar

```bash
git clone https://github.com/Desenvolvedor-Front-End-React-T1/modulo-2-react
cd modulo-2-react
npm install
```

## Como executar

```bash
npm run dev
```

O Vite sobe em **http://localhost:5173**. Abra esse endereço e escolha um
exercício na tela inicial.

> A maioria dos exercícios funciona só com o `npm run dev`. A única exceção é o
> `/chamada-api`, que precisa do json-server rodando junto (seção abaixo).

### Scripts disponíveis

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Sobe o app em modo desenvolvimento com hot reload |
| `npm run build` | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Serve localmente o que foi gerado pelo `build` |
| `npm run lint` | Roda o ESLint em todo o projeto |

## Rodando o json-server (exercício `/chamada-api`)

A página `/chamada-api` (`src/pages/ChamadaApi.jsx`) faz um `fetch` real em
`http://localhost:3000/noticias`. Quem responde nesse endereço é o
**json-server**, que transforma o arquivo `noticias.json` (na raiz do projeto)
em uma API REST — sem precisar escrever backend nenhum.

### 1. Suba a API

Em um **segundo terminal** (deixe o `npm run dev` rodando no primeiro):

```bash
npx json-server noticias.json
```

Na primeira vez o `npx` pergunta se pode baixar o pacote — responda `y`. O
json-server sobe na **porta 3000** por padrão, que é exatamente a porta que a
página espera. Para deixar explícito:

```bash
npx json-server noticias.json --port 3000
```

### 2. Confira se está no ar

Abra **http://localhost:3000/noticias** no navegador. Você deve ver o array de
notícias em JSON. Se aparecer, a página `/chamada-api` vai funcionar.

### 3. Abra a página

Vá em http://localhost:5173/chamada-api (ou clique no card *Chamada de API* na
tela inicial). O comportamento esperado é:

1. aparece **Loading** — o código tem um `esperar(3000)` de propósito, para dar
   tempo de ver o estado de carregamento;
2. depois de ~3 segundos as notícias são renderizadas e o texto vira
   *Quantidade de notícias: N*.

### Formato do `noticias.json`

A chave de primeiro nível (`noticias`) é o que vira a rota `/noticias` na API:

```json
{
    "noticias": [
        {
            "id": 1,
            "titulo": "Brasil x Itália na semi da Liga das Nações",
            "imagem": "",
            "tipo": "esporte"
        }
    ]
}
```

| Campo | Uso na tela |
| --- | --- |
| `id` | Vira o `key` do `.map` |
| `titulo` | Título do card (`<h2>`) |
| `tipo` | Entra na `className` do card (`card-noticia esporte`) |
| `imagem` | Ainda não é exibida (a `<img>` está comentada no componente) |
| `descricao` | O componente já renderiza esse campo, mas ele ainda não existe no JSON — adicione se quiser texto no card |

Para adicionar notícias, basta editar o `noticias.json` e recarregar a página —
o json-server lê o arquivo em tempo real. Como ele é uma API REST completa,
também dá para testar `POST`, `PUT` e `DELETE` em `http://localhost:3000/noticias`.

> **Dica:** se preferir não digitar o `npx` toda vez, adicione
> `"api": "json-server noticias.json"` nos `scripts` do `package.json` e instale
> com `npm i -D json-server`. Aí é só rodar `npm run api`.

> **Versão antiga:** em projetos com json-server 0.17 o comando precisa do
> `--watch` (`npx json-server --watch noticias.json`). Na versão 1.x isso não é
> mais necessário.

## Estrutura do projeto

```
modulo-2-react/
├── noticias.json          # "banco de dados" do json-server
├── index.html             # HTML raiz do Vite
└── src/
    ├── main.jsx           # Ponto de entrada; envolve o app no <BrowserRouter>
    ├── App.jsx            # TODAS as <Route> do projeto
    ├── App.css            # Estilos do layout, cards e páginas
    ├── data/
    │   └── exercicios.js  # Catálogo (título, descrição e tema) usado pela Home
    ├── components/        # Componentes reutilizados pelas páginas
    │   ├── Layout.jsx     # Menu do topo + <Outlet />
    │   ├── CardFilme.jsx
    │   ├── CardNoticia.jsx
    │   ├── CardEsporte.jsx
    │   └── ...
    └── pages/             # Uma página por exercício
        ├── Home.jsx
        ├── ChamadaApi.jsx
        └── ...
```

### Os quatro arquivos que comandam a navegação

| Arquivo | Papel |
| --- | --- |
| `src/main.jsx` | Envolve o app no `<BrowserRouter>` |
| `src/App.jsx` | Todas as `<Route>`, agrupadas por tema |
| `src/components/Layout.jsx` | Menu do topo + `<Outlet />` (moldura de todas as páginas) |
| `src/pages/Home.jsx` | Monta os cards a partir do catálogo |
| `src/data/exercicios.js` | Título, descrição e tema de cada exercício |

## Rotas

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
| Listas e Filtros | `/chamada-api` | `ChamadaApi.jsx` (precisa do json-server) |
| — | `*` | `NaoEncontrada.jsx` (404) |

## Como adicionar um exercício novo

São **três** passos — pular o passo 3 é o erro mais comum:

1. Crie o arquivo em `src/pages/`, por exemplo `MinhaPagina.jsx`.
2. Em `src/App.jsx`, importe o componente e adicione a `<Route>` dentro do bloco
   do tema certo:
   ```jsx
   <Route path="/minha-pagina" element={<MinhaPagina />} />
   ```
   Isso faz a URL funcionar.
3. Em `src/data/exercicios.js`, adicione o item no array `exercicios`:
   ```js
   {
       rota: '/minha-pagina',
       titulo: 'Minha Página',
       descricao: 'O que esse exercício pratica.',
       tema: 'Listas e Filtros',
   }
   ```
   Isso faz o card aparecer na tela inicial.

> **Atenção:** a Home não lê as rotas do `App.jsx` — ela percorre o array
> `temas` e, para cada tema, filtra o array `exercicios`. Por isso o `tema` do
> item precisa ser **exatamente** uma das strings de `temas` (topo do
> `exercicios.js`). Se você usar um tema novo, adicione ele nos dois lugares,
> senão o card não aparece mesmo estando cadastrado.

## Em construção

- `src/pages/Weather.jsx` ainda não tem `<Route>` no `App.jsx` nem item no
  catálogo, e o `fetch` está com uma URL de exemplo (`.../temperatura?local=`).
- `src/pages/Contato.jsx` é um esboço de estrutura (menu, formulário e footer).
