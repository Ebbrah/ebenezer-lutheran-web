/**
 * Public church facts and fallback contact details.
 * Replace placeholders with your congregation’s real information.
 */
export const siteConfig = {
  name: "Ebenezer Lutheran Church",
  shortName: "Ebenezer Lutheran",
  /** Used when env metadata URL is not set */
  domain: "ebenezerlutheran.or.tz",
  /** Shown if the contact form cannot reach Supabase yet */
  contactEmail: "office@ebenezerlutheran.or.tz",
  phone: "+255 XXX XXX XXX",
  addressLines: [
    "Your street or parish office",
    "City, Tanzania",
  ],
  /** Replace with your YouTube channel URL */
  youtubeChannelUrl: "https://www.youtube.com/@your-channel",
  /** Google Maps link or embed URL for “Visit” */
  mapUrl: "https://maps.google.com/?q=Ebenezer+Lutheran+Tanzania",
  /** Primary worship language note for accessibility */
  languages: "Services are conducted in [English / Kiswahili / both — edit me].",
} as const;
