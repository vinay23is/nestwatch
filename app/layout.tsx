import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NestWatch — Trusted Babysitters On Demand",
  description: "Find verified, camera-backed babysitters near you in minutes. Safe, affordable, and available when you need them.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-900 text-gray-400 py-12 mt-20">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div>
              <p className="text-white font-bold text-lg mb-3">NestWatch</p>
              <p>Trusted childcare, on demand. Safety-first, always.</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-3">For Parents</p>
              <ul className="space-y-1">
                <li>Browse Sitters</li>
                <li>How It Works</li>
                <li>Safety Promise</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold mb-3">For Sitters</p>
              <ul className="space-y-1">
                <li>Become a Sitter</li>
                <li>Earnings</li>
                <li>Background Check</li>
                <li>Sitter Guide</li>
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold mb-3">Company</p>
              <ul className="space-y-1">
                <li>About Us</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-xs text-gray-600 mt-10">© 2025 NestWatch Inc. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
