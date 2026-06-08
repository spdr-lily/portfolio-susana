import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "M.I.N.D.",
    description:
      "Sistema open-source de apoio à decisão clínica baseado em DSM-5-TR, CID-11 e inferência probabilística.",
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "Airflow",
      "Redis",
      "Machine Learning",
    ],
    image: "/images/mind.png",
    featured: true,
  },
  {
    id: 2,
    title: "Sistema de Manutenção Preditiva",
    description:
      "Machine Learning supervisionado com Random Forest para predição de falhas em equipamentos industriais.",
    technologies: ["Machine Learning", "Random Forest", "Python", "Industrial"],
    image: "/images/dashboard.png",
  },
  {
    id: 3,
    title: "Dashboard Online com Flask + Dash",
    description:
      "Backend em Flask com API REST e frontend interativo em Dash para visualização de dados.",
    technologies: ["Flask", "Dash", "API REST", "Deploy"],
    image: "/images/dashboard.png",
  },
  {
    id: 4,
    title: "Análise de Séries Temporais",
    description:
      "Modelagem e previsão de séries temporais aplicadas a indicadores de saúde e negócios.",
    technologies: ["Python", "Statsmodels", "Prophet", "Time Series"],
    image: "/images/etl.png",
  },
  {
    id: 5,
    title: "Visão Computacional e OCR",
    description:
      "Pipeline de extração de texto de documentos usando OpenCV e Tesseract.",
    technologies: ["OpenCV", "OCR", "Tesseract", "Pipelines"],
    image: "/images/etl.png",
  },
];
