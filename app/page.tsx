import Link from "next/link";
import { ShieldCheck, Camera, Star, Clock, MapPin, CheckCircle, ArrowRight, Users, Heart, Zap } from "lucide-react";
import { sitters } from "@/lib/data";
import SitterCard from "@/components/SitterCard";

export default function Home() {
  const featured = sitters.filter((s) => s.cameraVerified).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-50 via-white to-purple-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">
            <Camera className="w-3.5 h-3.5" /> Camera-verified sitters — safety first
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            A great night out starts with{" "}
            <span className="text-violet-600">a sitter you trust</span>
          </h1>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Book a background-checked, camera-equipped babysitter in your area — as easily as ordering food delivery. Available tonight.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/browse"
              className="bg-violet-600 text-white text-lg font-semibold px-8 py-4 rounded-full hover:bg-violet-700 transition-colors shadow-lg shadow-violet-200"
            >
              Find a sitter near me
            </Link>
            <Link
              href="/how-it-works"
              className="bg-white text-gray-700 text-lg font-semibold px-8 py-4 rounded-full border border-gray-200 hover:border-violet-300 transition-colors"
            >
              See how it works
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Join 12,000+ families who booked last month · No subscription required
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-gray-100 bg-white py-6 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: <ShieldCheck className="w-5 h-5 text-violet-600 mx-auto mb-1" />, label: "Background checked", sub: "Every sitter vetted" },
            { icon: <Camera className="w-5 h-5 text-violet-600 mx-auto mb-1" />, label: "Live camera stream", sub: "Watch in real time" },
            { icon: <Star className="w-5 h-5 text-violet-600 mx-auto mb-1" />, label: "4.8★ avg rating", sub: "From 40k+ reviews" },
            { icon: <Clock className="w-5 h-5 text-violet-600 mx-auto mb-1" />, label: "Book in 3 minutes", sub: "Even last minute" },
          ].map((item, i) => (
            <div key={i}>
              {item.icon}
              <p className="text-sm font-semibold text-gray-800">{item.label}</p>
              <p className="text-xs text-gray-400">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">Book a sitter in 3 steps</h2>
          <p className="text-center text-gray-500 mb-14">Faster than calling a family member</p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                icon: <MapPin className="w-7 h-7 text-violet-600" />,
                title: "Enter your date & location",
                desc: "Tell us when you need coverage and where. We surface available sitters in your area sorted by rating and distance.",
              },
              {
                step: "02",
                icon: <Users className="w-7 h-7 text-violet-600" />,
                title: "Pick the right person",
                desc: "Browse verified profiles, read real reviews, check certifications, and chat with your top pick before committing.",
              },
              {
                step: "03",
                icon: <Heart className="w-7 h-7 text-violet-600" />,
                title: "Enjoy your evening",
                desc: "Track your sitter en route, watch the optional live camera feed, and pay automatically when the session ends.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-black text-violet-50 absolute -top-4 -left-2 select-none">{item.step}</div>
                <div className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-violet-50 rounded-xl w-12 h-12 flex items-center justify-center mb-4">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured sitters */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Top-rated sitters near you</h2>
              <p className="text-gray-500 mt-1">Camera-verified · Available this week</p>
            </div>
            <Link href="/browse" className="hidden md:flex items-center gap-1 text-violet-600 font-semibold text-sm hover:underline">
              See all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((sitter) => (
              <SitterCard key={sitter.id} sitter={sitter} />
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link href="/browse" className="text-violet-600 font-semibold">See all sitters →</Link>
          </div>
        </div>
      </section>

      {/* Safety section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-violet-600 font-semibold text-sm uppercase tracking-wide">Safety First</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6 leading-tight">
              We take your child&apos;s safety as seriously as you do
            </h2>
            <div className="space-y-4">
              {[
                { title: "Multi-layer background checks", desc: "Criminal record, sex offender registry, and identity verified before any sitter goes live." },
                { title: "Live camera streaming", desc: "Sitters carry a paired camera device. Only you can view the feed. Footage stored 72h then deleted." },
                { title: "Real-time location tracking", desc: "We track sitter location from the moment they head to your home until the session ends." },
                { title: "Incident escalation", desc: "One tap flags an incident and locks the footage. Our safety team responds within 10 minutes." },
                { title: "CPR & first aid required", desc: "All sitters must hold current CPR certification. First aid strongly encouraged." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-violet-600 to-purple-700 rounded-3xl p-8 text-white shadow-xl shadow-violet-200">
            <Camera className="w-10 h-10 mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-3">Live session view</h3>
            <p className="opacity-80 mb-6 text-sm leading-relaxed">
              During the session, open the app and see a live stream from your sitter&apos;s camera — anytime, from anywhere.
            </p>
            <div className="bg-white/10 rounded-2xl p-4 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Session active · 2h 14m elapsed
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 opacity-60" />
                Sitter at your home address
              </div>
              <div className="flex items-center gap-2">
                <Camera className="w-3.5 h-3.5 opacity-60" />
                Camera online · Tap to view
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-violet-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Parents love NestWatch</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Emma R.", location: "Austin, TX", quote: "I booked a sitter 2 days before our anniversary dinner. Took 4 minutes. The live camera gave us so much peace of mind.", stars: 5 },
              { name: "James & Priya K.", location: "Brooklyn, NY", quote: "We've used NestWatch 15+ times. The sitters are consistently great and the background check process actually means something.", stars: 5 },
              { name: "Marcus T.", location: "Chicago, IL", quote: "As a single dad I was nervous. Now I can go to evening work events and know my daughter is safe and having fun.", stars: 5 },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For sitters CTA */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-3">Love working with kids? Earn on your schedule.</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Set your own hours, pick the families you work with, and earn $15–$25/hr. Top sitters make $2,000+ per month.
          </p>
          <Link href="/become-sitter" className="bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition-colors text-lg">
            Apply to become a sitter
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready for your night out?</h2>
        <p className="text-gray-500 mb-8">Find a trusted sitter available near you tonight.</p>
        <Link href="/browse" className="bg-violet-600 text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-violet-700 transition-colors shadow-lg shadow-violet-200">
          Browse sitters now
        </Link>
      </section>
    </div>
  );
}
