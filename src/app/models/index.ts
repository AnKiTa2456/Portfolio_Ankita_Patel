export interface Project {
  id: number;
  title: string;
  description: string;
  /** Key highlights shown only on the showcase card */
  highlights?: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  featured?: boolean;
  /** showcase = true → renders as the full-width hero card at the top */
  showcase?: boolean;
  category: 'frontend' | 'fullstack' | 'tool';
}

export interface Skill {
  name: string;
  color: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  summary: string;
  responsibilities: string[];
  technologies: string[];
  certificateUrl?: string;
}

export interface Education {
  id: number;
  degree: string;
  school: string;
  date: string;
  grade: string;
  description: string;
  icon: 'university' | 'school';
}

export interface NavLink {
  id: string;
  label: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
