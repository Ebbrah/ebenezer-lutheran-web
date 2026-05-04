# Ebenezer Lutheran — workflow plan

This document is your **checklist** from empty repo to a live marketing site at **ebenezerlutheran.or.tz**, linked to your **ChMS** app on Vercel, with **optional Supabase** for contact form storage.

---

## Phase 1 — Repository (GitHub)

1. Create a **new GitHub repository** (e.g. `ebenezer-lutheran-web`). Keep it separate from the ChMS codebase.
2. Point your local folder (this project) at GitHub:
   ```bash
   cd /path/to/ebenezer-lutheran-web
   git remote add origin https://github.com/YOUR_ORG/ebenezer-lutheran-web.git
   git branch -M main
   git push -u origin main
   ```
3. Protect `main` if others collaborate (branch rules, PR reviews).

---

## Phase 2 — Vercel project (marketing site)

1. Log in to [Vercel](https://vercel.com) → **Add New Project** → Import the GitHub repo.
2. **Framework:** Next.js (auto-detected). **Root directory:** repo root.
3. **Environment variables** (Production + Preview — copy from `.env.example`):

   | Name | Example | Notes |
   |------|---------|--------|
   | `NEXT_PUBLIC_SITE_URL` | `https://ebenezerlutheran.or.tz` | Canonical URL for metadata & sitemap |
   | `NEXT_PUBLIC_CHMS_APP_URL` | `https://app.ebenezerlutheran.or.tz` | Where “ChMS / Member portal” sends users |
   | `NEXT_PUBLIC_SUPABASE_URL` | From Supabase dashboard | Optional until contact DB is ready |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | From Supabase dashboard | Public anon key only |

4. Deploy. Confirm the preview URL loads.

---

## Phase 3 — Domain DNS (`ebenezerlutheran.or.tz`)

Work with whoever manages the **.or.tz** domain (registrar / IT).

1. In Vercel → Project → **Settings** → **Domains** → Add `ebenezerlutheran.or.tz` and `www.ebenezerlutheran.or.tz` if desired.
2. Add the DNS records Vercel shows (typically **A** / **CNAME** for Vercel).
3. Choose one canonical host: either redirect **apex → www** or **www → apex** (Vercel can enforce redirects).
4. Update `NEXT_PUBLIC_SITE_URL` to match the canonical URL (with `https://`).

---

## Phase 4 — ChMS app URL (separate Vercel project)

Your ChMS app should stay its **own** Vercel project.

1. Deploy ChMS (existing repo) and attach a subdomain, e.g. **`app.ebenezerlutheran.or.tz`**.
2. In DNS, add a **CNAME** for `app` → `cname.vercel-dns.com` (or follow Vercel’s instructions).
3. Set `NEXT_PUBLIC_CHMS_APP_URL` on the **church website** project to that URL.
4. Test: open the public site → **ChMS / Member portal** → login loads on the app domain.

**Cookies:** Auth for ChMS stays on the **app** subdomain; the brochure site does not need shared cookies.

---

## Phase 5 — Supabase (optional but recommended)

Use Supabase for **contact form** rows and future light CMS (events), without coupling to ChMS’s database.

### 5.1 Create or reuse a project

- New project at [supabase.com](https://supabase.com) (can be separate from ChMS for isolation).

### 5.2 Table for contact submissions

Run in **SQL Editor**:

```sql
create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  source text default 'website'
);

alter table public.contact_submissions enable row level security;

-- Allow anonymous inserts from the website (anon key)
create policy "Public can submit contact"
  on public.contact_submissions
  for insert
  to anon
  with check (true);

-- Staff read access: use service role in dashboard or add authenticated policies later
```

### 5.3 Keys in Vercel

Paste **Project URL** and **anon public** key into the marketing site’s env vars. Redeploy.

### 5.4 Verify

Submit the Contact form → confirm a row appears in Supabase **Table Editor**.

---

## Phase 6 — Content & media

1. Edit **`src/lib/site-config.ts`** — email, phone, address, YouTube URL, map link.
2. Replace placeholder copy on **About**, **Beliefs**, **Services**, **Give**.
3. **Events:** embed Google Calendar or link out — update `src/app/events/page.tsx` or add a small embed component.
4. **Sermons:** set real YouTube channel URL in `site-config.ts`; optionally embed latest videos later.
5. **Images:** add optimized assets under `public/` and use `next/image` with explicit width/height for performance.

---

## Phase 7 — Quality bar (mobile, a11y, performance)

- **Mobile:** Tap targets ≥ 44px (buttons already sized); test on a real phone.
- **Accessibility:** One `<h1>` per page, logical headings, visible focus rings (already styled).
- **Performance:** Run Lighthouse on `/`; compress hero images; keep third-party embeds minimal.
- **Legal:** Replace **Privacy** page text after leadership review.

---

## Phase 8 — Analytics (optional)

- Enable **Vercel Analytics** on the project, or add **Plausible / Fathom / GA4** with consent if required.
- Document cookies/tools on the Privacy page.

---

## Phase 9 — Go-live checklist

- [ ] `NEXT_PUBLIC_SITE_URL` matches live domain
- [ ] `NEXT_PUBLIC_CHMS_APP_URL` points to production ChMS
- [ ] Primary CTA tested on mobile and desktop
- [ ] Contact form works or fallback email is acceptable
- [ ] Privacy policy approved
- [ ] `robots.txt` / `sitemap.xml` load (`/robots.txt`, `/sitemap.xml`)

---

## Ongoing maintenance

| Task | Who | How often |
|------|-----|-----------|
| Update service times / events | Parish office | Weekly or as needed |
| Review contact submissions | Office / pastor | Daily |
| Dependency updates | Developer | Monthly |
| SSL / domain renewal | Admin | Per registrar |

---

## Support references

- [Next.js App Router](https://nextjs.org/docs)
- [Vercel domains](https://vercel.com/docs/concepts/projects/domains)
- [Supabase RLS](https://supabase.com/docs/guides/auth/row-level-security)

---

*Last updated: generated with project scaffold — adjust dates and owners as your team grows.*
