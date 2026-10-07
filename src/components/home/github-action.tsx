import { Link } from "react-router-dom";

export default function GithubAction() {
  return (
    <section className="home-action">
      <div className="action-text">

        <span className="action-badge">
          em breve
        </span>

        <h2>
          E depois, em todo
          <br />
          pull request.
        </h2>

        <p>
          Uma linha no workflow: o depscan comenta no PR,
          marca o check e segura o merge quando aparece
          falha crítica.
        </p>

        <Link to="/github-action">
          <button className="action-button">
            Saber mais
          </button>
        </Link>

      </div>


      <div className="action-code">

        <p className="code-comment">
          # security.yml
        </p>

        <p>
          - uses:{" "}
          <span className="code-green">
            depscan/action@v1
          </span>
        </p>

        <p>
          &nbsp;&nbsp;with:
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;fail-on:{" "}
          <span className="code-red">
            critical
          </span>
        </p>

        <div className="merge-box">
          <span>
            <b>✕</b> depscan
          </span>

          <span>
            merge bloqueado
          </span>
        </div>

      </div>
    </section>
  );
}