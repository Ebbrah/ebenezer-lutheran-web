/** Picha za kurasa — faili chini ya `public/images/pages/` (angalia README huko). */

export type PagePhoto = {
  /** Njia kutoka `public/` (k.m. `/images/pages/historia/hero.jpg`) */
  src: string;
  alt: string;
  caption?: string;
};

const PAGES = "/images/pages" as const;

function gallery(
  folder: string,
  count: number,
  altPrefix: string,
): PagePhoto[] {
  return Array.from({ length: count }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return {
      src: `${PAGES}/${folder}/${num}.jpg`,
      alt: `${altPrefix} ${i + 1}`,
    };
  });
}

export const historiaPhotos = {
  hero: {
    src: `${PAGES}/historia/hero.jpg`,
    alt: "Usharika wa Ebenezer — picha kuu ya historia",
  },
  gallery: gallery("historia", 4, "Shughuli za usharika"),
} satisfies { hero: PagePhoto; gallery: PagePhoto[] };

export const maonoDhamiraGallery: PagePhoto[] = gallery(
  "maono-dhamira",
  4,
  "Maono na dhamira",
);

export const miikoGallery: PagePhoto[] = gallery("miiko", 4, "Miiko — shughuli");

export const vipaumbeleGallery: PagePhoto[] = gallery(
  "vipaumbele",
  4,
  "Vipaumbele — shughuli",
);

export const hudumaPhotos = {
  hero: {
    src: `${PAGES}/huduma/hero.jpg`,
    alt: "Huduma za Usharika wa Ebenezer",
  },
  gallery: gallery("huduma", 4, "Huduma"),
};

export type MatukioAlbumItem = PagePhoto & {
  title: string;
  category?: string;
};

const matukioMeta: Omit<MatukioAlbumItem, "src" | "alt">[] = [
  { title: "Siku ya Wanawake Duniani", category: "Ibada" },
  { title: "Kwaya ya Umoja", category: "Ibada" },
  { title: "Tamasha laWatoto", category: "Vikundi" },
  { title: "Maombezi", category: "Ibada" },
  { title: "Siku ya Wanawake", category: "Ibada" },
  { title: "Praise Team", category: "Ibada" },
  { title: "Uimbaji-Reformation", category: "Ibada" },
  { title: "Umoja wa Wanaume", category: "Matukio" },
  { title: "Mtoko waVijana", category: "Vikundi" },
  { title: "Kwaya ya Umoja", category: "Huduma" },
  { title: "Kwaya ya Umoja", category: "Vikundi" },
  { title: "Uzinduzi wa Album", category: "Vikundi" },
  { title: "Praise Team — Ibada", category: "Vikundi" },
  { title: "Siku ya Wanaume", category: "Ibada" },
];

export const matukioAlbum: MatukioAlbumItem[] = matukioMeta.map((item, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    ...item,
    src: `${PAGES}/matukio/${num}.jpg`,
    alt: item.title,
  };
});
