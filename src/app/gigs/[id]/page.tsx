import React from 'react';
import { Button } from '@/components/ui/button';

export default function GigDetailsPage() {
  // Mock gig data for now
  const gig = {
    title: 'Senior React Developer',
    company: 'TechCorp',
    description: 'Looking for an experienced React developer to join our team...',
    skills: ['React', 'TypeScript', 'Node.js'],
    budget: '$1000',
    deadline: '2024-07-31',
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center py-16">
      <div className="w-full max-w-2xl bg-[#161b22] border border-[#23272e] rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-4">{gig.title}</h1>
        <p className="text-gray-400 mb-2">Company: {gig.company}</p>
        <p className="text-gray-400 mb-4">{gig.description}</p>
        <div className="mb-4">
          <span className="text-indigo-400 font-semibold">Skills:</span>
          <span className="ml-2 text-gray-300">{gig.skills.join(', ')}</span>
        </div>
        <div className="mb-4 flex gap-8">
          <span className="text-gray-400">Budget: <span className="text-white">{gig.budget}</span></span>
          <span className="text-gray-400">Deadline: <span className="text-white">{gig.deadline}</span></span>
        </div>
        <Button className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white mt-6">Apply for this Gig</Button>
      </div>
    </div>
  );
} 