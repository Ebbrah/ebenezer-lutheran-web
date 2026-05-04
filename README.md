# Ebenezer Lutheran — public website

Next.js marketing site for **ebenezerlutheran.or.tz**, deployed separately from the ChMS application.

## Stack

- **Next.js 15** (App Router) + **TypeScript** + **Tailwind CSS v4**
- **Vercel** — hosting, previews, domains
- **Supabase** (optional) — contact form storage via Row Level Security

## Local development

```bash
npm install
cp .env.example .env.local
# Edit .env.local — set CHMS URL and Supabase if testing the contact form
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

See `.env.example`. Minimum for production:

- `NEXT_PUBLIC_SITE_URL` — canonical site URL
- `NEXT_PUBLIC_CHMS_APP_URL` — member portal (ChMS)

Supabase keys are optional until you wire the `contact_submissions` table (see **WORKFLOW-PLAN.md**).

## Deployment

Connect this repo to a **new Vercel project** and attach the domain `ebenezerlutheran.or.tz`. Full steps: **`WORKFLOW-PLAN.md`**.

## Project layout

- `src/app/` — routes (Home, About, Beliefs, Services, Events, Sermons, Contact, Privacy, Give)
- `src/components/` — header, footer, contact form
- `src/lib/` — site config, env helpers, Supabase clients
- `src/actions/` — server actions (contact form)

## License

Private — your parish / organization.
