import './configuracao.css'
import Menu from '../../../components/Menu/menu'

export default function Configuracao(){
  return(
    <div className='pg-configuracao'>
      <Menu/>
      <div className="main">
        <header id='configuracao-top'>
          <h1>Configurações</h1>
          <p></p>
        </header>
        <main className='conteudo'>
          <div className='coluna-dupla'>
            <div className='coluna'>
              <div className='card'>
                <h2>Projeto</h2>
              </div>
            </div>
            <div className='coluna'>
              <div className='card'>
                <h2>Conta</h2>
              </div>
              <div className='card'>
                <h2>Token de API</h2>
              </div>
              <div className='card card-perigo'>
                <h2>Zona de perigo</h2>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
