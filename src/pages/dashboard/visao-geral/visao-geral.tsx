import { Link } from "react-router-dom";

import Menu from "../../../components/Menu/menu";

import "../dashboard.css";
import "./visao-geral.css";

const indicadores = ["ABERTAS", "CRÍTICAS", "COM CORREÇÃO", "CVSS MÁXIMO"];

export default function VisaoGeral() {
  return (
    <div className="painel pg-visao-geral">

      <Menu />

      <div className="painel-corpo">

        <header className="painel-topo">
          <div>
            <h1>Visão geral</h1>
            <p className="painel-subtitulo">último scan há 2 minutos · npm · 142 dependências</p>
          </div>

          <div className="painel-acoes">
            <input className="painel-busca" type="text" placeholder="Buscar pacote ou CVE" />
            <button className="botao" type="button">Exportar</button>
            <button className="botao botao-escuro" type="button">Novo scan</button>
          </div>
        </header>

        <main className="painel-area">

          <div className="colunas-4">
            {indicadores.map((rotulo) => (
              <div className="card indicador" key={rotulo}>
                <p className="indicador-rotulo">{rotulo}</p>
              </div>
            ))}
          </div>

          <div className="colunas-2-1 espaco">

            <div className="card">
              <div className="card-topo">
                <h2>Vulnerabilidades por semana</h2>
                <span className="texto-apagado">últimas 8 semanas</span>
              </div>

              <div className="grafico-legenda">
                <span><span className="bolinha bolinha-vermelha"></span> crítica</span>
                <span><span className="bolinha bolinha-laranja"></span> alta</span>
                <span><span className="bolinha bolinha-cinza"></span> média</span>
                <span><span className="bolinha bolinha-clara"></span> baixa</span>
              </div>

              <div className="grafico"></div>
            </div>

            <div className="card">
              <h2>Por gravidade</h2>
            </div>

          </div>

          <div className="card espaco">
            <div className="card-topo">
              <h2>Vulnerabilidades abertas</h2>
              <Link className="link-verde" to="/dashboard/vulnerabilidades">ver todas →</Link>
            </div>
          </div>

          <div className="colunas-3 espaco">

            <div className="card">
              <h2>Seus projetos</h2>
            </div>

            <div className="card">
              <h2>Novas nesta semana</h2>
            </div>

            <div className="card-escuro">
              <div className="card-topo">
                <h2>GitHub Action</h2>
                <span className="etiqueta-ativa">ativa</span>
              </div>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}
