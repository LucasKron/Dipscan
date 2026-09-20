import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav(){
    return(
        <section id='header'>
            <nav>
                <Link to='/'><p className='titulo-site'>dipscan</p></Link>
                <ul id="links">
                    <li><Link to='/'>Produto</Link></li>
                    <li><Link to='/github-action'>GitHub Action</Link></li>
                    <li><Link to='/precos'>Preços</Link></li>
                    <li><Link to='/docs'>Docs</Link></li>
                </ul>
                <ul id="right-links">
                    <li><Link to='/entrar'>Entrar</Link></li>
                    <li><Link to='/escanear-gratis'><button className='btn'>Escanear grátis</button></Link></li>
                </ul>
            </nav>
        </section>
    )
}
