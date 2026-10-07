import './todos-projetos.css'
import Menu from '../../../components/Menu/menu'

export default function TodosProjetos(){
  return(
    <div className='pg-todos-projetos'>
      <Menu/>
      <div className="main">
        <header id='todos-projetos-top'>
          <h1>Todos os projetos</h1>
          <p></p>
        </header>
        <main className='conteudo'>
          <div className='grid-projetos'></div>
        </main>
      </div>
    </div>
  )
}
