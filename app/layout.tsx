import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { ThemeModeScript } from "flowbite-react";


const roboto = Roboto({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
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
    <html suppressHydrationWarning lang="en" className={roboto.className}>
      <head>
        <ThemeModeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
