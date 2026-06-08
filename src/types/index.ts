export interface NavLink {
  href: string;
  label: string;
}

export interface Skill {
  name: string;
  level: number;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
}
