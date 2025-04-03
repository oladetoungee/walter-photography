import type { Metadata } from 'next';
import { Inter, Italiana } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ['latin'] });
const italiana = Italiana({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-italiana',
});

export const metadata: Metadata = {
  title: 'Walter Photography | Documentary & Portrait Photography',
  description: 'Walter Jeremiah is a visionary photographer capturing life\'s most precious moments through documentary and portrait photography. Based in Canada.',
  keywords: 'photography, documentary photography, portrait photography, wedding photography, modeling photography, Canada photographer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={` ${italiana.variable} ${inter.className}`}>
         <Navigation />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
