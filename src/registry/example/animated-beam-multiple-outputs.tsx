import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedBeamMultipleOutputDemoProps {
  className?: string;
}

export default function AnimatedBeamMultipleOutputDemo({ className }: AnimatedBeamMultipleOutputDemoProps) {
  const outputs = [
    { name: "GitHub", color: "bg-[#2DA44E]" },
    { name: "Slack", color: "bg-[#4A154B]" },
    { name: "Discord", color: "bg-[#5865F2]" },
    { name: "Notion", color: "bg-[#000000]" },
  ];

  return (
    <div className={cn("relative", className)}>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-1 bg-gradient-to-r from-primary/50 to-transparent" />
      <div className="grid grid-cols-2 gap-4">
        {outputs.map((output, index) => (
          <motion.div
            key={output.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "p-3 rounded-lg flex items-center gap-2",
              output.color,
              "text-white"
            )}
          >
            <div className="w-2 h-2 rounded-full bg-white/50" />
            {output.name}
          </motion.div>
        ))}
      </div>
    </div>
  );
} 