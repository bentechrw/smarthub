import type { Metadata } from "next";
import { Teachers } from "next/font/google";
import "./globals.css";

import { ThemeModeScript } from "flowbite-react";


const teachers = Teachers({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic',],
  subsets: ['latin'],
  display: 'swap', 
});


export const metadata: Metadata = {
  title: {
    default: 'Smart Hub Service',
    template: "%s - Smart Hub Service"
  },
  description: "This is the website of Smart Hub Service, best online service company in Rwanda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className={teachers.className}>
      <head>
        <ThemeModeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
