import Link from "next/link";
import { Star, MapPin, Camera, ShieldCheck } from "lucide-react";
import type { Sitter } from "@/lib/data";

export default function SitterCard({ sitter }: { sitter: Sitter }) {
  return (
    <Link href={`/sitter/${sitter.id}`} className="block bg-white rounded-2xl border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all overflow-hidden group">
      <div className="p-5">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-600 flex items-center justify-center text-sm font-black shrink-0">
            {sitter.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <p className="font-bold text-gray-900 truncate">{sitter.name}</p>
              <p className="text-sm font-bold text-gray-800 shrink-0">${sitter.hourlyRate}<span className="text-gray-400 font-normal text-xs">/hr</span></p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5">
              <span className="flex items-center gap-0.5 text-yellow-500 font-bold">
                <Star className="w-3 h-3 fill-yellow-400" />{sitter.rating}
              </span>
              <span className="text-stone-300">·</span>
              <span>{sitter.reviewCount} reviews</span>
              <span className="text-stone-300">·</span>
              <span className="flex items-center gap-0.5"><MapPin className="w-3 h-3" />{sitter.distance} mi</span>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-3">{sitter.bio}</p>

        <div className="flex items-center gap-2 flex-wrap">
          {sitter.availableTonight && (
            <span className="bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded-md font-semibold border border-green-100">
              Free tonight
            </span>
          )}
          {sitter.backgroundCheck && (
            <span className="flex items-center gap-1 text-gray-400 text-xs">
              <ShieldCheck className="w-3 h-3 text-green-500" /> Checked
            </span>
          )}
          {sitter.cameraVerified && (
            <span className="flex items-center gap-1 text-gray-400 text-xs">
              <Camera className="w-3 h-3 text-orange-400" /> Camera
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
