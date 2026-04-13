import { Github, Linkedin, Mail, Phone, Code2 } from "lucide-react"

export function Footer() {
  return (
    <footer id="contato" className="border-t border-border/50 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <a href="#" className="flex items-center gap-2 text-foreground">
            <Code2 className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold">{"Juan Farias"}</span>
          </a>
          <p className="text-xs text-muted-foreground">
            {"Desenvolvedor Full Stack"}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/juantfarias"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/juantfarias"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:juanfarias2@gmail.com"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="tel:+5562994800586"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Telefone"
          >
            <Phone className="h-4 w-4" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          {"\u00A9 2026 Juan Farias. Todos os direitos reservados."}
        </p>
      </div>
    </footer>
  )
}
