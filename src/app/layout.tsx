import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { ToastProvider } from '@/context/ToastContext';
import { ThemeProvider } from '@/context/ThemeContext';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Assured Gig - Premium Freelancing Platform',
  description: 'Assured Gig connects top freelancers and clients in a secure, premium environment with verified talent, flexible work models, and end-to-end project tracking.',
  keywords: ['freelancing', 'AssuredGig', 'remote work', 'clients', 'top freelancers', 'premium platform'],
  metadataBase: new URL('https://assuredgig.com'),
  openGraph: {
    title: 'Assured Gig - Premium Freelancing Platform',
    description: 'Connect with top freelancers and clients in a secure, premium environment.',
    url: 'https://assuredgig.com',
    siteName: 'Assured Gig',
    locale: 'en_US',
    type: 'website',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <AuthProvider>
            <ToastProvider>
              {children}
            </ToastProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}