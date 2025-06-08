import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ScheduleMeetingPage() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center py-16">
      <div className="w-full max-w-xl bg-[#161b22] border border-[#23272e] rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Schedule a Meeting</h1>
        <form className="space-y-6">
          <Input placeholder="Date" type="date" className="bg-[#0d1117] border-[#30363d] text-[#f0f6fc]" />
          <Input placeholder="Time" type="time" className="bg-[#0d1117] border-[#30363d] text-[#f0f6fc]" />
          <Input placeholder="Meeting Link (Zoom/Google Meet)" className="bg-[#0d1117] border-[#30363d] text-[#f0f6fc]" />
          <Button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white">Schedule</Button>
        </form>
      </div>
    </div>
  );
} 