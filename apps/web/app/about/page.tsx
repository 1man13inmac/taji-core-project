import type { Metadata } from "next";
import { siteName } from "../lib/site-data";

export const metadata: Metadata = {
  title: "About Taji Core Project",
  description:
    "Mission and platform scope for Taji Core Project: a professional Taijiquan lineage, timeline, and knowledge PWA.",
};

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">About {siteName}</h1>
        <p className="max-w-4xl text-zinc-700">
          {siteName} is a structured research platform for lineages, teachers, timeline mapping,
          technical methods, and philosophy with transparent source standards.
        </p>
      </header>

      <section className="rounded-lg border border-zinc-200 p-5">
        <h2 className="text-2xl font-semibold">Platform Goals</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-700">
          <li>Complete cross-linked pages for all major branches and key figures</li>
          <li>Family-tree and timeline views for transmission analysis</li>
          <li>Technical and philosophical depth suitable for serious study</li>
          <li>Research-grade citation transparency and confidence tagging</li>
        </ul>
      </section>
    </div>
  );
}
