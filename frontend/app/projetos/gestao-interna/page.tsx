import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GestaoInternaDemo() {
  return (
    <div className="min-h-screen bg-background p-8">
      {/* Botão de Voltar */}
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar para o Portfólio
      </Link>

      {/* Cabeçalho do Mini-Sistema */}
      <div className="border-b border-border/60 pb-8 mb-8">
        <h1 className="text-3xl font-bold text-foreground">Sistema de Gestão Interna</h1>
        <p className="text-muted-foreground mt-2">
          Demonstração interativa do projeto.
        </p>
      </div>

      {/* Área onde o seu mini-sistema vai rodar no futuro */}
      <div className="border-2 border-dashed border-border/60 rounded-xl h-[500px] flex items-center justify-center bg-secondary/10">
        <p className="text-muted-foreground font-mono">
          [ Aqui vai entrar a interface do seu sistema simulado ]
        </p>
      </div>
    </div>
  );
}