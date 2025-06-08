import React from 'react';

export default function GigApplicationsPage() {
  // Mock applications data
  const applications = [
    { name: 'Alice', portfolio: '/portfolio/alice', coverLetter: 'Experienced React dev...' },
    { name: 'Bob', portfolio: '/portfolio/bob', coverLetter: 'Skilled in Node.js and AWS...' },
  ];

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center py-16">
      <div className="w-full max-w-2xl bg-[#161b22] border border-[#23272e] rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Applications</h1>
        <ul className="space-y-6">
          {applications.map((app, idx) => (
            <li key={idx} className="bg-[#23272e] rounded-xl p-6 flex flex-col gap-2">
              <span className="text-lg font-semibold text-white">{app.name}</span>
              <span className="text-gray-400">{app.coverLetter}</span>
              <a href={app.portfolio} className="text-indigo-400 hover:underline mt-2">View Portfolio</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 