"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col bg-black">
      <Navbar />
      <div className="flex flex-1 items-center justify-center w-full">
        <main className="w-full px-4 flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 text-center leading-tight">
            The Future of <span className="text-indigo-400">Freelancing</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 text-center max-w-2xl">
            Find Your Next Freelance Opportunity
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-40"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="border-2 border-white text-white hover:bg-white hover:text-black w-40 transition-colors duration-200"
            >
              Learn More
            </Button>
          </motion.div>
        </main>
      </div>
    </div>
  );
} 