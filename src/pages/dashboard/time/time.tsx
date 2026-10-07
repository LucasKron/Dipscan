import Menu from "../../../components/Menu/menu";

import "../dashboard.css";
import "./time.css";

export default function Time() {
  return (
    <div className="painel pg-time">

      <Menu />

      <div className="painel-corpo">

        <header className="painel-topo">
          <div>
            <h1>Time</h1>
            <p className="painel-subtitulo">3 membros · plano Time</p>
          </div>

          <div className="painel-acoes">
            <button className="botao botao-escuro" type="button">Convidar membro</button>
          </div>
        </header>

        <main className="painel-area">
          <div className="coluna">

            <div className="card">
              <div className="card-topo">
                <h2>Membros</h2>
              </div>

              <table className="tabela">
                <thead>
                  <tr>
                    <th>pessoa</th>
                    <th>e-mail</th>
                    <th>papel</th>
                    <th>último acesso</th>
                  </tr>
                </thead>

                <tbody></tbody>
              </table>
            </div>

            <div className="card">
              <div className="card-topo">
                <h2>Convites pendentes</h2>
              </div>

              <table className="tabela">
                <thead>
                  <tr>
                    <th>e-mail</th>
                    <th>papel</th>
                    <th>enviado</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody></tbody>
              </table>
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}
