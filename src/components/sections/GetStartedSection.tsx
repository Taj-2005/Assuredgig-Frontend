import { FilePlusIcon, MagnifyingGlassIcon, BarChartIcon } from '@radix-ui/react-icons';
import { useTheme } from '@/context/ThemeContext';
export default function GetStartedSection() {
  const { theme } = useTheme();
  const steps = [
  {
    icon: <FilePlusIcon className="w-7 h-7 text-cyan-500" />,
    title: 'Post Your Work',
    desc: 'Describe your project and requirements in a few clicks.'
  },
  {
    icon: <MagnifyingGlassIcon className="w-7 h-7 text-cyan-500" />,
    title: 'Find Your Freelancer',
    desc: 'Choose the best freelancer and track progress in your dashboard with real-time updates.'
  },
  {
    icon: <BarChartIcon className="w-7 h-7 text-cyan-500" />,
    title: 'Complete with Escrow',
    desc: "Release payment only when you're satisfied. Your funds are always protected."
  },
];
  return (
    <section className={`w-full py-24 px-4 ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-sm font-bold text-cyan-500 tracking-widest mb-3 uppercase">HOW IT WORKS</div>
          <h2 className={`text-5xl font-extrabold ${theme === 'light' ? 'text-gray-900' : 'text-white'} mb-4 leading-tight`}>Just 3 Steps to Get Started</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="relative flex flex-col gap-12">
            {/* Vertical accent line */}
            <div className="absolute left-6 top-8 bottom-8 w-1 bg-cyan-100 rounded-full z-0 hidden md:block" />
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex items-start gap-6 z-10">
                <div className="flex flex-col items-center">
                  <div className="bg-cyan-50 rounded-full p-3 mb-2 shadow-sm">
                    {step.icon}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-1 flex-1 bg-cyan-100 rounded-full my-1 hidden md:block" style={{ minHeight: 40 }} />
                  )}
                </div>
                <div>
                  <div className={`font-extrabold text-lg ${theme === 'light' ? 'text-gray-900' : 'text-white'}  mb-1`}>{idx + 1}. {step.title}</div>
                  <div className={`${theme === 'light' ? 'text-gray-600' : 'text-white'} text-base max-w-md`}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Image/mockup */}
          <div className="flex justify-center items-center">
            <img
              src="/dashboard-mockup.png"
              alt="Dashboard Mockup"
              className="rounded-2xl shadow-xl w-full max-w-lg border border-cyan-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 