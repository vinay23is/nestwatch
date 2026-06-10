import Link from "next/link";
import { ShieldCheck, Camera, Star, ArrowRight, CheckCircle } from "lucide-react";
import { sitters } from "@/lib/data";
import SitterCard from "@/components/SitterCard";

export default function Home() {
  const featured = sitters.sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div>
      {/* Hero — left-aligned, two-col */}
      <section className="bg-[#faf8f5] border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-orange-600 mb-4 tracking-wide uppercase">Now in your city</p>
            <h1 className="text-5xl md:text-6xl font-black text-gray-950 leading-[1.05] mb-6">
              Go on your date.<br />
              <span className="text-orange-500">We've got the kids.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
              Book a nearby babysitter with a real background check and live camera — in about 3 minutes. No subscription, no nonsense.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/browse"
                className="bg-orange-500 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-orange-600 transition-colors text-base"
              >
                Find someone tonight
              </Link>
              <Link
                href="/how-it-works"
                className="bg-white text-gray-700 font-semibold px-7 py-3.5 rounded-xl border border-stone-300 hover:border-stone-400 transition-colors text-base"
              >
                How it works
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-5">No account required to browse · Pay only after the session</p>
          </div>

          {/* Right side: mock sitter cards stacked */}
          <div className="relative hidden md:block">
            <div className="bg-white rounded-2xl border border-stone-200 shadow-md p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-orange-100 text-orange-600 font-black flex items-center justify-center text-sm">DP</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Daniel Park</p>
                  <p className="text-xs text-gray-400">0.8 mi away · Available tonight</p>
                </div>
                <span className="ml-auto text-sm font-bold text-gray-800">$22/hr</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <span className="text-yellow-500 font-bold">★ 5.0</span>
                <span className="text-gray-300">·</span>
                <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                <span>Verified</span>
                <span className="text-gray-300">·</span>
                <Camera className="w-3.5 h-3.5 text-orange-400" />
                <span>Camera</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-5 ml-6 opacity-80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-stone-100 text-stone-600 font-black flex items-center justify-center text-sm">SM</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Sarah Mitchell</p>
                  <p className="text-xs text-gray-400">1.2 mi away · Available tonight</p>
                </div>
                <span className="ml-auto text-sm font-bold text-gray-800">$18/hr</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <span className="text-yellow-500 font-bold">★ 4.9</span>
                <span className="text-gray-300">·</span>
                <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                <span>Verified</span>
                <span className="text-gray-300">·</span>
                <Camera className="w-3.5 h-3.5 text-orange-400" />
                <span>Camera</span>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow">
              6 free tonight near you
            </div>
          </div>
        </div>
      </section>

      {/* The camera thing — explain it simply */}
      <section className="py-16 px-4 border-b border-stone-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-gray-950 rounded-2xl p-6 text-white text-sm font-mono order-2 md:order-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="text-green-400 font-semibold text-xs">Session active</span>
              <span className="ml-auto text-gray-500 text-xs">2h 07m</span>
            </div>
            <div className="bg-gray-800 rounded-xl aspect-video flex items-center justify-center mb-4">
              <div className="text-center text-gray-500">
                <Camera className="w-8 h-8 mx-auto mb-2 opacity-40" />
                <p className="text-xs">Live from your living room</p>
              </div>
            </div>
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex justify-between">
                <span>Sitter location</span>
                <span className="text-white">At your address ✓</span>
              </div>
              <div className="flex justify-between">
                <span>Camera feed</span>
                <span className="text-green-400">Online</span>
              </div>
              <div className="flex justify-between">
                <span>Kids last seen</span>
                <span className="text-white">Watching a film</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-black text-gray-950 mb-4 leading-tight">
              Watch what's happening at home, from anywhere
            </h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Camera-verified sitters bring a paired device. While you're at dinner, you can pull up a live feed of your living room. It auto-deletes 72 hours after the session — we don't store it.
            </p>
            <div className="space-y-3">
              {[
                "Only you can view the stream — not us, not the sitter",
                "One tap to flag an issue — footage locks immediately",
                "Sitter sees a visible recording light, so everyone's on the same page",
              ].map((item) => (
                <div key={item} className="flex gap-2.5 items-start">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured sitters */}
      <section className="py-16 px-4 border-b border-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-black text-gray-950">Sitters available this week</h2>
              <p className="text-gray-400 text-sm mt-1">Sorted by rating · All background-checked</p>
            </div>
            <Link href="/browse" className="flex items-center gap-1 text-sm font-semibold text-orange-500 hover:text-orange-600">
              See all <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {featured.map((sitter) => (
              <SitterCard key={sitter.id} sitter={sitter} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works — no icon grid, just numbered steps inline */}
      <section className="py-16 px-4 bg-[#faf8f5] border-b border-stone-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-gray-950 mb-10">How it actually works</h2>
          <div className="space-y-0">
            {[
              {
                n: "1",
                title: "Search by date, time, and distance",
                body: "Put in when you need someone and we show you who's free near you — real availability, not a waitlist.",
              },
              {
                n: "2",
                title: "Read the reviews, then message them",
                body: "Every sitter has real reviews from real bookings. You can message before committing. No awkward surprises.",
              },
              {
                n: "3",
                title: "Book and pay in one go",
                body: "Card held until the session ends, then charged automatically. If they cancel last minute, you pay nothing.",
              },
              {
                n: "4",
                title: "Enjoy the evening — check in if you want",
                body: "Camera sitters let you watch the live stream from your phone. Or don't — that's fine too.",
              },
            ].map((step, i) => (
              <div key={step.n} className={`flex gap-6 py-8 ${i < 3 ? "border-b border-stone-200" : ""}`}>
                <div className="text-4xl font-black text-stone-200 leading-none shrink-0 w-8">{step.n}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — feels less polished, more real */}
      <section className="py-16 px-4 border-b border-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-gray-950 mb-8">What parents say</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Emma R.",
                location: "Austin",
                quote: "Booked 2 days before our anniversary dinner. Took maybe 5 minutes. The camera thing actually made us stop checking our phones every 10 minutes.",
                stars: 5,
              },
              {
                name: "James K.",
                location: "Brooklyn",
                quote: "We've used it 12 times. The sitters vary a bit but the ones with lots of reviews are consistently solid. Would not go back to asking family.",
                stars: 5,
              },
              {
                name: "Marcus T.",
                location: "Chicago",
                quote: "Single dad here. This is the only way I can go to evening work stuff without stressing the whole time. Big deal for me.",
                stars: 5,
              },
            ].map((t) => (
              <div key={t.name} className="bg-white border border-stone-200 rounded-2xl p-5">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety — not a list of badges, just honest copy */}
      <section className="py-16 px-4 bg-gray-950 text-white border-b border-gray-800">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-black mb-4 leading-tight">
              The safety stuff is real, not marketing
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Every sitter on NestWatch has passed a criminal background check and sex offender registry lookup before their first booking. It's not optional. Neither is CPR certification.
            </p>
            <Link href="/safety" className="inline-flex items-center gap-1.5 text-orange-400 font-semibold text-sm hover:text-orange-300">
              Read the full safety details <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="space-y-4 text-sm">
            {[
              { label: "Background check", detail: "Criminal + sex offender registry, re-run every 12 months" },
              { label: "ID verification", detail: "Government ID + liveness check before approval" },
              { label: "CPR required", detail: "Current certification mandatory. Certificate expires = sitter suspended" },
              { label: "Location tracking", detail: "Active during every session. Leaves the address? You're notified" },
              { label: "Incident response", detail: "24/7 safety team. One tap locks footage and escalates" },
            ].map((item) => (
              <div key={item.label} className="flex gap-3 border-b border-gray-800 pb-4">
                <CheckCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{item.label}</p>
                  <p className="text-gray-500">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sitter CTA */}
      <section className="py-16 px-4 border-b border-stone-100">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-gray-950 mb-2">You love working with kids?</h2>
            <p className="text-gray-500">Set your own hours, $15–$25/hr, choose which families you take on.</p>
          </div>
          <Link href="/become-sitter" className="shrink-0 bg-gray-950 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-gray-800 transition-colors">
            Apply to babysit
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 text-center bg-orange-500">
        <h2 className="text-4xl font-black text-white mb-3">Friday's sorted.</h2>
        <p className="text-orange-100 mb-8">Find a sitter near you tonight.</p>
        <Link href="/browse" className="bg-white text-orange-600 font-bold text-base px-8 py-3.5 rounded-xl hover:bg-orange-50 transition-colors">
          Browse sitters
        </Link>
      </section>
    </div>
  );
}
