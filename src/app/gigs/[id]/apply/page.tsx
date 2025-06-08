import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ApplyToGigPage() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center py-16">
      <div className="w-full max-w-xl bg-[#161b22] border border-[#23272e] rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Apply to this Gig</h1>
        <form className="space-y-6">
          <Input placeholder="Your Name" className="bg-[#0d1117] border-[#30363d] text-[#f0f6fc]" />
          <Input placeholder="Your Email" type="email" className="bg-[#0d1117] border-[#30363d] text-[#f0f6fc]" />
          <Textarea placeholder="Cover Letter" className="bg-[#0d1117] border-[#30363d] text-[#f0f6fc] min-h-[100px]" />
          <Input placeholder="Portfolio Link" className="bg-[#0d1117] border-[#30363d] text-[#f0f6fc]" />
          <Button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white">Submit Application</Button>
        </form>
      </div>
    </div>
  );
} 