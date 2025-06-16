'use client';

import { useEffect, useState } from 'react';
import Hero from "@/components/sections/Hero";
import BentoDemo from "@/components/bento-grid-demo";
import TypewriterEffectSmoothDemo from "@/components/ui/typewriter-effect-demo-1";
import PainPointsSection from "@/components/sections/PainPoints";
import SolutionSection from '@/components/sections/SolutionSection';
import GetStartedSection from '@/components/sections/GetStartedSection';
import WorldMapDemo from "@/components/world-map-demo";
import { useTheme } from "@/context/ThemeContext";

export default function HomePage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a loading skeleton
  }

  return (
    <main
      className={
        theme === "light"
          ? "min-h-screen w-full bg-white flex flex-col"
          : "min-h-screen w-full bg-black flex flex-col"
      }
    >
      <Hero />
      <section className="flex-1 w-full flex flex-col items-center justify-center">
        <div className="my-16 w-full">
          <h2
            className={
              theme === "light"
                ? "text-3xl font-bold text-center mb-8 text-black"
                : "text-3xl font-bold text-center mb-8 text-white"
            }
          >
            Why Choose AssuredGig?
          </h2>
          <div className="max-w-4xl mx-auto w-full">
            <BentoDemo />
          </div>
        </div>
        <PainPointsSection />
        <SolutionSection />
        <div className='lg:px-70'>
          <GetStartedSection />
        </div>
        <div className="my-16 w-full flex justify-center">
          <div
            className={
              theme === "light"
                ? "rounded-2xl p-8 w-full max-w-2xl bg-white text-black"
                : "text-white rounded-2xl shadow-xl p-8 w-full max-w-2xl bg-transparent"
            }
          >
            <TypewriterEffectSmoothDemo />
            <WorldMapDemo />
          </div>
        </div>
      </section>
    </main>
  );
}