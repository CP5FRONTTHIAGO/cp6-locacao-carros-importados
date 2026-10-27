import { useState } from "react"
import Card from "../components/Card"
import carros from "../data/carros"

const categorias = ["Todos", ...new Set(carros.map((carro) => carro.categoria))]

const Carros = () => {
  const [busca, setBusca] = useState("")
  const [categoria, setCategoria] = useState("Todos")

  const termo = busca.trim().toLowerCase()
  const carrosFiltrados = carros.filter(
    (carro) =>
      (categoria === "Todos" || carro.categoria === categoria) &&
      `${carro.marca} ${carro.modelo}`.toLowerCase().includes(termo)
  )

  return (
    <main className="flex-1 px-[5%] py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">Nossa frota</p>
      <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">Carros importados</h1>
      <p className="mt-4 max-w-2xl text-zinc-400">
        Escolha o seu próximo carro entre os modelos mais desejados do mundo.
        Todos revisados, higienizados e com seguro completo.
      </p>

      <input
        type="search"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="Buscar por marca ou modelo..."
        className="mt-8 w-full max-w-md rounded-full border border-white/15 bg-[#16161d] px-5 py-3 text-white placeholder:text-zinc-500 focus:border-[#d4af37] focus:outline-none"
      />

      <div className="mt-6 flex flex-wrap gap-3">
        {categorias.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategoria(item)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              categoria === item
                ? "bg-[#d4af37] text-black"
                : "border border-white/15 text-zinc-300 hover:border-[#d4af37] hover:text-[#d4af37]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-zinc-400">
        {carrosFiltrados.length} {carrosFiltrados.length === 1 ? "carro disponível" : "carros disponíveis"}
      </p>

      {carrosFiltrados.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {carrosFiltrados.map((carro) => (
            <Card key={carro.id} carro={carro} />
          ))}
        </div>
      ) : (
        <p className="mt-6 text-zinc-400">Nenhum carro encontrado com os filtros selecionados.</p>
      )}
    </main>
  )
}

export default Carros
