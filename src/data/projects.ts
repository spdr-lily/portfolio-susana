import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "M.I.N.D.",
    description: "Sistema de Apoio à Decisão Clínica",
    technologies: ["Python", "PostgreSQL", "Airflow", "PySpark"],
    image: "/images/mind.png",
  },
  {
    id: 2,
    title: "Pipeline ETL",
    description: "Pipeline de extração, transformação e carga de dados clínicos",
    technologies: ["Python", "Airflow", "Docker", "PostgreSQL"],
    image: "/images/etl.png",
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    description: "Dashboard interativo para visualização de indicadores de saúde",
    technologies: ["React", "D3.js", "FastAPI", "MongoDB"],
    image: "/images/dashboard.png",
  },
];
