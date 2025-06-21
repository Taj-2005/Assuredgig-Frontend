'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'What is AssuredGig?',
    answer: 'AssuredGig is a secure freelance platform designed for both freelancers and clients, providing verified work, escrow-protected payments, and guaranteed earnings.'
  },
  {
    question: 'How does AssuredGig protect my payment?',
    answer: 'All payments are held in escrow and released only when the client approves the delivered work—ensuring safety for both parties.'
  },
  {
    question: 'Can freelancers set their own rates?',
    answer: 'Yes—freelancers can define their own hourly or project-based rates and clients browse freelancer profiles to select based on pricing and skills.'
  },
  {
    question: 'How do I get started as a client?',
    answer: 'Simply create an account, post your requirement, review proposals, select your freelancer, and make a secure escrow payment to kickstart the project.'
  },
  {
    question: 'What happens if there’s a dispute?',
    answer: 'AssuredGig offers dispute resolution support: funds remain in escrow while a neutral process is followed to resolve issues fairly.'
  }
];


export default function FaqSection() {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(i === openIndex ? null : i);

  return (
    <section className={`flex flex-col items-center justify-center w-full py-24 px-4 ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
      <div className="text-sm font-bold text-cyan-500 tracking-widest mb-3 uppercase">
        FAQ
      </div>
        <div className={`text-2xl md:text-5xl pb-10 text-center font-extrabold ${theme === 'light' ? 'text-gray-900' : 'text-white'} mb-4 leading-tight`}>
            Frequently asked questions
        </div>

      <div className="w-full max-w-4xl mx-auto space-y-4">
        {faqs.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              "rounded-xl transition-all duration-300 overflow-hidden border",
              theme === 'dark' ? 'bg-[#111] border-gray-700' : 'bg-white border-gray-200'
            )}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <span className={cn("font-medium text-base sm:text-lg", theme === 'dark' ? 'text-white' : 'text-gray-900')}>
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 transform transition-transform duration-300",
                  openIndex === idx ? "rotate-180" : "rotate-0",
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                )}
              />
            </button>

            <div
              className={cn(
                "px-6 transition-all duration-300 ease-in-out",
                openIndex === idx ? "max-h-[300px] py-0 pb-5 opacity-100" : "max-h-0 opacity-0"
              )}
              style={{ overflow: 'hidden' }}
            >
              <p className={cn("text-sm sm:text-base leading-relaxed", theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}>
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className={cn("mt-12 text-sm text-center", theme === 'dark' ? 'text-gray-500' : 'text-gray-600')}>
        Still have questions? Email us at <a href="mailto:support@acme.ai" className="underline hover:text-primary">assuredgig@gmail.com</a>
      </p>
    </section>
  );
}
