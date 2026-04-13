import { Layers, BarChart2, Code2, UserCheck } from "lucide-react"

const highlights = [
  {
    icon: Layers,
    title: "Full Stack Real",
    description: "Atuo de ponta a ponta: da interface React ao backend FastAPI/Java e modelagem do banco de dados.",
  },
  {
    icon: BarChart2,
    title: "Visão de Negócio",
    description: "Experiência em mapeamento de processos, BPMN e dashboards Power BI — sei pensar o sistema antes de codá-lo.",
  },
  {
    icon: Code2,
    title: "Perfil Híbrido",
    description: "Posso atuar como desenvolvedor ou analista de sistemas, dependendo da necessidade da equipe ou do projeto.",
  },
  {
    icon: UserCheck,
    title: "Autonomia Freelancer",
    description: "Experiência com levantamento de requisitos, relação direta com o cliente e entrega sem supervisão constante.",
  },
]

const stack = [
  {
    category: "Front-end",
    items: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Next.js", "Node.js"],
  },
  {
    category: "Back-end",
    items: ["FastAPI", "Python", "Java", "Spring Boot"],
  },
  {
    category: "Banco de Dados",
    items: ["SQL", "SQLite", "Prisma ORM", "PostgreSQL"],
  },
  {
    category: "Análise & Processos",
    items: ["Power BI", "BPMN", "UML", "Documentação técnica"],
  },
  {
    category: "Ferramentas",
    items: ["Git", "GitFlow", "GitHub", "Storybook", "Kanban", "Scrum"],
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
          {"Dev full stack com visão de negócio"}
        </h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <p className="leading-relaxed text-muted-foreground">
              {"Sou desenvolvedor full stack e bacharel em Ciência da Computação, com experiência em construir sistemas web modernos do front ao back. Trabalho com React, TypeScript, FastAPI, Python e Java, e tenho uma visão ampla do ciclo de desenvolvimento: do levantamento de requisitos até a entrega final."}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {"Antes de atuar como dev, passei pela área de logística como jovem aprendiz, onde mapeei processos com BPMN, criei fluxogramas e desenvolvi dashboards em Power BI — o que me deu uma leitura de negócio que poucos desenvolvedores têm. Hoje me posiciono na interseção entre tecnologia e negócio: sei codar e sei pensar o sistema antes de codá-lo."}
            </p>

            <div className="mt-2 flex flex-col gap-4">
              {stack.map((group) => (
                <div key={group.category}>
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-primary/70">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
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