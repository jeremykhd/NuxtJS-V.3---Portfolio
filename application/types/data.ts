export interface Portfolio {
  name: string;
  leadingDescription: string;
  description: string;
  projects: Projects;
  url: SocialLinks;
  contact: Contact;
  about: About;
  experiences: Experiences;
  services: Services;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  instagram?: string;
  facebook?: string;
}

export interface Projects {
  leadingDescription: string;
  contents: Project[];
}
export interface Project {
  name: string;
  slug: string;
  type: string;
  description: string;
  duration: number;
  background: string;
  urls?: SocialLinks;
  technologies: string[];
  services: string[];
  competences: string[];
}

export interface Contact {
  email: string;
  phoneNumber: string;
  leadingDescription: string;
  description: string;
}

export interface About {
  leadingDescription: string;
  experience: number;
  cupOfCoffe: number;
  completeProject: number;
  profileTitle: string;
  profileDescription: string;
  profileCitation: string;
}

export interface Experiences {
  leadingDescription: string;
  contents: Experience[];
}
export interface Experience {
  name: string;
  type: EnumExperience;
  description: string;
  from: string;
  to: string;
  poste: string;
  competences: string[];
}

export interface Services {
  leadingDescription: string;
  expertises: Expertise[];
}

export interface Expertise {
  icon: string;
  name: string;
  description: string;
}
export enum EnumExperience {
  Alternance,
  Freelance,
  CDI,
  CDD,
}
