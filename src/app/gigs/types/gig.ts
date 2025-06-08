export interface Client {
  name: string;
  rating: number;
  projectsPosted: number;
}

export interface Gig {
  id: number;
  title: string;
  description: string;
  budget: number;
  duration: string;
  location: string;
  skills: string[];
  postedDate: string;
  difficulty: string;
  category: string;
  featured: boolean;
  verified: boolean;
  applicants: number;
  client: Client;
} 