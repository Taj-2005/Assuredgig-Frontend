'use client';

import Hero from "@/components/sections/Hero";
import BentoDemo from "@/components/bento-grid-demo";
import TypewriterEffectSmoothDemo from "@/components/ui/typewriter-effect-demo-1";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-black flex flex-col">
      <Hero />
      <section className="flex-1 w-full flex flex-col items-center justify-center">
        <div className="my-16 w-full">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Why Choose AssuredGig?
          </h2>
          <div className="max-w-4xl mx-auto w-full">
            <BentoDemo />
          </div>
        </div>
        <div className="my-16 w-full flex justify-center">
          <div className="text-white rounded-2xl shadow-xl p-8 w-full max-w-2xl bg-transparent">
            <TypewriterEffectSmoothDemo />
          </div>
        </div>
      </section>
    </main>
  );
}