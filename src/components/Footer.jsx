import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="grid gap-10 px-[5%] py-10 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-bold">
            IMPORT<span className="text-[#d4af37] pl-1">DRIVE</span>
          </h2>
          <p className="text-zinc-400 mt-3 max-w-sm">
            Locação de carros importados de luxo e esportivos para quem quer
            viver uma experiência única ao volante.
          </p>
        </div>

        <div>
          <h3 className="text-[#d4af37] font-semibold uppercase tracking-wider text-sm">Navegação</h3>
          <ul className="mt-4 space-y-2 text-zinc-300">
            <li><Link to="/" className="hover:text-[#d4af37] transition-colors">Home</Link></li>
            <li><Link to="/carros" className="hover:text-[#d4af37] transition-colors">Carros</Link></li>
            <li><Link to="/contato" className="hover:text-[#d4af37] transition-colors">Contato</Link></li>
            <li><Link to="/login" className="hover:text-[#d4af37] transition-colors">Login</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#d4af37] font-semibold uppercase tracking-wider text-sm">Atendimento</h3>
          <ul className="mt-4 space-y-2 text-zinc-300">
            <li>Av. Paulista, 1106 - São Paulo/SP</li>
            <li>(11) 4000-2026</li>
            <li>contato@importdrive.com.br</li>
            <li>Seg. a Sáb. das 8h às 20h</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-[5%] py-5 text-center text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} Import Drive. Todos os direitos reservados.
      </div>
    </footer>
  )
}

export default Footer
