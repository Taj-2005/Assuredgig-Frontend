'use client';

import React, { useState, useEffect } from 'react';
import { Clock, TrendingUp, DollarSign, CheckCircle, AlertCircle, Briefcase, Bell, Settings, Play, Pause, BarChart3, Activity, Zap, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const FreelancerDashboard = () => {
  const [activeContract, setActiveContract] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 15, hours: 8, minutes: 42, seconds: 18 });

  // Sample contract data
  const contracts = [
    { id: 1, title: 'E-commerce Platform Development', client: 'TechCorp Inc.', progress: 68, deadline: '2025-06-18', budget: 15000, earned: 10200, status: 'In Progress', priority: 'high', tasks: { completed: 14, total: 22 } },
    { id: 2, title: 'Mobile App UI/UX Design', client: 'StartupXYZ', progress: 89, deadline: '2025-06-10', budget: 8500, earned: 7565, status: 'Near Completion', priority: 'medium', tasks: { completed: 18, total: 20 } },
    { id: 3, title: 'Brand Identity Package', client: 'Creative Agency', progress: 34, deadline: '2025-06-25', budget: 5000, earned: 1700, status: 'In Progress', priority: 'low', tasks: { completed: 6, total: 18 } }
  ];
  const currentContract = contracts[activeContract];

  // Timer countdown effect
  useEffect(() => {
    if (isTimerRunning) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
          else if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
          else if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
          else if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
          return prev;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isTimerRunning]);

  // Progress ring component
  const ProgressRing = ({ progress, size = 120, strokeWidth = 8 }: { progress: number; size?: number; strokeWidth?: number }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = circumference - (progress / 100) * circumference;
    return (
      <div className="relative">
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle cx={size / 2} cy={size / 2} r={radius} stroke="rgba(255,255,255,0.08)" strokeWidth={strokeWidth} fill="transparent" />
          <circle cx={size / 2} cy={size / 2} r={radius} stroke="url(#gradient)" strokeWidth={strokeWidth} fill="transparent" strokeDasharray={strokeDasharray} strokeDashoffset={strokeDashoffset} strokeLinecap="round" className="transition-all duration-1000 ease-out" />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">{progress}%</span>
        </div>
      </div>
    );
  };

  // Animated counter component
  const AnimatedCounter = ({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) => {
    const [displayValue, setDisplayValue] = useState(0);
    useEffect(() => {
      let start = 0;
      const increment = value / 100;
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 20);
      return () => clearInterval(timer);
    }, [value]);
    return (
      <span className="font-black text-3xl text-white">{prefix}{displayValue.toLocaleString()}{suffix}</span>
    );
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col">
      {/* Header */}
      <section className="w-full border-b border-[#23272e] py-10 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center">
              <Briefcase className="w-7 h-7 text-indigo-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">Dashboard</h1>
              <p className="text-gray-400 text-base">Your freelance overview</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="secondary" className="border-[#23272e] text-[#f0f6fc] hover:bg-[#23272e]">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="secondary" className="border-[#23272e] text-[#f0f6fc] hover:bg-[#23272e]">
              <Settings className="w-5 h-5" />
            </Button>
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full flex items-center justify-center font-bold text-white shadow-md">
              JD
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16 px-6 w-full">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Left: Contract Selector & Stats */}
          <div className="md:col-span-1 flex flex-col gap-8">
            {/* Contract Selector */}
            <div className="bg-[#161b22] border border-[#23272e] rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-indigo-400" />
                Active Contracts
              </h3>
              <div className="space-y-3">
                {contracts.map((contract, index) => (
                  <div
                    key={contract.id}
                    onClick={() => setActiveContract(index)}
                    className={cn(
                      'p-4 rounded-xl cursor-pointer transition-all duration-300 border',
                      activeContract === index
                        ? 'bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border-indigo-500/40 shadow-md'
                        : 'bg-[#23272e] hover:bg-[#23272e]/80 border-[#23272e]'
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm truncate text-white">{contract.title}</h4>
                        <p className="text-xs text-gray-400 mt-1">{contract.client}</p>
                      </div>
                      <div className="text-right">
                        <div className={cn(
                          'text-xs px-2 py-1 rounded-full font-semibold',
                          contract.priority === 'high' ? 'bg-red-500/10 text-red-400' :
                          contract.priority === 'medium' ? 'bg-yellow-500/10 text-yellow-400' :
                          'bg-green-500/10 text-green-400'
                        )}>
                          {contract.progress}%
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#23272e] border border-[#23272e] rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-indigo-400" />
                  <span className="text-sm text-gray-400">Total Earned</span>
                </div>
                <AnimatedCounter value={28465} prefix="$" />
              </div>
              <div className="bg-[#23272e] border border-[#23272e] rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-violet-400" />
                  <span className="text-sm text-gray-400">Projects</span>
                </div>
                <AnimatedCounter value={12} />
              </div>
            </div>
          </div>
          {/* Center: Main Contract Details */}
          <div className="md:col-span-2 flex flex-col gap-8">
            {/* Contract Header */}
            <div className="bg-[#161b22] border border-[#23272e] rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{currentContract.title}</h2>
                  <p className="text-gray-400">Client: {currentContract.client}</p>
                </div>
                <div className={cn(
                  'px-4 py-2 rounded-full text-sm font-semibold',
                  currentContract.status === 'In Progress'
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'bg-green-500/10 text-green-400'
                )}>
                  {currentContract.status}
                </div>
              </div>
              {/* Progress Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Progress Ring */}
                <div className="flex flex-col items-center justify-center">
                  <ProgressRing progress={currentContract.progress} size={140} />
                  <h3 className="text-lg font-semibold mt-4 mb-2 text-white">Overall Progress</h3>
                  <p className="text-sm text-gray-400">
                    {currentContract.tasks.completed} of {currentContract.tasks.total} tasks completed
                  </p>
                </div>
                {/* Deadline Timer */}
                <div className="flex flex-col justify-center">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold mb-2 flex items-center justify-center gap-2 text-white">
                      <Clock className="w-5 h-5 text-indigo-400" />
                      Time Remaining
                    </h3>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      {Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="bg-[#23272e] rounded-lg p-3">
                          <div className="text-2xl font-bold text-indigo-400">{value}</div>
                          <div className="text-xs text-gray-400 uppercase">{unit}</div>
                        </div>
                      ))}
                    </div>
                    <Button onClick={() => setIsTimerRunning(!isTimerRunning)} className="mt-4 px-6 py-2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white">
                      {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      {isTimerRunning ? 'Pause Timer' : 'Start Timer'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* Financial Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#23272e] border border-[#23272e] rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-green-400" />
                    <span className="text-sm text-gray-400">Total Budget</span>
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400">
                  ${currentContract.budget.toLocaleString()}
                </div>
              </div>
              <div className="bg-[#23272e] border border-[#23272e] rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-indigo-400" />
                    <span className="text-sm text-gray-400">Earned</span>
                  </div>
                  <Zap className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="text-2xl font-bold text-indigo-400">
                  ${currentContract.earned.toLocaleString()}
                </div>
              </div>
              <div className="bg-[#23272e] border border-[#23272e] rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-pink-400" />
                    <span className="text-sm text-gray-400">Remaining</span>
                  </div>
                  <Target className="w-5 h-5 text-pink-400" />
                </div>
                <div className="text-2xl font-bold text-pink-400">
                  ${(currentContract.budget - currentContract.earned).toLocaleString()}
                </div>
              </div>
            </div>
            {/* Progress Analytics */}
            <div className="bg-[#23272e] border border-[#23272e] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-white">
                <BarChart3 className="w-5 h-5 text-violet-400" />
                Progress Analytics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Task Progress Bar */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Task Completion</span>
                    <span className="text-sm font-medium text-indigo-400">
                      {Math.round((currentContract.tasks.completed / currentContract.tasks.total) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-[#161b22] rounded-full h-3">
                    <div className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-1000 ease-out" style={{ width: `${(currentContract.tasks.completed / currentContract.tasks.total) * 100}%` }} />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    {currentContract.tasks.completed} tasks completed, {currentContract.tasks.total - currentContract.tasks.completed} remaining
                  </p>
                </div>
                {/* Budget Progress Bar */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Budget Utilized</span>
                    <span className="text-sm font-medium text-indigo-400">
                      {Math.round((currentContract.earned / currentContract.budget) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-[#161b22] rounded-full h-3">
                    <div className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-1000 ease-out" style={{ width: `${(currentContract.earned / currentContract.budget) * 100}%` }} />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    ${currentContract.earned.toLocaleString()} earned of ${currentContract.budget.toLocaleString()} budget
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bottom Action Bar */}
      <section className="py-8 px-6 w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gray-400">System Status: Online</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white">
              Export Report
            </Button>
            <Button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white">
              New Contract
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreelancerDashboard; 