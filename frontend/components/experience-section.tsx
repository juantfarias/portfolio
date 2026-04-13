const experiences = [
  {
    role: "Desenvolvedor Freelancer Full Stack",
    company: "Prosystema Empresarial",
    period: "Abr/2025 — atual",
    current: true,
    activities: [
      "Desenvolvimento e manutenção de interfaces com React, JavaScript, FastAPI e Python",
      "Levantamento e documentação de requisitos funcionais",
      "Criação de componentes reutilizáveis com documentação via Storybook",
      "Participação em planejamento ágil e entrega contínua",
      "Controle de versão com GitFlow",
    ],
  },
  {
    role: "Desenvolvedor Front-End",
    company: "Siteg",
    period: "Ago/2024 — Jan/2025",
    current: false,
    activities: [
      "Desenvolvimento de sistemas responsivos com TypeScript, React e Node.js",
      "Modelagem e gerenciamento de banco de dados SQLite com Prisma ORM",
      "Organização de demandas via Kanban",
      "Documentação técnica de funcionalidades e fluxos",
    ],
  },
  {
    role: "Jovem Aprendiz — Logística & Processos",
    company: "Savoy Indústria de Cosméticos SA",
    period: "Jan/2023 — Abr/2024",
    current: false,
    activities: [
      "Mapeamento e documentação de processos logísticos com fluxogramas e BPMN",
      "Criação de dashboards em Power BI para monitoramento de KPIs",
      "Atualização e validação de bases de dados operacionais",
      "Acompanhamento de não-conformidades e proposta de melhorias",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experiencia" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          {"Experiência"}
        </div>
        <h2 className="mb-12 max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {"Trajetória profissional"}
        </h2>

        <div className="relative">
          {/* Linha vertical da timeline */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-border/60 md:block md:left-[11px]" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-8 md:pl-10">
                {/* Ponto da timeline */}
                <div className="absolute left-0 top-1 hidden h-6 w-6 flex-shrink-0 items-center justify-center md:flex">
                  <div
                    className={`h-3 w-3 rounded-full border-2 ${
                      exp.current
                        ? "border-primary bg-primary"
                        : "border-border bg-background"
                    }`}
                  />
                </div>

                <div className="flex-1 rounded-xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/20 hover:bg-secondary/20">
                  <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-primary">{exp.company}</p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        exp.current
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-4 flex flex-col gap-1.5">
                    {exp.activities.map((activity, i) => (
                      <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}