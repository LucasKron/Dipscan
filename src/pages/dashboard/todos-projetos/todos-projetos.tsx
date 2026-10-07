import { useState } from "react";

import Menu from "../../../components/Menu/menu";

import "../dashboard.css";
import "./todos-projetos.css";

export default function TodosProjetos() {
  const [busca, setBusca] = useState("");

  return (
    <div className="painel pg-todos-projetos">

      <Menu />

      <div className="painel-corpo">

        <header className="painel-topo">
          <div>
            <h1>Todos os projetos</h1>
            <p className="painel-subtitulo">4 projetos · 24 vulnerabilidades no total</p>
          </div>

          <div className="painel-acoes">
            <input
              className="painel-busca"
              type="text"
              placeholder="Buscar projeto"
              value={busca}
              onChange={(evento) => setBusca(evento.target.value)}
            />
            <button className="botao botao-escuro" type="button">Conectar repositório</button>
          </div>
        </header>

        <main className="painel-area">
          <div className="colunas-3">
            <button className="card card-novo" type="button">+ Conectar repositório</button>
          </div>
        </main>

      </div>
    </div>
  );
}
