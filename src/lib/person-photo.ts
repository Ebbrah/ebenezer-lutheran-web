export type PersonPhotoOptions = {
  /** Override base directory (default: `/images/people`) */
  baseDir?: string;
  /** File extension to assume (default: `jpg`) */
  ext?: "jpg" | "jpeg" | "png" | "webp";
};

function cleanupNameForSlug(name: string) {
  return (
    name
      .trim()
      // common titles/prefixes we don't want in filenames
      .replace(/\b(mch|mwinj|ask|kt|ndg|ndg\.|bi|dr)\.?\b/gi, "")
      .replace(/\b(pst|rev)\.?\b/gi, "")
      .replace(/\s+/g, " ")
  );
}

/**
 * Turn a person's display name into a predictable filename slug.
 * Example: "Mch. Grace Mbata" → "grace-mbata"
 */
export function personPhotoSlug(name: string) {
  const cleaned = cleanupNameForSlug(name);

  // remove diacritics, normalize punctuation, keep letters/numbers/spaces
  const basic = cleaned
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "")
    .replace(/[^a-zA-Z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  return basic.replace(/\s+/g, "-").replace(/-+/g, "-");
}

export function personPhotoSrc(name: string, opts: PersonPhotoOptions = {}) {
  const baseDir = opts.baseDir ?? "/images/people";
  const ext = opts.ext ?? "jpg";
  return `${baseDir}/${personPhotoSlug(name)}.${ext}`;
}

