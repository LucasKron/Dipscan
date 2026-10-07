import './time.css'
import Menu from '../../../components/Menu/menu'

export default function Time(){
  return(
    <div className='pg-time'>
      <Menu/>
      <div className="main">
        <header id='time-top'>
          <h1>Time</h1>
          <p></p>
        </header>
        <main className='conteudo'>
          <div className='coluna'>
            <div className='card'>
              <h2>Membros</h2>
            </div>
            <div className='card'>
              <h2>Convites pendentes</h2>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
