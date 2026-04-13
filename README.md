# Portfolio — Juan Farias

Portfolio pessoal full stack de **Juan Tallys Marques de Farias**, Desenvolvedor Full Stack & Analista de Sistemas.

> **Stack:** Next.js · Spring Boot · PostgreSQL · Docker

---

## Sobre o projeto

Aplicação web single-page com frontend em Next.js e backend em Spring Boot, exibindo trajetória profissional, stack de tecnologias, experiências, formação e projetos reais integrados via API REST.

---

## Arquitetura

```
portfolio/
├── frontend/          # Next.js 16 + TypeScript + Tailwind CSS 4 + Shadcn/UI
└── backend/           # Spring Boot 4 + Java 21 + JPA/Hibernate + PostgreSQL
```

### Frontend (`/frontend`)

| Caminho | Descrição |
|---|---|
| `app/page.tsx` | Página principal — compõe todas as seções |
| `components/navbar.tsx` | Navbar fixa com links de navegação |
| `components/hero-section.tsx` | Seção hero com headline, botões e ícones sociais |
| `components/about-section.tsx` | Sobre mim, stack categorizada e cards de diferenciais |
| `components/experience-section.tsx` | Timeline de experiência profissional |
| `components/education-section.tsx` | Formação acadêmica e cursos complementares |
| `components/projects-section.tsx` | Projetos integrados via API Spring Boot |
| `components/contact-section.tsx` | Cards de contato (GitHub, LinkedIn, e-mail, telefone) |
| `components/footer.tsx` | Rodapé com links sociais |
| `components/ui/` | Primitivos Shadcn/UI (Radix UI) |

**Tecnologias:** Next.js 16 App Router, TypeScript, Tailwind CSS 4, Shadcn/UI, Radix UI, Lucide React, Vercel Analytics

### Backend (`/backend`)

| Camada | Arquivo | Descrição |
|---|---|---|
| Controller | `ProjectController` | Endpoints `/api/projects` (GET, POST) com CORS habilitado |
| Model | `Project` | Entidade JPA mapeada para `tb_projects` |
| Repository | `ProjectRepository` | Extende `JpaRepository` |

**Tecnologias:** Spring Boot 4, Java 21, Spring Data JPA, Hibernate, PostgreSQL

---

## Configuração do ambiente

### Pré-requisitos

- Docker
- Node.js + npm
- Java 21 + Maven

### 1. Banco de dados

```bash
docker-compose up -d
```

PostgreSQL sobe na porta `5433`.

| Parâmetro | Valor |
|---|---|
| Host | `localhost` |
| Porta | `5433` |
| Banco | `portfolio_db` |
| Usuário | `admin` |
| Senha | `admin` |

### 2. Backend

Crie o arquivo `backend/.env.local` com as variáveis:

```env
DB_HOST=localhost
DB_PORT=5433
DB_USER=admin
DB_PASSWORD=admin
DB_NAME=portfolio_db
DB_URL=jdbc:postgresql://localhost:5433/portfolio_db
```

```bash
cd backend
./mvnw spring-boot:run   # sobe em :8080
./mvnw test              # roda os testes
./mvnw clean package     # gera o JAR
```

### 3. Frontend

Crie o arquivo `frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api
```

```bash
cd frontend
npm install
npm run dev    # sobe em :3000
npm run build  # build de produção
npm run lint   # ESLint
```

---

## Seções do site

| Seção | Âncora | Descrição |
|---|---|---|
| Hero | — | Nome, título, descrição, botões e ícones sociais |
| Sobre | `#sobre` | Perfil profissional, stack categorizada e diferenciais |
| Experiência | `#experiencia` | Timeline com 3 experiências profissionais |
| Formação | `#formacao` | Graduação e cursos complementares |
| Projetos | `#projetos` | Cards integrados via API (dados vêm do banco) |
| Contato | `#contato` | GitHub, LinkedIn, e-mail e telefone |

---

## Contato

| Canal | Endereço |
|---|---|
| GitHub | [github.com/juantfarias](https://github.com/juantfarias) |
| LinkedIn | [linkedin.com/in/juantfarias](https://linkedin.com/in/juantfarias) |
| E-mail | juantfarias2@gmail.com |
| Telefone | (62) 99480-0586 |