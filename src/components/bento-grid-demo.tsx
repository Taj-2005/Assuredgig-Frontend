import { CalendarIcon } from "@radix-ui/react-icons";
import { BellIcon , ShieldCheck, Link2, Users } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import AnimatedBeamMultipleOutputDemo from "@/registry/example/animated-beam-multiple-outputs";
import AnimatedListDemo from "@/registry/example/animated-list-demo";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import IntegrationNetwork from "@/components/magicui/integration-network";
import { useTheme } from "@/context/ThemeContext";

export default function BentoDemo() {
  const { theme } = useTheme();
  const features = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Protected payments freelance with assurity",
    description: "Work with confidence. Get paid securely, every time.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
  },
  {
    icon: <BellIcon className="w-8 h-8" />,
    title: "Get notified when the client posts",
    description: "Never miss a new opportunity. Instant alerts for new gigs and client messages.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-90 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-95" />
    ),
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: null,
    description: null,
    className: "col-span-3 w-full",
    background: (
      <div className="flex flex-col h-full w-full justify-between">
        <div className="w-full flex flex-col items-center">
          <IntegrationNetwork className="relative z-10 w-full" headline="Connect with Community" />
        </div>
        <div className={`relative z-10 mt-4 text-base text-center px-4 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
          Connect with freelancers around the world, chat anonymously, and grow your network.
        </div>
      </div>
    ),
  },
  {
    icon: <Link2 className="w-8 h-8" />,
    title: "Integrate your social media accounts with your portfolio",
    description: "Showcase your work, connect your profiles, and build trust with clients.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className={`absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105` }/>
    ),
  },
  {
    icon: <CalendarIcon className="w-8 h-8" />,
    title: "Calendar",
    description: "v2 launching soon",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2025, 5, 4, 0, 0, 0)}
        className={`absolute right-0 top-10 origin-top scale-90 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-95 ${theme === "light" ? "bg-white" : "bg-black text-white"}`}
      />
    ),
  },
];
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard
          key={idx}
          {...feature}
          className={
            theme === "light"
              ? cn(
                  feature.className,
                  "bg-white border-gray-200 text-gray-900 shadow-md",
                  "hover:shadow-lg transition-shadow duration-200"
                )
              : feature.className
          }
        />
      ))}
    </BentoGrid>
  );
}