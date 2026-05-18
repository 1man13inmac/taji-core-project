import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Taji Core Project",
    short_name: "Taji Core",
    description:
      "Professional Taijiquan lineage, timeline, techniques, and history resource in a progressive web app format.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111827",
    lang: "en",
    orientation: "portrait",
    categories: ["education", "reference", "sports"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    shortcuts: [
      {
        name: "Lineages",
        url: "/lineages",
      },
      {
        name: "Family Tree",
        url: "/family-tree",
      },
      {
        name: "Timeline",
        url: "/timeline",
      },
    ],
  };
}
