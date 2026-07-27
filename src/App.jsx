import './App.css'
import CardEsporte from './components/CardEsporte'

function App() {

  const tiposNoticia = ["Esporte", "Entretenimento", "Jornalismo"]

  const logado = true

  function fazerLogin() {
    alert('Houve clique no botao')
  }

  return (
    <>
      <h1>App.jsx</h1>
      
      <button onClick={fazerLogin}>Clique aqui</button>
      
      {logado ? <p>Bem vindo!</p> : <p>Faça login</p>}

      <div className='lista-tipos-noticia'>
        {tiposNoticia.map(tipo => (
          <button key={tipo} className='tipo-noticia'>{tipo}</button>
        ))}
      </div>

      {/* Card Notícia */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '12px' }}>

        {/* Brasil x Itália */}
        <CardEsporte
          tituloNoticia="Brasil x Itália na semi da Liga das Nações"
          imagemNoticia={"https://s2-home-globo.glbimg.com/mcnN4AOaenqqhb_pn4w_x4XWDa4=/0x46:1280x766/fit-in/629x354/middle/smart/filters:strip_icc():strip_exif()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/W/H/VzgiExTOSHtuobrkyM6A/brasilxjapao-vnl-4.jpg"}
        />

        <CardEsporte
          tituloNoticia="Coritiba tem interesse na ..."
          imagemNoticia={"https://s2-ge.glbimg.com/lLryxWN5YFhCQLeAGEQZgZGfzlU=/810x456/top/smart/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/y/w/qpjD6yR0u3jVyFiXD0Fg/agif26072301462292.jpg"}
        />
      </div>

    </>
  )
}

export default App
