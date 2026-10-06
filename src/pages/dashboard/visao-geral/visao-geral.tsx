import './visao-geral.css'
import Menu from '../../../components/Menu/menu'

export default function VisaoGeral(){

  return(
    <div className='pg-visao-geral'>
      <Menu/>
      <div className="main">   
        <header id='visao-top'>
          <h1>Visão Geral</h1>
          <p>último scan há 0 minutos</p>
        </header>
      </div>
    </div>
  )
}
