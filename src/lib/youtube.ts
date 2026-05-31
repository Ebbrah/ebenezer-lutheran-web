const CHANNEL_HANDLE = "@kkktebenezerilazo-dodoma6585";
const CHANNEL_URL = `https://www.youtube.com/${CHANNEL_HANDLE}`;
const CHANNEL_VIDEOS_URL = `${CHANNEL_URL}/videos`;
const CHANNEL_STREAMS_URL = `${CHANNEL_URL}/streams`;
const CHANNEL_LIVE_URL = `${CHANNEL_URL}/live`;

export type YoutubeVideo = {
  id: string;
  url: string;
  thumbnailUrl: string;
  title: string;
  isLive?: boolean;
};

export type YoutubeFeedResult = {
  videos: YoutubeVideo[];
  liveNow: boolean;
  /** Current broadcast id when live, if detected */
  liveVideoId: string | null;
  /** True when uploads + streams pages both failed (no thumbnails) */
  fetchFailed: boolean;
};

function uniqPreserveOrder(ids: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const id of ids) {
    if (!seen.has(id)) {
      seen.add(id);
      out.push(id);
    }
  }
  return out;
}

async function fetchText(url: string): Promise<string> {
  const res = await fetch(url, {
    next: { revalidate: 300 },
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; EbenezerWeb/1.0)",
    },
  });
  if (!res.ok) return "";
  return res.text();
}

function extractVideoIds(html: string, limit: number): string[] {
  if (!html) return [];
  const matches = html.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"/g);
  const ids = Array.from(matches, (m) => m[1]);
  return uniqPreserveOrder(ids).slice(0, limit);
}

/** Collapse multiple stream archive entries for the same service to one (keep oldest / first aired). */
function normalizeStreamGroupKey(title: string): string {
  let t = title.toLowerCase();
  t = t.replace(/\b(live|streaming|stream|recorded replay)\b/g, " ");
  t = t.replace(/\b(copy|mirror|replay)\b/g, " ");
  t = t.replace(/\([^\)]*\)/g, " ");
  t = t.replace(/\[[^\]]*\]/g, " ");
  t = t.replace(/\b\d{1,2}[./-]\d{1,2}[./-]\d{2,4}\b/g, " ");
  t = t.replace(/\b\d{1,2}:\d{2}\s*(am|pm|asb|asubuhi|mchana|jioni)?\b/g, " ");
  t = t.replace(/\b(ibada\s+\d+)\b/gi, "ibada ");
  t = t.replace(/[^a-z0-9\u00c0-\u024f\s]/g, " ");
  t = t.replace(/\s+/g, " ").trim();
  const words = t.split(" ").filter(Boolean).slice(0, 12);
  return words.join(" ");
}

/**
 * `streamIds` are in shelf order (newest-first on YouTube). For duplicate-looking
 * stream titles we keep **one**: the chronologically earliest — the duplicate
 * that appears later in this list / lower on the shelf.
 */
function dedupeOldestLivestreamPerService(streamIds: string[], titlesById: Map<string, string>): string[] {
  const keyToId = new Map<string, string>();

  for (let i = streamIds.length - 1; i >= 0; i--) {
    const id = streamIds[i];
    const title = titlesById.get(id) ?? "";
    const key = normalizeStreamGroupKey(title) || id;
    if (!keyToId.has(key)) keyToId.set(key, id);
  }

  const keep = new Set(keyToId.values());
  return streamIds.filter((id) => keep.has(id));
}

function detectLiveNow(html: string): boolean {
  if (!html) return false;
  return (
    /"isLiveNow":true/i.test(html) ||
    /"isLive":true/i.test(html) ||
    /LIVE_NOW/i.test(html) ||
    /"style":"LIVE"/i.test(html)
  );
}

/** Try to read the watch URL of the current /live broadcast */
function extractLiveVideoId(html: string): string | null {
  if (!html) return null;
  const canonical = html.match(
    /<link rel="canonical" href="https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})"/,
  );
  if (canonical?.[1]) return canonical[1];

  const og = html.match(
    /property="og:url" content="https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})"/,
  );
  if (og?.[1]) return og[1];

  const rel = html.match(
    /"isLiveNow":true[\s\S]{0,800}?"videoId":"([a-zA-Z0-9_-]{11})"/,
  );
  if (rel?.[1]) return rel[1];

  const rel2 = html.match(
    /"videoId":"([a-zA-Z0-9_-]{11})"[\s\S]{0,800}?"isLiveNow":true/,
  );
  if (rel2?.[1]) return rel2[1];

  return null;
}

async function getVideoTitle(videoId: string): Promise<string> {
  try {
    const oembed = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
    const res = await fetch(oembed, { next: { revalidate: 300 } });
    if (!res.ok) return "Mahubiri ya YouTube";
    const data = (await res.json()) as { title?: string };
    return data.title?.trim() || "Mahubiri ya YouTube";
  } catch {
    return "Mahubiri ya YouTube";
  }
}

export function getYoutubeChannelUrl(): string {
  return CHANNEL_URL;
}

export function getYoutubeLiveUrl(): string {
  return CHANNEL_LIVE_URL;
}

/** When live → watch URL if we can resolve it (or /live fallback). Offline → channel home. */
export async function getYoutubeLiveBannerState(): Promise<{
  liveNow: boolean;
  href: string;
}> {
  const html = await fetchText(CHANNEL_LIVE_URL);
  const liveNow = detectLiveNow(html);

  if (!liveNow) {
    return { liveNow: false, href: CHANNEL_URL };
  }

  let videoId = extractLiveVideoId(html);
  if (!videoId) {
    const fb = extractVideoIds(html, 3);
    videoId = fb[0] ?? null;
  }

  const href = videoId
    ? `https://www.youtube.com/watch?v=${videoId}`
    : CHANNEL_LIVE_URL;

  return { liveNow: true, href };
}

/** True when channel is broadcasting now (same fetch/cache as banner). */
export async function isYoutubeLiveNow(): Promise<boolean> {
  const { liveNow } = await getYoutubeLiveBannerState();
  return liveNow;
}

/** @deprecated use getYoutubeChannelFeed */
export async function getRecentYoutubeVideos(limit = 6): Promise<YoutubeVideo[]> {
  const { videos } = await getYoutubeChannelFeed(limit);
  return videos;
}

/**
 * Merges: current live (when on air) + past livestreams (/streams) + uploads (/videos).
 * First slot is pinned to the live broadcast when `liveNow` and id are known.
 */
export async function getYoutubeChannelFeed(limit = 6): Promise<YoutubeFeedResult> {
  const [liveHtml, videosHtml, streamsHtml] = await Promise.all([
    fetchText(CHANNEL_LIVE_URL),
    fetchText(CHANNEL_VIDEOS_URL),
    fetchText(CHANNEL_STREAMS_URL),
  ]);

  const liveNow = detectLiveNow(liveHtml);
  let liveVideoId = liveNow ? extractLiveVideoId(liveHtml) : null;
  if (liveNow && !liveVideoId) {
    const fallbackFromLiveTab = extractVideoIds(liveHtml, 3);
    liveVideoId = fallbackFromLiveTab[0] ?? null;
  }

  const fetchFailed = !videosHtml && !streamsHtml && !liveHtml;

  const streamIdsRaw = extractVideoIds(streamsHtml, 40);
  const uploadIds = extractVideoIds(videosHtml, 48);

  const streamTitleEntries = await Promise.all(
    streamIdsRaw.map(async (id) => [id, await getVideoTitle(id)] as const),
  );
  const streamTitles = new Map<string, string>(streamTitleEntries);
  const streamIds = dedupeOldestLivestreamPerService(streamIdsRaw, streamTitles);

  const ordered: string[] = [];
  const seen = new Set<string>();
  const push = (id: string) => {
    if (seen.has(id)) return;
    seen.add(id);
    ordered.push(id);
  };

  if (liveVideoId) push(liveVideoId);
  for (const id of streamIds) {
    if (id !== liveVideoId) push(id);
  }
  for (const id of uploadIds) {
    if (id !== liveVideoId) push(id);
  }

  const unique = ordered.slice(0, limit);

  const videos: YoutubeVideo[] = await Promise.all(
    unique.map(async (id) => {
      const title =
        streamTitles.get(id) ?? (await getVideoTitle(id));
      return {
        id,
        title,
        url: `https://www.youtube.com/watch?v=${id}`,
        thumbnailUrl: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        isLive: Boolean(liveNow && liveVideoId && id === liveVideoId),
      };
    }),
  );

  return { videos, liveNow, liveVideoId, fetchFailed };
}
