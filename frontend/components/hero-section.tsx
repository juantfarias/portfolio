import { ArrowDown, Download, Github, Linkedin, Mail, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-xs text-muted-foreground">
            {"Disponível para novos projetos"}
          </span>
        </div>

        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {"Juan Farias"}
        </h1>

        <p className="mt-4 text-lg font-medium text-primary sm:text-xl">
          {"Desenvolvedor Full Stack & Analista de Sistemas"}
        </p>

        <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {"Bacharel em Ciência da Computação, com experiência em sistemas web usando React, TypeScript, FastAPI, Python e Java. Antes de codar, mapeei processos, documentei fluxos e criei dashboards em Power BI — o que me dá uma visão de negócio que vai além do código. Entrego soluções escaláveis, bem estruturadas e alinhadas com o que o negócio realmente precisa."}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {"Ver Projetos"}
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            {"Entrar em Contato"}
          </a>
          <a
            href="/cv-juan-farias.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
          >
            <Download className="h-4 w-4" />
            {"Download CV"}
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-5">
          <a
            href="https://github.com/juantfarias"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/juantfarias"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:juanfarias2@gmail.com"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="tel:+5562994800586"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Telefone"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-16">
          <a
            href="#sobre"
            className="inline-flex animate-bounce text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Rolar para baixo"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
