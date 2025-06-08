"use client"

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  onClose: () => void;
}

export function Toast({ message, type = 'info', duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for exit animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-[#10B981]" />,
    error: <AlertCircle className="w-5 h-5 text-[#EF4444]" />,
    info: <Info className="w-5 h-5 text-[#6366F1]" />,
  };

  const backgrounds = {
    success: 'bg-[#10B981]/10 border-[#10B981]/20',
    error: 'bg-[#EF4444]/10 border-[#EF4444]/20',
    info: 'bg-[#6366F1]/10 border-[#6366F1]/20',
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          className={`fixed bottom-4 right-4 flex items-center gap-3 rounded-lg border px-4 py-3 shadow-lg ${backgrounds[type]}`}
        >
          {icons[type]}
          <p className="text-sm font-medium text-[#F8F9FA]">{message}</p>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-2 rounded-full p-1 text-[#6B7280] hover:text-[#F8F9FA] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
