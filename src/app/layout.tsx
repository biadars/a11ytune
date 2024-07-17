import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'A11yTune',
  description: 'React Native accessibility puzzle hunt'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>A11yTune</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
