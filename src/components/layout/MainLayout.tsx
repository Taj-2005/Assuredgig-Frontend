'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-surface text-white">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-dark-surface/80 backdrop-blur-md shadow-lg shadow-black/10" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent select-none cursor-pointer" onClick={() => router.push('/')}>
            AssuredGig
          </div>
          
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex items-center space-x-8">
              {[
                { name: 'Find Work', href: '/gigs' },
                { name: 'Post Jobs', href: '/post-job' },
                { name: 'How it Works', href: '/how-it-works' }
              ].map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors px-2 py-1 rounded-md",
                      "text-gray-400 hover:text-accent hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    )}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost"
              className="text-gray-400 hover:text-accent hover:bg-accent/10"
              onClick={() => router.push('/auth/signin')}
            >
              Sign In
            </Button>
            <Button 
              variant="default" 
              className="bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20"
              onClick={() => router.push('/auth/register')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-400 hover:text-accent hover:bg-accent/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-dark-surface/95 backdrop-blur-md border-t border-dark-border">
            <div className="px-4 py-3 space-y-1">
              {[
                { name: 'Find Work', href: '/gigs' },
                { name: 'Post Jobs', href: '/post-job' },
                { name: 'How it Works', href: '/how-it-works' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-accent hover:bg-accent/10"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 pb-3 border-t border-dark-border">
                <Button 
                  variant="ghost"
                  className="w-full mb-2 text-gray-400 hover:text-accent hover:bg-accent/10"
                  onClick={() => router.push('/auth/signin')}
                >
                  Sign In
                </Button>
                <Button 
                  variant="default" 
                  className="w-full bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20"
                  onClick={() => router.push('/auth/register')}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-12 min-h-[80vh] w-full">
        <div className="w-full flex flex-col items-center">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark-surface border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AssuredGig</h3>
            <p className="text-gray-400">Connecting talented freelancers with amazing opportunities.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-accent">How it Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-accent">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-dark-border text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AssuredGig. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 