import { ShieldCheck, Camera, MapPin, AlertTriangle, Award, Lock, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function SafetyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <ShieldCheck className="w-14 h-14 text-violet-600 mx-auto mb-4" />
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Our safety promise</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Safety is not a feature — it&apos;s the foundation everything else is built on.
        </p>
      </div>

      <div className="space-y-10 mb-20">
        {[
          {
            icon: <ShieldCheck className="w-7 h-7 text-violet-600" />,
            title: "Multi-layer background checks",
            points: [
              "National criminal record check via certified third-party provider",
              "Sex offender registry cross-check (all 50 states)",
              "Government-issued ID + liveness verification",
              "Social security number verification",
              "Re-verified every 12 months — lapsed sitters are automatically suspended",
            ],
          },
          {
            icon: <Camera className="w-7 h-7 text-violet-600" />,
            title: "Camera safety system",
            points: [
              "Camera-verified sitters carry a dedicated device or use the NestWatch sitter app",
              "Live stream is encrypted end-to-end (DTLS/SRTP) — only the parent can view it",
              "Footage is stored encrypted for 72 hours, then permanently deleted",
              "Both parties see a visible recording indicator during the session",
              "Parents can flag an incident in one tap — footage is immediately locked for review",
            ],
          },
          {
            icon: <MapPin className="w-7 h-7 text-violet-600" />,
            title: "Real-time location tracking",
            points: [
              "Sitter location is tracked from the moment they accept a booking",
              "Parents see a live map view of their sitter en route",
              "If the sitter leaves the home address during a session, parents are notified instantly",
              "Location data is deleted 24 hours after a session ends",
            ],
          },
          {
            icon: <AlertTriangle className="w-7 h-7 text-violet-600" />,
            title: "Incident response",
            points: [
              "24/7 safety team available during all active sessions",
              "One-tap emergency flag in parent app — escalates in under 10 minutes",
              "If you call 911, the app auto-notifies our team to assist",
              "Zero-tolerance policy: any substantiated incident = permanent ban",
            ],
          },
          {
            icon: <Award className="w-7 h-7 text-violet-600" />,
            title: "Certification standards",
            points: [
              "CPR certification is mandatory for all active sitters",
              "First aid training strongly encouraged — shown on profiles",
              "Childcare certifications displayed and verified before publishing",
              "Certificates expire — sitters are auto-reminded and must re-upload",
            ],
          },
          {
            icon: <Lock className="w-7 h-7 text-violet-600" />,
            title: "Data & privacy",
            points: [
              "All personal data encrypted at rest (AES-256) and in transit (TLS 1.3)",
              "COPPA compliant — children's data is never sold or shared",
              "GDPR and CCPA compliant — delete your data anytime",
              "Camera footage is never used for advertising or third-party purposes",
            ],
          },
        ].map((section) => (
          <div key={section.title} className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-violet-50 rounded-xl w-12 h-12 flex items-center justify-center">{section.icon}</div>
              <h2 className="font-bold text-gray-900 text-xl">{section.title}</h2>
            </div>
            <ul className="space-y-2">
              {section.points.map((p) => (
                <li key={p} className="flex gap-2 items-start text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-violet-600 text-white rounded-3xl p-10 text-center">
        <h2 className="text-2xl font-bold mb-3">Still have safety questions?</h2>
        <p className="opacity-80 mb-6">Our trust & safety team is available 24/7.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/browse" className="bg-white text-violet-600 font-bold px-7 py-3 rounded-full hover:bg-violet-50 transition-colors">
            Browse verified sitters
          </Link>
          <a href="mailto:safety@nestwatch.com" className="bg-violet-500 text-white font-bold px-7 py-3 rounded-full hover:bg-violet-400 transition-colors">
            Contact safety team
          </a>
        </div>
      </div>
    </div>
  );
}
