'use client';

import { useEffect, useState } from 'react';

interface Job {
  id: string;
  title: string;
  description: string;
  budget: number;
  status: string;
  createdAt: string;
}

// Add mock jobs data
const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    description: 'Build a modern React frontend for our SaaS platform.',
    budget: 1200,
    status: 'open',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'UI/UX Designer',
    description: 'Design a clean and user-friendly dashboard.',
    budget: 900,
    status: 'open',
    createdAt: new Date().toISOString(),
  },
];

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 p-8">
        <div className="text-white">Loading jobs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 p-8">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Available Jobs</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <h2 className="text-xl font-semibold text-white mb-2">{job.title}</h2>
              <p className="text-gray-300 mb-4 line-clamp-3">{job.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-primary font-medium">${job.budget}</span>
                <span className="text-sm text-gray-400">
                  {new Date(job.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 