'use client';
import NavBar from '@/components/NavBar';
import Head from 'next/head';
import './globals.css';
import HitsProvider from '@/hooks/useHitsProvider';

export default function RootLayout({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Head>
          <title>Hacker News - {title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar title="HACKER NEWS" />
        <HitsProvider>{children}</HitsProvider>
      </body>
    </html>
  );
}
