export type HomeSlide = {
  id: string;
  mediaType: "image" | "video";
  imageUrl: string;
  alt: string;
  caption: string | null;
  sortOrder: number;
};
