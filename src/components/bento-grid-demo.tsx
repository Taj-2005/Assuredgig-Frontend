import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon, ShieldCheck, Link2, Users } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import AnimatedBeamMultipleOutputDemo from "@/registry/example/animated-beam-multiple-outputs";
import AnimatedListDemo from "@/registry/example/animated-list-demo";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import IntegrationNetwork from "@/components/magicui/integration-network";

const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Protected payments freelance with assurity",
    description: "Work with confidence. Get paid securely, every time.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 left-0 w-full [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-white/10 bg-white/5 hover:bg-white/10",
              "dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium text-white">{f.name}</figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs text-zinc-200">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
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
        <div className="relative z-10 mt-4 text-base text-zinc-300 dark:text-zinc-300 text-center px-4">
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
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
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
        className="absolute right-0 top-10 origin-top scale-90 rounded-md border border-white/10 bg-black/80 text-white transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-95"
      />
    ),
  },
];

export default function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} className={feature.className} />
      ))}
    </BentoGrid>
  );
}