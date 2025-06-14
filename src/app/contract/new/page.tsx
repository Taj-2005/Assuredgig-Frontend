import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext';

export default function NewContractPage() {
  const { theme } = useTheme();
  return (
    <div className={theme === 'light' ? 'min-h-screen w-full bg-white flex flex-col items-center justify-center py-16' : 'min-h-screen w-full bg-black flex flex-col items-center justify-center py-16'}>
      <div className={theme === 'light' ? 'w-full max-w-xl bg-white border border-black rounded-2xl p-8 shadow-lg' : 'w-full max-w-xl bg-[#161b22] border border-[#23272e] rounded-2xl p-8 shadow-lg'}>
        <h1 className={theme === 'light' ? 'text-3xl font-bold text-black mb-8 text-center' : 'text-3xl font-bold text-white mb-8 text-center'}>Create a Contract</h1>
        <form className="space-y-6">
          <Input placeholder="Contract Title" className={theme === 'light' ? 'bg-white border-black text-black' : 'bg-[#0d1117] border-[#30363d] text-[#f0f6fc]'} />
          <Textarea placeholder="Terms & Details" className={theme === 'light' ? 'bg-white border-black text-black min-h-[100px]' : 'bg-[#0d1117] border-[#30363d] text-[#f0f6fc] min-h-[100px]'} />
          <Input placeholder="Milestones (comma separated)" className={theme === 'light' ? 'bg-white border-black text-black' : 'bg-[#0d1117] border-[#30363d] text-[#f0f6fc]'} />
          <Input placeholder="Budget (USD)" type="number" className={theme === 'light' ? 'bg-white border-black text-black' : 'bg-[#0d1117] border-[#30363d] text-[#f0f6fc]'} />
          <Button type="submit" className={theme === 'light' ? 'w-full bg-black text-white' : 'w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white'}>Create Contract</Button>
        </form>
      </div>
    </div>
  );
} 