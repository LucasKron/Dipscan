import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="home-footer">

      <span>
        depscan · código aberto
      </span>

      <div>
         <Link to="/docs">
          docs
        </Link>

        <Link to="/entrar">
          entrar
        </Link>
      </div>

    </footer>
  );
}