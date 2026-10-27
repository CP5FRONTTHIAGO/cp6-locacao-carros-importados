import Card from "../components/Card"
import carros from "../data/carros"

const Carros = () => {
  return (
    <main className="flex-1 px-[5%] py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">Nossa frota</p>
      <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">Carros importados</h1>
      <p className="mt-4 max-w-2xl text-zinc-400">
        Escolha o seu próximo carro entre os modelos mais desejados do mundo.
        Todos revisados, higienizados e com seguro completo.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {carros.map((carro) => (
          <Card key={carro.id} carro={carro} />
        ))}
      </div>
    </main>
  )
}

export default Carros
