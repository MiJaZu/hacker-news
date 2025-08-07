'use client';
import NavBar from '@/components/NavBar';
import Head from 'next/head';
import './globals.css';
import HitsProvider from '@/context/HitsProviderContext';

export default function RootLayout({ children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <title>Hacker News</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar title="HACKER NEWS" />
        <HitsProvider>{children}</HitsProvider>
      </body>
    </html>
  );
}
