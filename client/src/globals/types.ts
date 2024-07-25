export interface Question {
  collectionId: string;
  collectionName: string;
  comfort_level: string;
  created: string;
  difficulty: string;
  id: string;
  link: string;
  name: string;
  topic: string[];
  updated: string;
}

export interface Filters {
  name?: string;
  topics?: string[];
  comfort_level?: string;
  difficulty?: string;
}

export interface AddQuestion {
  name?: string;
  link?: string;
  topics?: string[];
  comfort_level?: string;
  difficulty?: string;
}
