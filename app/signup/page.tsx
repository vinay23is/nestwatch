"use client";
import { useState } from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function SignupPage() {
  const [role, setRole] = useState<"parent" | "sitter">("parent");
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl text-violet-600 mb-4">
            <ShieldCheck className="w-6 h-6" /> NestWatch
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Create your account</h1>
          <p className="text-gray-500 text-sm mt-1">Free to join, no subscription</p>
        </div>

        {/* Role toggle */}
        <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-6">
          {(["parent", "sitter"] as const).map((r) => (
            <button key={r} onClick={() => setRole(r)}
              className={`flex-1 py-2 rounded-lg text-sm font-semibold capitalize transition-colors ${role === r ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"}`}>
              I&apos;m a {r}
            </button>
          ))}
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-xs font-semibold text-gray-500 block mb-1">Full name</label>
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Jane Smith"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300" />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 block mb-1">Email</label>
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300" />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 block mb-1">Password</label>
            <input required type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Min 8 characters"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300" />
          </div>
          <Link href={role === "parent" ? "/browse" : "/become-sitter"}>
            <button type="submit" className="w-full bg-violet-600 text-white font-bold py-3 rounded-xl hover:bg-violet-700 transition-colors mt-2">
              Create account
            </button>
          </Link>
        </form>
        <p className="text-xs text-gray-400 text-center mt-3">
          By signing up you agree to our Terms of Service and Privacy Policy.
        </p>
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-violet-600 font-semibold hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}
