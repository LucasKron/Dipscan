import { Link } from "react-router-dom";

import Menu from "../../../components/Menu/menu";

import "../dashboard.css";
import "./detalhe-cve.css";

export default function DetalheCve() {
  return (
    <div className="painel pg-detalhe-cve">

      <Menu />

      <div className="painel-corpo">

        <header className="painel-topo">
          <div>
            <p className="caminho">
              <Link to="/dashboard/vulnerabilidades">Vulnerabilidades</Link>
            </p>
            <h1>Detalhe da CVE</h1>
          </div>

          <div className="painel-acoes">
            <button className="botao" type="button">Ignorar</button>
            <button className="botao botao-escuro" type="button">Abrir PR de correção</button>
          </div>
        </header>

        <main className="painel-area">
          <div className="colunas-2-1">

            <div className="coluna">

              <div className="card">
                <div className="card-topo">
                  <h2>A falha</h2>
                </div>

                <ul className="dados">
                  <li>Vetor de ataque</li>
                  <li>Publicada</li>
                  <li>Fontes</li>
                </ul>
              </div>

              <div className="card">
                <div className="card-topo">
                  <h2>A correção</h2>
                </div>

                <div className="painel-acoes">
                  <button className="botao botao-escuro" type="button">Abrir PR de correção</button>
                  <button className="botao" type="button">Copiar comando</button>
                </div>
              </div>

            </div>

            <div className="coluna">

              <div className="card">
                <h2>Caminho da dependência</h2>
              </div>

              <div className="card">
                <h2>Histórico</h2>
              </div>

              <div className="card">
                <h2>Outros projetos afetados</h2>
              </div>

            </div>

          </div>
        </main>

      </div>
    </div>
  );
}
