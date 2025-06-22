'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Tag, MapPin, Clock, DollarSign, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {useRouter} from 'next/navigation'
import { useTheme } from '@/context/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/Footer';

const categories = [
  'All Categories',
  'Web Development',
  'Mobile Development',
  'Design',
  'Writing',
  'Marketing',
  'Data Science',
  'AI & Machine Learning'
];

const tags = [
  'React', 'TypeScript', 'Node.js', 'Python', 'Django', 'AWS',
  'UI/UX', 'Figma', 'Adobe XD', 'SEO', 'Data Analysis', 'Machine Learning'
];

const gigs = [
  {
    title: 'Senior React Developer',
    company: 'TechCorp',
    location: 'Remote',
    type: 'Full-time',
    salary: '$80k - $120k',
    description: 'Looking for an experienced React developer to join our team...',
    tags: ['React', 'TypeScript', 'Node.js'],
    posted: '2 days ago',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop'
  },
  {
    title: 'UI/UX Designer',
    company: 'DesignStudio',
    location: 'New York',
    type: 'Contract',
    salary: '$60k - $90k',
    description: 'Join our creative team as a UI/UX designer...',
    tags: ['Figma', 'Adobe XD', 'UI Design'],
    posted: '1 day ago',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop'
  },
  {
    title: 'Backend Developer',
    company: 'CloudTech',
    location: 'Remote',
    type: 'Full-time',
    salary: '$90k - $130k',
    description: 'Seeking a backend developer with strong Python skills...',
    tags: ['Python', 'Django', 'AWS'],
    posted: '3 days ago',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Mobile App Developer',
    company: 'AppWorks',
    location: 'San Francisco',
    type: 'Contract',
    salary: '$70k - $100k',
    description: 'Looking for a skilled mobile developer...',
    tags: ['React Native', 'iOS', 'Android'],
    posted: '1 week ago',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function GigsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const navigate = useRouter()
  const { theme } = useTheme();

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <>
      <Navbar />
      <div className={theme === 'light' ? 'min-h-screen w-full bg-gray-100 flex flex-col' : 'min-h-screen w-full bg-black flex flex-col'}>
        <section className="relative min-h-[60vh] w-full">
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className={theme === 'light' ? 'w-full h-full bg-gray-100' : 'w-full h-full bg-black'} />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center pt-5"
            >
              <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Find Your Next <span className="text-black dark:text-white">Freelance Opportunity</span></h1>
              <p className={theme === 'light' ? 'text-lg sm:text-xl text-black max-w-2xl mx-auto mb-8' : 'text-lg sm:text-xl text-white max-w-2xl mx-auto mb-8'}>
                Browse through our curated list of high-quality gigs and find the perfect match for your skills.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-6 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className={theme === 'light' ? 'absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' : 'absolute left-3 top-1/2 transform -translate-y-1/2 text-white'} />
                  <Input
                    placeholder="Search gigs..."
                    className={`pl-10 ${ theme === 'light' ? 'bg-white border-gray-200 text-black' : 'bg-black border-2 border-white text-white'} placeholder:text-gray-400 focus:ring-2 focus:ring-black dark:focus:ring-white`}
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className={theme === 'light' ? 'w-[200px] bg-white border-gray-200 text-black focus:ring-2 focus:ring-black z-50' : 'w-[200px] bg-black border-white text-white focus:ring-2 focus:ring-white'}>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent className={theme === 'light'? 'bg-white border-gray-200' : 'bg-black text-white'}>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button variant="secondary" className={theme === 'light' ? 'border-gray-200 text-black hover:bg-black hover:text-white transition-transform duration-200 hover:scale-105 bg-white' : 'border-white text-white hover:bg-white hover:text-black transition-transform duration-200 hover:scale-105'}>
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>
            {/* Tags Section */}
            <div className="mt-6">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded-full text-sm font-medium border transition-all duration-150
                      ${selectedTags.includes(tag)
                        ? theme === 'light'
                          ? 'bg-black text-white border-gray-200 scale-105 font-bold'
                          : 'bg-white text-black border-white scale-105 font-bold'
                        : theme === 'light'
                          ? 'bg-white text-black border-gray-200 hover:bg-black hover:text-white hover:scale-105'
                          : 'bg-black text-white border-white hover:bg-white hover:text-black hover:scale-105'
                      }
                    `}
                  >
                    <Tag className={theme === 'light' ? 'w-3 h-3 inline mr-1 text-black' : 'w-3 h-3 inline mr-1 text-white'} />
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gigs Grid */}
        <section className="py-12 px-6 w-full mt-36">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {gigs.map((gig, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={theme === 'light' ? 'bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 transition-transform duration-200 hover:scale-105 hover:shadow-2xl' : 'bg-black border border-white rounded-2xl p-6 flex flex-col gap-4 transition-transform duration-200 hover:scale-105 hover:shadow-2xl'}
                >
                  <div className="overflow-hidden rounded-xl mb-4 border border-gray-200 dark:border-white">
                    <img src={gig.image} alt={gig.title} className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className={theme === 'light' ? 'text-xl font-bold text-black' : 'text-xl font-bold text-white'}>{gig.title}</h2>
                    <span className={theme === 'light' ? 'text-sm font-semibold text-black' : 'text-sm font-semibold text-white'}>{gig.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={theme === 'light' ? 'text-xs text-black' : 'text-xs text-white'}><MapPin className="inline w-4 h-4 mr-1" />{gig.location}</span>
                    <span className={theme === 'light' ? 'text-xs text-black' : 'text-xs text-white'}><Clock className="inline w-4 h-4 mr-1" />{gig.type}</span>
                    <span className={theme === 'light' ? 'text-xs text-black' : 'text-xs text-white'}>Posted: {gig.posted}</span>
                  </div>
                  <p className={theme === 'light' ? 'text-black' : 'text-white'}>{gig.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {gig.tags.map((tag) => (
                      <span key={tag} className={theme === 'light' ? 'px-2 py-1 rounded-full text-xs font-medium bg-black text-white transition-transform duration-150 hover:scale-110' : 'px-2 py-1 rounded-full text-xs font-medium bg-white text-black transition-transform duration-150 hover:scale-110'}>{tag}</span>
                    ))}
                  </div>
                  <Button className={theme === 'light' ? 'mt-4 bg-black text-white w-full transition-transform duration-200 hover:scale-105 hover:shadow-lg' : 'mt-4 bg-white text-black w-full transition-transform duration-200 hover:scale-105 hover:shadow-lg'}>
                    View Details
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Load More Section */}
        <section className="py-12 px-6 w-full">
          <div className="max-w-7xl mx-auto text-center">
            <Button
              variant="secondary"
              className={theme === 'light' ? 'border-gray-200 text-white hover:bg-black hover:text-white transition-transform duration-200 hover:scale-105' : 'border-white text-white hover:bg-white hover:text-black transition-transform duration-200 hover:scale-105'}
            >
              Load More Gigs
            </Button>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
} 