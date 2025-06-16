import { LockClosedIcon, PersonIcon, FileTextIcon, HandIcon, RocketIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const solutions = [
  {
    icon: <LockClosedIcon className="w-10 h-10" />,
    title: 'Escrow Payments (V1)',
    desc: 'No more payment anxiety. Your funds are protected until you approve the work. Both clients and freelancers can focus on results, not risks.'
  },
  {
    icon: <PersonIcon className="w-10 h-10" />,
    title: 'Verified Users (V1)',
    desc: 'Work only with real, vetted people. We verify every user, so you can say goodbye to scams and hello to trust.'
  },
  {
    icon: <FileTextIcon className="w-10 h-10" />,
    title: 'Smart Contracts (V1)',
    desc: 'Every project is protected by a transparent, automated contract. Milestones, deliverables, and payments are crystal clear.'
  },
  {
    icon: <HandIcon className="w-10 h-10" />,
    title: 'Dispute Resolution (V1)',
    desc: 'If something goes wrong, our fair, fast dispute system has your back. No more endless support tickets or lost money.'
  },
];

export default function SolutionSection() {
  const { theme } = useTheme();
  
  return (
    <section className={`w-full py-24 px-4 ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
      <div className="max-w-7xl mx-auto lg:px-40">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className={`text-sm font-bold tracking-widest mb-3 uppercase ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
            SOLUTION
          </div>
          <h2 className={`text-5xl font-extrabold mb-4 leading-tight ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            Freelancing, Reinvented from Day One
          </h2>
          <p className={`text-xl max-w-3xl mx-auto font-medium ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
            AssuredGig's very first version (V1) already solves the biggest problems in freelancing. Imagine what V2 and V3 will bring.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center gap-3"
            >
              {/* Icon */}
              <div className={`p-3 rounded-full mb-2 transition-all duration-300
                ${theme === 'light'
                  ? 'bg-gray-100 text-gray-700'
                  : 'bg-gray-800 text-gray-300'
                }`}
              >
                {sol.icon}
              </div>
              {/* Title */}
              <h3 className={`text-xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                {sol.title}
              </h3>
              {/* Description */}
              <p className={`text-base ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                {sol.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <section className='pt-40'>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className={`flex items-center gap-3 mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              <RocketIcon className="w-12 h-12 animate-bounce" />
              <h2 className={`text-5xl font-extrabold mb-4 leading-tight ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>What's Next?</h2>
            </div>
            <p className={`text-xl text-center max-w-2xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
              V2 and V3 will bring even more: AI-powered matching, instant contracts, advanced analytics, and more ways to protect your work and your money. AssuredGig is just getting started join us on the journey!
            </p>
          </motion.div>
        </section>
      </div>
    </section>
  );
} 