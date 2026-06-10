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
      <Link href="/browse" className="inline-flex items-center gap-1 text-gray-500 text-sm hover:text-violet-600 mb-6">
        <ChevronLeft className="w-4 h-4" /> Back to browse
      </Link>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Left: profile */}
        <div className="md:col-span-2 space-y-8">
          {/* Header */}
          <div className="flex gap-5 items-start">
            <div className="w-20 h-20 rounded-2xl bg-violet-600 text-white flex items-center justify-center text-2xl font-bold shrink-0 shadow-md">
              {sitter.avatar}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl font-bold text-gray-900">{sitter.name}</h1>
                <span className="text-gray-400 text-sm">Age {sitter.age}</span>
                {sitter.availableTonight && (
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">Available tonight</span>
                )}
              </div>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500 flex-wrap">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <strong className="text-gray-900">{sitter.rating}</strong> ({sitter.reviewCount} reviews)
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {sitter.distance} mi away
                </span>
                <span className="font-bold text-violet-600 text-base">${sitter.hourlyRate}/hr</span>
              </div>
              <div className="flex gap-2 mt-3 flex-wrap">
                {sitter.backgroundCheck && (
                  <span className="flex items-center gap-1 bg-green-50 text-green-700 text-xs px-2.5 py-1 rounded-full font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" /> Background checked
                  </span>
                )}
                {sitter.cameraVerified && (
                  <span className="flex items-center gap-1 bg-violet-50 text-violet-700 text-xs px-2.5 py-1 rounded-full font-semibold">
                    <Camera className="w-3.5 h-3.5" /> Camera verified
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h2 className="font-bold text-gray-900 text-lg mb-2">About {sitter.name.split(" ")[0]}</h2>
            <p className="text-gray-600 leading-relaxed">{sitter.bio}</p>
          </div>

          {/* Specialties */}
          <div>
            <h2 className="font-bold text-gray-900 text-lg mb-3">Specialties</h2>
            <div className="flex flex-wrap gap-2">
              {sitter.specialties.map((s) => (
                <span key={s} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">{s}</span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="font-bold text-gray-900 text-lg mb-3">Certifications</h2>
            <div className="space-y-2">
              {sitter.certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2 text-sm text-gray-700">
                  <Award className="w-4 h-4 text-violet-500" />
                  {cert}
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h2 className="font-bold text-gray-900 text-lg mb-4">
              Reviews <span className="text-gray-400 font-normal text-sm">({sitter.reviewCount} total)</span>
            </h2>
            <div className="space-y-4">
              {sitter.reviews.map((r) => (
                <div key={r.author} className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold text-gray-900 text-sm">{r.author}</p>
                    <span className="text-xs text-gray-400">{r.date}</span>
                  </div>
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">{r.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: booking panel */}
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <BookingPanel sitter={sitter} />
            <button className="w-full mt-3 flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:border-violet-300 transition-colors">
              <MessageCircle className="w-4 h-4" /> Message {sitter.name.split(" ")[0]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
