# AI Powered Bali

**Become AI powered. Remain human.**

The premier entrepreneur conference for the builders of the AI era — a 2–3 day immersive event in Bali, April 2027, for 700–1,000 entrepreneurs.

**Live site:** [aipoweredbali.com](https://aipoweredbali.com) (pending domain registration)

**Contact:** Ross Power · [ross@aipowered.xyz](mailto:ross@aipowered.xyz)

---

## The Event

AI Powered Events Indonesia is building Bali's leading in-person AI community brand around three pillars:

| Pillar | What it means |
|--------|---------------|
| **Human** | Connection — offline, music, arts, creativity. Real rooms, real relationships. |
| **Artificial** | Leverage — AI to take time back and build a meaningful life. |
| **Divine** | Consciousness — spiritual connectedness in the dimension Bali does best. |

### Two events. One movement.

1. **September 2026 — The Ignition** · Canggu  
   A 1-day event + afterparty. Proof of concept and community ignition.

2. **April 2027 — The Flagship** · Bali  
   700–1,000 entrepreneurs. 2–3 days. International speaker line-up. Government and Kura Kura Bali SEZ collaboration.

---

## Speaker Line-Up

| Speaker | Status | Combined reach |
|---------|--------|----------------|
| Daniel Priestley | ✓ Confirmed | 370K+ |
| Dan Koe | In discussion | 4.6M+ |
| Tom Noske | In discussion | TBC |
| + 6 more | To be announced | — |

*Follower counts from public trackers, July 2026 — verify before publishing.*

---

## The Audience

- **700–1,000** paying entrepreneurs: founders, creators, coaches, operators
- **Tickets:** $499 – $1,499 (plus travel)
- **35%** earn $100K – $250K annually
- **86%** identify as entrepreneurs
- **81%** invest in coaching and courses

Builders, not browsers.

---

## Site Architecture

| Route | Purpose |
|-------|---------|
| `/` | Home — movement, vision, speaker teaser, waitlist CTA |
| `/sponsors` | Partner pitch, package tiers (TBC), contact form |
| `/speakers` | Full speaker bios + mystery tiles + apply to speak |
| `/about` | Ross, entity, pillars, Kura Kura SEZ |
| `/waitlist` | Minimal email capture |

### Stack

- **Astro** (static site generator)
- **Vanilla CSS** — design system ported from sponsor-page reference
- **Cloudflare Pages** — hosting
- **Go High Level** — form webhooks (env vars)
- **Cloudflare R2** — images (planned)

---

## Local Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # preview production build
```

### Environment Variables

Copy `.env.example` to `.env` and add your GHL inbound webhook URLs:

```
PUBLIC_GHL_WEBHOOK_SPONSORS=
PUBLIC_GHL_WEBHOOK_SPEAKERS=
PUBLIC_GHL_WEBHOOK_WAITLIST=
```

Forms show a mailto fallback when webhooks are not configured.

---

## Deployment Checklist

- [ ] Register **aipoweredbali.com** and point DNS to Cloudflare Pages
- [ ] Connect repo to Cloudflare Pages (build: `npm run build`, output: `dist`)
- [ ] Add GHL webhook URLs as environment variables in Pages dashboard
- [ ] Create R2 bucket for speaker/event photography
- [ ] Verify Tom Noske follower counts before publishing
- [ ] Finalise sponsorship package tiers (currently TBC shells)
- [ ] Add OG image once photography is ready

---

## Project Structure

```
src/
  components/     # Nav, Footer, forms, speaker cards
  data/           # speakers.ts, site.ts
  layouts/        # BaseLayout.astro
  pages/          # 5 routes
  styles/         # global.css (sponsor-page design system)
public/
  _redirects      # sponsor.aipoweredbali.com → /sponsors
docs/
  HANDOVER.md     # Full build specification
```

---

## Founder

**Ross Power** — Founder & Director, AI Powered Events Indonesia

The connector between Bali's builders, the world's best teachers, and the partners who power them. Led 100+ design-thinking workshops at Accenture; Head of Product at a NYSE-listed education company; founder of [AI Powered](https://aipowered.xyz) — cohort programmes, community and education for AI-powered entrepreneurs. Based in Bali.

---

*AI Powered Events Indonesia · September 2026 · Canggu — April 2027 · Bali*
