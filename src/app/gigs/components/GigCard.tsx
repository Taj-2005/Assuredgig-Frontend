import { Star, CheckCircle, MapPin, Clock, DollarSign, Tag, BookmarkPlus } from 'lucide-react';
import type { Gig } from '@/app/gigs/types/gig';

interface GigCardProps {
  gig: Gig;
  viewMode: 'card' | 'list';
  onSave: (gigId: number) => void;
  isSaved: boolean;
}

export default function GigCard({ gig, viewMode, onSave, isSaved }: GigCardProps) {
  return (
    <div 
      className={`relative ${
        viewMode === "card" 
          ? "bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-cyan-900/20 group"
          : "bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-cyan-800/50 transition-all"
      }`}
    >
      {/* Top Bar with Featured Badge and Save Button */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 z-10">
        {/* Save Button */}
        <button
          onClick={() => onSave(gig.id)}
          className={`p-2 rounded-full transition-colors ${
            isSaved 
              ? 'bg-cyan-500 text-white' 
              : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600'
          }`}
          aria-label={isSaved ? "Remove from saved" : "Save gig"}
        >
          <BookmarkPlus size={16} />
        </button>

        {/* Featured Badge */}
        {gig.featured && (
          <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
            <Star size={12} className="mr-1" fill="white" />
            Featured
          </span>
        )}
      </div>
      
      {/* Gig Content */}
      <div className={`p-6 ${viewMode === "list" ? "flex flex-col lg:flex-row" : ""} ${gig.featured ? "pt-16" : "pt-14"}`}>
        {/* Main Content */}
        <div className={`${viewMode === "list" ? "flex-grow" : ""}`}>
          {/* Title and Verified Badge */}
          <div className="flex items-start gap-2 mb-3">
            <h3 className="text-xl font-semibold text-white flex-grow group-hover:text-cyan-400 transition-colors">
              {gig.title}
            </h3>
            {gig.verified && (
              <span className="inline-flex items-center text-cyan-400">
                <CheckCircle size={16} className="mr-1" />
                <span className="text-xs">Verified</span>
              </span>
            )}
          </div>
          
          {/* Description */}
          <p className="text-gray-300 mb-4">
            {gig.description}
          </p>

          {/* Gig Details */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center text-gray-300">
              <DollarSign size={16} className="mr-2 text-cyan-400" />
              <span>${gig.budget}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Clock size={16} className="mr-2 text-cyan-400" />
              <span>{gig.duration}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin size={16} className="mr-2 text-cyan-400" />
              <span>{gig.location}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Tag size={16} className="mr-2 text-cyan-400" />
              <span>{gig.category}</span>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {gig.skills.map((skill: string, index: number) => (
              <span 
                key={index}
                className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Client Info */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-700">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm font-medium">
                {gig.client.name.charAt(0)}
              </div>
              <div className="ml-2">
                <p className="text-sm font-medium text-white">{gig.client.name}</p>
                <p className="text-xs text-gray-400">Rating: {gig.client.rating}</p>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              {gig.applicants} applicants
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 