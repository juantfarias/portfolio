"use client"; // Obrigatório no Next.js para usarmos o useState e useEffect

import { useEffect, useState } from "react";
import { ExternalLink, FolderGit2 } from "lucide-react";

// 1. Criamos a interface refletindo exatamente o Model do nosso backend Java
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string;
  routePath: string;
  repositoryUrl: string;
  imageUrl: string;
}

export function ProjectsSection() {
  // 2. Variável de estado para guardar os projetos que vierem do banco
  const [projects, setProjects] = useState<Project[]>([]);

  // 3. Chamada para a nossa API Spring Boot
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Erro ao buscar projetos:", error));
  }, []);

  return (
    <section id="projetos" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          {"Projetos"}
        </div>
        <h2 className="mb-12 max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {"Soluções que construí"}
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* 4. Fazemos o loop nos dados reais do Java */}
          {projects.map((project) => (
            <article
              key={project.id} // Usamos o ID do banco como chave única
              className="group flex flex-col rounded-xl border border-border/60 bg-card p-6 transition-all hover:border-primary/30 hover:bg-secondary/20"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FolderGit2 className="h-5 w-5" />
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {project.title}
              </h3>

              <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-1.5">
                {/* Dividimos a string do banco pela vírgula para criar os cards de tecnologia separadamente */}
                {project.technologies.split(",").map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-md border border-border/60 bg-secondary/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>

              {/* Transformei em tag <a> para a rota funcionar, mantendo 100% da estilização do <button> original */}
              <a 
                href={project.routePath}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {"Ver Detalhes"}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}