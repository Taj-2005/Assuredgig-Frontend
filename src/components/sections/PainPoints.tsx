import { FileWarning, Repeat, ThumbsDown, DollarSign, Users, AlertTriangle, Clock, Server, UserX, FileText, Headset, MessageCircle, CalendarX2, Shield } from 'lucide-react';

export default function PainPointsSection() {
  const painPoints = [
  {
    icon: <FileWarning className="w-8 h-8 text-cyan-400 bg-cyan-100 rounded-full p-1" />,
    title: 'Template Problems',
    desc: `Freelancers not adhering to client's preferred templates or design guidelines.`,
  },
  {
    icon: <Repeat className="w-8 h-8 text-cyan-400 bg-cyan-100 rounded-full p-1" />,
    title: 'Revision Difficulties',
    desc: `Multiple revision requests leading to delays and increased costs.`,
  },
  {
    icon: <ThumbsDown className="w-8 h-8 text-cyan-400 bg-cyan-100 rounded-full p-1" />,
    title: 'Quality Concerns',
    desc: `Subpar quality due to rushed work.`,
  },
  {
    icon: <DollarSign className="w-8 h-8 text-cyan-400 bg-cyan-100 rounded-full p-1" />,
    title: 'Payment, Dispute, and Rating Issues',
    desc: `Freelancers not fulfilling contractual obligations, difficulties in rating.`,
  },
  {
    icon: <Users className="w-8 h-8 text-cyan-400 bg-cyan-100 rounded-full p-1" />,
    title: 'Outsourcing Complications',
    desc: `Freelancers acting as middlemen, outsourcing work to others, leading to communication issues and delays.`,
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-cyan-400 bg-cyan-100 rounded-full p-1" />,
    title: 'Non-compliance with Instructions',
    desc: `Freelancers not following client's instructions.`,
  },
  {
    icon: <Clock className="w-8 h-8 text-cyan-400 bg-cyan-100 rounded-full p-1" />,
    title: 'Lack of Preparation or Rushing',
    desc: `Rushed work due to too many projects or unrealistic deadlines.`,
  },
  {
    icon: <Server className="w-8 h-8 text-cyan-400 bg-cyan-100 rounded-full p-1" />,
    title: 'Hosting Capacity Issues',
    desc: `Freelancers lacking necessary hosting capacity for large projects.`,
  },
  {
    icon: <UserX className="w-8 h-8 text-cyan-400 bg-cyan-100 rounded-full p-1" />,
    title: 'Incompetency of Service Providers',
    desc: `Freelancers lacking necessary skills or experience.`,
  },
  {
    icon: <FileText className="w-8 h-8 text-cyan-400 bg-cyan-100 rounded-full p-1" />,
    title: 'Limited Documentation',
    desc: `Insufficient documentation from freelancers, making updates/maintenance difficult.`,
  },
  {
    icon: <Headset className="w-8 h-8 text-cyan-400 bg-cyan-100 rounded-full p-1" />,
    title: 'Bad Customer Support',
    desc: `Difficulties in effective communication with support teams.`,
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-cyan-400 bg-cyan-100 rounded-full p-1" />,
    title: 'Communication Challenges',
    desc: `Misunderstandings, delays, and dissatisfaction due to poor communication from freelancers.`,
  },
  {
    icon: <CalendarX2 className="w-8 h-8 text-cyan-400 bg-cyan-100 rounded-full p-1" />,
    title: 'Delays / Behind Schedule',
    desc: `Freelancers not completing work on time.`,
  },
  {
    icon: <Shield className="w-8 h-8 text-cyan-400 bg-cyan-100 rounded-full p-1" />,
    title: 'Other Miscellaneous Issues',
    desc: `Trust issues, platform security, payment options, price, and communication tools.`,
  },
];
  return (
    <section className="w-full py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-pink-500 tracking-wider mb-2">PROBLEM</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Common Pain Points of Web Clients on Digital Platforms</h2>
          <p className="text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">Working with freelancers on digital platforms can be a hassle. Here are the most common issues clients face on Freelancing platforms.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
  {painPoints.map((point, idx) => (
    <div key={idx} className="relative group h-full">
      {/* Shiny animated border */}
      <div className="absolute inset-0 rounded-xl z-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:rounded-xl before:border-[2px] before:border-transparent before:animate-shine before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent before:bg-[length:200%_100%]"></div>

      {/* Actual Card */}
      <div className="relative z-10 flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-dark-border shadow-sm dark:shadow-md h-full">
        {point.icon}
        <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">{point.title}</h3>
        <p className="mt-2 text-gray-500 dark:text-gray-300 text-base">{point.desc}</p>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
} 