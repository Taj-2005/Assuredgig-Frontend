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
    // Theme detection (dark = blue, light = black)
    const isDark = typeof window !== 'undefined' ? document.documentElement.classList.contains('dark') : true;
    return (
      <div className="relative">
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle cx={size / 2} cy={size / 2} r={radius} stroke={isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'} strokeWidth={strokeWidth} fill="transparent" />
          <circle cx={size / 2} cy={size / 2} r={radius} stroke={isDark ? 'url(#blue-gradient)' : 'black'} strokeWidth={strokeWidth} fill="transparent" strokeDasharray={strokeDasharray} strokeDashoffset={strokeDashoffset} strokeLinecap="round" className="transition-all duration-1000 ease-out" />
          {isDark && (
            <defs>
              <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
          )}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>{progress}%</span>
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
            <div className="w-14 h-14 bg-black border border-white rounded-2xl flex items-center justify-center">
              <Briefcase className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">Dashboard</h1>
              <p className="text-white text-base">Your freelance overview</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="secondary" className="border-white text-white hover:bg-white hover:text-black transition-transform duration-200 hover:scale-105 hover:shadow-md">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="secondary" className="border-white text-white hover:bg-white hover:text-black transition-transform duration-200 hover:scale-105 hover:shadow-md">
              <Settings className="w-5 h-5" />
            </Button>
            <div className="w-10 h-10 bg-black border border-white rounded-full flex items-center justify-center font-bold text-white shadow-md">
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
            <div className="bg-black border border-white rounded-2xl p-6 transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-white" />
                Active Contracts
              </h3>
              <div className="space-y-3">
                {contracts.map((contract, index) => (
                  <div
                    key={contract.id}
                    onClick={() => setActiveContract(index)}
                    className={cn(
                      'p-4 rounded-xl cursor-pointer transition-all duration-300 border transition-transform hover:scale-105 hover:shadow-lg',
                      activeContract === index
                        ? 'bg-white text-black border-white shadow-md'
                        : 'bg-black text-white hover:bg-white hover:text-black border-white'
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm truncate">{contract.title}</h4>
                        <p className="text-xs mt-1">{contract.client}</p>
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
              <div className="bg-black border border-white rounded-2xl p-4 transition-transform duration-200 hover:scale-105 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-white" />
                  <span className="text-sm text-white">Total Earned</span>
                </div>
                <AnimatedCounter value={28465} prefix="$" />
              </div>
              <div className="bg-black border border-white rounded-2xl p-4 transition-transform duration-200 hover:scale-105 hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-white" />
                  <span className="text-sm text-white">Projects</span>
                </div>
                <AnimatedCounter value={12} />
              </div>
            </div>
          </div>
          {/* Center: Main Contract Details */}
          <div className="md:col-span-2 flex flex-col gap-8">
            {/* Contract Header */}
            <div className="bg-black border border-white rounded-2xl p-6 transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{currentContract.title}</h2>
                  <p className="text-white">Client: {currentContract.client}</p>
                </div>
                <div className={cn(
                  'px-4 py-2 rounded-full text-sm font-semibold',
                  currentContract.status === 'In Progress'
                    ? 'bg-white text-black'
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
                  <p className="text-sm text-white">
                    {currentContract.tasks.completed} of {currentContract.tasks.total} tasks completed
                  </p>
                </div>
                {/* Deadline Timer */}
                <div className="flex flex-col justify-center">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold mb-2 flex items-center justify-center gap-2 text-white">
                      <Clock className="w-5 h-5 text-white" />
                      Time Remaining
                    </h3>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      {Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="bg-black border border-white rounded-lg p-3 transition-transform duration-150 hover:scale-105 hover:shadow-md">
                          <div className="text-2xl font-bold text-white">{value}</div>
                          <div className="text-xs text-white uppercase">{unit}</div>
                        </div>
                      ))}
                    </div>
                    <Button onClick={() => setIsTimerRunning(!isTimerRunning)} className="mt-4 px-6 py-2 bg-black text-white border border-white transition-transform duration-200 hover:scale-105 hover:shadow-md">
                      {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      {isTimerRunning ? 'Pause Timer' : 'Start Timer'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* Financial Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-black border border-white rounded-2xl p-6 transition-transform duration-200 hover:scale-105 hover:shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-white" />
                    <span className="text-sm text-white">Total Budget</span>
                  </div>
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">
                  ${currentContract.budget.toLocaleString()}
                </div>
              </div>
              <div className="bg-black border border-white rounded-2xl p-6 transition-transform duration-200 hover:scale-105 hover:shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-white" />
                    <span className="text-sm text-white">Earned</span>
                  </div>
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">
                  ${currentContract.earned.toLocaleString()}
                </div>
              </div>
              <div className="bg-black border border-white rounded-2xl p-6 transition-transform duration-200 hover:scale-105 hover:shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-white" />
                    <span className="text-sm text-white">Progress</span>
                  </div>
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">
                  {Math.round((currentContract.tasks.completed / currentContract.tasks.total) * 100)}%
                </div>
              </div>
            </div>
            {/* Task & Budget Progress Bars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Task Progress Bar */}
              <div className="transition-transform duration-150 hover:scale-105 hover:shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-white">Task Completion</span>
                  <span className="text-sm font-medium text-white">
                    {Math.round((currentContract.tasks.completed / currentContract.tasks.total) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-black border border-white rounded-full h-3">
                  <div
                    className="h-3 rounded-full bg-white transition-all"
                    style={{ width: `${(currentContract.tasks.completed / currentContract.tasks.total) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-white mt-2">
                  {currentContract.tasks.completed} tasks completed, {currentContract.tasks.total - currentContract.tasks.completed} remaining
                </p>
              </div>
              {/* Budget Progress Bar */}
              <div className="transition-transform duration-150 hover:scale-105 hover:shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-white">Budget Utilized</span>
                  <span className="text-sm font-medium text-white">
                    {Math.round((currentContract.earned / currentContract.budget) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-black border border-white rounded-full h-3">
                  <div
                    className="h-3 rounded-full bg-white transition-all"
                    style={{ width: `${(currentContract.earned / currentContract.budget) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-white mt-2">
                  ${currentContract.earned.toLocaleString()} earned of ${currentContract.budget.toLocaleString()} budget
                </p>
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
            <Button className={`px-4 py-2 ${typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white' : 'bg-black text-white'}`}>
              Export Report
            </Button>
            <Button className={`px-4 py-2 ${typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white' : 'bg-black text-white'}`}>
              New Contract
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreelancerDashboard; 