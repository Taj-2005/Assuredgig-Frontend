'use client';

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface IconInputProps extends HTMLMotionProps<'input'> {
  icon?: React.ReactNode;
  error?: string;
}

const IconInput = forwardRef<HTMLInputElement, IconInputProps>(
  ({ className, icon, error, type, ...props }, ref) => {
    return (
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]">
            {icon}
          </div>
        )}
        <motion.input
          ref={ref}
          type={type}
          whileFocus={{ scale: 1.01 }}
          className={cn(
            'w-full pl-10 pr-4 py-3 bg-[#141618] border border-[#2D3139] rounded-lg text-[#F8F9FA] placeholder-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition-all duration-200',
            error && 'border-[#EF4444] focus:ring-[#EF4444]',
            className
          )}
          {...props}
        />
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-[#EF4444]"
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

IconInput.displayName = 'IconInput';

export { IconInput }; 