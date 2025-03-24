import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Walter Photography | Documentary & Portrait Photography',
  description: 'Walter Brown is a visionary photographer capturing life\'s most precious moments through documentary and portrait photography. Based in Canada.',
  keywords: 'photography, documentary photography, portrait photography, wedding photography, modeling photography, Canada photographer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
         <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
