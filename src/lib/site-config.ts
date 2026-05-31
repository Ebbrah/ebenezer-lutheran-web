/**
 * Maelezo ya jumuiya — badilisha mahali unapohitaji.
 */
export const siteConfig = {
  name: "Kanisa la Kilutheri la Ebenezer",
  shortName: "K.K.K.T Ebenezer",
  /** Tumika wakati URL ya metadata haijawekwa */
  domain: "ebenezerlutheran.or.tz",
  /**
   * Nembo ya kichwa — faili katika `public/`.
   * Picha ya sasa ni uwiano wa upana:refu 2:1 (si mraba).
   */
  logo: {
    src: "/images/logo/logo.png",
    width: 48,
    height: 24,
  },
  /**
   * Ikoni ya kichupo cha kivinjari — faili katika `public/` (`.ico`, `.png`, au `.svg`).
   * Badilisha njia hapa (k.m. `/images/logo/favicon.ico` baada ya kuongeza faili).
   */
  favicon: "/images/logo/favicon.ico",
  /** Inaonyeshwa ikiwa fomu ya mawasiliano haiwezi kuhifadhi kwenye Supabase */
  contactEmail: "office@ebenezerlutheran.or.tz",
  phone: "+255 XXX XXX XXX",
  addressLines: ["Ilazo street", "Dodoma, Tanzania"],
  /** Sehemu ya kwanza ya kichwa cha footer (herufi ndogo) */
  footerOrgSubtitle: "K.K.K.T Dayosisi ya Dodoma",
  /** Sehemu ya pili ya kichwa cha footer (herufi kubwa zaidi) */
  footerOrgTitle: "Usharika wa Ebenezer",
  /** Kiungo cha kituo chako cha YouTube */
  youtubeChannelUrl: "https://www.youtube.com/@kkktebenezerilazo-dodoma6585",
  /** Kiungo cha akaunti ya Instagram — badilisha kwa URL halisi */
  instagramUrl: "https://www.instagram.com/",
  /** Tovuti mashuhuri (footer) */
  famousWebsites: [
    { label: "KKKT (ELCT)", href: "http://elct.org/" },
    { label: "Lutheran World Federation", href: "https://www.lutheranworld.org/" },
    { label: "VE Mission", href: "https://www.vemission.org/en/" },
  ],
  /** Kiungo cha Ramani ya Google kwa “Tembelea” */
  mapUrl: "https://www.google.com/maps/search/?api=1&query=KKKT%20Ebenezer%20Ilazo%20Dodoma",
  /** Maelezo ya lugha za ibada (kurasa zingine zinaweza kutumia) */
  languages:
    "Ibada zitakuwa Mbili (Ibada zote zitakuwa katika lugha ya kiswahili).",
} as const;
