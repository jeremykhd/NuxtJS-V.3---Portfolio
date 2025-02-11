export interface Portfolio {
  name: string;
  leadingDescription: string;
  description: string;
  projects: Project[];
  url: SocialLinks;
  contact: Contact;
  services: string[];
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  instagram?: string;
  facebook?: string;
}

export interface Project {
  name: string;
  type: string;
  description: string;
  duration: number;
  background: string;
  urls?: SocialLinks;
  technologies: string[];
}

export interface Contact {
  email: string;
  phoneNumber: string;
  leadingDescription: string;
  description: string;
}
