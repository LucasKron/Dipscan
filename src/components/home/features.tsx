const pacotes = [
  "Lucas",
  "Kainan",
  "Maicon",
  "Lucas",
  "Kainan",
  "Maicon",
  "Lucas",
  "Kainan",
  "Maicon",
];

const recursos = [
  {
    icon: "⚡",
    titulo: "Três segundos",
    texto: "Sem agente, sem instalar CLI, sem esperar pipeline. Arrasta e lê.",
  },
  {
    icon: "⇄",
    titulo: "Duas bases",
    texto: "OSV e NVD cruzados, sem CVE repetida e sem falha que só uma delas conhece.",
  },
  {
    icon: "🔒",
    titulo: "Nada armazenado",
    texto: "Seu arquivo é lido em memória e descartado assim que o scan termina.",
  },
];

export default function Features() {
  return (
    <>
      <section className="ticker">
        <div className="ticker-content">
          {pacotes.map((pacote) => (
            <span key={pacote}>● {pacote}</span>
          ))}
        </div>
      </section>

      <section className="features">
        {recursos.map((recurso) => (
          <div className="feature-card" key={recurso.titulo}>
            <div className="feature-icon">{recurso.icon}</div>

            <h3>{recurso.titulo}</h3>

            <p>{recurso.texto}</p>
          </div>
        ))}
      </section>
    </>
  );
}