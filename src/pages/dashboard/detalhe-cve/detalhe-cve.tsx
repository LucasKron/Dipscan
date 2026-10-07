import { Link } from 'react-router-dom'
import './detalhe-cve.css'
import Menu from '../../../components/Menu/menu'

export default function DetalheCve(){
  return(
    <div className='pg-detalhe-cve'>
      <Menu/>
      <div className="main">
        <header id='detalhe-cve-top'>
          <div>
            <p className='crumb'><Link to='/dashboard/vulnerabilidades'>Vulnerabilidades</Link></p>
            <h1>Detalhe da CVE</h1>
          </div>
        </header>
        <main className='conteudo'>
          <div className='coluna-dupla'>
            <div className='coluna'>
              <div className='card'></div>
              <div className='card'>
                <h2>A correção</h2>
              </div>
            </div>
            <div className='coluna'>
              <div className='card'>
                <h2>Caminho da dependência</h2>
              </div>
              <div className='card'>
                <h2>Histórico</h2>
              </div>
              <div className='card'>
                <h2>Outros projetos afetados</h2>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
