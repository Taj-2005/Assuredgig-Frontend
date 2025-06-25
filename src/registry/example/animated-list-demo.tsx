import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
interface AnimatedListDemoProps {
  className?: string;
}

export default function AnimatedListDemo({ className }: AnimatedListDemoProps) {
  const {theme} = useTheme()
  const items = [
    "New Web Development project posted - $500-800 • 2 freelancers applied",
    "Perfect skill match: Mobile App Design gig posted by TechCorp",
    "New message from client Sarah: 'Can we discuss the timeline?'",
    "Your proposal was accepted for E-commerce Website project",
    "Payment milestone reached: $650 released for completed project"
  ];


  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`p-3 rounded-lg text-sm ${theme === 'dark' ? 'bg-white' : 'bg-accent/10'}`}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}