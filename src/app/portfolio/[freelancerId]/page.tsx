import React from 'react';

export default function PortfolioPage() {
  // Mock portfolio data
  const portfolio = {
    name: 'Alice',
    bio: 'Experienced React developer with a passion for building scalable web apps.',
    projects: [
      { title: 'Project One', description: 'A cool web app', link: '#' },
      { title: 'Project Two', description: 'Another project', link: '#' },
    ],
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center py-16">
      <div className="w-full max-w-2xl bg-[#161b22] border border-[#23272e] rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-2">{portfolio.name}</h1>
        <p className="text-gray-400 mb-6">{portfolio.bio}</p>
        <h2 className="text-xl font-semibold text-indigo-400 mb-4">Projects</h2>
        <ul className="space-y-4">
          {portfolio.projects.map((proj, idx) => (
            <li key={idx} className="bg-[#23272e] rounded-xl p-4">
              <span className="text-lg font-semibold text-white">{proj.title}</span>
              <p className="text-gray-400">{proj.description}</p>
              <a href={proj.link} className="text-indigo-400 hover:underline mt-2 inline-block">View Project</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 