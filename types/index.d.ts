declare global {
  export interface Project {
    id: string;
    date_created: string;
    date_updated?: string;
    name: string;
    description: string;
    link?: string;
    cover: string;
    deliverable: string;
    deliverableIcon: string;
    orgType: string;
    orgTypeIcon: string;
  }

  export interface Job {
    id: string | number;
    date_created: string | Date;
    date_updated?: string | Date;
    title: string;
    description: string;
  }
}

export {};
