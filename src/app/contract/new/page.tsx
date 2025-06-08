import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function NewContractPage() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center py-16">
      <div className="w-full max-w-xl bg-[#161b22] border border-[#23272e] rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Create a Contract</h1>
        <form className="space-y-6">
          <Input placeholder="Contract Title" className="bg-[#0d1117] border-[#30363d] text-[#f0f6fc]" />
          <Textarea placeholder="Terms & Details" className="bg-[#0d1117] border-[#30363d] text-[#f0f6fc] min-h-[100px]" />
          <Input placeholder="Milestones (comma separated)" className="bg-[#0d1117] border-[#30363d] text-[#f0f6fc]" />
          <Input placeholder="Budget (USD)" type="number" className="bg-[#0d1117] border-[#30363d] text-[#f0f6fc]" />
          <Button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white">Create Contract</Button>
        </form>
      </div>
    </div>
  );
} 