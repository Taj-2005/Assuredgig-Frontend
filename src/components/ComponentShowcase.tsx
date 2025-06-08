'use client';

import { useState } from 'react';
import { Bell, Search, ChevronRight, Star, Briefcase } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function ComponentShowcase() {
  const [activeTab, setActiveTab] = useState('components');

  return (
    <div className="bg-white min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <Button 
            variant={activeTab === 'components' ? 'default' : 'secondary'}
            className={activeTab === 'components' ? 'bg-accent hover:bg-accent/90' : ''}
            onClick={() => setActiveTab('components')}
          >
            Components
          </Button>
          <Button 
            variant={activeTab === 'cards' ? 'default' : 'secondary'}
            className={activeTab === 'cards' ? 'bg-accent hover:bg-accent/90' : ''}
            onClick={() => setActiveTab('cards')}
          >
            Cards
          </Button>
        </div>

        {activeTab === 'components' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Buttons Section */}
            <div className="bg-white p-8 rounded-2xl shadow-neo-flat">
              <h3 className="text-lg font-semibold mb-6">Buttons</h3>
              <div className="space-y-4">
                <Button
                  variant="default"
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                >
                  Primary Button
                </Button>
                
                <Button
                  variant="secondary"
                  className="w-full border-accent text-accent hover:bg-accent/10"
                >
                  Secondary Button
                </Button>
                
                <Button
                  variant="default"
                  className="w-full bg-gradient-to-r from-accent to-accent-light text-white"
                >
                  Accent Button
                </Button>
              </div>
            </div>
            
            {/* Form Elements */}
            <div className="bg-white p-8 rounded-2xl shadow-neo-flat">
              <h3 className="text-lg font-semibold mb-6">Form Elements</h3>
              <div className="space-y-4">
                <div className="relative">
                  <input 
                    type="text" 
                    className="w-full bg-white border-0 rounded-xl px-4 py-3 shadow-neo-subtle
                      focus:ring-2 focus:ring-primary/30 focus:shadow-none
                      transition-all duration-300 pl-10"
                    placeholder="Search gigs..." 
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/50 w-5 h-5" />
                </div>
                
                <div className="flex space-x-3">
                  <div className="flex items-center">
                    <input type="checkbox" id="checkbox" className="w-5 h-5 rounded text-primary focus:ring-primary/30" />
                    <label htmlFor="checkbox" className="ml-2 text-sm">Remote only</label>
                  </div>
                  
                  <div className="flex items-center">
                    <input type="radio" id="radio" name="options" className="w-5 h-5 text-primary focus:ring-primary/30" />
                    <label htmlFor="radio" className="ml-2 text-sm">Verified clients</label>
                  </div>
                </div>
                
                <select className="w-full bg-white border-0 rounded-xl px-4 py-3 shadow-neo-subtle
                  focus:ring-2 focus:ring-primary/30 focus:shadow-none
                  transition-all duration-300 text-secondary/80">
                  <option>Sort by: Newest first</option>
                  <option>Sort by: Budget (high to low)</option>
                  <option>Sort by: Budget (low to high)</option>
                </select>
              </div>
            </div>
            
            {/* Tags and Badges */}
            <div className="bg-white p-8 rounded-2xl shadow-neo-flat">
              <h3 className="text-lg font-semibold mb-6">Tags and Badges</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                  bg-primary/10 text-primary transition-all hover:bg-primary/20 cursor-pointer">
                  #FrontendDev
                </span>
                
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                  bg-primary/10 text-primary transition-all hover:bg-primary/20 cursor-pointer">
                  #ReactJS
                </span>
                
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                  bg-accent/10 text-accent transition-all hover:bg-accent/20 cursor-pointer">
                  #UrgentHire
                </span>
                
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                  bg-success/10 text-success transition-all hover:bg-success/20 cursor-pointer">
                  #Verified
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Bell className="w-6 h-6 text-secondary" />
                  <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center
                    bg-accent text-white text-xs font-bold rounded-full">
                    3
                  </span>
                </div>
                
                <div className="bg-primary/5 text-primary text-sm px-2 py-1 rounded-md flex items-center">
                  <span className="font-medium">4.9</span>
                  <div className="flex ml-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="bg-success/5 text-success text-sm px-2 py-1 rounded-md">
                  Active
                </div>
              </div>
            </div>
            
            {/* Progress Indicators */}
            <div className="bg-white p-8 rounded-2xl shadow-neo-flat">
              <h3 className="text-lg font-semibold mb-6">Progress Indicators</h3>
              
              <div className="mb-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Project completion</span>
                  <span className="font-medium">75%</span>
                </div>
                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                    style={{ width: '75%' }}
                  ></div>
                </div>
              </div>
              
              <div className="mb-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Milestone 2/4</span>
                  <span className="font-medium">50%</span>
                </div>
                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                    style={{ width: '50%' }}
                  ></div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <div className="w-3 h-3 rounded-full bg-primary/30"></div>
                <div className="w-3 h-3 rounded-full bg-primary/30"></div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gig Card */}
            <div className="bg-white p-6 rounded-2xl shadow-neo-flat hover:shadow-hover transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-lg">Frontend Developer Needed</h3>
                <span className="font-bold text-accent">$2.5k-$4k</span>
              </div>
              
              <p className="text-secondary/70 mb-4">
                Looking for an expert frontend developer to build a responsive dashboard using React and Tailwind CSS. Experience with data visualization is a plus.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                  bg-primary/10 text-primary">
                  #FrontendDev
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                  bg-primary/10 text-primary">
                  #ReactJS
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                  bg-primary/10 text-primary">
                  #Tailwind
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark"></div>
                  <span className="ml-2 text-sm font-medium">TechCorp Inc.</span>
                </div>
                
                <button className="flex items-center text-primary font-medium text-sm">
                  View Details
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
            
            {/* Freelancer Card */}
            <div className="bg-gradient-to-br from-white to-primary/5 backdrop-blur-sm
              rounded-2xl shadow-float p-6 transition-all duration-300
              hover:shadow-hover border border-primary/10">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center text-white text-2xl font-bold">
                  JS
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg">Jane Smith</h3>
                  <p className="text-secondary/70">Senior Frontend Developer</p>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-warning fill-current" />
                      ))}
                    </div>
                    <span className="ml-1 text-sm font-medium">4.9</span>
                    <span className="ml-1 text-xs text-secondary/50">(36 reviews)</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-5">
                <p className="text-secondary/70 text-sm">
                  Expert in creating responsive, pixel-perfect UI with modern frameworks. 7+ years of experience with React ecosystem.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                  bg-primary/10 text-primary">
                  React
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                  bg-primary/10 text-primary">
                  Next.js
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                  bg-primary/10 text-primary">
                  Tailwind
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-sm">
                  <span className="font-medium">$65</span>
                  <span className="text-secondary/50"> / hour</span>
                </div>
                
                <button className="bg-primary text-white font-medium px-4 py-2 rounded-xl 
                  shadow-lg hover:shadow-xl transition-all duration-300">
                  View Profile
                </button>
              </div>
            </div>
            
            {/* Project Dashboard Card */}
            <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-2xl shadow-neo-flat hover:shadow-hover transition-all duration-300">
              <h3 className="font-semibold text-lg mb-4">Project Dashboard</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-primary/5 p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Progress</h4>
                    <span className="text-sm font-bold">75%</span>
                  </div>
                  
                  <div className="h-2 bg-white rounded-full overflow-hidden mb-4">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-secondary/70">
                    <span>Started: May 2</span>
                    <span>Due: May 18</span>
                  </div>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-xl">
                  <div className="flex items-center mb-3">
                    <Briefcase className="w-5 h-5 text-primary mr-2" />
                    <h4 className="font-medium">Tasks</h4>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded border border-primary/50 mr-2 flex items-center justify-center bg-white">
                        <div className="w-2 h-2 rounded-sm bg-primary"></div>
                      </div>
                      <span className="text-sm line-through text-secondary/50">Homepage layout</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded border border-primary/50 mr-2 flex items-center justify-center bg-white">
                        <div className="w-2 h-2 rounded-sm bg-primary"></div>
                      </div>
                      <span className="text-sm line-through text-secondary/50">User authentication</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded border border-primary/50 mr-2 bg-white"></div>
                      <span className="text-sm">Dashboard charts</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded border border-primary/50 mr-2 bg-white"></div>
                      <span className="text-sm">Mobile responsiveness</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-xl">
                  <h4 className="font-medium mb-3">Meeting Schedule</h4>
                  
                  <div className="bg-white rounded-lg p-3 mb-2 border-l-4 border-primary shadow-sm">
                    <div className="font-medium text-sm">Progress Review</div>
                    <div className="text-xs text-secondary/70">Today, 2:00 PM</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 border-l-4 border-secondary/30 shadow-sm">
                    <div className="font-medium text-sm">Final Presentation</div>
                    <div className="text-xs text-secondary/70">May 15, 11:00 AM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 