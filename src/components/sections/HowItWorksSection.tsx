import { ArrowLeftIcon, ArrowRightIcon, FilePlusIcon, MagnifyingGlassIcon, BarChartIcon, CheckCircledIcon, PersonIcon, PaperPlaneIcon, LockClosedIcon } from '@radix-ui/react-icons';
import { useEffect, useRef, useState } from 'react';

const clientSteps = [
  {
    icon: <FilePlusIcon className="w-7 h-7 text-cyan-600 bg-cyan-100 rounded-full p-1" />,
    title: 'Post Your Work',
    desc: "Describe your project and requirements in a few clicks."
  },
  {
    icon: <MagnifyingGlassIcon className="w-7 h-7 text-cyan-600 bg-cyan-100 rounded-full p-1" />,
    title: 'Find Your Freelancer',
    desc: "Choose the best freelancer and track progress in your dashboard with real-time updates."
  },
  {
    icon: <LockClosedIcon className="w-7 h-7 text-cyan-600 bg-cyan-100 rounded-full p-1" />,
    title: 'Complete with Escrow',
    desc: "Release payment only when you're satisfied. Your funds are always protected."
  },
];

const freelancerSteps = [
  {
    icon: <MagnifyingGlassIcon className="w-7 h-7 text-cyan-600 bg-cyan-100 rounded-full p-1" />,
    title: 'Find Your Gig',
    desc: "Browse and apply to projects that match your skills."
  },
  {
    icon: <BarChartIcon className="w-7 h-7 text-cyan-600 bg-cyan-100 rounded-full p-1" />,
    title: 'Deliver & Update',
    desc: "Work, update your client in real time, and build your reputation."
  },
  {
    icon: <LockClosedIcon className="w-7 h-7 text-cyan-600 bg-cyan-100 rounded-full p-1" />,
    title: 'Get Paid Securely',
    desc: "Receive your payment instantly and securely via escrow."
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate how much of the section is in view
      const totalHeight = rect.height - windowHeight / 2;
      const scrolled = Math.min(Math.max(windowHeight - rect.top, 0), totalHeight);
      setProgress(Math.max(0, Math.min(1, scrolled / totalHeight)));
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full py-24 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-14">
          <div className="text-sm font-bold text-cyan-600 tracking-widest mb-3 uppercase">HOW IT WORKS</div>
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">Just 3 Steps to Get Started</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Client Workflow */}
          <div className="relative flex flex-col gap-10">
            {/* Filler vertical accent line */}
            <div className="absolute left-6 top-8 bottom-8 w-1 bg-cyan-100 rounded-full z-0 hidden md:block overflow-hidden">
              <div
                className="absolute left-0 top-0 w-1 bg-cyan-400 rounded-full transition-all duration-300"
                style={{ height: `${progress * 100}%` }}
              />
            </div>
            <h3 className="text-2xl font-bold text-cyan-700 dark:text-cyan-300 mb-4 flex items-center gap-2">
              <PersonIcon className="w-7 h-7 text-cyan-600" /> Client
            </h3>
            {clientSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 relative z-10">
                <div className={`transition-all duration-300 ${progress >= (idx + 1) / clientSteps.length ? 'scale-110 ring-4 ring-cyan-200' : ''}`}>{step.icon}</div>
                <div className="flex-1 bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-dark-border shadow-sm dark:shadow-md rounded-xl p-4">
                  <div className="font-bold text-lg text-gray-900 dark:text-white mb-1">{idx + 1}. {step.title}</div>
                  <div className="text-gray-600 dark:text-gray-300 text-base">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Freelancer Workflow */}
          <div className="relative flex flex-col gap-10">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-10 hidden md:block">
              <ArrowRightIcon className="w-16 h-16 text-cyan-300" />
            </div>
            <h3 className="text-2xl font-bold text-cyan-700 dark:text-cyan-300 mb-4 flex items-center gap-2">
              <PaperPlaneIcon className="w-7 h-7 text-cyan-600" /> Freelancer
            </h3>
            {freelancerSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div>{step.icon}</div>
                <div className="flex-1 bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-dark-border shadow-sm dark:shadow-md rounded-xl p-4">
                  <div className="font-bold text-lg text-gray-900 dark:text-white mb-1">{idx + 1}. {step.title}</div>
                  <div className="text-gray-600 dark:text-gray-300 text-base">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 