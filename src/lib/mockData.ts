export interface Gig {
    id: string;
    title: string;
    description: string;
    budget: number;
    hashtags: string[];
  }
  
  export interface Freelancer {
    id: string;
    name: string;
    skills: string[];
    experience: string;
    projects: { title: string; description: string; image: string }[];
    rating: number;
  }
  
  export interface Project {
    id: string;
    title: string;
    progress: number;
    tasks: { name: string; completed: boolean }[];
    milestones: { name: string; date: string }[];
  }
  
  export const mockGigs: Gig[] = [
    {
      id: '1',
      title: 'Build a React Website',
      description: 'Need a modern website built with React and Tailwind CSS.',
      budget: 500,
      hashtags: ['FrontendDev', 'React', 'Tailwind'],
    },
    {
      id: '2',
      title: 'Logo Design',
      description: 'Create a unique logo for a startup.',
      budget: 200,
      hashtags: ['GraphicDesign', 'Logo'],
    },
  ];
  
  export const mockFreelancers: Freelancer[] = [
    {
      id: '1',
      name: 'Tejmul',
      skills: ['FrontendDev', 'React', 'Tailwind'],
      experience: '3 years as a frontend developer, specializing in React.',
      projects: [
        {
          title: 'E-commerce Site',
          description: 'Built a responsive e-commerce platform.',
          image: '/images/project1.jpg',
        },
        {
          title: 'Portfolio Site',
          description: 'Designed a sleek portfolio for a client.',
          image: '/images/project2.jpg',
        },
      ],
      rating: 4.8,
    },
  ];
  
  export const mockProjects: Project[] = [
    {
      id: '1',
      title: 'React Website',
      progress: 60,
      tasks: [
        { name: 'Setup Next.js', completed: true },
        { name: 'Design UI', completed: false },
      ],
      milestones: [
        { name: 'Initial Design', date: '2025-05-15' },
        { name: 'Final Delivery', date: '2025-05-30' },
      ],
    },
  ];