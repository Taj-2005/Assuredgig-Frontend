"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useRouter } from 'next/navigation'
import { useTheme } from "@/context/ThemeContext";

export default function TypewriterEffectSmoothDemo() {
  const router = useRouter();
  const { theme } = useTheme();
  const words = [
    { text: "Join" },
    { text: "the" },
    { text: "Amazing" },
    { text: "journey" },
    { text: "of" },
    { text: "Freelancing", className: "gradient-text" },
  ];
  return (
    <div className={`flex flex-col items-center justify-center py-28`}>
      <p className={theme === "light" ? "text-gray-500 text-xs sm:text-base" : "text-neutral-600 dark:text-neutral-200 text-xs sm:text-base"}>
        The road to freedom starts from here
      </p>
      {/* <TypewriterEffectSmooth words={words} /> */}
      <h2 className="p-8 whitespace-nowrap overflow-hidden text-base sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold tracking-normal">
        Join the Amazing journey of <span className="gradient-text">Freelancing</span>
      </h2>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button
          aria-label="Join Now"
          className={theme === "light"
            ? "w-40 h-10 rounded-xl bg-black border border-transparent text-white text-sm"
            : "w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"}
          onClick={(e) => {
            e.preventDefault();
            router.push('/auth/register');
          }}
        >
          Join now
        </button>
        <button
          aria-label="Signup"
          className={theme === "light"
            ? "w-40 h-10 rounded-xl bg-white text-black border border-black text-sm"
            : "w-40 h-10 rounded-xl bg-white text-black border border-black text-sm"}
        >
          Signup
        </button>
      </div>
    </div>
  );
} 