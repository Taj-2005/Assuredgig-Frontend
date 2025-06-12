'use client';
import React from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function MeetingsPage() {
  const { theme } = useTheme();
  return (
    <div className={theme === 'light' ? 'min-h-screen w-full bg-white flex flex-col items-center justify-center py-16' : 'min-h-screen w-full bg-black flex flex-col items-center justify-center py-16'}>
      <h1 className={theme === 'light' ? 'text-3xl font-bold text-cyan-600' : 'text-3xl font-bold text-white'}>Meetings</h1>
    </div>
  );
} 