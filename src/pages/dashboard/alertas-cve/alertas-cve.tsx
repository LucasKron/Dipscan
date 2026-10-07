import { useState } from "react";

import Menu from "../../../components/Menu/menu";

import "../dashboard.css";
import "./alertas-cve.css";

const severidades = ["baixa", "média", "alta", "crítica"];

export default function AlertasCve() {
  const [email, setEmail] = useState(true);
  const [slack, setSlack] = useState(true);
  const [webhook, setWebhook] = useState(false);
  const [severidade, setSeveridade] = useState("alta");

  return (
    <div className="painel pg-alertas-cve">

      <Menu />

      <div className="painel-corpo">

        <header className="painel-topo">
          <div>
            <h1>Alertas de CVE</h1>
            <p className="painel-subtitulo">avisamos quando uma falha nova atinge um pacote que você já usa</p>
          </div>

          <div className="painel-acoes">
            <button className="botao botao-escuro" type="button">Salvar alterações</button>
          </div>
        </header>

        <main className="painel-area">
          <div className="colunas-2-1">

            <div className="card">
              <div className="card-topo">
                <h2>Alertas recebidos</h2>
              </div>

              <table className="tabela">
                <thead>
                  <tr>
                    <th>pacote</th>
                    <th>cve</th>
                    <th>cvss</th>
                    <th>publicada</th>
                    <th>projetos</th>
                  </tr>
                </thead>

                <tbody></tbody>
              </table>
            </div>

            <div className="card">
              <div className="card-topo">
                <h2>Como avisar</h2>
              </div>

              <div className="opcao">
                <div>
                  <p>E-mail</p>
                  <span className="texto-apagado">lucask@empresa.com</span>
                </div>

                <button
                  className={email ? "interruptor interruptor-ligado" : "interruptor"}
                  type="button"
                  aria-pressed={email}
                  aria-label="Avisar por e-mail"
                  onClick={() => setEmail(!email)}
                ></button>
              </div>

              <div className="opcao">
                <div>
                  <p>Slack</p>
                  <span className="texto-apagado">#seguranca</span>
                </div>

                <button
                  className={slack ? "interruptor interruptor-ligado" : "interruptor"}
                  type="button"
                  aria-pressed={slack}
                  aria-label="Avisar no Slack"
                  onClick={() => setSlack(!slack)}
                ></button>
              </div>

              <div className="opcao">
                <div>
                  <p>Webhook</p>
                  <span className="texto-apagado">nenhum configurado</span>
                </div>

                <button
                  className={webhook ? "interruptor interruptor-ligado" : "interruptor"}
                  type="button"
                  aria-pressed={webhook}
                  aria-label="Avisar por webhook"
                  onClick={() => setWebhook(!webhook)}
                ></button>
              </div>

              <div className="separador">
                <p className="rotulo">Avisar a partir de</p>

                <div className="abas">
                  {severidades.map((item) => (
                    <button
                      className={item === severidade ? "aba aba-ativa" : "aba"}
                      key={item}
                      type="button"
                      onClick={() => setSeveridade(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}
