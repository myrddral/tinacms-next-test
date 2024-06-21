import { Navbar } from "../components/navbar";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Self Hosted Tina App",
  description: "A Next.js app with TinaCMS"
};

interface RootLayoutProps extends PropsWithChildren {
  params: { path: string };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
