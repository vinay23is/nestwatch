"use client";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
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
      <div className="bg-white border border-stone-200 rounded-2xl p-6 text-center">
        <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
        <h3 className="font-bold text-gray-900 mb-1">Booking sent</h3>
        <p className="text-gray-500 text-sm mb-4">
          {sitter.name.split(" ")[0]} has 2 hours to confirm. You&apos;ll get a text when they do.
        </p>
        <div className="bg-stone-50 rounded-xl p-4 text-xs text-left space-y-1.5 mb-4 border border-stone-100">
          <div className="flex justify-between"><span className="text-gray-400">Date</span><span className="font-medium">{date}</span></div>
          <div className="flex justify-between"><span className="text-gray-400">Time</span><span className="font-medium">{start} – {end}</span></div>
          <div className="flex justify-between"><span className="text-gray-400">Duration</span><span className="font-medium">{hours}h</span></div>
          <div className="flex justify-between border-t border-stone-200 pt-1.5 mt-1.5"><span className="text-gray-600 font-semibold">Total</span><span className="font-bold">${total.toFixed(2)}</span></div>
        </div>
        <Link href="/dashboard" className="block w-full bg-orange-500 text-white text-sm font-bold py-3 rounded-xl hover:bg-orange-600 transition-colors">
          View in dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-5">
      <div className="mb-4">
        <span className="text-2xl font-black text-gray-900">${sitter.hourlyRate}</span>
        <span className="text-gray-400 text-sm"> / hour</span>
      </div>

      <div className="space-y-3 mb-4">
        <div>
          <label className="text-xs font-semibold text-gray-500 block mb-1">Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
            className="w-full border border-stone-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-xs font-semibold text-gray-500 block mb-1">From</label>
            <input type="time" value={start} onChange={(e) => setStart(e.target.value)}
              className="w-full border border-stone-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400" />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 block mb-1">Until</label>
            <input type="time" value={end} onChange={(e) => setEnd(e.target.value)}
              className="w-full border border-stone-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400" />
          </div>
        </div>
      </div>

      {hours > 0 && (
        <div className="bg-stone-50 rounded-xl p-3 text-xs space-y-1.5 mb-4 border border-stone-100">
          <div className="flex justify-between text-gray-500">
            <span>${sitter.hourlyRate} × {hours}h</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span>Platform fee</span>
            <span>${fee}</span>
          </div>
          <div className="flex justify-between font-bold text-gray-900 pt-1.5 border-t border-stone-200">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      )}

      <button
        onClick={() => date && hours > 0 && setBooked(true)}
        disabled={!date || hours <= 0}
        className="w-full bg-orange-500 text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-sm"
      >
        {!date ? "Pick a date" : hours <= 0 ? "Fix the time range" : `Request · $${total.toFixed(2)}`}
      </button>
      <p className="text-xs text-gray-400 text-center mt-2">Card held, not charged until confirmed</p>
    </div>
  );
}
