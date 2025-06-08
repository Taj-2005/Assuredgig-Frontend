import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode , useState } from "react";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};
export const BentoCard = ({
  className,
  icon,
  title,
  description,
  background,
  href,
  cta,
  children,
}: {
  className?: string;
  icon?: ReactNode;
  title?: string | ReactNode;
  description?: string | ReactNode;
  background?: ReactNode;
  href?: string;
  cta?: string;
  children?: ReactNode;
}) => {
  const [isCalendar , setisCalendar] = useState(false)
  const [calicon , setIscalicon] = useState(false)
  const [isdescription , setIsdescription] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative overflow-hidden rounded-3xl bg-black/60 dark:bg-black/60 shadow-2xl border border-white/10 backdrop-blur-xl flex flex-col justify-between p-10 min-h-[300px] group",
        className
      )} onMouseEnter = {(e) => {
        if (title === 'Calendar' || title === 'Integrate your social media accounts with your portfolio'){
          e.preventDefault()
          setisCalendar(true)
          setIscalicon(true)
          setIsdescription(true)
          return
        }
      }} onMouseLeave = {(e) => {
        if (title === 'Calendar' || title === 'Integrate your social media accounts with your portfolio'){
          e.preventDefault()
          setisCalendar(false)
          setIscalicon(false)
          setIsdescription(false)
          return
        }
        return
      }}>
      {/* Animated/visual background */}
      { title === 'Calendar' || title === 'Integrate your social media accounts with your portfolio' ? (background && calicon && isCalendar && isdescription &&(
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">{background}</div>
      )) : (background && !calicon && !isCalendar && !isdescription &&(
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">{background}</div>
      ))}
      {/* Card content */}
      <div className="relative z-10 flex flex-col h-full items-start">
        {icon && !calicon && (
          <div className="mb-5 text-4xl text-white/80 dark:text-white/90">{icon}</div>
        )}
        {title && !isCalendar && (
          <h3 className="text-2xl font-extrabold mb-2 text-white leading-tight drop-shadow-lg">{title}</h3>
        )}
        {description && !isdescription && (
          <p className="text-base text-zinc-300 dark:text-zinc-300 mb-4 flex-1 leading-relaxed">{description}</p>
        )}
        {children}
        {href && cta && (
          <a
            href={href}
            className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-white/80 hover:text-white transition-colors"
          >
            {cta} <span aria-hidden>→</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}; 