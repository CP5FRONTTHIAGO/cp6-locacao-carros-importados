import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

const links = [
  { to: "/", label: "Home" },
  { to: "/carros", label: "Carros" },
  { to: "/contato", label: "Contato" },
  { to: "/login", label: "Login" },
]

const estiloLink = ({ isActive }) =>
  `text-lg no-underline transition-all hover:text-[#d4af37] ${
    isActive ? "text-[#d4af37] font-semibold" : "text-white"
  }`

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-black/85 backdrop-blur border-b border-white/10">
      <div className="flex justify-between items-center py-5 px-[5%]">
        <Link to="/" className="logo text-white text-2xl md:text-3xl font-bold tracking-wide transition-all">
          IMPORT<span className="text-[#d4af37] pl-1">DRIVE</span>
        </Link>

        <button
          type="button"
          className="md:hidden text-white text-3xl leading-none"
          aria-label="Abrir menu"
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? "✕" : "☰"}
        </button>

        <nav className="hidden md:block">
          <ul className="flex list-none items-center gap-8">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end className={estiloLink}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {menuAberto && (
        <nav className="md:hidden border-t border-white/10 px-[5%] pb-4">
          <ul className="flex flex-col list-none gap-4 pt-4">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end className={estiloLink} onClick={() => setMenuAberto(false)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar
