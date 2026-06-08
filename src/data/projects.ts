import type { Project } from "@/types";

export const projects: Project[] = [
 {
    id: 1,
    title: "M.I.N.D.",
    description: "Sistema open-source de apoio à decisão clínica baseado em DSM-5-TR, CID-11 e inferência probabilística.",
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "Airflow",
      "Redis",
      "Machine Learning"
    ],
    image: "/images/mind.png",
    featured: true,
    githubUrl: "https://github.com/spdr-lily/m.i.n.d",
    deployUrl: "https://jl5r2zr4-8000.brs.devtunnels.ms/login"
  },
  {
    id: 2,
    title: "Sistema de Manutenção Preditiva",
    description:
      "Machine Learning supervisionado com Random Forest para predição de falhas em equipamentos industriais.",
    technologies: ["Machine Learning", "Random Forest", "Python", "Industrial"],
    image: "/images/dashboard.png",
    githubUrl: "https://github.com/spdr-lily/random-forest-para-manutencao-preditiva"
  },
  {
    id: 3,
    title: "Dashboard Online com Flask + Dash",
    description:
      "Backend em Flask com API REST e frontend interativo em Dash para visualização de dados.",
    technologies: ["Flask", "Dash", "API REST", "Deploy"],
    image: "/images/dashboard.png",
    githubUrl: "https://github.com/spdr-lily/Projeto-de-Dashboard-e-Visualizacao-de-Dados"
  },
  {
    id: 4,
    title: "Análise de Séries Temporais",
    description:
      "Modelagem e previsão de séries temporais aplicadas a indicadores de saúde e negócios.",
    technologies: ["Python", "Statsmodels", "Prophet", "Time Series"],
    image: "/images/etl.png",
    githubUrl: "https://github.com/spdr-lily/analise-de-series-temporais-de-uma-empresa"
  },
  {
    id: 5,
    title: "Processamento de Linguagem Natural (NLP)",
    description:
      "Chatbot com Wikipedia e análise de sentimentos usando NLTK e spaCy para compreensão de texto.",
    technologies: ["NLTK", "spaCy", "Chatbot", "Sentiment Analysis"],
    image: "/images/etl.png",
    githubUrl: "https://github.com/spdr-lily/chatbot-com-wikipedia"
  },
];
