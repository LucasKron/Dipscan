import { Link } from "react-router-dom";

export default function GithubAction() {
  return (
    <section className="github-section">

      <div className="github-content">

        <div className="github-text">
          <span className="github-tag">
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
            <button className="github-button">
              Saber mais
            </button>
          </Link>
        </div>


        <div className="code-card">

          <p className="comment">
            # security.yml
          </p>

          <p>
            - uses: <span className="green-code">
              depscan/action@v1
            </span>
          </p>

          <p>
            &nbsp;&nbsp;with:
          </p>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;fail-on:{" "}
            <span className="red-code">
              critical
            </span>
          </p>

          <div className="merge-block">
            <span>
              <b>✕</b> depscan
            </span>

            <span>
              merge bloqueado
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}