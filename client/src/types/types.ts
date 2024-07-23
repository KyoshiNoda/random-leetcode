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
  topic?: string[];
  comfort_level?: string;
  difficulty?: string;
}
