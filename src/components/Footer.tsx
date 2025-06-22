'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaDiscord } from 'react-icons/fa';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Footer() {
  const { theme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <section className={`${theme === 'dark' ? 'bg-black border-gray-800 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-600'} border-t`}>
      <footer>
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10 text-sm">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                width={50}
                height={50}
                src={theme === 'dark' ? '/logo-light.png' : '/logo-dark.png'}
                alt="AssuredGig Logo"
                className="h-6 w-auto"
              />
              <span className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                AssuredGig
              </span>
            </Link>
            <p className="text-xs">Hire smarter. Work safer. Get paid faster.</p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Product</h4>
            <ul className="space-y-1">
              <li><Link href="/gigs" className="hover:underline">Gigs</Link></li>
              <li><Link href="/contracts" className="hover:underline">Contracts</Link></li>
              <li><Link href="/portfolio" className="hover:underline">Portfolio</Link></li>
              <li><Link href="/dashboard" className="hover:underline">Dashboard</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Company</h4>
            <ul className="space-y-1">
              <li><Link href="/contact" className="hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="hover:underline">Careers</Link></li>
              <li><Link href="/contact" className="hover:underline">Blog</Link></li>
              <li><Link href="/contact" className="hover:underline">Partners</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Resources</h4>
            <ul className="space-y-1">
              <li><Link href="/contact" className="hover:underline">Support</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/contact" className="hover:underline">FAQs</Link></li>
              <li><Link href="/contact" className="hover:underline">Terms & Policies</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Social</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaLinkedin className="w-4 h-4" />
                <a href="https://www.linkedin.com/company/assuredgig/people/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIN</a>
              </li>
              <li className="flex items-center gap-2">
                <FaTwitter className="w-4 h-4" />
                <a href="https://x.com/AssuredGig" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
              </li>
              <li className="flex items-center gap-2">
                <FaInstagram className="w-4 h-4" />
                <a href="https://www.instagram.com/assuredgig/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
              </li>
              <li className="flex items-center gap-2">
                <FaYoutube className="w-4 h-4" />
                <a href="https://www.youtube.com/@assuredgig" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</a>
              </li>
              <li className="flex items-center gap-2">
                <FaDiscord className="w-4 h-4" />
                <a href="https://discord.gg/TA3k6sxuz8" target="_blank" rel="noopener noreferrer" className="hover:underline">Discord</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t text-center py-4 text-xs ${theme === 'dark' ? 'border-gray-800 text-gray-500' : 'border-gray-100 text-gray-500'}`}>
          © {new Date().getFullYear()} AssuredGig. Empowering secure freelance work.
          <span className="mx-2">|</span>
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <span className="mx-2">|</span>
          <Link href="/terms" className="hover:underline">Terms of Service</Link>
        </div>
      </footer>
    </section>
  );
}
