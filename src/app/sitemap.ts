import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const paths = [
    "",
    "/about",
    "/about/historia",
    "/about/watumishi-waliohudumu",
    "/about/maono-na-dhamira",
    "/about/miiko",
    "/about/vipaumbele",
    "/about/huduma",
    "/uongozi",
    "/uongozi/baraza",
    "/uongozi/kamati",
    "/uongozi/watendaji",
    "/uongozi/watumishi",
    "/uongozi/jumuiya",
    "/uongozi/vikundi",
    "/uongozi/vikundi/wanawake",
    "/uongozi/vikundi/wanaume",
    "/uongozi/vikundi/vijana",
    "/uongozi/vikundi/praise-team",
    "/uongozi/vikundi/kwaya",
    "/uongozi/vikundi/tehama",
    "/wajibu",
    "/services",
    "/events",
    "/sermons",
    "/contact",
    "/privacy",
    "/give",
  ];
  const lastModified = new Date();

  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
