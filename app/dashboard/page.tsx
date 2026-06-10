"use client";
import { useState } from "react";
import { Calendar, Camera, Clock, Star, MapPin, MessageCircle, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";

const upcomingBookings = [
  {
    id: "b1",
    sitter: "Daniel Park",
    avatar: "DP",
    date: "Friday, Jun 13",
    time: "7:00 PM – 11:00 PM",
    hours: 4,
    total: 96.80,
    status: "confirmed",
    cameraVerified: true,
  },
];

const pastBookings = [
  {
    id: "b2",
    sitter: "Sarah Mitchell",
    avatar: "SM",
    date: "Sat, May 31",
    time: "6:30 PM – 10:30 PM",
    hours: 4,
    total: 79.20,
    status: "completed",
    rated: true,
    rating: 5,
  },
  {
    id: "b3",
    sitter: "Amara Osei",
    avatar: "AO",
    date: "Fri, May 16",
    time: "7:00 PM – 10:00 PM",
    hours: 3,
    total: 62.70,
    status: "completed",
    rated: false,
    rating: 0,
  },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My bookings</h1>
          <p className="text-gray-500 text-sm mt-0.5">Manage your upcoming sessions and review past ones</p>
        </div>
        <Link href="/browse" className="bg-violet-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-violet-700 transition-colors">
          + New booking
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Total sessions", value: "7", icon: <Calendar className="w-4 h-4 text-violet-600" /> },
          { label: "Hours covered", value: "26h", icon: <Clock className="w-4 h-4 text-violet-600" /> },
          { label: "Avg sitter rating", value: "4.9★", icon: <Star className="w-4 h-4 text-yellow-500" /> },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm text-center">
            <div className="flex justify-center mb-1">{s.icon}</div>
            <p className="text-2xl font-black text-gray-900">{s.value}</p>
            <p className="text-xs text-gray-400">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-6 w-fit">
        {(["upcoming", "past"] as const).map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-lg text-sm font-semibold capitalize transition-colors ${activeTab === tab ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "upcoming" && (
        <div className="space-y-4">
          {upcomingBookings.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <Calendar className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p>No upcoming bookings</p>
              <Link href="/browse" className="text-violet-600 text-sm font-semibold mt-2 inline-block">Browse sitters →</Link>
            </div>
          ) : (
            upcomingBookings.map((b) => (
              <div key={b.id} className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-600 text-white flex items-center justify-center font-bold shrink-0">
                    {b.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <p className="font-bold text-gray-900">{b.sitter}</p>
                        <p className="text-sm text-gray-500">{b.date} · {b.time}</p>
                      </div>
                      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> Confirmed
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-3 text-xs text-gray-500 flex-wrap">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {b.hours}h session</span>
                      <span className="font-semibold text-gray-800">${b.total.toFixed(2)} total</span>
                      {b.cameraVerified && (
                        <span className="flex items-center gap-1 text-violet-600"><Camera className="w-3.5 h-3.5" /> Camera enabled</span>
                      )}
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button className="flex items-center gap-1.5 text-xs border border-gray-200 px-3 py-2 rounded-lg hover:border-violet-300 transition-colors">
                        <MessageCircle className="w-3.5 h-3.5" /> Message
                      </button>
                      <button className="flex items-center gap-1.5 text-xs border border-gray-200 px-3 py-2 rounded-lg hover:border-violet-300 transition-colors">
                        <MapPin className="w-3.5 h-3.5" /> Track location
                      </button>
                      {b.cameraVerified && (
                        <button className="flex items-center gap-1.5 text-xs bg-violet-50 text-violet-700 border border-violet-200 px-3 py-2 rounded-lg hover:bg-violet-100 transition-colors font-semibold">
                          <Camera className="w-3.5 h-3.5" /> Live view
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {activeTab === "past" && (
        <div className="space-y-4">
          {pastBookings.map((b) => (
            <div key={b.id} className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-300 text-white flex items-center justify-center font-bold shrink-0">
                  {b.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <p className="font-bold text-gray-900">{b.sitter}</p>
                      <p className="text-sm text-gray-500">{b.date} · {b.time}</p>
                    </div>
                    <span className="bg-gray-100 text-gray-500 text-xs font-semibold px-2.5 py-1 rounded-full">Completed</span>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                    <span>{b.hours}h session</span>
                    <span className="font-semibold text-gray-700">${b.total.toFixed(2)}</span>
                  </div>
                  <div className="mt-3">
                    {b.rated ? (
                      <div className="flex items-center gap-1 text-xs text-yellow-500">
                        {Array.from({ length: b.rating }).map((_, i) => <span key={i}>★</span>)}
                        <span className="text-gray-400 ml-1">You rated this session</span>
                      </div>
                    ) : (
                      <button className="flex items-center gap-1.5 text-xs bg-yellow-50 text-yellow-700 border border-yellow-200 px-3 py-2 rounded-lg hover:bg-yellow-100 transition-colors font-semibold">
                        <AlertCircle className="w-3.5 h-3.5" /> Leave a review
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
