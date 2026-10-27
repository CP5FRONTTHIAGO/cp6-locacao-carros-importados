import { useState } from "react"
import { Link } from "react-router-dom"

const estiloCampo =
  "w-full rounded-xl border border-white/15 bg-[#0b0b0f] px-4 py-3 text-white placeholder:text-zinc-500 focus:border-[#d4af37] focus:outline-none"

const Login = () => {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [mensagem, setMensagem] = useState("")

  const entrar = (e) => {
    e.preventDefault()
    setMensagem(`Bem-vindo de volta, ${email}!`)
    setSenha("")
  }

  return (
    <main className="flex flex-1 items-center justify-center px-[5%] py-16">
      <form onSubmit={entrar} className="w-full max-w-md rounded-2xl border border-white/10 bg-[#16161d] p-8">
        <h1 className="text-3xl font-bold text-white">Área do cliente</h1>
        <p className="mt-2 text-zinc-400">Acesse para acompanhar suas reservas.</p>

        <div className="mt-8 space-y-4">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="E-mail" className={estiloCampo} />
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required placeholder="Senha" className={estiloCampo} />
        </div>

        <button type="submit" className="mt-6 w-full rounded-full bg-[#d4af37] py-3 font-semibold text-black transition-colors hover:bg-[#f5e6a8]">
          Entrar
        </button>

        {mensagem && <p className="mt-4 text-center text-[#d4af37]">{mensagem}</p>}

        <p className="mt-6 text-center text-sm text-zinc-400">
          Ainda não é cliente?{" "}
          <Link to="/contato" className="font-semibold text-[#d4af37] hover:underline">
            Faça sua primeira reserva
          </Link>
        </p>
      </form>
    </main>
  )
}

export default Login
