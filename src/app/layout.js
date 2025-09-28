import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import './app.css';

import Script from 'next/script';
import ImportBootstrap from '../components/ImportBootstrap/ImportBootstrap'
import { SkipToContentLink } from '@/components/SkipLink/SkipLink';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "Daniela Napoli | Portfolio",
  description: "Samples of Daniela Napoli's user research projects focused on accessible and inclusive design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Script async src='https://www.googletagmanager.com/gtag/js?id=G-92QDBLPD10'/>
      <ImportBootstrap/>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <SkipToContentLink />
          <NavBar />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
