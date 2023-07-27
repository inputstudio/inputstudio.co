declare global {
  export interface Project {
    id: string;
    date_created: string;
    date_updated?: string;
    name: string;
    link?: string;
    cover: string;
    deliverableIcon: string;
    orgTypeIcon: string;
    translations: ProjectTranslation[];
  }
  
  export interface ProjectTranslation {
    id: number;
    projects_id: number;
    languages_code: string;
    description: string;
    deliverable: string;
    orgType: string;
  }

  export interface Job {
    id: string | number;
    date_created: string | Date;
    date_updated?: string | Date;
    translations: JobTranslation[];
  }

  export interface JobTranslation {
    id: number;
    careers_id: number;
    languages_code: string;
    title: string;
    description: string;
  }
}

export {};
