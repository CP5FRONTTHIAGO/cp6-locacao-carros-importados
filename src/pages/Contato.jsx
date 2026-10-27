import { useState } from "react"
import { useLocation } from "react-router-dom"
import carros from "../data/carros"

const estiloCampo =
  "w-full rounded-xl border border-white/15 bg-[#0b0b0f] px-4 py-3 text-white placeholder:text-zinc-500 focus:border-[#d4af37] focus:outline-none"

const Contato = () => {
  const location = useLocation()
  const [enviado, setEnviado] = useState(false)
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    carro: location.state?.carro ?? "",
    retirada: "",
    devolucao: "",
    mensagem: "",
  })

  const atualizar = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const enviar = (e) => {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <main className="flex-1 px-[5%] py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]">Contato</p>
        <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">Solicite sua reserva</h1>
        <p className="mt-4 text-zinc-400">
          Preencha os dados abaixo e nossa equipe entra em contato para confirmar a
          disponibilidade do carro escolhido.
        </p>

        {enviado ? (
          <div className="mt-10 rounded-2xl border border-[#d4af37]/50 bg-[#16161d] p-8 text-center">
            <h2 className="text-2xl font-bold text-[#d4af37]">Solicitação enviada!</h2>
            <p className="mt-3 text-zinc-300">
              Obrigado, {form.nome}. Em breve entraremos em contato pelo e-mail {form.email}.
            </p>
          </div>
        ) : (
          <form onSubmit={enviar} className="mt-10 grid gap-5 rounded-2xl border border-white/10 bg-[#16161d] p-6 md:grid-cols-2 md:p-8">
            <input name="nome" value={form.nome} onChange={atualizar} required placeholder="Nome completo" className={estiloCampo} />
            <input name="email" type="email" value={form.email} onChange={atualizar} required placeholder="E-mail" className={estiloCampo} />
            <input name="telefone" type="tel" value={form.telefone} onChange={atualizar} required placeholder="Telefone" className={estiloCampo} />
            <select name="carro" value={form.carro} onChange={atualizar} required className={estiloCampo}>
              <option value="">Escolha o carro</option>
              {carros.map((carro) => (
                <option key={carro.id} value={`${carro.marca} ${carro.modelo}`}>
                  {carro.marca} {carro.modelo}
                </option>
              ))}
            </select>
            <label className="text-sm text-zinc-400">
              Retirada
              <input name="retirada" type="date" value={form.retirada} onChange={atualizar} required className={`${estiloCampo} mt-1`} />
            </label>
            <label className="text-sm text-zinc-400">
              Devolução
              <input name="devolucao" type="date" value={form.devolucao} onChange={atualizar} required min={form.retirada} className={`${estiloCampo} mt-1`} />
            </label>
            <textarea name="mensagem" value={form.mensagem} onChange={atualizar} rows="4" placeholder="Mensagem (opcional)" className={`${estiloCampo} md:col-span-2`} />
            <button type="submit" className="rounded-full bg-[#d4af37] px-8 py-3 font-semibold text-black transition-colors hover:bg-[#f5e6a8] md:col-span-2">
              Enviar solicitação
            </button>
          </form>
        )}
      </div>
    </main>
  )
}

export default Contato
