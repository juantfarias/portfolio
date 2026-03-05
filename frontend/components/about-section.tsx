import { Shield, Server, Lock, Database } from "lucide-react"

const highlights = [
  {
    icon: Shield,
    title: "Segurança",
    description: "Implementação de autenticação robusta, criptografia e conformidade com LGPD.",
  },
  {
    icon: Server,
    title: "Escalabilidade",
    description: "Arquiteturas preparadas para alta demanda com microsserviços e cloud-native.",
  },
  {
    icon: Lock,
    title: "Compliance",
    description: "Auditoria de código, controle de acesso granular e logs de segurança.",
  },
  {
    icon: Database,
    title: "Performance",
    description: "Otimização de queries, caching inteligente e monitoramento contínuo.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          {"Sobre Mim"}
        </div>
        <h2 className="mb-6 max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {"Engenharia de software com foco em sistemas corporativos seguros"}
        </h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <p className="leading-relaxed text-muted-foreground">
              {"Com mais de 8 anos de experiência em desenvolvimento, atuo na criação de sistemas corporativos de missão crítica. Minha abordagem combina arquitetura sólida com práticas rigorosas de segurança, garantindo que cada solução entregue não apenas funcione, mas proteja os dados dos usuários."}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {"Trabalho com tecnologias modernas como React, Node.js, TypeScript, PostgreSQL e AWS, sempre priorizando código limpo, testes automatizados e documentação clara. Acredito que software de qualidade nasce da união entre engenharia disciplinada e compreensão profunda do negócio."}
            </p>

            <div className="mt-2 flex flex-wrap gap-2">
              {["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker", "Next.js", "Python"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/30 hover:bg-secondary/30"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
