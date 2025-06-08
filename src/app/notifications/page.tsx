import React from 'react';

export default function NotificationsPage() {
  // Mock notifications data
  const notifications = [
    {
      id: 1,
      title: 'New Frontend Developer Gig Posted',
      message: 'A client posted a new gig for a Frontend Developer. Your skills match this job!',
      link: '/gigs/123',
      time: '2 minutes ago',
    },
    {
      id: 2,
      title: 'New React Project Available',
      message: 'A new React project was posted. Check it out and apply now!',
      link: '/gigs/456',
      time: '1 hour ago',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center py-16">
      <div className="w-full max-w-2xl bg-[#161b22] border border-[#23272e] rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Notifications</h1>
        <ul className="space-y-6">
          {notifications.map((notif) => (
            <li key={notif.id} className="bg-[#23272e] rounded-xl p-6 flex flex-col gap-2">
              <span className="text-lg font-semibold text-indigo-400">{notif.title}</span>
              <span className="text-gray-300">{notif.message}</span>
              <a href={notif.link} className="text-indigo-400 hover:underline mt-2">View Gig</a>
              <span className="text-xs text-gray-500 mt-1">{notif.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 