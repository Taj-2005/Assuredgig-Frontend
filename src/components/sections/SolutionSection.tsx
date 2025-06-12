import { LockClosedIcon, PersonIcon, FileTextIcon, HandIcon, RocketIcon } from '@radix-ui/react-icons';

const solutions = [
  {
    icon: <LockClosedIcon className="w-10 h-10 text-cyan-600 bg-cyan-100 rounded-full p-2 shadow-lg" />,
    title: 'Escrow Payments (V1)',
    desc: 'No more payment anxiety. Your funds are protected until you approve the work. Both clients and freelancers can focus on results, not risks.'
  },
  {
    icon: <PersonIcon className="w-10 h-10 text-cyan-600 bg-cyan-100 rounded-full p-2 shadow-lg" />,
    title: 'Verified Users (V1)',
    desc: 'Work only with real, vetted people. We verify every user, so you can say goodbye to scams and hello to trust.'
  },
  {
    icon: <FileTextIcon className="w-10 h-10 text-cyan-600 bg-cyan-100 rounded-full p-2 shadow-lg" />,
    title: 'Smart Contracts (V1)',
    desc: 'Every project is protected by a transparent, automated contract. Milestones, deliverables, and payments are crystal clear.'
  },
  {
    icon: <HandIcon className="w-10 h-10 text-cyan-600 bg-cyan-100 rounded-full p-2 shadow-lg" />,
    title: 'Dispute Resolution (V1)',
    desc: 'If something goes wrong, our fair, fast dispute system has your back. No more endless support tickets or lost money.'
  },
];

export default function SolutionSection() {
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-b from-cyan-50 via-white to-white dark:from-black dark:via-black dark:to-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-sm font-bold text-cyan-600 tracking-widest mb-3 uppercase">SOLUTION</div>
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">Freelancing, Reinvented from Day One</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            AssuredGig's very first version (V1) already solves the biggest problems in freelancing. Imagine what V2 and V3 will bring.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {solutions.map((sol, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-dark-surface border-2 border-cyan-100 dark:border-dark-border shadow-xl dark:shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl h-full relative">
              <span className="absolute top-4 right-4 bg-cyan-100 text-cyan-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm">V1</span>
              {sol.icon}
              <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white mb-2 drop-shadow-sm">{sol.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base font-medium leading-relaxed">{sol.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center mt-10">
          <div className="flex items-center gap-3 mb-2">
            <RocketIcon className="w-7 h-7 text-cyan-500 animate-bounce" />
            <span className="text-lg font-bold text-cyan-700 dark:text-cyan-300">What's Next?</span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl text-base">
            V2 and V3 will bring even more: AI-powered matching, instant contracts, advanced analytics, and more ways to protect your work and your money. AssuredGig is just getting started—join us on the journey!
          </p>
        </div>
      </div>
    </section>
  );
} 