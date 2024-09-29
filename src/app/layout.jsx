import { Inter } from 'next/font/google';
import { ThemeModeScript } from 'flowbite-react';
import '../globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './ui-components/fontawesome';
// import Navbar from './(components)/Navbars/Navbar2';
import Navbar from './(components)/Navbars/Navbar1';

import Footer from './(components)/Footer';
import { Toaster } from 'react-hot-toast';



const inter = Inter({ subsets: ['latin'] });

config.autoAddCss = false;


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
        <Toaster position="top-center"/>
      </body>
    </html>
  );
}
