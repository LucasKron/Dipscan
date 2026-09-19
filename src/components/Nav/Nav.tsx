import './Nav.css'

export default function Nav(){
    return(
        <section id='header'>
            <nav>
                <a href=""><p className='titulo-site'>dipscan</p></a>
                <ul id="links">
                    <li><a href=''>Produto</a></li>
                    <li><a href=''>GitHub Action</a></li>
                    <li><a href=''>Preços</a></li>
                    <li><a href=''>Docs</a></li>
                </ul>
                <ul id="right-links">
                    <li><a href=''>Entrar</a></li>
                    <li><a href=''><button className='btn'>Escanear grátis</button></a></li>
                </ul>
            </nav>
        </section>
    )
}