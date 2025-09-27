import { Icons } from "@/components/icons";
import { CodeXml, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "derik Martins",
  initials: "DM",
  url: "https://derikmartins.me",
  location: "Porto Alegre, RS",
  locationLink: "https://www.google.com/maps/place/portoalegre",
  description:
    "Desenvolvedor focado em IA e dados, com experiência multi-cloud e automação. Crio soluções inteligentes com Python e Machine Learning. ",
  summary:
    "Com expertise em IA & Dados, sou aluno do Geração Caldeira 2025 (LinkedIn | Geração Caldeira). Desenvolvi um portal exclusivo para a trilha e um assistente virtual por voz (Portal | Assistente). Crio soluções com Python, Flask e Machine Learning, utilizando multi-cloud e CI/CD. Transformo dados em produtos inteligentes e inovadores, entregando valor real aos negócios.",
  avatarUrl: "/me.png",
  skills: [
    "Desenvolvimento de Software",
    "Python",
    "Flask",
    "SQL",
    "Machine Learning",
    "Ambientes Multi-Cloud",
    "Automação de Infraestrutura",
    "CI/CD e DevOps",
    "Data Science e IA",
    "Java",
    "C#",
    "PHP",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: CodeXml, label: "Projects" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/derik-s-martins/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:deriksilvamartins2006@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Teco Academy",
      badges: [],
      href: "https://www.linkedin.com/company/teco-academy-org/",
      location: "Alvorada, RS",
      title: "Founder & Project Lead",
      logoUrl: "/teco-logo.jpg",
      start: "Setembro 2025",
      end: "Atual",
      description:
        "Idealizei e fundei a Teco Academy, um projeto de impacto social com a missão de democratizar o acesso à educação tecnológica para jovens de escolas públicas, servindo como uma ponte para o ecossistema de inovação.",
    },
    {
      company: "SISqualis",
      href: "https://sisqualis.com.br/",
      badges: [],
      location: "Porto Alegre, RS",
      title: "Desenvolvedor de Software Interno",
      logoUrl: "/sis-logo.jpg",
      start: "Maio 2025",
      end: "Atual",
      description:
        "Fornecer suporte técnico às equipes de desenvolvimento e infraestrutura, cuidando da configuração do servidor virtual, manutenção de aplicativos, assistência ao usuário e documentação do sistema.",
    },
    {
      company: "Cólegio Israelita Brasileiro",
      href: "https://www.colegioisraelita.com.br/",
      badges: [],
      location: "Porto Alegre, RS",
      title: "Estagiário de Suporte N1",
      logoUrl: "/logo-cib.jpg",
      start: "Março 2025",
      end: "Maio 2025",
      description:
        "Apoiou ativamente a comunidade acadêmica fornecendo assistência técnica abrangente a professores, alunos e equipe administrativa.",
    },
    {
      company: "Escola Luterana São Marcos",
      href: "https://saomarcos.br/",
      badges: [],
      location: "Alvorada, RS",
      title: "Coordenador de Comunicação Escolar",
      logoUrl: "/logo-sm.jpg",
      start: "Junho 2024",
      end: "Março 2025",
      description:
        "Promovido para liderar o departamento de Comunicação Escolar, expandindo minhas responsabilidades para incluir campanhas de marketing e rematrícula, coordenação de fotografia de eventos e gerenciamento de equipes multidisciplinares.",
    },
    {
      company: "MongeWeb + Design",
      href: "https://monge.com.br/",
      badges: [],
      location: "Porto Aleggre, RS",
      title: "Desenvolvedor Web Freelancer e Administrador de Sistemas",
      logoUrl: "/logo-monge.jpg",
      start: "Junho 2023",
      end: "Atual",
      description:
        "Forneceu soluções de projeto completas combinando experiência em desenvolvimento, design e administração de sistemas.",
    },
  ],
  education: [
    {
      school: "FADERGS",
      href: "https://www.fadergs.edu.br/",
      degree: "Análise e Desenvolvimento de Sistemas",
      logoUrl: "/fadergs-logo.svg",
      start: "2025",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Neves ORBE",
      href: "#",
      dates: "Setembro 2025",
      active: true,
      description:
        "Neves ORBE, um assistente virtual inteligente que desenvolvi em uma excelente parceria com a Bruna Iasmin Da Silva Martins. Nossa visão foi criar um tutor pessoal, capaz de transformar o conteúdo denso de PDFs em conversas de aprendizado interativas e acessíveis.",
      technologies: [
        "LangChain",
        "Gemini (Google)",
        "Elevenlabs",
        "RAG",
        "Embeddings",
        "Vector Database",
        "Python",
        "WebSocket",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/derik-martins/neves-ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/neves-orbe.jpg",
      video:
        "",
    },
    {
      title: "Portal de IA & Dados",
      href: "https://polenteiroscaldeira.com.br/",
      dates: "Agosto 2025",
      active: true,
      description:
        "Portal criado para trilha do Geração Caldeira de IA & Dados, para centralizar todas informações relevantes, IA's integradas, como chat especializado em Data Science e IA, e um Assistente de Carreira em IA, com base em análise de perfil ele gera insights importantes para o mercado.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://polenteiroscaldeira.com.br/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
} as const;
