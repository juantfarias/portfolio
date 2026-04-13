import { GraduationCap, BookOpen } from "lucide-react"

const education = [
  {
    icon: GraduationCap,
    title: "Bacharel em Ciência da Computação",
    institution: "Graduação",
    year: "Conclusão 2025",
    highlight: true,
  },
  {
    icon: BookOpen,
    title: "Formação Backend em Java",
    institution: "Oracle Next Education (ONE)",
    year: "2024",
    highlight: false,
  },
  {
    icon: BookOpen,
    title: "Formação Frontend em React",
    institution: "Alura — Projeto ONE",
    year: "2024",
    highlight: false,
  },
]

export function EducationSection() {
  return (
    <section id="formacao" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          {"Formação"}
        </div>
        <h2 className="mb-12 max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {"Formação acadêmica"}
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((item) => (
            <div
              key={item.title}
              className={`group rounded-xl border p-6 transition-colors hover:bg-secondary/20 ${
                item.highlight
                  ? "border-primary/40 bg-primary/5 hover:border-primary/60"
                  : "border-border/60 bg-card hover:border-primary/20"
              }`}
            >
              <div
                className={`mb-4 flex h-11 w-11 items-center justify-center rounded-lg ${
                  item.highlight ? "bg-primary/20 text-primary" : "bg-primary/10 text-primary"
                }`}
              >
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-1 text-base font-semibold text-foreground leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-primary/80">{item.institution}</p>
              <p className="mt-2 text-xs text-muted-foreground">{item.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}