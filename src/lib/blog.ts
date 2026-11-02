import fs from "node:fs";
import path from "node:path";

export interface BlogPostFrontmatter {
  title: string;
  description: string;
  date: string;
  updated: string;
  category: string;
  keywords: string[];
  featured?: boolean;
  relatedFeatureSlug?: string;
}

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface BlogPost extends BlogPostFrontmatter {
  slug: string;
  content: string;
  readingTimeMinutes: number;
  wordCount: number;
  toc: TocItem[];
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function parseFrontmatter(raw: string): {
  data: BlogPostFrontmatter;
  content: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    throw new Error("Invalid MDX frontmatter format");
  }

  const yamlBlock = match[1];
  const content = match[2].trim();

  const meta: Record<string, unknown> = {};
  const lines = yamlBlock.split(/\r?\n/);
  let currentArrayKey: string | null = null;

  for (const line of lines) {
    if (!line.trim()) continue;
    const arrayItemMatch = line.match(/^\s*-\s+(.*)$/);
    if (arrayItemMatch && currentArrayKey) {
      const val = arrayItemMatch[1].trim().replace(/^["']|["']$/g, "");
      (meta[currentArrayKey] as string[]).push(val);
      continue;
    }

    const kvMatch = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (kvMatch) {
      const key = kvMatch[1];
      const rawVal = kvMatch[2].trim();
      if (!rawVal) {
        currentArrayKey = key;
        meta[key] = [];
      } else if (rawVal.startsWith("[") && rawVal.endsWith("]")) {
        currentArrayKey = null;
        meta[key] = rawVal
          .slice(1, -1)
          .split(",")
          .map((s) => s.trim().replace(/^["']|["']$/g, ""))
          .filter(Boolean);
      } else if (rawVal === "true" || rawVal === "false") {
        currentArrayKey = null;
        meta[key] = rawVal === "true";
      } else {
        currentArrayKey = null;
        meta[key] = rawVal.replace(/^["']|["']$/g, "");
      }
    }
  }

  return {
    data: {
      title: String(meta.title ?? ""),
      description: String(meta.description ?? ""),
      date: String(meta.date ?? "2026-11-02"),
      updated: String(meta.updated ?? meta.date ?? "2026-11-02"),
      category: String(meta.category ?? "Finanzas Personales"),
      keywords: Array.isArray(meta.keywords) ? (meta.keywords as string[]) : [],
      featured: Boolean(meta.featured),
      relatedFeatureSlug: meta.relatedFeatureSlug
        ? String(meta.relatedFeatureSlug)
        : undefined,
    },
    content,
  };
}

function extractToc(markdown: string): TocItem[] {
  const toc: TocItem[] = [];
  const lines = markdown.split(/\r?\n/);
  for (const line of lines) {
    const h2 = line.match(/^##\s+(.+)$/);
    if (h2) {
      const text = h2[1].replace(/\*\*/g, "").trim();
      toc.push({ id: slugifyHeading(text), text, level: 2 });
      continue;
    }
    const h3 = line.match(/^###\s+(.+)$/);
    if (h3) {
      const text = h3[1].replace(/\*\*/g, "").trim();
      toc.push({ id: slugifyHeading(text), text, level: 3 });
    }
  }
  return toc;
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    const fullPath = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = parseFrontmatter(raw);
    const words = content.split(/\s+/).filter(Boolean).length;
    const readingTimeMinutes = Math.max(3, Math.ceil(words / 210));
    const toc = extractToc(content);

    return {
      slug,
      ...data,
      content,
      wordCount: words,
      readingTimeMinutes,
      toc,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllBlogPosts();
  return posts.find((p) => p.slug === slug);
}
