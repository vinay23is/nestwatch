"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-black text-lg text-gray-950 tracking-tight">
          nest<span className="text-orange-500">watch</span>
        </Link>
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-500">
          <Link href="/browse" className="hover:text-gray-900 transition-colors">Browse sitters</Link>
          <Link href="/how-it-works" className="hover:text-gray-900 transition-colors">How it works</Link>
          <Link href="/safety" className="hover:text-gray-900 transition-colors">Safety</Link>
          <Link href="/become-sitter" className="hover:text-gray-900 transition-colors">Become a sitter</Link>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Link href="/login" className="text-sm font-medium text-gray-500 hover:text-gray-900 px-3 py-2">Log in</Link>
          <Link href="/signup" className="text-sm font-bold bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">Sign up</Link>
        </div>
        <button className="md:hidden p-1" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-stone-100 bg-white px-4 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link href="/browse" onClick={() => setOpen(false)} className="text-gray-700">Browse sitters</Link>
          <Link href="/how-it-works" onClick={() => setOpen(false)} className="text-gray-700">How it works</Link>
          <Link href="/safety" onClick={() => setOpen(false)} className="text-gray-700">Safety</Link>
          <Link href="/become-sitter" onClick={() => setOpen(false)} className="text-gray-700">Become a sitter</Link>
          <Link href="/login" onClick={() => setOpen(false)} className="text-gray-700">Log in</Link>
          <Link href="/signup" className="bg-orange-500 text-white text-center py-2 rounded-lg font-bold" onClick={() => setOpen(false)}>Sign up</Link>
        </div>
      )}
    </nav>
  );
}
