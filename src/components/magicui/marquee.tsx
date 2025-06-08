import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef, useState } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
}

export const Marquee = ({
  children,
  className,
  pauseOnHover = false,
}: MarqueeProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const content = container.firstElementChild as HTMLElement;
      if (content) {
        setContainerWidth(container.offsetWidth);
        setContentWidth(content.offsetWidth);
      }
    }
  }, [children]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex w-full overflow-hidden",
        className
      )}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        className={cn(
          "flex animate-marquee whitespace-nowrap",
          isPaused && "animate-pause"
        )}
        style={{
          animationDuration: `${contentWidth * 0.05}s`,
        }}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex animate-marquee2 whitespace-nowrap",
          isPaused && "animate-pause"
        )}
        style={{
          animationDuration: `${contentWidth * 0.05}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
}; 