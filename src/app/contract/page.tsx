"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, MessageSquare, CheckCircle2, Target, Award, Activity } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import {useRouter} from 'next/navigation'
import { useTheme } from '@/context/ThemeContext';
import Navbar from '@/components/layout/Navbar';

const contracts = [
  { id: 1, title: 'E-commerce Platform Development', client: 'TechCorp Inc.', progress: 68 },
  { id: 2, title: 'Mobile App UI/UX Design', client: 'StartupXYZ', progress: 89 },
  { id: 3, title: 'Brand Identity Package', client: 'Creative Agency', progress: 34 },
];

const contractDetails = {
  title: 'Frontend Web App Development',
  client: 'Acme Corp',
  freelancer: 'Jane Doe',
  budget: 5000,
  deadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 6 + 1000 * 60 * 60 * 23 + 1000 * 60 * 57 + 1000 * 55),
  percentComplete: 65,
  milestones: [
    { name: 'Design', value: 1000, complete: true, date: '2024-06-01' },
    { name: 'Development', value: 2500, complete: false, date: '2024-06-15' },
    { name: 'Testing', value: 1000, complete: false, date: '2024-06-22' },
    { name: 'Deployment', value: 500, complete: false, date: '2024-06-30' },
  ],
  workLog: [
    { date: '2024-06-01', hours: 4, note: 'Initial setup and design', status: 'completed' },
    { date: '2024-06-02', hours: 6, note: 'Component development', status: 'completed' },
    { date: '2024-06-03', hours: 5, note: 'API integration', status: 'in-progress' },
  ],
  recentActivity: [
    { type: 'milestone', title: 'Design Phase Completed', date: '2024-06-01', status: 'completed' },
    { type: 'meeting', title: 'Development Kickoff', date: '2024-06-02', status: 'completed' },
    { type: 'work', title: 'API Integration Started', date: '2024-06-03', status: 'in-progress' },
  ]
};

const CountdownTimer = ({ date }: { date: Date }) => {
  const { theme } = useTheme();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    completed: false
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(date).getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          completed: true
        });
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        completed: false
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [date]);

  if (timeLeft.completed) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-red-500 font-bold"
      >
        Expired
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-4"
    >
      <div className="flex flex-col items-center">
        <div className={`text-2xl font-bold ${theme === 'light' ? 'text-black' : 'text-blue-400'}`}>{timeLeft.days}</div>
        <div className="text-sm text-gray-400">Days</div>
      </div>
      <div className="flex flex-col items-center">
        <div className={`text-2xl font-bold ${theme === 'light' ? 'text-black' : 'text-blue-400'}`}>{timeLeft.hours}</div>
        <div className="text-sm text-gray-400">Hours</div>
      </div>
      <div className="flex flex-col items-center">
        <div className={`text-2xl font-bold ${theme === 'light' ? 'text-black' : 'text-blue-400'}`}>{timeLeft.minutes}</div>
        <div className="text-sm text-gray-400">Mins</div>
      </div>
      <div className="flex flex-col items-center">
        <div className={`text-2xl font-bold ${theme === 'light' ? 'text-black' : 'text-blue-400'}`}>{timeLeft.seconds}</div>
        <div className="text-sm text-gray-400">Secs</div>
      </div>
    </motion.div>
  );
};

const ProgressTimeline = ({ milestones }: { milestones: typeof contractDetails.milestones }) => {
  const { theme } = useTheme();
  return (
    <div className="relative">
      <div className={`absolute left-4 top-0 bottom-0 w-0.5 ${theme === 'light' ? 'bg-black' : 'bg-blue-700'}`} />
      {milestones.map((milestone, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="relative flex items-start mb-8 last:mb-0"
        >
          <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center ${milestone.complete ? (theme === 'light' ? 'bg-black' : 'bg-blue-500') : (theme === 'light' ? 'bg-white border border-black' : 'bg-blue-900')}`}> 
            {milestone.complete ? (
              <CheckCircle2 className="w-5 h-5 text-white" />
            ) : (
              <div className={`w-3 h-3 rounded-full ${theme === 'light' ? 'bg-black' : 'bg-blue-400'}`} />
            )}
          </div>
          <div className="ml-12">
            <div className={`${theme === 'light' ? 'text-black' : 'text-blue-100'} font-medium`}>{milestone.name}</div>
            <div className="text-gray-400 text-sm">{milestone.date}</div>
            <div className={`${theme === 'light' ? 'text-black' : 'text-blue-300'} font-semibold`}>${milestone.value}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default function ContractsPage() {
  const navigate = useRouter()
  const { theme } = useTheme();
  return (
    <>
      <Navbar />
      <div className={theme === 'light' ? 'min-h-screen w-full bg-gray-100 flex flex-col pt-10' : 'min-h-screen w-full bg-black flex flex-col pt-20'}>
        <section className="py-16 px-6 w-full">
          <div className="max-w-7xl mx-auto grid gap-8">
            {/* Contracts List */}
            <div className="md:col-span-2 flex-col gap-8 grid">
              <div className={theme === 'light' ? 'bg-white border border-gray-300 rounded-2xl p-6 transition-all duration-700 hover:scale-100 hover:shadow-2xl' : 'bg-neutral-900 border border-gray-800 rounded-2xl p-6 transition-all duration-200 hover:scale-105 hover:shadow-2xl'}>
                <h3 className={theme === 'light' ? 'text-lg font-semibold text-black mb-4 flex items-center gap-2' : 'text-lg font-semibold text-white mb-4 flex items-center gap-2'}>
                  <Target className={theme === 'light' ? 'w-5 h-5 text-black' : 'w-5 h-5 text-white'} />
                  Active Contracts
                </h3>
                <div className="space-y-3">
                  {contracts.map((contract) => (
                    <button key={contract.id} onClick={() => navigate.push('/dashboard')} className={theme === 'light' ? 'block w-full text-left p-4 rounded-xl border border-gray-300 bg-white hover:bg-black hover:text-white transition-all duration-200 cursor-pointer hover:scale-105 hover:shadow-lg text-black' : 'block w-full text-left p-4 rounded-xl border border-black bg-neutral-800 hover:bg-neutral-600  transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg text-white'}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4>{contract.title}</h4>
                          <p>{contract.client}</p>
                        </div>
                        <div className="text-right">
                          <div className={theme === 'light' ? 'text-xs px-2 py-1 rounded-full font-semibold bg-white text-black' : 'text-xs px-2 py-1 rounded-full font-semibold bg-neutral-900 text-white border-black'}>
                            {contract.progress}%
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>
            {/* Quick Stats */}
            <div className="flex flex-col gap-4">
              <div className={`${theme === 'light' ? 'bg-white border border-gray-300' : 'bg-neutral-900 border border-gray-800' } rounded-2xl p-4 transition-all duration-200 hover:scale-105 hover:shadow-lg`}>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-black dark:text-white" />
                  <span className="text-sm text-black dark:text-white">Total Earned</span>
                </div>
                <span className={`font-black text-3xl ${theme === 'light' ? 'text-black' : 'text-white'}`}>$28,465</span>
              </div>
              <div className={` ${theme === 'light' ? 'bg-white border border-gray-300' : 'bg-neutral-900 border border-gray-800' } rounded-2xl p-4 transition-all duration-200 hover:scale-105 hover:shadow-lg`}>
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-black dark:text-white" />
                  <span className="text-sm text-black dark:text-white">Projects</span>
                </div>
                <span className={`font-black text-3xl ${theme === 'light' ? 'text-black' : 'text-white'}`}>12</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}