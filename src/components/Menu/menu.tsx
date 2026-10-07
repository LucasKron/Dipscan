import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  LayoutGrid,
  TriangleAlert,
  Layers,
  IterationCw,
  GitFork,
  ChartPie,
  Rows4,
  UserGroup,
  Mail,
  Settings,
} from "lucide-react";

import "./menu.css";

export default function Menu() {
  const [recolhido, setRecolhido] = useState(() => localStorage.getItem("dipscan-menu") === "recolhido");

  function alternarMenu() {
    const proximo = !recolhido;

    setRecolhido(proximo);
    localStorage.setItem("dipscan-menu", proximo ? "recolhido" : "aberto");
  }

  return (
    <aside id="menu" className={recolhido ? "recolhido" : ""}>

      <div id="menu-topo">
        <Link to="/" id="menu-logo">dipscan</Link>

        <button
          id="menu-recolher"
          type="button"
          onClick={alternarMenu}
          aria-label={recolhido ? "Expandir menu" : "Recolher menu"}
        >
          ⟨
        </button>
      </div>

      <div id="menu-navegacao">

        <div className="menu-grupo">
          <p className="menu-titulo">ESTE PROJETO</p>

          <nav>
            <NavLink to="/dashboard" end className="menu-link" title="Visão geral">
              <LayoutGrid className="menu-icon" />
              <span className="menu-texto">Visão geral</span>
            </NavLink>

            <NavLink to="/dashboard/vulnerabilidades" className="menu-link" title="Vulnerabilidades">
              <TriangleAlert className="menu-icon" />
              <span className="menu-texto">Vulnerabilidades</span>
              <span className="menu-contador">18</span>
            </NavLink>

            <NavLink to="/dashboard/dependencias" className="menu-link" title="Dependências">
              <Layers className="menu-icon" />
              <span className="menu-texto">Dependências</span>
            </NavLink>

            <NavLink to="/dashboard/historico" className="menu-link" title="Histórico de scans">
              <IterationCw className="menu-icon" />
              <span className="menu-texto">Histórico de scans</span>
            </NavLink>
          </nav>
        </div>

        <div className="menu-divisor"></div>

        <div className="menu-grupo">
          <p className="menu-titulo">AUTOMAÇÃO</p>

          <nav>
            <NavLink to="/dashboard/github-action" className="menu-link" title="GitHub Action">
              <GitFork className="menu-icon" />
              <span className="menu-texto">GitHub Action</span>
              <span className="menu-ativo"></span>
            </NavLink>

            <NavLink to="/dashboard/alertas-cve" className="menu-link" title="Alertas de CVE">
              <ChartPie className="menu-icon" />
              <span className="menu-texto">Alertas de CVE</span>
            </NavLink>
          </nav>
        </div>

        <div className="menu-divisor"></div>

        <div className="menu-grupo">
          <p className="menu-titulo">ORGANIZAÇÃO</p>

          <nav>
            <NavLink to="/dashboard/projetos" className="menu-link" title="Todos os projetos">
              <Rows4 className="menu-icon" />
              <span className="menu-texto">Todos os projetos</span>
              <span className="menu-numero">4</span>
            </NavLink>

            <NavLink to="/dashboard/time" className="menu-link" title="Time">
              <UserGroup className="menu-icon" />
              <span className="menu-texto">Time</span>
            </NavLink>
          </nav>
        </div>

      </div>

      <div id="menu-rodape">
        <nav>
          <Link to="/docs" className="menu-link" title="Documentação">
            <Mail className="menu-icon" />
            <span className="menu-texto">Documentação</span>
          </Link>

          <NavLink to="/dashboard/configuracao" className="menu-link" title="Configurações">
            <Settings className="menu-icon" />
            <span className="menu-texto">Configurações</span>
          </NavLink>
        </nav>

        <div id="menu-perfil">
          <span id="menu-avatar">LK</span>

          <div id="menu-perfil-texto">
            <p>Lucas K.</p>
            <span>plano time</span>
          </div>

          <span id="menu-perfil-mais">⋯</span>
        </div>
      </div>

    </aside>
  );
}
