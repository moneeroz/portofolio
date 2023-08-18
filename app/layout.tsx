import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moneer | Fullstack developer",
  description: "Moneer's fullstack web develpment portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="pb-40 sm:pb-0">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
