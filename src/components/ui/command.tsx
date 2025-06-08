'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command } from 'cmdk';
import { Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommandPalette = ({ isOpen, onClose }: CommandPaletteProps) => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onClose();
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [onClose]);

  const pages = [
    {
      name: 'Home',
      path: '/',
      description: 'Go to home page',
    },
    {
      name: 'Gigs',
      path: '/gigs',
      description: 'Browse available gigs',
    },
    {
      name: 'Contract',
      path: '/contract',
      description: 'Create or manage contracts',
    },
    {
      name: 'Contact',
      path: '/contact',
      description: 'Get in touch with us',
    },
  ];

  const filteredPages = pages.filter((page) =>
    page.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#0A0B0D]/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="fixed left-[50%] top-[50%] max-h-[85vh] w-full max-w-md translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-lg bg-[#1C1F23] border border-[#2D3139] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Command className="overflow-hidden rounded-lg border-none">
              <div className="flex items-center border-b border-[#2D3139] px-3">
                <Search className="mr-2 h-4 w-4 shrink-0 text-[#6B7280]" />
                <input
                  className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm text-[#F8F9FA] outline-none placeholder:text-[#6B7280] disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Search pages..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  onClick={onClose}
                  className="ml-2 rounded-md p-1 text-[#6B7280] hover:text-[#F8F9FA]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <Command.List className="max-h-[300px] overflow-y-auto p-2">
                <Command.Empty className="py-6 text-center text-sm text-[#6B7280]">
                  No results found.
                </Command.Empty>
                {filteredPages.map((page) => (
                  <Command.Item
                    key={page.path}
                    onSelect={() => {
                      router.push(page.path);
                      onClose();
                    }}
                    className="flex cursor-pointer items-center rounded-md px-2 py-3 text-sm text-[#F8F9FA] hover:bg-[#252830]"
                  >
                    <div>
                      <p className="font-medium">{page.name}</p>
                      <p className="text-xs text-[#6B7280]">{page.description}</p>
                    </div>
                  </Command.Item>
                ))}
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { CommandPalette }; 