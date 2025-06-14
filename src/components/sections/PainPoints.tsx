import { FileWarning, Repeat, ThumbsDown, DollarSign, Users, AlertTriangle, Clock, Server, UserX, FileText, Headset, MessageCircle, CalendarX2, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export default function PainPointsSection() {
  const { theme } = useTheme();
  const painPoints = [
    {
      icon: <Repeat className="w-8 h-8 text-black bg-gray-200 rounded-full p-1" />,
      title: 'Revision Difficulties',
      desc: `Multiple revision requests leading to delays and increased costs.`,
    },
    {
      icon: <ThumbsDown className="w-8 h-8 text-black bg-gray-200 rounded-full p-1" />,
      title: 'Quality Concerns',
      desc: `Subpar quality due to rushed work.`,
    },
    {
      icon: <DollarSign className="w-8 h-8 text-black bg-gray-200 rounded-full p-1" />,
      title: 'Payment, Dispute, and Rating Issues',
      desc: `Freelancers not fulfilling contractual obligations, difficulties in rating.`,
    },
    {
      icon: <Users className="w-8 h-8 text-black bg-gray-200 rounded-full p-1" />,
      title: 'Outsourcing Complications',
      desc: `Freelancers acting as middlemen, outsourcing work to others, leading to communication issues and delays.`,
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-black bg-gray-200 rounded-full p-1" />,
      title: 'Non-compliance with Instructions',
      desc: `Freelancers not following client's instructions.`,
    },
    {
      icon: <Headset className="w-8 h-8 text-black bg-gray-200 rounded-full p-1" />,
      title: 'Bad Customer Support',
      desc: `Difficulties in effective communication with support teams.`,
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-black bg-gray-200 rounded-full p-1" />,
      title: 'Communication Challenges',
      desc: `Misunderstandings, delays, and dissatisfaction due to poor communication from freelancers.`,
    },
    {
      icon: <CalendarX2 className="w-8 h-8 text-black bg-gray-200 rounded-full p-1" />,
      title: 'Delays / Behind Schedule',
      desc: `Freelancers not completing work on time.`,
    },
    {
      icon: <Shield className="w-8 h-8 text-black bg-gray-200 rounded-full p-1" />,
      title: 'Other Miscellaneous Issues',
      desc: `Trust issues, platform security, payment options, price, and communication tools.`,
    },
  ];
  return (
    <section className={`w-full py-20 px-4 ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className={`text-sm font-semibold tracking-wider mb-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
            PROBLEM
          </div>
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            Common Pain Points of Web Clients on Digital Platforms
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
            Working with freelancers on digital platforms can be a hassle. Here are the most common issues clients face on Freelancing platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {painPoints.map((point, idx) => (
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
                  ? 'bg-gray-200 text-black'
                  : 'bg-gray-800 text-gray-200'
                }`}
              >
                {point.icon && typeof point.icon.type === 'function'
                  ? point.icon.type({ ...point.icon.props, className: `w-8 h-8 ${theme === 'light' ? 'text-black' : 'text-gray-200'}` })
                  : point.icon}
              </div>
              {/* Title */}
              <h3 className={`text-lg font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                {point.title}
              </h3>
              {/* Description */}
              <p className={`text-base ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 