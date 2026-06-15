export type Video = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  publishedAt: string;
};

const FEED = (channelId: string) =>
  `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

function extract(block: string, tag: string): string {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`);
  const m = block.match(re);
  return m ? m[1].trim() : "";
}

function attr(block: string, tag: string, attr: string): string {
  const re = new RegExp(`<${tag}[^>]*\\b${attr}="([^"]+)"`);
  const m = block.match(re);
  return m ? m[1] : "";
}

export async function fetchLatestVideos(
  channelId: string,
  limit = 6,
): Promise<Video[]> {
  if (!channelId) return [];
  try {
    const res = await fetch(FEED(channelId), {
      headers: { "User-Agent": "florianbrignoli.fr/1.0" },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const entries = xml.split("<entry>").slice(1, limit + 1);
    return entries.map((block) => {
      const id = extract(block, "yt:videoId");
      const title = extract(block, "title");
      const publishedAt = extract(block, "published");
      const thumbnail =
        attr(block, "media:thumbnail", "url") ||
        `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
      return {
        id,
        title,
        publishedAt,
        thumbnail,
        url: `https://www.youtube.com/watch?v=${id}`,
      };
    });
  } catch {
    return [];
  }
}
