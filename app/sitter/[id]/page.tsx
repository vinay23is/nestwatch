import { sitters } from "@/lib/data";
import { notFound } from "next/navigation";
import { Star, MapPin, Camera, ShieldCheck, Award, ChevronLeft, MessageCircle } from "lucide-react";
import Link from "next/link";
import BookingPanel from "@/components/BookingPanel";

export default async function SitterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sitter = sitters.find((s) => s.id === id);
  if (!sitter) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Link href="/browse" className="inline-flex items-center gap-1 text-gray-400 text-sm hover:text-gray-700 mb-8">
        <ChevronLeft className="w-4 h-4" /> Back
      </Link>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Left */}
        <div className="md:col-span-2 space-y-8">
          {/* Header */}
          <div className="flex gap-4 items-start">
            <div className="w-16 h-16 rounded-2xl bg-stone-100 text-stone-600 flex items-center justify-center text-lg font-black shrink-0">
              {sitter.avatar}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h1 className="text-xl font-black text-gray-950">{sitter.name}</h1>
                <span className="text-gray-400 text-sm">· {sitter.age}</span>
                {sitter.availableTonight && (
                  <span className="bg-green-50 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-md border border-green-100">Free tonight</span>
                )}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400 flex-wrap">
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <strong className="text-gray-800">{sitter.rating}</strong> · {sitter.reviewCount} reviews
                </span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {sitter.distance} mi</span>
                <span className="font-bold text-gray-900 text-base">${sitter.hourlyRate}/hr</span>
              </div>
              <div className="flex gap-2 mt-2.5 flex-wrap">
                {sitter.backgroundCheck && (
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-green-500" /> Background checked
                  </span>
                )}
                {sitter.cameraVerified && (
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Camera className="w-3.5 h-3.5 text-orange-400" /> Camera verified
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* About */}
          <div className="border-t border-stone-100 pt-7">
            <h2 className="font-bold text-gray-900 mb-2">About {sitter.name.split(" ")[0]}</h2>
            <p className="text-gray-600 leading-relaxed text-sm">{sitter.bio}</p>
          </div>

          {/* Specialties */}
          <div className="border-t border-stone-100 pt-7">
            <h2 className="font-bold text-gray-900 mb-3">Good with</h2>
            <div className="flex flex-wrap gap-2">
              {sitter.specialties.map((s) => (
                <span key={s} className="bg-stone-100 text-gray-600 text-xs px-3 py-1.5 rounded-lg">{s}</span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="border-t border-stone-100 pt-7">
            <h2 className="font-bold text-gray-900 mb-3">Certifications</h2>
            <div className="space-y-2">
              {sitter.certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2 text-sm text-gray-600">
                  <Award className="w-4 h-4 text-orange-400" />
                  {cert}
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="border-t border-stone-100 pt-7">
            <h2 className="font-bold text-gray-900 mb-5">
              Reviews <span className="text-gray-400 font-normal text-sm">({sitter.reviewCount})</span>
            </h2>
            <div className="space-y-4">
              {sitter.reviews.map((r) => (
                <div key={r.author} className="border-b border-stone-100 pb-4 last:border-0">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="font-semibold text-gray-900 text-sm">{r.author}</p>
                    <span className="text-xs text-gray-400">{r.date}</span>
                  </div>
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{r.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: booking panel */}
        <div className="md:col-span-1">
          <div className="sticky top-20">
            <BookingPanel sitter={sitter} />
            <button className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 border border-stone-200 rounded-xl text-sm font-medium text-gray-500 hover:border-stone-300 transition-colors">
              <MessageCircle className="w-4 h-4" /> Message {sitter.name.split(" ")[0]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
