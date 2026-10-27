import { Link } from "react-router-dom"

const Error = () => {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-[5%] py-24 text-center">
      <p className="texto-gradiente text-8xl font-extrabold">404</p>
      <h1 className="mt-4 text-3xl font-bold text-white">Página não encontrada</h1>
      <p className="mt-3 max-w-md text-zinc-400">
        Parece que você pegou a saída errada. Volte para a pista e confira nossa frota.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-[#d4af37] px-8 py-3 font-semibold text-black transition-colors hover:bg-[#f5e6a8]"
      >
        Voltar para a Home
      </Link>
    </main>
  )
}

export default Error
