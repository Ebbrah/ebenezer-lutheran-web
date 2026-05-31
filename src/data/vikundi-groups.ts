import type { PagePhoto } from "@/data/page-photos";

const VIKUNDI = "/images/pages/vikundi" as const;

export type VikundiGroup = {
  name: string;
  slug: string;
  href: `/uongozi/vikundi/${string}`;
  photo: PagePhoto;
};

export const vikundiGroups: readonly VikundiGroup[] = [
  {
    name: "Wanawake",
    slug: "wanawake",
    href: "/uongozi/vikundi/wanawake",
    photo: { src: `${VIKUNDI}/wanawake.jpg`, alt: "Kikundi cha Wanawake" },
  },
  {
    name: "Wanaume",
    slug: "wanaume",
    href: "/uongozi/vikundi/wanaume",
    photo: { src: `${VIKUNDI}/wanaume.jpg`, alt: "Kikundi cha Wanaume" },
  },
  {
    name: "Vijana",
    slug: "vijana",
    href: "/uongozi/vikundi/vijana",
    photo: { src: `${VIKUNDI}/vijana.jpg`, alt: "Kikundi cha Vijana" },
  },
  {
    name: "Praise team",
    slug: "praise-team",
    href: "/uongozi/vikundi/praise-team",
    photo: { src: `${VIKUNDI}/praise-team.jpg`, alt: "Praise team" },
  },
  {
    name: "Kwaya ya Umoja",
    slug: "kwaya",
    href: "/uongozi/vikundi/kwaya",
    photo: { src: `${VIKUNDI}/kwaya.jpg`, alt: "Kwaya ya Umoja" },
  },
  {
    name: "Tehama",
    slug: "tehama",
    href: "/uongozi/vikundi/tehama",
    photo: { src: `${VIKUNDI}/tehama.jpg`, alt: "Tehama" },
  },
];

export function getVikundiGroup(slug: string): VikundiGroup | undefined {
  return vikundiGroups.find((g) => g.slug === slug);
}

export const vikundiSlugs = vikundiGroups.map((g) => g.slug);
