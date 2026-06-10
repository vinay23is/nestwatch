"use client";
import { useState } from "react";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import type { Sitter } from "@/lib/data";
import Link from "next/link";

export default function BookingPanel({ sitter }: { sitter: Sitter }) {
  const [date, setDate] = useState("");
  const [start, setStart] = useState("19:00");
  const [end, setEnd] = useState("23:00");
  const [booked, setBooked] = useState(false);

  const startH = parseInt(start.split(":")[0]);
  const endH = parseInt(end.split(":")[0]);
  const hours = endH > startH ? endH - startH : 0;
  const subtotal = hours * sitter.hourlyRate;
  const fee = parseFloat((subtotal * 0.1).toFixed(2));
  const total = subtotal + fee;

  if (booked) {
    return (
      <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-6 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
        <h3 className="font-bold text-gray-900 text-lg mb-1">Booking confirmed!</h3>
        <p className="text-gray-500 text-sm mb-4">
          {sitter.name.split(" ")[0]} has been notified and will confirm within 2 hours.
        </p>
        <div className="bg-gray-50 rounded-xl p-4 text-sm text-left space-y-1 mb-4">
          <p><span className="text-gray-400">Date:</span> {date || "—"}</p>
          <p><span className="text-gray-400">Time:</span> {start} – {end}</p>
          <p><span className="text-gray-400">Duration:</span> {hours}h</p>
          <p><span className="text-gray-400">Total charged:</span> ${total.toFixed(2)}</p>
        </div>
        <Link href="/dashboard" className="block w-full bg-violet-600 text-white text-sm font-semibold py-3 rounded-xl hover:bg-violet-700 transition-colors">
          Go to my dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-6">
      <p className="font-bold text-gray-900 text-lg mb-1">${sitter.hourlyRate}<span className="text-gray-400 font-normal text-sm">/hr</span></p>
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`text-yellow-400 text-xs ${i < Math.round(sitter.rating) ? "opacity-100" : "opacity-20"}`}>★</span>
        ))}
        <span className="text-xs text-gray-400 ml-1">{sitter.rating} · {sitter.reviewCount} reviews</span>
      </div>

      <div className="space-y-3 mb-4">
        <div>
          <label className="text-xs font-semibold text-gray-500 block mb-1">
            <Calendar className="w-3.5 h-3.5 inline mr-1" />Date
          </label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-xs font-semibold text-gray-500 block mb-1">
              <Clock className="w-3.5 h-3.5 inline mr-1" />Start
            </label>
            <input type="time" value={start} onChange={(e) => setStart(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300" />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 block mb-1">End</label>
            <input type="time" value={end} onChange={(e) => setEnd(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300" />
          </div>
        </div>
      </div>

      {hours > 0 && (
        <div className="bg-gray-50 rounded-xl p-3 text-sm space-y-1 mb-4">
          <div className="flex justify-between text-gray-600">
            <span>${sitter.hourlyRate} × {hours}h</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Platform fee (10%)</span>
            <span>${fee}</span>
          </div>
          <div className="flex justify-between font-bold text-gray-900 pt-1 border-t border-gray-200">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      )}

      <button
        onClick={() => date && hours > 0 && setBooked(true)}
        disabled={!date || hours <= 0}
        className="w-full bg-violet-600 text-white font-semibold py-3 rounded-xl hover:bg-violet-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {!date ? "Select a date to book" : hours <= 0 ? "Set a valid time range" : `Request booking · $${total.toFixed(2)}`}
      </button>
      <p className="text-xs text-gray-400 text-center mt-2">You won&apos;t be charged until confirmed</p>
    </div>
  );
}
