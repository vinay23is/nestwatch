"use client";
import { useState } from "react";
import { sitters } from "@/lib/data";
import SitterCard from "@/components/SitterCard";
import { Search, SlidersHorizontal, Camera, ShieldCheck } from "lucide-react";

export default function BrowsePage() {
  const [search, setSearch] = useState("");
  const [maxRate, setMaxRate] = useState(25);
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [onlyCamera, setOnlyCamera] = useState(false);
  const [minRating, setMinRating] = useState(0);

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
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Find your sitter</h1>
        <p className="text-gray-500">All sitters are background-checked. Filter by availability, price, and more.</p>
      </div>

      {/* Search + filters */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 mb-8">
        <div className="flex gap-3 mb-5">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name or specialty (e.g. toddlers, CPR, bilingual)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:border-violet-300">
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1 block">Max hourly rate: ${maxRate}</label>
            <input type="range" min={10} max={30} value={maxRate} onChange={(e) => setMaxRate(Number(e.target.value))}
              className="w-full accent-violet-600" />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1 block">Min rating: {minRating > 0 ? `${minRating}★` : "Any"}</label>
            <input type="range" min={0} max={5} step={0.5} value={minRating} onChange={(e) => setMinRating(Number(e.target.value))}
              className="w-full accent-violet-600" />
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={onlyAvailable} onChange={(e) => setOnlyAvailable(e.target.checked)} className="accent-violet-600 w-4 h-4" />
            <span className="text-sm text-gray-700 font-medium">Available tonight only</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={onlyCamera} onChange={(e) => setOnlyCamera(e.target.checked)} className="accent-violet-600 w-4 h-4" />
            <span className="text-sm text-gray-700 font-medium flex items-center gap-1">
              <Camera className="w-3.5 h-3.5 text-violet-600" /> Camera-verified only
            </span>
          </label>
        </div>
      </div>

      {/* Results */}
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm text-gray-500">{filtered.length} sitter{filtered.length !== 1 ? "s" : ""} found</p>
        <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none">
          <option>Sort: Top rated</option>
          <option>Sort: Price low–high</option>
          <option>Sort: Nearest first</option>
          <option>Sort: Most reviews</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <ShieldCheck className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p className="text-lg font-semibold">No sitters match your filters</p>
          <p className="text-sm">Try adjusting the price range or turning off some filters</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((sitter) => (
            <SitterCard key={sitter.id} sitter={sitter} />
          ))}
        </div>
      )}
    </div>
  );
}
