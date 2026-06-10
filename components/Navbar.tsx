"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-violet-600">
          <ShieldCheck className="w-6 h-6" />
          NestWatch
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/browse" className="hover:text-violet-600 transition-colors">Browse Sitters</Link>
          <Link href="/how-it-works" className="hover:text-violet-600 transition-colors">How It Works</Link>
          <Link href="/safety" className="hover:text-violet-600 transition-colors">Safety</Link>
          <Link href="/become-sitter" className="hover:text-violet-600 transition-colors">Become a Sitter</Link>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-violet-600 px-3 py-2">Log in</Link>
          <Link href="/signup" className="text-sm font-semibold bg-violet-600 text-white px-4 py-2 rounded-full hover:bg-violet-700 transition-colors">Sign up free</Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link href="/browse" onClick={() => setOpen(false)}>Browse Sitters</Link>
          <Link href="/how-it-works" onClick={() => setOpen(false)}>How It Works</Link>
          <Link href="/safety" onClick={() => setOpen(false)}>Safety</Link>
          <Link href="/become-sitter" onClick={() => setOpen(false)}>Become a Sitter</Link>
          <Link href="/login" onClick={() => setOpen(false)}>Log in</Link>
          <Link href="/signup" className="bg-violet-600 text-white text-center py-2 rounded-full" onClick={() => setOpen(false)}>Sign up free</Link>
        </div>
      )}
    </nav>
  );
}
