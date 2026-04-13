import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react"

const contacts = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/juantfarias",
    href: "https://github.com/juantfarias",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/juantfarias",
    href: "https://linkedin.com/in/juantfarias",
    external: true,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "juantfarias2@gmail.com",
    href: "mailto:juantfarias2@gmail.com",
    external: false,
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(62) 99480-0586",
    href: "tel:+5562994800586",
    external: false,
  },
]

export function ContactSection() {
  return (
    <section id="contato" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          {"Contato"}
        </div>
        <h2 className="mb-4 max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {"Vamos conversar"}
        </h2>
        <p className="mb-12 max-w-xl text-muted-foreground leading-relaxed">
          {"Estou disponível para projetos freelance, oportunidades de emprego ou apenas uma troca de ideia. Escolha o canal de sua preferência."}
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="group flex flex-col gap-4 rounded-xl border border-border/60 bg-card p-6 transition-all hover:border-primary/40 hover:bg-secondary/20"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-medium text-foreground break-all">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}