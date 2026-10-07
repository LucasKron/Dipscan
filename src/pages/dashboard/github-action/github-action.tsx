import { useState } from "react";

import Menu from "../../../components/Menu/menu";

import "../dashboard.css";
import "./github-action.css";

const severidades = ["baixa", "média", "alta", "crítica"];

export default function GithubActionDashboard() {
  const [bloquearMerge, setBloquearMerge] = useState(true);
  const [comentarNoPr, setComentarNoPr] = useState(true);
  const [ignorarTransitivas, setIgnorarTransitivas] = useState(false);
  const [severidade, setSeveridade] = useState("crítica");

  return (
    <div className="painel pg-github-action">

      <Menu />

      <div className="painel-corpo">

        <header className="painel-topo">
          <div>
            <h1>GitHub Action</h1>
            <p className="painel-subtitulo">ativa em api-gateway · 3 execuções esta semana</p>
          </div>

          <div className="painel-acoes">
            <button className="botao" type="button">Desativar</button>
            <button className="botao botao-escuro" type="button">Editar workflow</button>
          </div>
        </header>

        <main className="painel-area">
          <div className="colunas-2-1">

            <div className="coluna">

              <div className="card">
                <div className="card-topo">
                  <h2>Configuração</h2>
                </div>

                <div className="passo">
                  <span className="passo-numero">1</span>
                  <p>Repositório conectado</p>
                </div>

                <div className="passo">
                  <span className="passo-numero">2</span>
                  <p>Workflow no repositório</p>
                </div>

                <div className="passo">
                  <span className="passo-numero">3</span>
                  <p>Proteger a branch main</p>
                </div>
              </div>

              <div className="card">
                <div className="card-topo">
                  <h2>Execuções recentes</h2>
                </div>

                <table className="tabela">
                  <thead>
                    <tr>
                      <th>pr</th>
                      <th>título</th>
                      <th>quando</th>
                      <th>resultado</th>
                    </tr>
                  </thead>

                  <tbody></tbody>
                </table>
              </div>

            </div>

            <div className="coluna">
              <div className="card">
                <div className="card-topo">
                  <h2>Regras</h2>
                </div>

                <div className="opcao">
                  <div>
                    <p>Bloquear merge</p>
                    <span className="texto-apagado">quando houver falha crítica</span>
                  </div>

                  <button
                    className={bloquearMerge ? "interruptor interruptor-ligado" : "interruptor"}
                    type="button"
                    aria-pressed={bloquearMerge}
                    aria-label="Bloquear merge"
                    onClick={() => setBloquearMerge(!bloquearMerge)}
                  ></button>
                </div>

                <div className="opcao">
                  <div>
                    <p>Comentar no PR</p>
                    <span className="texto-apagado">com a tabela de falhas novas</span>
                  </div>

                  <button
                    className={comentarNoPr ? "interruptor interruptor-ligado" : "interruptor"}
                    type="button"
                    aria-pressed={comentarNoPr}
                    aria-label="Comentar no PR"
                    onClick={() => setComentarNoPr(!comentarNoPr)}
                  ></button>
                </div>

                <div className="opcao">
                  <div>
                    <p>Ignorar transitivas</p>
                    <span className="texto-apagado">só falha em dependência direta</span>
                  </div>

                  <button
                    className={ignorarTransitivas ? "interruptor interruptor-ligado" : "interruptor"}
                    type="button"
                    aria-pressed={ignorarTransitivas}
                    aria-label="Ignorar transitivas"
                    onClick={() => setIgnorarTransitivas(!ignorarTransitivas)}
                  ></button>
                </div>

                <div className="separador">
                  <p className="rotulo">Reprovar a partir de</p>

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

          </div>
        </main>

      </div>
    </div>
  );
}
