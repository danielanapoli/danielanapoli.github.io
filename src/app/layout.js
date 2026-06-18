import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import './app.css';

import { GoogleAnalytics } from '@next/third-parties/google'
import ImportBootstrap from '../components/ImportBootstrap/ImportBootstrap'
import { SkipToContentLink } from '@/components/SkipLink/SkipLink';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Daniela Napoli, PhD',
  url: 'https://danielanapoli.com',
  description: 'Mixed-methods UX researcher in Ontario. Qualitative depth and quantitative rigour — connecting user needs to product strategy.',
};

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
  metadataBase: new URL('https://danielanapoli.com'),
  title: {
    template: '%s | Daniela Napoli, PhD',
    default: 'Mixed-Methods UX Researcher Ontario | Daniela Napoli, PhD',
  },
  description: 'Mixed-methods UX researcher in Ontario. Qualitative depth and quantitative rigour — connecting user needs to product strategy.',
  openGraph: {
    title: 'Mixed-Methods UX Researcher Ontario | Daniela Napoli, PhD',
    description: 'Mixed-methods UX researcher in Ontario. Qualitative depth and quantitative rigour — connecting user needs to product strategy.',
    url: 'https://danielanapoli.com',
    siteName: 'Daniela Napoli, PhD',
    locale: 'en_CA',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <GoogleAnalytics gaId="G-92QDBLPD10" />
      
      <ImportBootstrap/>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
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
