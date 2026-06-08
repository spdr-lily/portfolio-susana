export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  featured: boolean;
  githubUrl?: string; 
  deployUrl?: string;
}
