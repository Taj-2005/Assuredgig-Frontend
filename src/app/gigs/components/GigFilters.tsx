import { Search, ChevronDown, Filter, ArrowUpDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface GigFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedDifficulty: string;
  setSelectedDifficulty: (difficulty: string) => void;
  selectedBudget: string;
  setSelectedBudget: (budget: string) => void;
  selectedDuration: string;
  setSelectedDuration: (duration: string) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  showAdvancedFilters: boolean;
  setShowAdvancedFilters: (show: boolean) => void;
  resetFilters: () => void;
  categories: string[];
  difficultyLevels: string[];
  budgetRanges: string[];
  durationRanges: string[];
  isFilterOpen: boolean;
  setIsFilterOpen: (open: boolean) => void;
  isSortOpen: boolean;
  setIsSortOpen: (open: boolean) => void;
  clearFilters: () => void;
}

export default function GigFilters({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedDifficulty,
  setSelectedDifficulty,
  selectedBudget,
  setSelectedBudget,
  selectedDuration,
  setSelectedDuration,
  showFilters,
  showAdvancedFilters,
  setShowAdvancedFilters,
  resetFilters,
  categories,
  difficultyLevels,
  budgetRanges,
  durationRanges,
  isFilterOpen,
  setIsFilterOpen,
  isSortOpen,
  setIsSortOpen,
  clearFilters,
}: GigFiltersProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={20} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for gigs, skills, or keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
          />
        </div>
        
        {/* Category Select */}
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="appearance-none pl-4 pr-10 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ChevronDown size={18} className="text-gray-400" />
          </div>
        </div>
        
        {/* Budget Select */}
        <div className="relative">
          <select
            value={selectedBudget}
            onChange={(e) => setSelectedBudget(e.target.value)}
            className="appearance-none pl-4 pr-10 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
          >
            {budgetRanges.map(budget => (
              <option key={budget} value={budget}>{budget}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ChevronDown size={18} className="text-gray-400" />
          </div>
        </div>
        
        {/* Filter Toggle Button */}
        <Button
          variant="secondary"
          className="md:hidden flex items-center gap-2 border-dark-border text-white hover:bg-accent/10 hover:text-accent"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <Filter className="w-4 h-4" />
          Filters
        </Button>

        {/* Sort Button */}
        <Button
          variant="secondary"
          className="border-dark-border text-white hover:bg-accent/10 hover:text-accent"
          onClick={() => setIsSortOpen(!isSortOpen)}
        >
          <ArrowUpDown className="w-4 h-4 mr-2" />
          Sort
        </Button>

        {/* Clear Filters Button */}
        <Button
          variant="ghost"
          className="text-muted-foreground hover:text-accent"
          onClick={clearFilters}
        >
          Clear All
        </Button>
      </div>
      
      {/* Advanced Filters Panel */}
      {showFilters && (
        <div className="mt-4 p-6 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Advanced Filters</h3>
            <button 
              onClick={resetFilters}
              className="text-sm text-cyan-400 hover:text-cyan-300"
            >
              Reset All
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Difficulty Level */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Difficulty Level
              </label>
              <div className="relative">
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full appearance-none pl-4 pr-10 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                >
                  {difficultyLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
              </div>
            </div>
            
            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Project Duration
              </label>
              <div className="relative">
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="w-full appearance-none pl-4 pr-10 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                >
                  {durationRanges.map(duration => (
                    <option key={duration} value={duration}>{duration}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          
          {/* More Filters Toggle */}
          <div className="mt-4">
            <button
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center"
            >
              {showAdvancedFilters ? 'Show Less' : 'Show More Filters'}
              <ChevronDown size={14} className={`ml-1 transition-transform ${showAdvancedFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 