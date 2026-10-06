export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">

        <span className="hero-badge">
          🟢 OSV + NVD sincronizados hoje
        </span>

        <h1>
          Seu projeto tem
          <br />
          18 portas <em>abertas</em>.
        </h1>

        <p className="hero-description">
          Cada dependência que você instalou trouxe as dela junto.
          O depscan encontra as falhas conhecidas e mostra a versão
          que corrige cada uma.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Escanear meu package.json
          </button>

          <button className="btn-secondary">
            Ver exemplo
          </button>
        </div>

      </div>

      <div className="scan-card">

        <div className="scan-header">
          <span>package.json</span>
          <span>142 deps · 3.1s</span>
        </div>

        <div className="scan-item">
          <span className="red-dot"></span>
          <span>minimist <small>1.2.5</small></span>
          <strong>→ 1.2.6</strong>
        </div>

        <div className="scan-item">
          <span className="red-dot"></span>
          <span>shell-quote <small>1.7.2</small></span>
          <strong>→ 1.7.3</strong>
        </div>

        <div className="scan-item">
          <span className="yellow-dot"></span>
          <span>lodash <small>4.17.15</small></span>
          <strong>→ 4.17.19</strong>
        </div>

      </div>

    </section>
  );
}