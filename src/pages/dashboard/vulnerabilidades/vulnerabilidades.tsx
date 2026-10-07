import { useState } from "react";

import Menu from "../../../components/Menu/menu";

import "../dashboard.css";
import "./vulnerabilidades.css";

const abas = ["todas", "críticas", "altas", "com correção", "diretas"];

export default function Vulnerabilidades() {
  const [aba, setAba] = useState("todas");
  const [busca, setBusca] = useState("");
  const [pagina, setPagina] = useState(1);

  return (
    <div className="painel pg-vulnerabilidades">

      <Menu />

      <div className="painel-corpo">

        <header className="painel-topo">
          <div>
            <h1>Vulnerabilidades</h1>
            <p className="painel-subtitulo">18 abertas · 16 com correção disponível</p>
          </div>

          <div className="painel-acoes">
            <input
              className="painel-busca"
              type="text"
              placeholder="Buscar pacote ou CVE"
              value={busca}
              onChange={(evento) => setBusca(evento.target.value)}
            />
            <button className="botao" type="button">Exportar JSON</button>
            <button className="botao botao-escuro" type="button">Corrigir todas</button>
          </div>
        </header>

        <main className="painel-area">
          <div className="card">

            <div className="card-topo">
              <div className="abas">
                {abas.map((item) => (
                  <button
                    className={item === aba ? "aba aba-ativa" : "aba"}
                    key={item}
                    type="button"
                    onClick={() => setAba(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <span className="texto-apagado">ordenado por CVSS</span>
            </div>

            <table className="tabela">
              <thead>
                <tr>
                  <th>pacote</th>
                  <th>cve</th>
                  <th>cvss</th>
                  <th>tipo de falha</th>
                  <th>origem</th>
                  <th>correção</th>
                </tr>
              </thead>

              <tbody></tbody>
            </table>

            <div className="card-rodape">
              <span className="texto-apagado">página {pagina}</span>

              <div className="paginacao">
                <button
                  className="botao botao-mini"
                  type="button"
                  disabled={pagina === 1}
                  onClick={() => setPagina(pagina - 1)}
                >
                  ←
                </button>

                <button className="botao botao-mini" type="button" onClick={() => setPagina(pagina + 1)}>
                  →
                </button>
              </div>
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}
