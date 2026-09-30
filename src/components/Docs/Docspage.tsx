import { Link } from 'react-router-dom'
import './Docspage.css'

export default function Docspage(){
    return(
        <section id='docs'>
            <div id='docs-main'>
                <div id='aba-lateral'>
                    <div className='aba-sub'>
                        <p className='aba-subtitulo'>COMEÇAR</p>
                        <Link to=''><button className='bttn'>Introdução</button></Link>
                        <Link to=''><button className='bttn'>Primeiro scan</button></Link>
                        <Link to=''><button className='bttn'>Formatos aceitos</button></Link>
                    </div>
                    <div className='aba-sub'>
                        <p className='aba-subtitulo'>API</p>
                        <Link to=''><button className='bttn'>Autenticação</button></Link>
                        <Link to=''><button className='bttn'>POST /scan</button></Link>
                        <Link to=''><button className='bttn'>Webhooks</button></Link>
                    </div>
                    <div className='aba-sub'>
                        <p className='aba-subtitulo'>CI</p>
                        <Link to=''><button className='bttn'>GitHub Action</button></Link>
                        <Link to=''><button className='bttn'>GitLab CI</button></Link>
                    </div>
                </div>
                <div className="intro-contenent">
                    <h1>Introdução</h1>
                    <p className='text'>O depscan lê um manifesto de dependências, resolve as versões instaladas e consulta duas bases públicas de vulnerabilidade: o
                        <Link to='' className='text-color-link'> OSV </Link>
                        , mantido pelo Google, e a
                        <Link to='' className='text-color-link'> NVD </Link>
                        , do NIST.
                    </p>
                    <br/>
                    <p className='text'>O resultado é uma lista de falhas conhecidas com o CVSS oficial e a menor versão que corrige cada uma.</p>
                    <h3>Scan pela API</h3>
                    <div className='code'>
                        <div>
                            <span className='z'>$ </span>
                            curl -X POST https://api.depscan.dev/scan \
                        </div>
                        <div>
                            &nbsp;&nbsp;-H 
                            <span className='y'> "Authorization: Bearer $TOKEN" \</span>
                        </div>
                        <div>
                            &nbsp;&nbsp;-F
                            <span className='y'> "manifest=@package.json"</span>
                        </div>
                    </div>
                    <h3>Resposta</h3>
                    <div className='code'>
                        <div>{"{"}</div>
                        <div>
                            &nbsp;&nbsp;
                            <span className='y'>"total"</span>
                            : 18;
                        </div>
                        <div>
                            &nbsp;&nbsp;
                            <span className='y'>"findings"</span>
                            : {"[{"}
                        </div>
                        <div>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='y'>"package"</span>
                            : "minimist",
                        </div>
                        <div>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='y'>"version"</span>
                            : "1.2.5",
                        </div>
                        <div>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='y'>"cve"</span>
                            : "CVE-2021-44906",
                        </div>
                        <div>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='y'>"cvss"</span>
                            <span className='r'>: "9.8",</span>
                        </div>
                        <div>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className='y'>"version"</span>
                            : "1.2.6"
                        </div>
                        <div>
                            &nbsp;&nbsp;
                            {"}]"}
                        </div>
                        <div>{"}"}</div>
                    </div>
                </div>
            </div>               
            <div id='docs-footer'>
                <div>
                    <span>depscan · código aberto</span>
                </div>
                <div>
                    <Link to='/'>início</Link>
                    <Link to='/precos'>preços</Link>
                </div>
            </div>
        </section>
    )
}