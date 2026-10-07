import './alertas-cve.css'
import Menu from '../../../components/Menu/menu'

export default function AlertasCve(){
  return(
    <div className='pg-alertas-cve'>
      <Menu/>
      <div className="main">
        <header id='alertas-cve-top'>
          <h1>Alertas de CVE</h1>
          <p></p>
        </header>
        <main className='conteudo'>
          <div className='coluna-dupla'>
            <div className='card'>
              <h2>Alertas recebidos</h2>
            </div>
            <div className='card'>
              <h2>Como avisar</h2>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
