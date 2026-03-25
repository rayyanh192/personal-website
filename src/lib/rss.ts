import { BlogPost } from "@/types/blog";

export async function fetchSubstackPosts(
  substackUrl: string
): Promise<BlogPost[]> {
  const feedUrl = `${substackUrl}/feed`;

  try {
    const res = await fetch(feedUrl, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      console.error(`Failed to fetch RSS: ${res.status}`);
      return [];
    }

    const xml = await res.text();
    return parseRSSXML(xml);
  } catch (error) {
    console.error("RSS fetch error:", error);
    return [];
  }
}

function parseRSSXML(xml: string): BlogPost[] {
  const items: BlogPost[] = [];
  const itemMatches = xml.match(/<item>([\s\S]*?)<\/item>/g) || [];

  for (const itemXml of itemMatches) {
    const title = extractTag(itemXml, "title");
    const link = extractTag(itemXml, "link");
    const pubDate = extractTag(itemXml, "pubDate");
    const description = extractTag(itemXml, "description");
    const guid = extractTag(itemXml, "guid") || link;
    const thumbnail = extractThumbnail(itemXml);

    if (title && link) {
      items.push({
        title: decodeHTMLEntities(title),
        link,
        pubDate,
        description: decodeHTMLEntities(stripHTML(description)).slice(0, 200),
        thumbnail,
        guid,
      });
    }
  }

  return items;
}

function extractTag(xml: string, tag: string): string {
  // Handle CDATA sections
  const cdataMatch = xml.match(
    new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`)
  );
  if (cdataMatch) return cdataMatch[1].trim();

  // Handle regular tags
  const match = xml.match(new RegExp(`<${tag}[^>]*>([^<]*)</${tag}>`));
  return match ? match[1].trim() : "";
}

function extractThumbnail(xml: string): string | undefined {
  // Check for enclosure
  const enclosure = xml.match(/<enclosure[^>]+url="([^"]+)"/);
  if (enclosure) return enclosure[1];

  // Check for media:content
  const media = xml.match(/<media:content[^>]+url="([^"]+)"/);
  if (media) return media[1];

  // Check for media:thumbnail
  const mediaThumbnail = xml.match(/<media:thumbnail[^>]+url="([^"]+)"/);
  if (mediaThumbnail) return mediaThumbnail[1];

  // Extract first image from content/description
  const imgMatch = xml.match(/<img[^>]+src="([^"]+)"/);
  return imgMatch ? imgMatch[1] : undefined;
}

function stripHTML(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeHTMLEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'");
}
