import Link from "next/link";

export const metadata = {
  title: "Nurse Assist | Entrar",
  description: "Tela de login para profissionais de enfermagem.",
};

export default function LoginPage() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(17,150,212,0.2),_transparent_22%),linear-gradient(180deg,_#041f29_0%,_#042932_42%,_#032d2e_100%)] px-6 py-6 text-slate-50 md:py-8">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="absolute left-1/2 top-1/2 h-128 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/12 blur-3xl" />

      <section className="relative z-10 flex w-full max-w-md flex-col items-center gap-6 md:gap-8">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1089c9] shadow-[0_10px_30px_rgba(16,137,201,0.35)]">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-7 w-7 text-slate-950"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 3v5a4 4 0 0 0 8 0V3" />
              <path d="M10 3v5" />
              <path d="M14 3v5" />
              <path d="M12 12v9" />
              <path d="M12 21a4 4 0 0 0 4-4v-1" />
              <path d="M16 12a3 3 0 1 0 0 6" />
            </svg>
          </div>
          <div className="space-y-1">
            <p className="text-[2rem] leading-none font-semibold tracking-[-0.04em]">
              Nurse Assist
            </p>
            <p className="text-xs font-medium tracking-[0.32em] text-cyan-200/85 uppercase">
              Para enfermeiros
            </p>
          </div>
        </div>

        <div className="w-full rounded-4xl border border-white/8 bg-slate-950/55 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur md:p-8">
          <div className="mb-7 text-center">
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white">
              Entrar
            </h1>
            <p className="mt-3 text-lg text-slate-300">
              Acesse sua rotina clínica com segurança
            </p>
          </div>

          <form className="space-y-4">
            <label className="block">
              <span className="mb-3 block text-base font-medium text-slate-200">
                Email
              </span>
              <div className="flex h-14 items-center gap-3 rounded-lg border border-white/10 bg-[#07131d] px-4 text-slate-300 transition focus-within:border-cyan-400/60 focus-within:ring-2 focus-within:ring-cyan-400/15">
                <MailIcon />
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full border-0 bg-transparent text-lg outline-none placeholder:text-slate-500"
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-3 block text-base font-medium text-slate-200">
                Senha
              </span>
              <div className="flex h-14 items-center gap-3 rounded-lg border border-white/10 bg-[#07131d] px-4 text-slate-300 transition focus-within:border-cyan-400/60 focus-within:ring-2 focus-within:ring-cyan-400/15">
                <LockIcon />
                <input
                  type="password"
                  placeholder="Digite sua senha"
                  className="w-full border-0 bg-transparent text-lg outline-none placeholder:text-slate-500"
                />
              </div>
            </label>

            <Link
              href="/dashboard"
              className="mt-5 flex h-14 w-full items-center justify-center rounded-xl bg-[#1089c9] text-lg font-semibold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              Entrar
            </Link>
          </form>

          <p className="mt-7 text-center text-lg text-slate-400">
            Ainda não tem conta?{" "}
            <Link
              href="/"
              className="font-semibold text-cyan-400 transition hover:text-cyan-300"
            >
              Criar conta
            </Link>
          </p>
        </div>

        <p className="max-w-xl text-center text-base leading-6 text-slate-300/90 md:text-lg md:leading-7">
          Sua jornada começa com dados protegidos, acesso rápido e suporte para
          cada plantão.
        </p>
      </section>
    </main>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 1 1 8 0v3" />
    </svg>
  );
}
