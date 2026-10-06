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
  return (
    <aside id="menu">

      <div id="menu-topo">
        <Link to="/" id="menu-logo">dipscan</Link>

        <button id="menu-recolher" type="button">⟨</button>
      </div>

      <div id="menu-projeto">
        <span id="menu-projeto-sigla">ag</span>

        <div id="menu-projeto-texto">
          <p>api-gateway</p>
          <span>142 deps</span>
        </div>

        <span id="menu-projeto-troca">⇅</span>
      </div>

      <div className="menu-grupo">
        <p className="menu-titulo">ESTE PROJETO</p>

        <nav>
          <NavLink to="/dashboard" end className="menu-link">
            <LayoutGrid className="menu-icon" />
            Visão geral
          </NavLink>

          <NavLink to="/dashboard/vulnerabilidades" className="menu-link">
            <TriangleAlert className="menu-icon" />
            Vulnerabilidades
            <span className="menu-contador">18</span>
          </NavLink>

          <span className="menu-link">
            <Layers className="menu-icon" />
            Dependências
          </span>

          <span className="menu-link">
            <IterationCw className="menu-icon" />
            Histórico de scans
          </span>
        </nav>
      </div>

      <div className="menu-divisor"></div>

      <div className="menu-grupo">
        <p className="menu-titulo">AUTOMAÇÃO</p>

        <nav>
          <span className="menu-link">
            <GitFork className="menu-icon" />
            GitHub Action
            <span className="menu-ativo"></span>
          </span>

          <span className="menu-link">
            <ChartPie className="menu-icon" />
            Alertas de CVE
          </span>
        </nav>
      </div>

      <div className="menu-divisor"></div>

      <div className="menu-grupo">
        <p className="menu-titulo">ORGANIZAÇÃO</p>

        <nav>
          <span className="menu-link">
            <Rows4 className="menu-icon" />
            Todos os projetos
            <span className="menu-numero">4</span>
          </span>

          <span className="menu-link">
            <UserGroup className="menu-icon" />
            Time
          </span>
        </nav>
      </div>

      <div id="menu-rodape">
        <nav>
          <Link to="/docs" className="menu-link">
            <Mail className="menu-icon" />
            Documentação
          </Link>

          <span className="menu-link">
            <Settings className="menu-icon" />
            Configurações
          </span>
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
