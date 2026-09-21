import { Link } from 'react-router-dom'
import './Docspage.css'

export default function Docspage(){
    return(
        <section id='docs'>
            <div id='aba-lateral'>
                <div className='aba-sub'>
                    <p className='aba-subtitulo'>COMEÇAR</p>
                    <Link to=''><button className='btn'>Introdução</button></Link>
                    <Link to=''><button className='btn'>Primeiro scan</button></Link>
                    <Link to=''><button className='btn'>Formatos aceitos</button></Link>
                </div>
                <div className='aba-sub'>
                    <p className='aba-subtitulo'>API</p>
                    <Link to=''><button className='btn'>Autenticação</button></Link>
                    <Link to=''><button className='btn'>POST /scan</button></Link>
                    <Link to=''><button className='btn'>Webhooks</button></Link>
                </div>
                <div className='aba-sub'>
                    <p className='aba-subtitulo'>CI</p>
                    <Link to=''><button className='btn'>GitHub Action</button></Link>
                    <Link to=''><button className='btn'>GitLab CI</button></Link>
                </div>
            </div>
            <div>

            </div>
            <div>
                <div>
                    <p>depscan · código aberto</p>
                </div>
                <div>
                    <Link to='/'>início</Link>
                    <Link to='/precos'>preços</Link>
                </div>
            </div>
        </section>
    )
}