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
                        <li id='visao-geral'><LayoutGrid className='menu-icon' />Visão Geral</li>
                        <li id='vulnerabilidades'><TriangleAlert className='menu-icon' /><Link to='/dashboard/vulnerabilidades'>Vulnerabilidades</Link></li>
                        <li id='dependencias'><Layers className='menu-icon' />Dependências</li>
                        <li id='historico'><IterationCw className='menu-icon' />Histórico de scans</li>
                    </ul>
                </div>
                <div className='divider'></div>
                <div id='second-section' className='menu-links'>
                    <p className='menu-titles'>AUTOMAÇÃO</p>
                    <ul>
                        <li id='github-action'><GitFork className='menu-icon' />Github Action</li>
                        <li id='alertas-cve'><ChartPie className='menu-icon' />Alertas de CVE</li>
                    </ul>
                </div>
                <div className="divider"></div>
                <div id='third-section' className='menu-links'>
                    <p className='menu-titles'>ORGANIZAÇÃO</p>
                    <ul>
                        <li id='todos-projetos'><Rows4 className='menu-icon' />Todos os projetos</li>
                        <li id='time'><UserGroup className='menu-icon' />Time</li>
                    </ul>
                </div>
                <div className="divider"></div>
                <div id='fourth-section' className='menu-links'>
                    <ul>
                        <li id='documentacao'><Mail className='menu-icon' />Documentação</li>
                        <li id='configuracao'><Settings className='menu-icon' />Configuração</li>
                        <li id='perfil'>Perfil</li>
                    </ul>
                </div>
            </aside>
        </section>
    )
}