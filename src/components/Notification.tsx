'use client';

import { Gig } from '../lib/mockData';

interface Props {
  gigs: Gig[];
  freelancerSkills: string[];
}

export default function Notification({ gigs, freelancerSkills }: Props) {
  const matchedGigs = gigs.filter((gig) =>
    gig.hashtags.some((tag) => freelancerSkills.includes(tag))
  );

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-cyan-700">Notifications</h3>
      {matchedGigs.length > 0 ? (
        <ul className="mt-2 space-y-2">
          {matchedGigs.map((gig) => (
            <li key={gig.id} className="bg-cyan-50 p-4 rounded-lg">
              New gig matches your skills: <strong>{gig.title}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No new gigs match your skills.</p>
      )}
    </div>
  );
}