import { Link } from 'react-router-dom'
import { LayoutGrid, TriangleAlert, Layers, IterationCw, GitFork, ChartPie, Rows4, UserGroup, Mail, Settings } from 'lucide-react'
import './menu.css'

export default function Menu(){
    return(
        <section id="menu">
            <aside>
                <div id='side-top' className='menu-links'>
                    <Link to='/'><span id='menu-logo'>dipscan</span></Link>
                    <button id='toggle-button'>
                        <span id='toggle-icon'>⟨</span>
                    </button>
                </div>
                <div id='first-section' className='menu-links'>
                    <p className='menu-titles'>ESTE PROJETO</p>
                    <ul>
                        <li id='visao-geral'><LayoutGrid className='menu-icon' /><Link to='/dashboard'>Visão Geral</Link></li>
                        <li id='vulnerabilidades'><TriangleAlert className='menu-icon' /><Link to='/dashboard/vulnerabilidades'>Vulnerabilidades</Link></li>
                        <li id='dependencias'><Layers className='menu-icon' /><Link to='/dashboard/dependencias'>Dependências</Link></li>
                        <li id='historico'><IterationCw className='menu-icon' /><Link to='/dashboard/historico'>Histórico de scans</Link></li>
                    </ul>
                </div>
                <div className='divider'></div>
                <div id='second-section' className='menu-links'>
                    <p className='menu-titles'>AUTOMAÇÃO</p>
                    <ul>
                        <li id='github-action'><GitFork className='menu-icon' /><Link to='/dashboard/github-action'>Github Action</Link></li>
                        <li id='alertas-cve'><ChartPie className='menu-icon' /><Link to='/dashboard/alertas-cve'>Alertas de CVE</Link></li>
                    </ul>
                </div>
                <div className="divider"></div>
                <div id='third-section' className='menu-links'>
                    <p className='menu-titles'>ORGANIZAÇÃO</p>
                    <ul>
                        <li id='todos-projetos'><Rows4 className='menu-icon' /><Link to='/dashboard/projetos'>Todos os projetos</Link></li>
                        <li id='time'><UserGroup className='menu-icon' /><Link to='/dashboard/time'>Time</Link></li>
                    </ul>
                </div>
                <div className="divider"></div>
                <div id='fourth-section' className='menu-links'>
                    <ul>
                        <li id='documentacao'><Mail className='menu-icon' /><Link to='/docs'>Documentação</Link></li>
                        <li id='configuracao'><Settings className='menu-icon' /><Link to='/dashboard/configuracao'>Configuração</Link></li>
                        <li id='perfil'>Perfil</li>
                    </ul>
                </div>
            </aside>
        </section>
    )
}