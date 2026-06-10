import { MapPin, Users, CreditCard, Camera, MessageCircle, Star, ShieldCheck, CheckCircle } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: <MapPin className="w-8 h-8 text-violet-600" />,
    title: "1. Tell us what you need",
    desc: "Enter your neighbourhood, the date and time you need coverage, how many kids, and any special requirements (allergies, special needs, bilingual preferred, etc.).",
  },
  {
    icon: <Users className="w-8 h-8 text-violet-600" />,
    title: "2. Browse verified sitters",
    desc: "We surface available sitters near you ranked by rating and distance. Every profile shows background check status, certifications, reviews, and whether they carry the camera kit.",
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-violet-600" />,
    title: "3. Chat before you commit",
    desc: "Send a quick message to your top pick. Ask questions, confirm details, and feel comfortable before you request the booking.",
  },
  {
    icon: <CreditCard className="w-8 h-8 text-violet-600" />,
    title: "4. Request & pay securely",
    desc: "Submit your booking request. Your card is held but not charged until the sitter confirms. Payment is automatic when the session ends.",
  },
  {
    icon: <Camera className="w-8 h-8 text-violet-600" />,
    title: "5. Watch the live stream (optional)",
    desc: "Camera-verified sitters carry a paired device. During the session, open the app and tap 'Live view' to see your home in real time. Only you can access the feed.",
  },
  {
    icon: <Star className="w-8 h-8 text-violet-600" />,
    title: "6. Rate and review",
    desc: "After the session, leave a review that helps other parents. Sitters with consistent 5-star reviews get promoted in search.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">How NestWatch works</h1>
        <p className="text-xl text-gray-500 max-w-xl mx-auto">
          From search to front door in under 10 minutes. Here&apos;s exactly what happens.
        </p>
      </div>

      <div className="space-y-8 mb-20">
        {steps.map((step) => (
          <div key={step.title} className="flex gap-5 items-start bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <div className="bg-violet-50 rounded-xl w-14 h-14 flex items-center justify-center shrink-0">
              {step.icon}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pricing */}
      <div className="bg-violet-50 rounded-3xl p-10 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Simple, transparent pricing</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center text-sm">
          {[
            { label: "Sitter rate", value: "$15–$25/hr", sub: "Set by each sitter" },
            { label: "Platform fee", value: "10%", sub: "Added to the total" },
            { label: "Subscription", value: "None", sub: "Pay only when you book" },
          ].map((p) => (
            <div key={p.label} className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-gray-500 mb-1">{p.label}</p>
              <p className="text-2xl font-black text-violet-600">{p.value}</p>
              <p className="text-gray-400 text-xs mt-1">{p.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Guarantees */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our guarantees</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Full refund if the sitter cancels less than 4 hours before",
            "Safety team on call 24/7 during active sessions",
            "Sitter location tracked in real time",
            "Camera footage preserved if you flag an incident",
            "All sitters re-verified every 12 months",
            "No hidden fees — total shown before you confirm",
          ].map((g) => (
            <div key={g} className="flex gap-3 items-start">
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <p className="text-gray-700 text-sm">{g}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link href="/browse" className="bg-violet-600 text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-violet-700 transition-colors shadow-lg shadow-violet-200">
          Find a sitter now
        </Link>
      </div>
    </div>
  );
}
