import './App.css'
import CardNoticia from './componentes/CardNoticia'
import Footer from './componentes/Footer'
import ComponenteTeste from './componentes/ComponenteTeste'
function App() {


  return (
    <>
      <h1>Este é o app.jsx</h1>

      {/* <h1>Olá, mundo</h1> */}
      {/* <p>Esta é a primeira aplicação react</p> */}
      <CardNoticia
        titulo="Espanha campeã do mundo"
        descricao="Esportes * Copa do Mundo"
        tipo="esporte"
        imagemURL="https://s2-home-globo.glbimg.com/VSkZm_Y57Qh351Eke8exH7-iJv0=/645x372:1457x828/fit-in/629x354/middle/smart/filters:strip_icc():strip_exif()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/r/P/EU7k7JRC6SGibWwtu2lA/54089809413-4b6943483a-k.jpg"
      />

      <CardNoticia
        titulo="Mansão com diária de R$3.300"
        descricao="Imóveis * Destaques"
        tipo="jornalismo"
        imagemURL="https://s2-home-globo.glbimg.com/gKX8OXg0qSS3ovsfwHYSvqSJaAI=/0x106:2000x1231/fit-in/629x354/middle/smart/filters:strip_icc():strip_exif()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/I/F/bBUwBOSWGdPlOpWAPZbA/blank-4-grids-collage-1-.jpg"
      />

      <Footer />

      <ComponenteTeste />
    </>
  )
}

export default App
