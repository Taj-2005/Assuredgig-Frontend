"use client";

import { motion } from "motion/react";
import WorldMap from "./ui/world-map";
export default function WorldMapDemo() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
          >
            Global Connections
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
          >
            Connecting freelancers and clients worldwide
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"        
          >
          <WorldMap
            dots={[
              {
                start: { lat: 40.7128, lng: -74.006, label: "New York" },
                end: { lat: 51.5074, lng: -0.1278, label: "London" },
              },
              {
                start: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
                end: { lat: 37.7749, lng: -122.4194, label: "San Francisco" },
              },
              {
                start: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
                end: { lat: 1.3521, lng: 103.8198, label: "Singapore" },
              },
              {
                start: { lat: 33.8688, lng: 151.2093, label: "Sydney" },
                end: { lat: 31.2304, lng: 121.4737, label: "Shanghai" },
              },
            ]}
            lineColor="#0ea5e9"
          />
        </motion.div>
      </div>
    </div>
  );
} 