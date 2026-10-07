import './dependencias.css'
import Menu from '../../../components/Menu/menu'

export default function Dependencias(){
  return(
    <div className='pg-dependencias'>
      <Menu/>
      <div className="main">
        <header id='dependencias-top'>
          <h1>Dependências</h1>
          <p></p>
        </header>
        <main className='conteudo'>
          <div className='linha-kpi'>
            <div className='card card-kpi'></div>
            <div className='card card-kpi'></div>
            <div className='card card-kpi'></div>
            <div className='card card-kpi'></div>
          </div>
          <div className='card'>
            <h2>Todos os pacotes</h2>
          </div>
        </main>
      </div>
    </div>
  )
}
