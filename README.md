# NestWatch — Babysitters on demand, with a safety layer that actually means something

This is a startup idea I'm working on. This repo is the prototype — a functional frontend to demonstrate the concept. The real product hasn't been built yet. This document is my thinking on how it should be built properly.

**Live demo:** https://babysitter-app-two.vercel.app

---

## The problem

Parents who want a spontaneous evening out — a last-minute dinner, a work event, a date — have no good options. The choices are:

- Ask a family member (not always possible, feels like a favour)
- Use an existing platform like Care.com or Sittercity (these are job boards, not on-demand — you post a job and wait days)
- Use an agency (expensive, slow, minimum booking commitments)

There's no equivalent of "open Uber and someone's there in 8 minutes" for childcare. That gap is the idea.

The second problem is trust. Leaving your kids with a stranger is not the same as getting in a stranger's car. The bar for trust is completely different. Most platforms do a background check and then leave it there. That's not enough for most parents, especially first-timers. The camera layer is what makes this different — it gives parents visibility during the session without being intrusive, and it creates accountability for sitters without being adversarial about it.

---

## What the real product needs to be

### The core loop

1. Parent opens app, enters date and time
2. Sees sitters available near them, sorted by rating and distance
3. Reads profile, reviews, and certifications
4. Optionally messages the sitter
5. Books and enters card details
6. Sitter confirms (or declines — in which case you get suggested alternatives)
7. Sitter arrives. Session starts via the app. Timer and location tracking begin.
8. Parent can open live camera feed at any time during the session
9. Session ends. Payment charged automatically. Parent rates sitter.

That loop has to be fast, reliable, and feel safe at every step. If any part of it breaks — sitter doesn't confirm, camera drops, payment fails — parents won't come back.

---

## How to build it correctly

### 1. Identity and trust infrastructure first

This is not a feature you bolt on later. It has to be the foundation.

**For sitters:**
- Government ID verification with liveness check. Use a service like [Persona](https://withpersona.com) or [Onfido](https://onfido.com). Don't build this yourself.
- Criminal background check via [Checkr](https://checkr.com) — they have an API, handle compliance, and can return results in hours not days
- Sex offender registry check (Checkr covers this)
- Store the check result and expiry date. If a sitter's check is 12+ months old, auto-suspend them and notify them to re-verify.
- CPR certification upload — manual review initially, OCR automation later

**For parents:**
- Phone number verification minimum
- Email verification
- Eventually: home address verification tied to bookings (the sitter needs to know where they're going)

Don't cut corners here. One serious incident on your platform and it's over.

### 2. The camera system

This is the differentiator. It's also the hardest thing to build correctly.

**What it needs to do:**
- Sitter opens the sitter app at session start. This activates the camera stream.
- Parent opens the parent app and can view the live feed. Nobody else can.
- Stream is encrypted in transit (WebRTC with DTLS-SRTP)
- A visible indicator light/icon is shown to the sitter at all times while streaming — consent and transparency matter legally and ethically
- Footage is stored server-side for 72 hours, then permanently deleted
- If a parent flags an incident during or after a session, the footage for that session is locked and held until reviewed

**What to use:**
- [Daily.co](https://www.daily.co) or [Twilio Video](https://www.twilio.com/video) for WebRTC streaming — don't build your own WebRTC signalling server
- Store footage in S3 with server-side AES-256 encryption and a lifecycle rule that deletes after 72 hours
- Only issue signed, time-limited URLs for playback — never expose raw S3 paths

**Legal things to sort out before launch:**
- Every sitter needs to explicitly consent to recording at onboarding
- Parents need to consent to the data retention policy
- Check recording consent laws in every state you operate in — some states require two-party consent even for video
- COPPA applies because children's data is involved. Talk to a lawyer before you handle any data in a live product.

### 3. Payments

Use [Stripe Connect](https://stripe.com/connect). This is the right tool for marketplace payments. Don't try to handle this yourself.

Here's how it works for this use case:
- Parent adds a card (Stripe Elements on your frontend — card data never touches your server)
- When a booking is confirmed, you create a PaymentIntent and hold the card (not charge it)
- When the session ends (both parties confirm via the app), you capture the payment
- Stripe automatically splits the payout: your platform fee goes to your Stripe account, the sitter's cut goes to their connected Stripe account
- Sitters set up a connected account during onboarding — this involves Stripe's identity verification which you can lean on in addition to your own

**Edge cases you have to handle:**
- Sitter cancels last minute — release the hold, notify the parent, suggest alternatives
- Session runs over the booked time — prompt parent to extend or close out at the original end time
- Dispute — you need a dispute resolution flow, and Stripe's dispute system is your backstop but you'll need your own first-contact process
- Sitter no-shows — parent should be able to mark this; triggers an immediate refund and a review of the sitter account

### 4. Real-time: location tracking and session state

During a session, two things need to be real-time:
1. Sitter location (is she still at the house?)
2. Session state (has it started, is it active, has it ended?)

For location:
- Sitter app sends GPS coordinates every 30 seconds during a session
- Store in your database with a timestamp
- If sitter moves more than X metres from the booking address, push notification to parent immediately
- Use [Google Maps Platform](https://developers.google.com/maps) for geocoding and distance calculations

For session state, you need a proper state machine. A session goes through:

```
PENDING → CONFIRMED → SITTER_EN_ROUTE → ACTIVE → ENDED → REVIEWED
```

Each state transition should be an event in your database with a timestamp. Don't just have a `status` field — you want the full history. This matters for disputes.

### 5. The apps (mobile vs web)

For launch, a mobile-responsive web app (what this prototype is) is fine for parents. But for sitters, you need a proper mobile app eventually — they need GPS access, push notifications, and camera access, which are all possible in the browser but unreliable in practice.

My recommendation:
- **Phase 1:** Web app for parents, web app for sitters (test the model, find early users)
- **Phase 2:** Native iOS/Android app for sitters (React Native is fine — you're sharing business logic with the web app)
- **Phase 3:** Native parent app when you have the user base to justify it

Don't build the native apps first. Validate the idea on web.

### 6. The database and backend

For a real build I'd use:
- **Postgres** as the primary database — relational data fits this product well (users, bookings, reviews, sitter profiles, certifications, session events all have clear relationships)
- **[Supabase](https://supabase.com)** if you want to move fast — gives you Postgres, auth, real-time subscriptions, and storage in one place with a generous free tier
- **Redis** for session state and real-time presence (is this sitter's app currently active?)
- **Node.js + Express or Fastify** for the API — or use Next.js API routes for the early stages

For auth:
- Use [Clerk](https://clerk.com) or Supabase Auth rather than rolling your own — phone number auth is important for this product (parents and sitters should be verifiable by phone) and these services handle it well

### 7. Search and availability

This seems simple but gets complicated. You need:
- Sitters to set their availability in the app (a calendar-style interface)
- Real-time availability that updates when a sitter confirms a booking (they shouldn't show as available during that window anymore)
- Geographic search — "sitters within X miles of this address" — use PostGIS extension on Postgres for this, it's made for geo queries
- Sorting by distance + rating combined (weighted ranking)

### 8. Reviews and rating integrity

Fake reviews kill trust platforms. Things to put in place from day one:
- Reviews can only be left after a completed session (the booking must exist in the database and be in ENDED state)
- One review per booking
- Parent and sitter both review each other — mutual rating
- Flag reviews that contain phone numbers or links (people trying to take transactions off-platform)
- For a while, read every review manually. You'll learn a lot.

---

## What the sitter acquisition problem actually is

Getting parents to sign up is the easier side. Getting good sitters is the hard part, and it's where most platforms fail.

Good sitters have options. They can go through agencies, use established platforms, or just build their own client base through word of mouth. To get them on your platform, you need:

1. **Fast onboarding** — if background check takes 2 weeks, you lose them. Checkr can do it in hours. Make that the selling point.
2. **Fair earnings** — 10–15% platform fee is competitive. If you take 30%, sitters will work around you.
3. **Reliable payments** — if a payout is late once, they'll stop trusting you. Stripe Connect with next-day payouts is the right setup.
4. **Real control** — let sitters decline bookings they don't want. Let them set a minimum booking duration. Let them block families. If they feel like employees rather than independent contractors, they'll leave.

Start by recruiting sitters manually. Message people on existing platforms. Put up flyers at nursing schools and early childhood education programmes. The first 20–30 sitters should be people you've spoken to personally.

---

## The legal and compliance layer

This is not optional and it's more complex than the tech. Things to get sorted before you take a single real booking:

- **Business entity** — form an LLC at minimum
- **Insurance** — you need general liability insurance. There are specialist policies for childcare platforms. Look into it early.
- **Independent contractor vs employee** — sitters need to be classified correctly. Get this wrong and you're liable for employment taxes and benefits. This is a real legal question, talk to a lawyer in each state you launch in.
- **COPPA compliance** — you're handling data about children. There are specific rules. Don't guess.
- **Two-party recording consent** — varies by state. Some states (California, for example) require all parties to consent to being recorded. Your camera feature has to be built around this.
- **Terms of service and privacy policy** — pay a lawyer to draft these, not a template generator. The camera footage clause especially.

---

## What to build first (the actual order)

If I were starting this tomorrow, here's the order:

1. **Sitter profiles and onboarding** — build the sitter side first. Get 20 real sitters through the background check and on the platform before you acquire a single parent. Supply before demand.
2. **Parent search and browse** — let parents find sitters and read profiles. No booking yet.
3. **Messaging** — let parents contact sitters directly. Track these conversations.
4. **Booking and payments** — once you know which sitters and parents are serious, introduce booking.
5. **Session tracking** — location tracking and session state machine.
6. **Camera** — this is technically the hardest feature. Build it after the core loop is working.
7. **Reviews** — only useful once you have completed sessions to review.

The temptation is to build everything at once. Don't. Launch with sitter profiles and messaging. You'll learn more in the first week with real users than in months of solo development.

---

## The market and why now

Platforms like Care.com have been around since 2006. They've done well but they're job boards. The shift toward on-demand services (food delivery, taxis, home services) has conditioned people to expect immediacy. Parents in 2025 expect to open an app and solve a problem in minutes. Care.com is not that.

The camera thing is new. It's now possible to stream video reliably from a phone at low cost. A few years ago this would have required dedicated hardware. Now a sitter with an iPhone and the app is enough. That changes what's possible.

The trust problem in childcare has never been fully solved. Background checks are table stakes now but they don't give parents any visibility once the sitter is in the house. That visibility gap is what the camera layer closes.

---

## What this prototype is and isn't

This repo is a **frontend-only demo** using hardcoded mock data. It shows:
- The parent browsing and booking flow
- What sitter profiles could look like
- How the booking panel UI would work
- The overall design direction

It does not have:
- A real database
- Real authentication
- Real payments
- Real camera streaming
- Real background check integration
- A sitter-side app

That's all fine — this is a concept prototype. The real product is a separate build.

---

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

---

## Stack used in the prototype

- Next.js 15 (App Router)
- Tailwind CSS 4
- TypeScript
- Deployed on Vercel (free tier)
