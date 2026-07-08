# Handover — aipoweredbali.com Website Build

**For:** Cursor build session
**Owner:** Ross Power, Founder & Director, AI Powered Events Indonesia (ross@aipowered.xyz)
**Date:** 8 July 2026
**Existing artifact:** `sponsor-page/index.html` in the "ai powered" project folder — a complete, self-contained sponsor landing page. This is the design reference AND the content source for `/sponsors`. Reuse its CSS wholesale.

---

## 1. Project Context (read first)

AI Powered Events Indonesia is building Bali's leading in-person AI community brand around three pillars: **Human** (connection — offline, music, arts, creativity), **Artificial** (AI to take time back and build a meaningful life), **Divine** (spiritual connectedness and consciousness). Tagline concept: *"Become AI powered. Remain human."* Events educate, entertain, inspire.

Two events: **September 2026** — 1-day teaser + afterparty, Canggu (potential PIB school collab). **April 2027** — flagship, 2–3 days, 700–1,000 entrepreneurs, targeting Kura Kura Bali SEZ + Indonesian government collaboration.

Speakers: **Daniel Priestley — CONFIRMED** (soft commitment). **Dan Koe** and **Tom Noske** — in discussion. Immediate commercial goal: land Go High Level as a major sponsor (meeting 9 July 2026); the sponsors page must sell the audience as active buyers of CRM/automation/marketing tools without naming GHL.

---

## 2. Site Architecture

Domain: **aipoweredbali.com** ⚠️ *still unregistered as of 8 July 2026 — buy before deploying.*

| Route | Purpose | Primary CTA |
|---|---|---|
| `/` | Home — the movement, vision, both events, speaker teaser, social proof | Join waitlist |
| `/sponsors` | Sponsor pitch + packages + contact form | Contact form → GHL leads pipeline |
| `/speakers` | Speaker line-up with status + apply to speak | Speaker application form |
| `/about` | Ross, the entity, the three pillars in depth, the free zone play | Contact / waitlist |
| `/waitlist` | Attendee waitlist capture, minimal and fast | Email capture → GHL |

See the live site source in `src/pages/` for implementation details.
