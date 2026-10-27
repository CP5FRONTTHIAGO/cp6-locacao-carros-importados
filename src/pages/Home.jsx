import { Link } from "react-router-dom"
import hero from "../assets/hero.jpg"

const diferenciais = [
  { icone: "🏎️", titulo: "Frota exclusiva", texto: "Modelos importados da Alemanha, Itália, França e Estados Unidos." },
  { icone: "🛡️", titulo: "Seguro completo", texto: "Proteção total inclusa em todas as locações, sem surpresas." },
  { icone: "🚚", titulo: "Entrega na sua porta", texto: "Levamos o carro até você em casa, no hotel ou no aeroporto." },
  { icone: "⭐", titulo: "Atendimento premium", texto: "Concierge disponível 24 horas durante todo o período da locação." },
]

const Home = () => {
  return (
    <main className="flex-1">
      <section
        className="relative flex min-h-[80vh] items-center bg-cover bg-center px-[5%]"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
        <div className="relative max-w-2xl py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
            Locação de carros importados
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Dirija o carro dos seus <span className="texto-gradiente">sonhos</span> hoje mesmo
          </h1>
          <p className="mt-6 text-lg text-zinc-300">
            Ferrari, Porsche, Mercedes-AMG, BMW e muito mais. Frota importada,
            revisada e pronta para entregar onde você estiver.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/carros"
              className="rounded-full bg-[#d4af37] px-8 py-3 font-semibold text-black transition-colors hover:bg-[#f5e6a8]"
            >
              Ver a frota
            </Link>
            <Link
              to="/contato"
              className="rounded-full border border-white/40 px-8 py-3 font-semibold text-white transition-colors hover:border-[#d4af37] hover:text-[#d4af37]"
            >
              Fale conosco
            </Link>
          </div>
        </div>
      </section>

      <section className="px-[5%] py-20">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
          Por que alugar com a <span className="text-[#d4af37]">Import Drive</span>?
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((item) => (
            <div key={item.titulo} className="rounded-2xl border border-white/10 bg-[#16161d] p-6">
              <span className="text-4xl">{item.icone}</span>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.titulo}</h3>
              <p className="mt-2 text-sm text-zinc-400">{item.texto}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
