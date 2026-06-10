import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NestWatch — Babysitters you can actually trust",
  description: "Find a nearby babysitter with a real background check and live camera. Book in minutes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-stone-200 bg-[#faf8f5] py-12">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-500">
            <div>
              <p className="font-black text-gray-950 text-base mb-2">nest<span className="text-orange-500">watch</span></p>
              <p className="text-xs leading-relaxed">Babysitters near you with background checks and live camera access.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-3 text-xs uppercase tracking-wide">Parents</p>
              <ul className="space-y-2 text-xs">
                <li><Link href="/browse" className="hover:text-gray-900">Browse sitters</Link></li>
                <li><Link href="/how-it-works" className="hover:text-gray-900">How it works</Link></li>
                <li><Link href="/safety" className="hover:text-gray-900">Safety</Link></li>
                <li><Link href="/dashboard" className="hover:text-gray-900">My bookings</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-3 text-xs uppercase tracking-wide">Sitters</p>
              <ul className="space-y-2 text-xs">
                <li><Link href="/become-sitter" className="hover:text-gray-900">Apply to babysit</Link></li>
                <li><Link href="/become-sitter" className="hover:text-gray-900">How earnings work</Link></li>
                <li><Link href="/safety" className="hover:text-gray-900">Background check</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-3 text-xs uppercase tracking-wide">Company</p>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                <li><a href="mailto:hello@nestwatch.com" className="hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 mt-10 pt-6 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-gray-400">
            <p>© 2025 NestWatch. All rights reserved.</p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-gray-600">Privacy</a>
              <a href="#" className="hover:text-gray-600">Terms</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
