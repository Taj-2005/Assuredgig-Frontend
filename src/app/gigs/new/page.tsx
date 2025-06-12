'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext';

export default function NewGigPage() {
  const { theme } = useTheme();
  return (
    <div className={theme === 'light' ? 'min-h-screen w-full bg-white flex flex-col items-center justify-center py-16' : 'min-h-screen w-full bg-black flex flex-col items-center justify-center py-16'}>
      <div className={theme === 'light' ? 'w-full max-w-xl bg-white border border-cyan-200 rounded-2xl p-8 shadow-lg' : 'w-full max-w-xl bg-[#161b22] border border-[#23272e] rounded-2xl p-8 shadow-lg'}>
        <h1 className={theme === 'light' ? 'text-3xl font-bold text-cyan-600 mb-8 text-center' : 'text-3xl font-bold text-white mb-8 text-center'}>Post a New Gig</h1>
        <form className="space-y-6">
          <Input placeholder="Title" className={theme === 'light' ? 'bg-white border-cyan-200 text-black' : 'bg-[#0d1117] border-[#30363d] text-[#f0f6fc]'} />
          <Textarea placeholder="Description" className={theme === 'light' ? 'bg-white border-cyan-200 text-black min-h-[100px]' : 'bg-[#0d1117] border-[#30363d] text-[#f0f6fc] min-h-[100px]'} />
          <Input placeholder="Skills (comma separated)" className={theme === 'light' ? 'bg-white border-cyan-200 text-black' : 'bg-[#0d1117] border-[#30363d] text-[#f0f6fc]'} />
          <Input placeholder="Budget (USD)" type="number" className={theme === 'light' ? 'bg-white border-cyan-200 text-black' : 'bg-[#0d1117] border-[#30363d] text-[#f0f6fc]'} />
          <Input placeholder="Deadline" type="date" className={theme === 'light' ? 'bg-white border-cyan-200 text-black' : 'bg-[#0d1117] border-[#30363d] text-[#f0f6fc]'} />
          <Button type="submit" className={theme === 'light' ? 'w-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-white' : 'w-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-white'}>Post Gig</Button>
        </form>
      </div>
    </div>
  );
} 