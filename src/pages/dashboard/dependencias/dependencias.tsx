import { useState } from "react";

import Menu from "../../../components/Menu/menu";

import "../dashboard.css";
import "./dependencias.css";

const indicadores = ["DIRETAS", "TRANSITIVAS", "DESATUALIZADAS", "COM FALHA"];
const abas = ["todos", "com falha", "desatualizados", "diretos"];

export default function Dependencias() {
  const [aba, setAba] = useState("todos");
  const [busca, setBusca] = useState("");

  return (
    <div className="painel pg-dependencias">

      <Menu />

      <div className="painel-corpo">

        <header className="painel-topo">
          <div>
            <h1>Dependências</h1>
            <p className="painel-subtitulo">142 diretas · 1.284 no total da árvore</p>
          </div>

          <div className="painel-acoes">
            <input
              className="painel-busca"
              type="text"
              placeholder="Buscar pacote"
              value={busca}
              onChange={(evento) => setBusca(evento.target.value)}
            />
            <button className="botao" type="button">Exportar SBOM</button>
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

          <div className="card espaco">

            <div className="card-topo">
              <h2>Todos os pacotes</h2>

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
            </div>

            <table className="tabela">
              <thead>
                <tr>
                  <th>pacote</th>
                  <th>instalada</th>
                  <th>mais recente</th>
                  <th>tipo</th>
                  <th>licença</th>
                  <th>estado</th>
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
