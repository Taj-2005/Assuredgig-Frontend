import React from "react";
import { cn } from "@/lib/utils";

interface CoverProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Cover({ children, className, ...props }: CoverProps) {
  return (
    <span
      className={cn(
        "relative inline-block",
        "before:absolute before:inset-0 before:bg-primary/20 before:rounded-md before:transform before:scale-x-0 before:origin-left before:transition-transform before:duration-300",
        "hover:before:scale-x-100",
        className
      )}
      {...props}
    >
      <span className="relative">{children}</span>
    </span>
  );
} 