'use client';

import { Gig } from '../lib/mockData';
// @ts-ignore
import { FaTag } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

interface Props {
  gig: Gig;
}

export default function GigCard({ gig }: Props) {
  const router = useRouter();

  return (
    <div className="bg-[#10151a] p-6 rounded-lg shadow-md hover:shadow-lg transition text-white">
      <h3 className="text-xl font-semibold text-cyan-700">{gig.title}</h3>
      <p className="text-gray-600 mt-2">{gig.description}</p>
      <p className="text-gray-800 font-bold mt-4">Budget: ${gig.budget}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {gig.hashtags.map((tag) => (
          <span key={tag} className="flex items-center bg-cyan-100 text-cyan-700 px-2 py-1 rounded text-sm">
            <FaTag className="mr-1" /> {tag}
          </span>
        ))}
      </div>
      <Button 
        className="mt-4 bg-accent hover:bg-accent/90 text-white"
        onClick={() => router.push(`/gigs/${gig.id}`)}
      >
        View Details
      </Button>
    </div>
  );
}