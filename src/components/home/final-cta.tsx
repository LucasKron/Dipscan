import { Link } from "react-router-dom";

export default function FinalCta() {
  return (
    <section className="final-cta">

      <h2>
        Leva 3 segundos
        <br />
        para <em>descobrir</em>.
      </h2>

      <p>
        Ou meses, do jeito ruim.
      </p>

      <Link to="/escanear-gratis">
        <button>
          Escanear meu package.json
        </button>
      </Link>

    </section>
  );
}