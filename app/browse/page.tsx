"use client";
import { useState } from "react";
import { sitters } from "@/lib/data";
import SitterCard from "@/components/SitterCard";
import { Search, Camera, SlidersHorizontal } from "lucide-react";

export default function BrowsePage() {
  const [search, setSearch] = useState("");
  const [maxRate, setMaxRate] = useState(25);
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [onlyCamera, setOnlyCamera] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = sitters.filter((s) => {
    if (search && !s.name.toLowerCase().includes(search.toLowerCase()) && !s.specialties.join(" ").toLowerCase().includes(search.toLowerCase())) return false;
    if (s.hourlyRate > maxRate) return false;
    if (onlyAvailable && !s.availableTonight) return false;
    if (onlyCamera && !s.cameraVerified) return false;
    if (s.rating < minRating) return false;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-7">
        <h1 className="text-2xl font-black text-gray-950">Find a sitter</h1>
        <p className="text-gray-400 text-sm mt-1">Every sitter below has passed a background check.</p>
      </div>

      {/* Search bar */}
      <div className="flex gap-2 mb-3">
        <div className="flex-1 relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by name or specialty — e.g. toddlers, bilingual, special needs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-4 py-2.5 border rounded-xl text-sm font-medium transition-colors ${showFilters ? "border-orange-400 text-orange-600 bg-orange-50" : "border-stone-200 text-gray-600 hover:border-stone-300"}`}
        >
          <SlidersHorizontal className="w-4 h-4" /> Filters
        </button>
      </div>

      {/* Expandable filters */}
      {showFilters && (
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 mb-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Max rate: ${maxRate}/hr</label>
            <input type="range" min={10} max={30} value={maxRate} onChange={(e) => setMaxRate(Number(e.target.value))}
              className="w-full accent-orange-500" />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Min rating: {minRating > 0 ? `${minRating}★` : "any"}</label>
            <input type="range" min={0} max={5} step={0.5} value={minRating} onChange={(e) => setMinRating(Number(e.target.value))}
              className="w-full accent-orange-500" />
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={onlyAvailable} onChange={(e) => setOnlyAvailable(e.target.checked)} className="accent-orange-500 w-4 h-4 rounded" />
            <span className="text-sm text-gray-700">Available tonight only</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={onlyCamera} onChange={(e) => setOnlyCamera(e.target.checked)} className="accent-orange-500 w-4 h-4 rounded" />
            <span className="text-sm text-gray-700 flex items-center gap-1">
              <Camera className="w-3.5 h-3.5 text-orange-400" /> Camera-verified only
            </span>
          </label>
        </div>
      )}

      <div className="flex items-center justify-between mb-5">
        <p className="text-xs text-gray-400">{filtered.length} sitter{filtered.length !== 1 ? "s" : ""}</p>
        <select className="text-xs border border-stone-200 rounded-lg px-3 py-1.5 focus:outline-none text-gray-600">
          <option>Top rated first</option>
          <option>Price: low to high</option>
          <option>Nearest first</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-base font-semibold mb-1">No one matches those filters</p>
          <p className="text-sm">Try loosening the price range or turning off a filter</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((sitter) => (
            <SitterCard key={sitter.id} sitter={sitter} />
          ))}
        </div>
      )}
    </div>
  );
}
