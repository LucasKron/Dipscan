import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/home/footer";

import "./github_action.css";

export default function GithubAction() {
  return (
    <>
      <Nav />

      <main className="github-page">

        <section className="github-hero">
          <span className="github-badge">
            em breve
          </span>

          <h1>
            Nenhuma CVE crítica
            <br />
            passa pelo merge.
          </h1>

          <p>
            A Action roda o mesmo scan em todo pull request,
            comenta o que mudou e reprova o check quando entra
            uma falha acima do limite que você definir.
          </p>
        </section>


        <section className="github-demo">

          <div className="workflow-card">

            <p className="comment">
              # .github/workflows/security.yml
            </p>

            <p>name: security</p>
            <p>on: [pull_request]</p>

            <p>jobs:</p>

            <p>&nbsp;&nbsp;scan:</p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;runs-on: ubuntu-latest
            </p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;steps:
            </p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- uses:{" "}
              <span className="green">
                depscan/action@v1
              </span>
            </p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with:
            </p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fail-on:{" "}
              <span className="red">
                critical
              </span>
            </p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;comment: true
            </p>

          </div>


          <div className="pr-card">

            <div className="pr-header">
              <div className="avatar">
                ds
              </div>

              <div>
                <strong>depscan</strong>
                <span> comentou há 1 minuto</span>
              </div>
            </div>

            <p className="pr-text">
              Este PR adiciona{" "}
              <code>shell-quote@1.7.2</code>,
              que tem uma falha crítica conhecida.
            </p>

            <div className="vulnerability-table">

              <div className="table-header">
                <span>pacote</span>
                <span>cvss</span>
                <span>correção</span>
              </div>

              <div className="table-row">
                <code>shell-quote</code>

                <span className="cvss">
                  9.8
                </span>

                <span className="fix">
                  → 1.7.3
                </span>
              </div>

            </div>

            <div className="blocked">
              ✕ depscan — 1 crítica encontrada, merge bloqueado
            </div>

          </div>

        </section>


        <section className="github-final">

          <h2>
            Entre na lista de espera.
          </h2>

          <p>
            Avisamos quando a Action sair do beta fechado.
          </p>

          <button>
            Quero ser avisado
          </button>

        </section>

      </main>
         <Footer />
    </>
  );
}