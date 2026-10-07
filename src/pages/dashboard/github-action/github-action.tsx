import './github-action.css'
import Menu from '../../../components/Menu/menu'

export default function GithubActionDashboard(){
  return(
    <div className='pg-github-action'>
      <Menu/>
      <div className="main">
        <header id='github-action-top'>
          <h1>GitHub Action</h1>
          <p></p>
        </header>
        <main className='conteudo'>
          <div className='coluna-dupla'>
            <div className='coluna'>
              <div className='card'>
                <h2>Configuração</h2>
              </div>
              <div className='card'>
                <h2>Execuções recentes</h2>
              </div>
            </div>
            <div className='coluna'>
              <div className='card'>
                <h2>Regras</h2>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
