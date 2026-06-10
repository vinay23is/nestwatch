import Link from "next/link";
import { Star, MapPin, Camera, ShieldCheck } from "lucide-react";
import type { Sitter } from "@/lib/data";

export default function SitterCard({ sitter }: { sitter: Sitter }) {
  return (
    <Link href={`/sitter/${sitter.id}`} className="block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
      <div className="bg-gradient-to-br from-violet-100 to-purple-100 h-28 flex items-center justify-center relative">
        <div className="w-16 h-16 rounded-full bg-violet-600 text-white flex items-center justify-center text-xl font-bold shadow-md">
          {sitter.avatar}
        </div>
        {sitter.availableTonight && (
          <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
            Available tonight
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <div>
            <p className="font-bold text-gray-900">{sitter.name}</p>
            <p className="text-xs text-gray-400">{sitter.experience} yrs experience</p>
          </div>
          <p className="text-violet-600 font-bold text-sm">${sitter.hourlyRate}/hr</p>
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            {sitter.rating} ({sitter.reviewCount})
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" /> {sitter.distance} mi
          </span>
        </div>
        <p className="text-xs text-gray-500 line-clamp-2 mb-3">{sitter.bio}</p>
        <div className="flex gap-2 flex-wrap">
          {sitter.backgroundCheck && (
            <span className="flex items-center gap-1 bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium">
              <ShieldCheck className="w-3 h-3" /> Verified
            </span>
          )}
          {sitter.cameraVerified && (
            <span className="flex items-center gap-1 bg-violet-50 text-violet-700 text-xs px-2 py-0.5 rounded-full font-medium">
              <Camera className="w-3 h-3" /> Camera
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
