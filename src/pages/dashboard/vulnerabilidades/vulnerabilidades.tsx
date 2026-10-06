import Menu from "../../../components/Menu/menu";

import "../dashboard.css";
import "./vulnerabilidades.css";

export default function Vulnerabilidades() {
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
            <input className="painel-busca" type="text" placeholder="Buscar pacote ou CVE" />
            <button className="botao" type="button">Exportar JSON</button>
            <button className="botao botao-escuro" type="button">Corrigir todas</button>
          </div>
        </header>

        <main className="painel-area">
          <div className="card"></div>
        </main>

      </div>
    </div>
  );
}
