import type { MetadataRoute } from "next";
import { lineages, teachers } from "./lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://taji-core-project.vercel.app";
  const staticRoutes = [
    "",
    "/lineages",
    "/teachers",
    "/family-tree",
    "/timeline",
    "/techniques",
    "/history",
    "/philosophy",
    "/sources",
    "/about",
    "/admin",
    "/admin/lineages",
    "/admin/teachers",
    "/admin/timeline",
    "/admin/sources",
    "/account",
    "/account/library",
    "/account/contributions",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const lineageRoutes = lineages.map((lineage) => ({
    url: `${base}/lineages/${lineage.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const teacherRoutes = teachers.map((teacher) => ({
    url: `${base}/teachers/${teacher.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...lineageRoutes, ...teacherRoutes];
}
