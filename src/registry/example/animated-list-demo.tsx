import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedListDemoProps {
  className?: string;
}

export default function AnimatedListDemo({ className }: AnimatedListDemoProps) {
  const items = [
    "New message from John",
    "Project deadline updated",
    "New comment on your post",
    "Meeting reminder",
    "Task completed",
  ];

  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-3 bg-accent/10 rounded-lg text-sm"
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
} 