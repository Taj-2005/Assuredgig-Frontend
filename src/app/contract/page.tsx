"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, MessageSquare, CheckCircle2, Target, Award, Activity } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import {useRouter} from 'next/navigation'

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
        <div className="text-2xl font-bold text-indigo-400">{timeLeft.days}</div>
        <div className="text-sm text-gray-400">Days</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold text-indigo-400">{timeLeft.hours}</div>
        <div className="text-sm text-gray-400">Hours</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold text-indigo-400">{timeLeft.minutes}</div>
        <div className="text-sm text-gray-400">Mins</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold text-indigo-400">{timeLeft.seconds}</div>
        <div className="text-sm text-gray-400">Secs</div>
      </div>
    </motion.div>
  );
};

const ProgressTimeline = ({ milestones }: { milestones: typeof contractDetails.milestones }) => {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700" />
      {milestones.map((milestone, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="relative flex items-start mb-8 last:mb-0"
        >
          <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center ${
            milestone.complete ? 'bg-indigo-500' : 'bg-gray-700'
          }`}>
            {milestone.complete ? (
              <CheckCircle2 className="w-5 h-5 text-white" />
            ) : (
              <div className="w-3 h-3 rounded-full bg-gray-400" />
            )}
          </div>
          <div className="ml-12">
            <div className="text-white font-medium">{milestone.name}</div>
            <div className="text-gray-400 text-sm">{milestone.date}</div>
            <div className="text-indigo-400 font-semibold">${milestone.value}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default function ContractsPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const navigate = useRouter()
  return (
    <div className="min-h-screen w-full bg-black flex flex-col">
      <section className="w-full border-b border-[#23272e] py-10 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center">
              <Target className="w-7 h-7 text-indigo-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">Contracts</h1>
              <p className="text-gray-400 text-base">All your contracts</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 w-full">
        <div className="max-w-7xl mx-auto grid gap-8">
          {/* Contracts List */}
          <div className="md:col-span-2 flex-col gap-8 grid">
            <div className="bg-[#161b22] border border-[#23272e] rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-indigo-400" />
                Active Contracts
              </h3>
              <div className="space-y-3">
                {contracts.map((contract) => (
                  <button key={contract.id} onClick={() => setSelected(contract.id)} className="block w-full text-left p-4 rounded-xl transition-all duration-300 border bg-[#23272e] hover:bg-[#23272e]/80 border-[#23272e] cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-sm text-white">{contract.title}</h4>
                        <p className="text-xs text-gray-400 mt-1">{contract.client}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xs px-2 py-1 rounded-full font-semibold bg-indigo-500/10 text-indigo-400">
                          {contract.progress}%
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            {/* Detailed Contract View */}
            {selected && (
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, type: 'spring' }} className="bg-[#161b22] border border-[#23272e] rounded-2xl shadow-lg p-10">
                <h1 className="text-3xl font-bold text-white mb-2 text-center bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">{contractDetails.title}</h1>
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-6">
                    <div className="bg-[#23272e] rounded-xl p-6">
                      <h2 className="text-xl font-semibold text-indigo-400 mb-4">Project Overview</h2>
                      <div className="space-y-3">
                        <div className="flex justify-between"><span className="text-gray-400">Client</span><span className="text-white font-semibold">{contractDetails.client}</span></div>
                        <div className="flex justify-between"><span className="text-gray-400">Freelancer</span><span className="text-white font-semibold">{contractDetails.freelancer}</span></div>
                        <div className="flex justify-between"><span className="text-gray-400">Budget</span><span className="text-indigo-400 font-semibold">${contractDetails.budget}</span></div>
                      </div>
                    </div>
                    <div className="bg-[#23272e] rounded-xl p-6">
                      <h2 className="text-xl font-semibold text-indigo-400 mb-4">Time Remaining</h2>
                      <CountdownTimer date={contractDetails.deadline} />
                    </div>
                  </div>
                  <div className="bg-[#23272e] rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-indigo-400 mb-4">Progress</h2>
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <svg className="transform -rotate-90" width={120} height={120}>
                          <circle cx={60} cy={60} r={52} stroke="rgba(255,255,255,0.08)" strokeWidth={8} fill="transparent" />
                          <circle cx={60} cy={60} r={52} stroke="url(#gradient)" strokeWidth={8} fill="transparent" strokeDasharray={`${2 * Math.PI * 52} ${2 * Math.PI * 52}`} strokeDashoffset={(2 * Math.PI * 52) - (contractDetails.percentComplete / 100) * (2 * Math.PI * 52)} strokeLinecap="round" className="transition-all duration-1000 ease-out" />
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#6366F1" />
                              <stop offset="100%" stopColor="#8B5CF6" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">{contractDetails.percentComplete}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div className="bg-[#23272e] rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-indigo-400 mb-4">Milestones</h2>
                    <ProgressTimeline milestones={contractDetails.milestones} />
                  </div>
                  <div className="bg-[#23272e] rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-indigo-400 mb-4">Work Log</h2>
                    <div className="space-y-4">
                      {contractDetails.workLog.map((log, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-3 bg-[#18181b] rounded-lg">
                          <div className={`w-2 h-2 rounded-full ${log.status === 'completed' ? 'bg-green-500' : 'bg-indigo-500'}`} />
                          <div className="flex-1">
                            <div className="text-white font-medium">{log.note}</div>
                            <div className="text-sm text-gray-400">{log.date}</div>
                          </div>
                          <div className="text-indigo-400 font-semibold">{log.hours}h</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-[#23272e] rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-indigo-400 mb-4">Recent Activity</h2>
                    <div className="space-y-4">
                      {contractDetails.recentActivity.map((activity, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-3 bg-[#18181b] rounded-lg">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activity.status === 'completed' ? 'bg-green-500' : 'bg-indigo-500'}`}>
                            {activity.type === 'milestone' ? (<CheckCircle2 className="w-4 h-4 text-white" />) : activity.type === 'meeting' ? (<Calendar className="w-4 h-4 text-white" />) : (<FileText className="w-4 h-4 text-white" />)}
                          </div>
                          <div className="flex-1">
                            <div className="text-white font-medium">{activity.title}</div>
                            <div className="text-sm text-gray-400">{activity.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#23272e] rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-indigo-400 mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <Button className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white h-12"><MessageSquare className="w-4 h-4 mr-2" />Open Chat</Button>
                      <Button className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white h-12"><Calendar className="w-4 h-4 mr-2" />Schedule Meeting</Button>
                      <Button className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white h-12"><FileText className="w-4 h-4 mr-2" />Update Progress</Button>
                      <Button className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white h-12"><Award className="w-4 h-4 mr-2" />Add Milestone</Button>
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex justify-center">
                  <Link href="/dashboard">
                    <Button className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-8 py-3 text-lg font-semibold">Take me to dashboard</Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
          {/* Quick Stats */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#23272e] border border-[#23272e] rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-indigo-400" />
                <span className="text-sm text-gray-400">Total Earned</span>
              </div>
              <span className="font-black text-3xl text-white">$28,465</span>
            </div>
            <div className="bg-[#23272e] border border-[#23272e] rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-5 h-5 text-violet-400" />
                <span className="text-sm text-gray-400">Projects</span>
              </div>
              <span className="font-black text-3xl text-white">12</span>
            </div>
          </div>
          <div className = 'flex justify-end items-end'>
            <Button variant="secondary" className="border-[#23272e] text-[#f0f6fc] hover:bg-[#23272e]"
            onClick = {(e) => {
              e.preventDefault()
              navigate.push('/')
            }}>
              Go to Home
            </Button>
        </div>
        </div>
      </section>
    </div>
  );
}