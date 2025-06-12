import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext';

export default function ApplyToGigPage() {
  const { theme } = useTheme();
  return (
    <div className={theme === 'light' ? 'min-h-screen w-full bg-white flex flex-col items-center justify-center py-16' : 'min-h-screen w-full bg-black flex flex-col items-center justify-center py-16'}>
      <div className={theme === 'light' ? 'w-full max-w-xl bg-white border border-cyan-200 rounded-2xl p-8 shadow-lg' : 'w-full max-w-xl bg-[#161b22] border border-[#23272e] rounded-2xl p-8 shadow-lg'}>
        <h1 className={theme === 'light' ? 'text-3xl font-bold text-cyan-600 mb-8 text-center' : 'text-3xl font-bold text-white mb-8 text-center'}>Apply to this Gig</h1>
        <form className="space-y-6">
          <Input placeholder="Your Name" className={theme === 'light' ? 'bg-white border-cyan-200 text-black' : 'bg-[#0d1117] border-[#30363d] text-[#f0f6fc]'} />
          <Input placeholder="Your Email" type="email" className={theme === 'light' ? 'bg-white border-cyan-200 text-black' : 'bg-[#0d1117] border-[#30363d] text-[#f0f6fc]'} />
          <Textarea placeholder="Cover Letter" className={theme === 'light' ? 'bg-white border-cyan-200 text-black min-h-[100px]' : 'bg-[#0d1117] border-[#30363d] text-[#f0f6fc] min-h-[100px]'} />
          <Input placeholder="Portfolio Link" className={theme === 'light' ? 'bg-white border-cyan-200 text-black' : 'bg-[#0d1117] border-[#30363d] text-[#f0f6fc]'} />
          <Button type="submit" className={theme === 'light' ? 'w-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-white' : 'w-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-white'}>Submit Application</Button>
        </form>
      </div>
    </div>
  );
} 