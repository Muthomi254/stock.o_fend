import { Inter } from 'next/font/google';
import { ThemeModeScript } from 'flowbite-react';
import '../globals.css';
import Navbar from './(components)/Navbar';
import Footer from './(components)/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
