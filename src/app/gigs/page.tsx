'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Tag, MapPin, Clock, DollarSign, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {useRouter} from 'next/navigation'

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
  'UI/UX', 'Figma', 'Adobe XD', 'Content Writing', 'SEO',
  'Social Media', 'Data Analysis', 'Machine Learning'
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

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col">
      <Button
          variant="secondary"
          className="border-[#23272e] text-[#f0f6fc] hover:bg-[#23272e] w-40 fixed top-2 left-3 z-10"
          onClick = {(e) => {
            e.preventDefault();
            navigate.push('/')
          }}
        >
          Back To Home
      </Button>
      <section className="relative min-h-[60vh] w-full">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-black" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-8"
            >
              <Sparkles className="w-8 h-8 text-indigo-400" />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Find Your Next
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent"> Freelance Opportunity</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
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
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search gigs..."
                  className="pl-10 bg-[#161b22] border-[#23272e] text-[#f0f6fc] placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[200px] bg-[#161b22] border-[#23272e] text-[#f0f6fc] focus:ring-2 focus:ring-indigo-500">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="secondary" className="border-[#23272e] text-[#f0f6fc] hover:bg-[#23272e]">
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
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-150
                    ${selectedTags.includes(tag)
                      ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-md'
                      : 'bg-[#161b22] text-gray-400 hover:bg-[#23272e] hover:text-[#f0f6fc] border border-[#23272e]'}
                  `}
                >
                  <Tag className="w-3 h-3 inline mr-1" />
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gigs Grid */}
      <section className="py-12 px-6 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {gigs.map((gig, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#161b22] border border-[#23272e] rounded-2xl overflow-hidden hover:border-indigo-500/70 shadow-lg transition-all duration-150"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-[#f0f6fc]">{gig.title}</h3>
                      <p className="text-gray-400">{gig.company}</p>
                    </div>
                    <div className="flex items-center text-indigo-400">
                      <span className="text-sm font-medium">{gig.rating}</span>
                      <span className="ml-1">★</span>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-400">{gig.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {gig.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-[#23272e] text-gray-300 rounded-md text-sm border border-[#23272e]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {gig.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {gig.posted}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {gig.salary}
                    </div>
                  </div>
                  <div className="mt-6 flex gap-4">
                    <Button className="flex-1 bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:opacity-90 shadow-md">
                      Apply Now
                    </Button>
                    <Button variant="secondary" className="flex-1 border-[#23272e] text-[#f0f6fc] hover:bg-[#23272e]">
                      View Details
                    </Button>
                  </div>
                </div>
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
            className="border-[#23272e] text-[#f0f6fc] hover:bg-[#23272e]"
          >
            Load More Gigs
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black border-t border-[#23272e] py-8 mt-auto flex gap-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
          <span className="text-lg font-semibold text-white tracking-wide mb-2">Assured Gig</span>
          <span className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Assured Gig. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
} 