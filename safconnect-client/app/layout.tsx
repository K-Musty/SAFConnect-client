'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import DashboardLayout from '@/components/layouts/DashboardLayout';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isPublicRoute = pathname === '/' || pathname === '/login';

  return (
    <html lang="en" className="h-full">
      <head>
        <title>SafConnect Client - School Management System</title>
        <meta name="description" content="Professional school management system connecting students, teachers, and administrators" />
        <meta name="application-name" content="SafConnect" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} font-sans text-slate-900 bg-slate-50 antialiased min-h-full`}>
        {isPublicRoute ? children : <DashboardLayout>{children}</DashboardLayout>}
      </body>
    </html>
  );
}
