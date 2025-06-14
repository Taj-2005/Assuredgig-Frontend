'use client';

import { useState, useEffect, useCallback } from 'react';
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

  const handleThemeToggle = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  const navLinkClasses = useCallback((path: string) => {
    return cn(
      'px-3 py-2 text-sm font-medium rounded-md transition-all duration-200',
      theme === 'light'
        ? pathname === path
          ? 'text-cyan-600 bg-cyan-100'
          : 'text-gray-700 hover:text-cyan-500 hover:bg-cyan-50'
        : pathname === path
          ? 'text-white bg-white/10'
          : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
    );
  }, [theme, pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300',
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
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              <span className={theme === 'light' ? 'text-cyan-600' : 'text-white'}>AssuredGig</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.path}>
                    <NavigationMenuLink asChild>
                      <Link href={item.path} className={navLinkClasses(item.path)}>
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
              onClick={handleThemeToggle}
              className={cn(
                "transition-all duration-200",
                theme === 'light' 
                  ? 'text-cyan-500 hover:text-cyan-700 hover:bg-cyan-50' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              )}
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </motion.div>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle Button for Mobile */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleThemeToggle}
              className={cn(
                "transition-all duration-200",
                theme === 'light' 
                  ? 'text-cyan-500 hover:text-cyan-700 hover:bg-cyan-50' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              )}
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </motion.div>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "transition-all duration-200",
                theme === 'light' 
                  ? 'text-cyan-500 hover:text-cyan-700 hover:bg-cyan-50' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              )}
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
            transition={{ duration: 0.2 }}
            className={cn(
              "md:hidden backdrop-blur-lg transition-colors duration-200",
              theme === 'light' 
                ? 'bg-white/95 shadow-md' 
                : 'bg-black/95'
            )}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={navLinkClasses(item.path)}
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