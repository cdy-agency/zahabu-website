import type { MetadataRoute } from "next";
import { readdir } from "node:fs/promises";
import path from "node:path";

import { absoluteUrl } from "@/lib/seo";

const APP_DIR = path.join(process.cwd(), "app");
const PAGE_FILE_NAMES = new Set(["page.tsx", "page.ts", "page.jsx", "page.js"]);

async function collectPageRoutes(
  dir: string,
  segments: string[] = [],
  routes: Set<string> = new Set(),
): Promise<Set<string>> {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (entry.name === "api" || entry.name.startsWith("_")) continue;

      const isRouteGroup = entry.name.startsWith("(") && entry.name.endsWith(")");
      const nextSegments = isRouteGroup ? segments : [...segments, entry.name];

      await collectPageRoutes(path.join(dir, entry.name), nextSegments, routes);
      continue;
    }

    if (entry.isFile() && PAGE_FILE_NAMES.has(entry.name)) {
      const routePath = segments.length ? `/${segments.join("/")}` : "/";
      routes.add(routePath);
    }
  }

  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = await collectPageRoutes(APP_DIR);
  const lastModified = new Date();

  return Array.from(routes)
    .sort((a, b) => a.localeCompare(b))
    .map((route) => ({
      url: absoluteUrl(route),
      lastModified,
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : 0.8,
    }));
}
