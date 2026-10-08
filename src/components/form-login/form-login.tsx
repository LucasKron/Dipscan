import { Link } from 'react-router-dom'
import './Form-login.css'

export default function Formlogin () {
    return(
        <section id="entrar">
            <div className="box">
                <p className="entrartitulo">Entrar no dipscan</p>
                <p className="entrarsubtitulo">Scans avulsos não precisam de conta. Entre para guardar histórico e usar a Action.</p>
                <Link to="/dashboard" className="e-btn">Continuar com GitHub</Link>
                <div className="divisor">
                    <div className="divisor-linha"></div>
                    <span className="ou">ou</span>
                    <div className="divisor-linha"></div>
                </div>
                <label htmlFor="em">E-mail</label>
                <input id="em" type="email" placeholder='voce@empresa.com' />
                <label htmlFor="em">Senha</label>
                <input id="se" type="password" placeholder='••••••••' />
                <Link to="/dashboard" className="btn-dark">Entrar</Link>
                <p className="naotemconta">
                    Não tem uma conta?
                    <Link to="/dashboard" className="criaruma">Criar uma</Link>
                </p>
            </div>
        </section>
    )
}