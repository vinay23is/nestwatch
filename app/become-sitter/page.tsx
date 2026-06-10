"use client";
import { useState } from "react";
import { CheckCircle, DollarSign, Clock, Star, Upload, ShieldCheck } from "lucide-react";

const steps = [
  { step: "01", title: "Create your profile", desc: "Fill in your bio, experience, certifications, and the areas you serve." },
  { step: "02", title: "Pass background check", desc: "We run a criminal record and ID check. Takes 1–3 business days. Completely free." },
  { step: "03", title: "Set your rate & availability", desc: "Choose your hourly rate and mark when you're free. Change it anytime." },
  { step: "04", title: "Go live & start earning", desc: "Once approved, families can find and book you. Payouts hit your bank within 24h of each session." },
];

export default function BecomeSitterPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", experience: "", rate: "", bio: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Application received!</h2>
        <p className="text-gray-500 mb-6">We'll review your details and be in touch within 1 business day. Check your email for next steps including the background check link.</p>
        <a href="/" className="bg-violet-600 text-white font-semibold px-7 py-3 rounded-full hover:bg-violet-700 transition-colors">Back to home</a>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-16 px-4 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Turn your love of kids into income</h1>
        <p className="text-xl text-gray-500 max-w-xl mx-auto mb-8">
          Set your own schedule, choose your families, and earn $15–$25/hr. The average NestWatch sitter earns $1,400/month working part-time.
        </p>
        <div className="flex justify-center gap-8 flex-wrap">
          {[
            { icon: <DollarSign className="w-5 h-5 text-yellow-600" />, label: "$15–25/hr", sub: "You set your rate" },
            { icon: <Clock className="w-5 h-5 text-yellow-600" />, label: "Your hours", sub: "Full flexibility" },
            { icon: <Star className="w-5 h-5 text-yellow-600" />, label: "Top earners", sub: "$2,000+/month" },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-2xl px-6 py-4 shadow-sm text-center">
              <div className="flex justify-center mb-1">{item.icon}</div>
              <p className="font-bold text-gray-900">{item.label}</p>
              <p className="text-xs text-gray-400">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How to get started</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex gap-4">
              <div className="text-3xl font-black text-violet-100 leading-none shrink-0">{s.step}</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-5 text-center">What you need to qualify</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "18 years or older",
              "Valid government-issued ID",
              "Pass criminal background check",
              "Current CPR certification",
              "Smartphone (iOS or Android)",
              "At least 1 year of childcare experience",
            ].map((req) => (
              <div key={req} className="flex items-center gap-2 text-sm text-gray-700">
                <ShieldCheck className="w-4 h-4 text-violet-500 shrink-0" />
                {req}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="py-16 px-4 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Apply now — it&apos;s free</h2>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white border border-gray-100 rounded-2xl shadow-sm p-7">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">Full name *</label>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300" />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">Phone *</label>
              <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300" />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 block mb-1">Email *</label>
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">Years of experience *</label>
              <select required value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300">
                <option value="">Select</option>
                <option>1–2 years</option>
                <option>3–5 years</option>
                <option>5–10 years</option>
                <option>10+ years</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">Desired hourly rate ($) *</label>
              <input required type="number" min={10} max={50} value={form.rate} onChange={(e) => setForm({ ...form, rate: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300" />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 block mb-1">Tell families about yourself *</label>
            <textarea required rows={4} value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })}
              placeholder="Your experience, approach, and what makes you a great sitter..."
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300 resize-none" />
          </div>
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-5 text-center cursor-pointer hover:border-violet-300 transition-colors">
            <Upload className="w-6 h-6 text-gray-400 mx-auto mb-1" />
            <p className="text-sm text-gray-500">Upload CPR certificate <span className="text-gray-400">(PDF or image)</span></p>
          </div>
          <button type="submit" className="w-full bg-violet-600 text-white font-bold py-3 rounded-xl hover:bg-violet-700 transition-colors">
            Submit application
          </button>
          <p className="text-xs text-gray-400 text-center">We respond within 1 business day. Background check is free.</p>
        </form>
      </section>
    </div>
  );
}
