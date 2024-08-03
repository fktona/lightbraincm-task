import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './components/footer';
import HeroSection from './components/hero';
import MenuProvider from './context/menuContext';
import ScrollProvider from './context/scroll';
import MobileNav from './components/mobilNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hanover',
  description: 'Hanover is a hostel in the heart of Edinburgh',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      <body className={inter.className}>
        <MenuProvider>
          <ScrollProvider>
            <HeroSection />
            <MobileNav />
            <main className="max-w-[1440px] mx-auto bg-[#efece8]">
              {children}
            </main>
            <Footer />
          </ScrollProvider>
        </MenuProvider>
      </body>
    </html>
  );
}
