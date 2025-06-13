'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useTheme } from '@/context/ThemeContext';

const navItems = [
  { name: 'Gigs', path: '/gigs' },
  { name: 'Contracts', path: '/contract' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        theme === 'light'
          ? isScrolled
            ? 'bg-white border border-b-2 border-b-sky-400 backdrop-blur-lg'
            : 'bg-white'
          : isScrolled
            ? 'bg-black/80 backdrop-blur-lg'
            : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              AssuredGig
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.path}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.path}
                        className={cn(
                          'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                          theme === 'light'
                            ? pathname === item.path
                              ? 'text-cyan-600 bg-cyan-100'
                              : 'text-gray-700 hover:text-cyan-500 hover:bg-cyan-50'
                            : pathname === item.path
                              ? 'text-white bg-white/10'
                              : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={theme === 'light' ? 'text-cyan-500 hover:text-cyan-700' : 'text-gray-300 hover:text-white'}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle Button for Mobile */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={theme === 'light' ? 'text-cyan-500 hover:text-cyan-700' : 'text-gray-300 hover:text-white'}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={theme === 'light' ? 'text-cyan-500 hover:text-cyan-700' : 'text-gray-300 hover:text-white'}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={theme === 'light' ? 'md:hidden bg-white shadow-md backdrop-blur-lg' : 'md:hidden bg-black/95 backdrop-blur-lg'}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                    theme === 'light'
                      ? pathname === item.path
                        ? 'text-cyan-600 bg-cyan-100'
                        : 'text-gray-700 hover:bg-cyan-50 hover:text-cyan-500'
                      : pathname === item.path
                        ? 'text-gray-300 bg-white/10'
                        : 'text-gray-300 hover:bg-white/5 hover:text-cyan-400'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 