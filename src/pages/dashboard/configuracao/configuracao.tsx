import { useState } from "react";

import Menu from "../../../components/Menu/menu";

import "../dashboard.css";
import "./configuracao.css";

const frequencias = ["desligado", "diário", "semanal"];

export default function Configuracao() {
  const [nomeProjeto, setNomeProjeto] = useState("");
  const [ecossistema, setEcossistema] = useState("");
  const [frequencia, setFrequencia] = useState("diário");
  const [incluirDev, setIncluirDev] = useState(true);
  const [nomeConta, setNomeConta] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="painel pg-configuracao">

      <Menu />

      <div className="painel-corpo">

        <header className="painel-topo">
          <div>
            <h1>Configurações</h1>
            <p className="painel-subtitulo">conta, projeto e integrações</p>
          </div>

          <div className="painel-acoes">
            <button className="botao botao-escuro" type="button">Salvar</button>
          </div>
        </header>

        <main className="painel-area">
          <div className="colunas-2">

            <div className="coluna">
              <div className="card">
                <div className="card-topo">
                  <h2>Projeto</h2>
                </div>

                <label className="campo">
                  <span>Nome</span>
                  <input
                    type="text"
                    value={nomeProjeto}
                    onChange={(evento) => setNomeProjeto(evento.target.value)}
                  />
                </label>

                <label className="campo">
                  <span>Ecossistema</span>
                  <input
                    type="text"
                    value={ecossistema}
                    onChange={(evento) => setEcossistema(evento.target.value)}
                  />
                </label>

                <p className="rotulo">Scan automático</p>

                <div className="abas">
                  {frequencias.map((item) => (
                    <button
                      className={item === frequencia ? "aba aba-ativa" : "aba"}
                      key={item}
                      type="button"
                      onClick={() => setFrequencia(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <div className="separador">
                  <div className="opcao">
                    <div>
                      <p>Incluir devDependencies</p>
                      <span className="texto-apagado">analisa também as dependências de desenvolvimento</span>
                    </div>

                    <button
                      className={incluirDev ? "interruptor interruptor-ligado" : "interruptor"}
                      type="button"
                      aria-pressed={incluirDev}
                      aria-label="Incluir devDependencies"
                      onClick={() => setIncluirDev(!incluirDev)}
                    ></button>
                  </div>
                </div>
              </div>
            </div>

            <div className="coluna">

              <div className="card">
                <div className="card-topo">
                  <h2>Conta</h2>
                </div>

                <label className="campo">
                  <span>Nome</span>
                  <input
                    type="text"
                    value={nomeConta}
                    onChange={(evento) => setNomeConta(evento.target.value)}
                  />
                </label>

                <label className="campo">
                  <span>E-mail</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(evento) => setEmail(evento.target.value)}
                  />
                </label>
              </div>

              <div className="card">
                <div className="card-topo">
                  <h2>Token de API</h2>
                </div>

                <div className="campo">
                  <input type="text" readOnly />
                </div>

                <div className="painel-acoes">
                  <button className="botao botao-mini" type="button">Copiar</button>
                  <button className="botao botao-mini" type="button">Gerar novo</button>
                </div>
              </div>

              <div className="card card-perigo">
                <div className="card-topo">
                  <h2>Zona de perigo</h2>
                </div>

                <p className="texto-apagado">Apagar o projeto remove o histórico de scans e desativa a Action.</p>

                <div className="painel-acoes espaco">
                  <button className="botao botao-perigo" type="button">Apagar projeto</button>
                </div>
              </div>

            </div>

          </div>
        </main>

      </div>
    </div>
  );
}
