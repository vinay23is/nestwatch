"use client";
import { useState } from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl text-violet-600 mb-4">
            <ShieldCheck className="w-6 h-6" /> NestWatch
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
          <p className="text-gray-500 text-sm mt-1">Log in to manage your bookings</p>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-xs font-semibold text-gray-500 block mb-1">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <label className="text-xs font-semibold text-gray-500">Password</label>
              <a href="#" className="text-xs text-violet-600 hover:underline">Forgot password?</a>
            </div>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300" />
          </div>
          <Link href="/dashboard">
            <button type="submit" className="w-full bg-violet-600 text-white font-bold py-3 rounded-xl hover:bg-violet-700 transition-colors mt-2">
              Log in
            </button>
          </Link>
        </form>
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div>
          <div className="relative text-center"><span className="bg-white text-xs text-gray-400 px-3">or continue with</span></div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-sm font-medium hover:border-gray-300 transition-colors">
            <span className="text-lg">G</span> Google
          </button>
          <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-sm font-medium hover:border-gray-300 transition-colors">
            <span className="text-lg">f</span> Facebook
          </button>
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-violet-600 font-semibold hover:underline">Sign up free</Link>
        </p>
      </div>
    </div>
  );
}
