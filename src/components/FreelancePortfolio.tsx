"use client";

import React, { useState, useEffect } from 'react';
import { Star, MapPin, Clock, DollarSign, Eye, Heart, MessageCircle, Award, Briefcase, User, Mail, Phone, ExternalLink, CheckCircle, Code, Palette, Database, Cloud, Smartphone, Globe } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import {User as Profile} from "lucide-react"
import { cn } from '@/lib/utils';
import Navbar from './layout/Navbar';

interface Freelancer {
  name: string;
  title: string;
  avatar: string;
  location: string;
  rating: number;
  reviewCount: number;
  completedProjects: number;
  responseTime: string;
  hourlyRate: number;
  isOnline: boolean;
  verified: boolean;
  bio: string;
  skills: Array<{ name: string; level: number; category: string; icon: React.ReactNode }>;
  languages: Array<{ name: string; level: string }>;
}

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  views: number;
  likes: number;
}

interface Review {
  id: number;
  client: string;
  rating: number;
  date: string;
  project: string;
  comment: string;
  avatar: string;
}

interface TabButtonProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

interface SkillBadgeProps {
  skill: { name: string; level: number; category: string; icon: React.ReactNode };
}

interface StarRatingProps {
  rating: number;
  size?: number;
}

const FreelancePortfolio = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // Prevent hydration mismatch by only rendering theme-dependent content after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Sample data - replace with actual user data
  const freelancer: Freelancer = {
    name: "Sarah Johnson",
    title: "Full Stack Developer & UI/UX Designer",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b9d8c555?w=150&h=150&fit=crop&crop=face",
    location: "San Francisco, CA",
    rating: 4.9,
    reviewCount: 127,
    completedProjects: 89,
    responseTime: "1 hour",
    hourlyRate: 85,
    isOnline: true,
    verified: true,
    bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. I specialize in React, Node.js, and modern UI/UX design principles.",
    skills: [
      { name: "React", level: 95, category: "Frontend", icon: <Code className="w-4 h-4" /> },
      { name: "Node.js", level: 90, category: "Backend", icon: <Database className="w-4 h-4" /> },
      { name: "TypeScript", level: 88, category: "Frontend", icon: <Code className="w-4 h-4" /> },
      { name: "UI/UX Design", level: 85, category: "Design", icon: <Palette className="w-4 h-4" /> },
      { name: "Python", level: 80, category: "Backend", icon: <Code className="w-4 h-4" /> },
      { name: "PostgreSQL", level: 85, category: "Database", icon: <Database className="w-4 h-4" /> },
      { name: "AWS", level: 75, category: "Cloud", icon: <Cloud className="w-4 h-4" /> },
      { name: "Figma", level: 90, category: "Design", icon: <Palette className="w-4 h-4" /> },
      { name: "Mobile Development", level: 70, category: "Mobile", icon: <Smartphone className="w-4 h-4" /> },
      { name: "Web Development", level: 95, category: "Frontend", icon: <Globe className="w-4 h-4" /> }
    ],
    languages: [
      { name: "English", level: "Native" },
      { name: "Spanish", level: "Conversational" },
      { name: "French", level: "Basic" }
    ]
  };

  const portfolio: PortfolioItem[] = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      description: "Modern admin dashboard for e-commerce platform with real-time analytics",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      views: 234,
      likes: 18
    },
    {
      id: 2,
      title: "Mobile Banking App UI",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      description: "Clean and intuitive mobile banking interface design",
      technologies: ["Figma", "Prototyping", "User Research"],
      views: 189,
      likes: 25
    },
    {
      id: 3,
      title: "Restaurant Management System",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop",
      description: "Complete restaurant management solution with POS integration",
      technologies: ["Node.js", "React", "PostgreSQL"],
      views: 156,
      likes: 12
    }
  ];

  const reviews: Review[] = [
    {
      id: 1,
      client: "Mike Chen",
      rating: 5,
      date: "2 weeks ago",
      project: "E-commerce Website",
      comment: "Sarah delivered exceptional work on time. Her attention to detail and communication throughout the project was outstanding.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 2,
      client: "Emma Rodriguez",
      rating: 5,
      date: "1 month ago",
      project: "Mobile App Design",
      comment: "Absolutely loved working with Sarah. She understood our requirements perfectly and delivered beyond expectations.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 3,
      client: "David Kim",
      rating: 4,
      date: "2 months ago",
      project: "Dashboard Development",
      comment: "Great developer with strong technical skills. Very professional and easy to work with.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    }
  ];

  const TabButton: React.FC<TabButtonProps> = ({ id, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={cn(
        'px-6 py-3 font-medium transition-all duration-200 border-b-2',
        mounted && theme === 'dark'
          ? isActive
            ? 'text-white border-white'
            : 'text-gray-400 border-transparent hover:text-white hover:border-gray-600'
          : isActive
            ? 'text-black border-black'
            : 'text-gray-600 border-transparent hover:text-black hover:border-gray-300'
      )}
    >
      {label}
    </button>
  );

  const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => (
    <div className={cn(
      'group flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-200',
      mounted && theme === 'dark'
        ? 'bg-black border-white hover:bg-white hover:text-black'
        : 'bg-white border-black hover:bg-[#fef7f1] hover:text-black'
    )}>
      <div className={cn(
        'p-1 rounded',
        mounted && theme === 'dark' ? 'text-white group-hover:text-black' : 'text-black group-hover:text-black'
      )}>
        {skill.icon}
      </div>
      <div>
        <div className={cn(
          'text-sm font-medium',
          mounted && theme === 'dark' ? 'text-white group-hover:text-black' : 'text-black group-hover:text-black'
        )}>
          {skill.name}
        </div>
        <div className={cn(
          'text-xs',
          mounted && theme === 'dark' ? 'text-gray-400 group-hover:text-black' : 'text-gray-600 group-hover:text-gray-900'
        )}>
          {skill.category}
        </div>
      </div>
    </div>
  );


  const StarRating: React.FC<StarRatingProps> = ({ rating, size = 16 }) => (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={size}
          className={cn(
            i < Math.floor(rating) 
              ? 'text-yellow-400 fill-current' 
              : mounted && theme === 'dark' ? 'text-gray-600' : 'text-gray-300'
          )}
        />
      ))}
      <span className={cn(
        'ml-1 text-sm',
        mounted && theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
      )}>
        {rating}
      </span>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className={cn(
        'min-h-screen w-full flex flex-col pt-28',
        mounted && theme === 'dark' ? 'bg-black' : 'bg-white'
      )}>

        {/* Profile Header */}
        <section className={cn(
          'border-b py-8',
          mounted && theme === 'dark' ? 'border-white bg-black' : 'border-black bg-white'
        )}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col justify-between md:flex-row gap-8">
              {/* Profile Info */}
              <div className="flex items-start gap-6">
                <div className="relative">
                  {/* <img
                    src={freelancer.avatar}
                    alt={freelancer.name}
                    className="w-20 h-20 rounded-xl object-cover border-2 border-white shadow-sm"
                  /> */}
                  <Profile size={70} className={mounted && theme === 'dark' ? 'text-white' : 'text-black'} />
                  {freelancer.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className={cn(
                      'text-2xl font-bold',
                      mounted && theme === 'dark' ? 'text-white' : 'text-black'
                    )}>
                      {freelancer.name}
                    </h2>
                    {freelancer.verified && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                  <p className={cn(
                    'text-lg mb-3',
                    mounted && theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  )}>
                    {freelancer.title}
                  </p>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className={cn(
                        'w-4 h-4',
                        mounted && theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      )} />
                      <span className={cn(
                        mounted && theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      )}>
                        {freelancer.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className={cn(
                        'w-4 h-4',
                        mounted && theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      )} />
                      <span className={cn(
                        mounted && theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      )}>
                        Responds in {freelancer.responseTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <StarRating rating={freelancer.rating} size={18} />
                  </div>
                  <p className={cn(
                    'text-sm',
                    mounted && theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  )}>
                    {freelancer.reviewCount} reviews
                  </p>
                </div>
                <div className="text-center">
                  <div className={cn(
                    'text-2xl font-bold mb-1',
                    mounted && theme === 'dark' ? 'text-white' : 'text-black'
                  )}>
                    {freelancer.completedProjects}
                  </div>
                  <p className={cn(
                    'text-sm',
                    mounted && theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  )}>
                    Projects completed
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center text-2xl font-bold text-blue-500 mb-1">
                    <DollarSign className="w-5 h-5" />
                    {freelancer.hourlyRate}
                  </div>
                  <p className={cn(
                    'text-sm',
                    mounted && theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  )}>
                    Per hour
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
              <button className={cn(
                'px-6 py-2 rounded-lg font-medium transition-all duration-200',
                'bg-blue-500 text-white hover:bg-blue-600'
              )}>
                Hire Now
              </button>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className={cn(
          'border-b',
          mounted && theme === 'dark' ? 'border-white bg-black' : 'border-black bg-white'
        )}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex space-x-8">
              <TabButton
                id="overview"
                label="Overview"
                isActive={activeTab === 'overview'}
                onClick={setActiveTab}
              />
              <TabButton
                id="portfolio"
                label="Portfolio"
                isActive={activeTab === 'portfolio'}
                onClick={setActiveTab}
              />
              <TabButton
                id="reviews"
                label="Reviews"
                isActive={activeTab === 'reviews'}
                onClick={setActiveTab}
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-6 w-full">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* About */}
                  <div className={cn(
                    'rounded-2xl p-6 transition-transform duration-200 hover:scale-105 hover:shadow-2xl',
                    mounted && theme === 'dark'
                      ? 'bg-black border border-white' 
                      : 'bg-white border border-black'
                  )}>
                    <h3 className={cn(
                      'text-xl font-semibold mb-4',
                      mounted && theme === 'dark' ? 'text-white' : 'text-black'
                    )}>
                      About
                    </h3>
                    <p className={cn(
                      'leading-relaxed',
                      mounted && theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    )}>
                      {freelancer.bio}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className={cn(
                    'rounded-2xl p-6 transition-transform duration-200 hover:scale-105 hover:shadow-2xl',
                    mounted && theme === 'dark'
                      ? 'bg-black border border-white' 
                      : 'bg-white border border-black'
                  )}>
                    <h3 className={cn(
                      'text-xl font-semibold mb-6',
                      mounted && theme === 'dark' ? 'text-white' : 'text-black'
                    )}>
                      Skills & Expertise
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {freelancer.skills.map((skill, index) => (
                        <SkillBadge key={index} skill={skill} />
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className={cn(
                    'rounded-2xl p-6 transition-transform duration-200 hover:scale-105 hover:shadow-2xl',
                    mounted && theme === 'dark'
                      ? 'bg-black border border-white' 
                      : 'bg-white border border-black'
                  )}>
                    <h3 className={cn(
                      'text-xl font-semibold mb-4',
                      mounted && theme === 'dark' ? 'text-white' : 'text-black'
                    )}>
                      Languages
                    </h3>
                    <div className="space-y-3">
                      {freelancer.languages.map((lang, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className={cn(
                            'font-medium',
                            mounted && theme === 'dark' ? 'text-white' : 'text-black'
                          )}>
                            {lang.name}
                          </span>
                          <span className={cn(
                            'text-sm',
                            mounted && theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          )}>
                            {lang.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'portfolio' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className={cn(
                      'text-xl font-semibold',
                      mounted && theme === 'dark' ? 'text-white' : 'text-black'
                    )}>
                      Portfolio
                    </h2>
                    <span className={cn(
                      mounted && theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    )}>
                      {portfolio.length} projects
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {portfolio.map((project) => (
                      <div key={project.id} className={cn(
                        'rounded-2xl overflow-hidden transition-all duration-200 hover:scale-105 hover:shadow-2xl',
                        mounted && theme === 'dark'
                          ? 'bg-black border border-white hover:border-gray-600' 
                          : 'bg-white border border-black hover:border-gray-300'
                      )}>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-5">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className={cn(
                              'font-semibold text-lg',
                              mounted && theme === 'dark' ? 'text-white' : 'text-black'
                            )}>
                              {project.title}
                            </h3>
                            <ExternalLink className={cn(
                              'w-4 h-4 cursor-pointer transition-colors',
                              mounted && theme === 'dark' ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
                            )} />
                          </div>
                          <p className="text-blue-500 text-sm mb-2">{project.category}</p>
                          <p className={cn(
                            'text-sm mb-3',
                            mounted && theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          )}>
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {project.technologies.map((tech, index) => (
                              <span key={index} className={cn(
                                'px-2 py-1 rounded text-xs font-medium',
                                mounted && theme === 'dark'
                                  ? 'bg-gray-800 text-gray-300' 
                                  : 'bg-gray-100 text-gray-700'
                              )}>
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1">
                                <Eye className={cn(
                                  'w-4 h-4',
                                  mounted && theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                )} />
                                <span className={cn(
                                  mounted && theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                )}>
                                  {project.views}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Heart className={cn(
                                  'w-4 h-4',
                                  mounted && theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                )} />
                                <span className={cn(
                                  mounted && theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                )}>
                                  {project.likes}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className={cn(
                      'text-xl font-semibold',
                      mounted && theme === 'dark' ? 'text-white' : 'text-black'
                    )}>
                      Client Reviews
                    </h2>
                    <div className="flex items-center gap-2">
                      <StarRating rating={freelancer.rating} size={18} />
                      <span className={cn(
                        mounted && theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      )}>
                        ({freelancer.reviewCount} reviews)
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div key={review.id} className={cn(
                        'rounded-2xl p-5 transition-transform duration-200 hover:scale-105 hover:shadow-2xl',
                        mounted && theme === 'dark'
                          ? 'bg-black border border-white' 
                          : 'bg-white border border-black'
                      )}>
                        <div className="flex items-start gap-4">
                          <img
                            src={review.avatar}
                            alt={review.client}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h4 className={cn(
                                  'font-medium',
                                  mounted && theme === 'dark' ? 'text-white' : 'text-black'
                                )}>
                                  {review.client}
                                </h4>
                                <p className={cn(
                                  'text-sm',
                                  mounted && theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                )}>
                                  {review.project}
                                </p>
                              </div>
                              <div className="text-right">
                                <StarRating rating={review.rating} size={14} />
                                <p className={cn(
                                  'text-sm mt-1',
                                  mounted && theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                                )}>
                                  {review.date}
                                </p>
                              </div>
                            </div>
                            <p className={cn(
                              mounted && theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            )}>
                              {review.comment}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className={cn(
                'rounded-2xl p-5 transition-transform duration-200 hover:scale-105 hover:shadow-2xl',
                mounted && theme === 'dark'
                  ? 'bg-black border border-white' 
                  : 'bg-white border border-black'
              )}>
                <h3 className={cn(
                  'font-semibold mb-4',
                  mounted && theme === 'dark' ? 'text-white' : 'text-black'
                )}>
                  Quick Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className={cn(
                      mounted && theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    )}>
                      Response Rate
                    </span>
                    <span className={cn(
                      'font-medium',
                      mounted && theme === 'dark' ? 'text-white' : 'text-black'
                    )}>
                      98%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={cn(
                      mounted && theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    )}>
                      On-time Delivery
                    </span>
                    <span className={cn(
                      'font-medium',
                      mounted && theme === 'dark' ? 'text-white' : 'text-black'
                    )}>
                      95%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={cn(
                      mounted && theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    )}>
                      Repeat Clients
                    </span>
                    <span className={cn(
                      'font-medium',
                      mounted && theme === 'dark' ? 'text-white' : 'text-black'
                    )}>
                      75%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={cn(
                      mounted && theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    )}>
                      Member Since
                    </span>
                    <span className={cn(
                      'font-medium',
                      mounted && theme === 'dark' ? 'text-white' : 'text-black'
                    )}>
                      2019
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className={cn(
                'rounded-2xl p-5 transition-transform duration-200 hover:scale-105 hover:shadow-2xl',
                mounted && theme === 'dark'
                  ? 'bg-black border border-white' 
                  : 'bg-white border border-black'
              )}>
                <h3 className={cn(
                  'font-semibold mb-4',
                  mounted && theme === 'dark' ? 'text-white' : 'text-black'
                )}>
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className={cn(
                      'w-4 h-4',
                      mounted && theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                    )} />
                    <span className={cn(
                      'text-sm',
                      mounted && theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    )}>
                      Available on hire
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className={cn(
                      'w-4 h-4',
                      mounted && theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                    )} />
                    <span className={cn(
                      'text-sm',
                      mounted && theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    )}>
                      Available on hire
                    </span>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className={cn(
                'rounded-2xl p-5 transition-transform duration-200 hover:scale-105 hover:shadow-2xl',
                mounted && theme === 'dark'
                  ? 'bg-black border border-white' 
                  : 'bg-white border border-black'
              )}>
                <h3 className={cn(
                  'font-semibold mb-4',
                  mounted && theme === 'dark' ? 'text-white' : 'text-black'
                )}>
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className={cn(
                        'font-medium text-sm',
                        mounted && theme === 'dark' ? 'text-white' : 'text-black'
                      )}>
                        AWS Certified Developer
                      </p>
                      <p className={cn(
                        'text-xs',
                        mounted && theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      )}>
                        Amazon Web Services
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-green-500" />
                    <div>
                      <p className={cn(
                        'font-medium text-sm',
                        mounted && theme === 'dark' ? 'text-white' : 'text-black'
                      )}>
                        Google UX Design Certificate
                      </p>
                      <p className={cn(
                        'text-xs',
                        mounted && theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      )}>
                        Google
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FreelancePortfolio; 