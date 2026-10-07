import './historico.css'
import Menu from '../../../components/Menu/menu'

export default function Historico(){
  return(
    <div className='pg-historico'>
      <Menu/>
      <div className="main">
        <header id='historico-top'>
          <h1>Histórico de scans</h1>
          <p></p>
        </header>
        <main className='conteudo'>
          <div className='card'></div>
        </main>
      </div>
    </div>
  )
}
