import { Link } from "react-router-dom";

import Menu from "../../../components/Menu/menu";

import "../dashboard.css";
import "./historico.css";

export default function Historico() {
  return (
    <div className="painel pg-historico">

      <Menu />

      <div className="painel-corpo">

        <header className="painel-topo">
          <div>
            <h1>Histórico de scans</h1>
            <p className="painel-subtitulo">42 scans · desde 3 de julho</p>
          </div>

          <div className="painel-acoes">
            <button className="botao" type="button">Comparar dois scans</button>
            <Link className="botao botao-escuro" to="/escanear-gratis">Novo scan</Link>
          </div>
        </header>

        <main className="painel-area">
          <div className="card">
            <table className="tabela">
              <thead>
                <tr>
                  <th>scan</th>
                  <th>quando</th>
                  <th>origem</th>
                  <th>encontradas</th>
                  <th>variação</th>
                  <th></th>
                </tr>
              </thead>

              <tbody></tbody>
            </table>
          </div>
        </main>

      </div>
    </div>
  );
}
