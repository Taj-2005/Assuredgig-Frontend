import { SetStateAction, useState } from 'react';
import { FilePlusIcon, MagnifyingGlassIcon, BarChartIcon, ChevronLeftIcon, ChevronRightIcon, PersonIcon, BackpackIcon } from '@radix-ui/react-icons';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

export default function GetStartedSection() {
  const { theme } = useTheme();
  const [userType, setUserType] = useState('client'); // 'client' or 'freelancer'
  const [currentStep, setCurrentStep] = useState(0);

  const clientSteps = [
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

  const freelancerSteps = [
    {
      icon: <MagnifyingGlassIcon className="w-7 h-7 text-cyan-500" />,
      title: 'Browse Projects from Gigs',
      desc: 'Explore available projects that match your skills and expertise.'
    },
    {
      icon: <FilePlusIcon className="w-7 h-7 text-cyan-500" />,
      title: 'Submit Proposals',
      desc: 'Send compelling proposals to clients and showcase your portfolio.'
    },
    {
      icon: <BarChartIcon className="w-7 h-7 text-cyan-500" />,
      title: 'Get Paid Securely',
      desc: 'Complete work and receive payments through our secure escrow system.'
    },
  ];

  const steps = userType === 'client' ? clientSteps : freelancerSteps;

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const toggleUserType = (type: SetStateAction<string>) => {
    setUserType(type);
    setCurrentStep(0); // Reset to first step when switching user type
  };

  return (
    <section className={`w-full py-24 px-4 ${theme === 'light' ? 'bg-gray-100' : 'bg-black'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-sm font-bold text-cyan-500 tracking-widest mb-3 uppercase">HOW IT WORKS</div>
          <h2 className={`text-5xl font-extrabold ${theme === 'light' ? 'text-gray-900' : 'text-white'} mb-6 leading-tight`}>
            Just 3 Steps to Get Started
          </h2>
          
          {/* User Type Toggle */}
          <div className="flex justify-center mb-8">
            <div className={`flex rounded-full p-1 ${theme === 'light' ? 'bg-white shadow-lg' : 'bg-gray-800 border border-gray-700'}`}>
              <button
                onClick={() => toggleUserType('client')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  userType === 'client'
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : theme === 'light'
                    ? 'text-gray-600 hover:text-gray-900'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <PersonIcon className="w-4 h-4" />
                For Clients
              </button>
              <button
                onClick={() => toggleUserType('freelancer')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  userType === 'freelancer'
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : theme === 'light'
                    ? 'text-gray-600 hover:text-gray-900'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <BackpackIcon className="w-4 h-4" />
                For Freelancers
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="relative">
            {/* Desktop View - All Steps */}
            <div className="hidden md:flex flex-col gap-12">
              {/* Vertical accent line */}
              <div className="absolute left-6 top-8 bottom-8 w-1 bg-cyan-100 rounded-full z-0" />
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex items-start gap-6 z-10">
                  <div className="flex flex-col items-center">
                    <div className="bg-cyan-50 rounded-full p-3 mb-2 shadow-sm">
                      {step.icon}
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="w-1 flex-1 bg-cyan-100 rounded-full my-1" style={{ minHeight: 40 }} />
                    )}
                  </div>
                  <div>
                    <div className={`font-extrabold text-lg ${theme === 'light' ? 'text-gray-900' : 'text-white'} mb-1`}>
                      {idx + 1}. {step.title}
                    </div>
                    <div className={`${theme === 'light' ? 'text-gray-600' : 'text-white'} text-base max-w-md`}>
                      {step.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile View - Single Step with Navigation */}
            <div className="md:hidden">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={prevStep}
                  className={`p-2 rounded-full transition-colors ${
                    theme === 'light'
                      ? 'bg-white shadow-md hover:bg-gray-50'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <ChevronLeftIcon className={`w-5 h-5 ${theme === 'light' ? 'text-gray-600' : 'text-white'}`} />
                </button>
                
                <div className="flex gap-2">
                  {steps.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx === currentStep ? 'bg-cyan-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextStep}
                  className={`p-2 rounded-full transition-colors ${
                    theme === 'light'
                      ? 'bg-white shadow-md hover:bg-gray-50'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <ChevronRightIcon className={`w-5 h-5 ${theme === 'light' ? 'text-gray-600' : 'text-white'}`} />
                </button>
              </div>

              <div className="text-center">
                <div className="bg-cyan-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-sm flex items-center justify-center">
                  {steps[currentStep].icon}
                </div>
                <div className={`font-extrabold text-xl ${theme === 'light' ? 'text-gray-900' : 'text-white'} mb-2`}>
                  {currentStep + 1}. {steps[currentStep].title}
                </div>
                <div className={`${theme === 'light' ? 'text-gray-600' : 'text-white'} text-base`}>
                  {steps[currentStep].desc}
                </div>
              </div>
            </div>
          </div>

          {/* Image/mockup */}
          <div className="flex justify-center items-center">
            <Image
              width={600}
              height={400}
              src="/dashboard-mockup.png"
              alt="Dashboard Mockup"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}