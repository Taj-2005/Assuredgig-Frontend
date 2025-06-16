"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

function HeroVideoDialogDemo() {
  return (
    <div className="relative w-full flex justify-center my-8">
      <div className="w-full max-w-5xl">
        <HeroVideoDialog
          className="block dark:hidden w-full"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block w-full"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  return (
    <div className={theme === "light" 
      ? "relative min-h-[80vh] flex flex-col bg-gradient-to-b from-white to-cyan-50/30" 
      : "relative min-h-[80vh] flex flex-col bg-gradient-to-b from-black to-cyan-950/20"}>
      <Navbar />
      <div className="flex flex-1 items-center justify-center w-full pb-12">
        <main className="w-full max-w-7xl px-4 flex flex-col items-center justify-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={theme === "light"
              ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight mt-36"
              : "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight mt-36"}
          >
            The Future of <span className={theme === 'dark' ? 'text-cyan-400' : 'text-cyan-500'}>Freelancing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={theme === "light"
              ? "text-lg sm:text-xl md:text-2xl text-gray-500 mb-8 max-w-3xl mx-auto"
              : "text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"}
          >
            Find your next freelance opportunity with confidence and security.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Button
              size="lg"
              className={theme === "light"
                ? "bg-gradient-to-r from-cyan-400 to-cyan-500 text-white hover:from-cyan-500 hover:to-cyan-600 w-48 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                : "bg-gradient-to-r from-cyan-400 to-cyan-500 text-white hover:from-cyan-500 hover:to-cyan-600 w-40 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200"}
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className={theme === "light"
                ? "border-2 border-gray-300 text-gray-900 hover:bg-gray-100 w-48 text-base font-semibold transition-all duration-200"
                : "border-2 border-white text-white hover:bg-white hover:text-black w-40 transition-all duration-200"}
            >
              Learn More
            </Button>
          </motion.div>
          <HeroVideoDialogDemo />
          {theme === "light" && (
            <div className="mt-6 text-gray-400 text-sm text-center">

            </div>
          )}
        </main>
      </div>
    </div>
  );
} 