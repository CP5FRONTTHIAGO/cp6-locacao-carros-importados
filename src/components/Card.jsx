import { Link } from "react-router-dom"

const formatarPreco = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })

const Card = ({ carro }) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#16161d] shadow-lg transition-all hover:-translate-y-1 hover:border-[#d4af37]/60">
      <div className="relative h-52 overflow-hidden">
        <img
          src={carro.imagem}
          alt={`${carro.marca} ${carro.modelo}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
          {carro.categoria}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm uppercase tracking-widest text-zinc-400">{carro.marca}</p>
        <h3 className="text-xl font-bold text-white">{carro.modelo}</h3>

        <ul className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-zinc-300">
          <li className="rounded-lg bg-white/5 py-2">{carro.ano}</li>
          <li className="rounded-lg bg-white/5 py-2">{carro.potencia}</li>
          <li className="rounded-lg bg-white/5 py-2">{carro.lugares} lugares</li>
        </ul>
        <p className="mt-3 text-sm text-zinc-400">Importado de {carro.origem}</p>

        <div className="mt-auto flex items-end justify-between pt-5">
          <div>
            <p className="text-xs text-zinc-400">Diária a partir de</p>
            <p className="text-2xl font-bold text-[#d4af37]">{formatarPreco(carro.diaria)}</p>
          </div>
          <Link
            to="/contato"
            state={{ carro: `${carro.marca} ${carro.modelo}` }}
            className="rounded-full bg-[#d4af37] px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-[#f5e6a8]"
          >
            Reservar
          </Link>
        </div>
      </div>
    </article>
  )
}

export default Card
