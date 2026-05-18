import type { Metadata } from "next";
import { sourceGuidelines } from "../lib/site-data";

export const metadata: Metadata = {
  title: "Sources, Citations, and Verification Standards",
  description:
    "Source quality and citation standards for Taijiquan historical claims, lineage links, technical statements, and confidence scoring.",
};

export default function SourcesPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Sources and Verification</h1>
        <p className="max-w-4xl text-zinc-700">
          This platform is designed to keep evidence traceable so users can distinguish documented
          record, oral tradition, and unresolved debate.
        </p>
      </header>

      <section className="rounded-lg border border-zinc-200 p-5">
        <h2 className="text-2xl font-semibold">Editorial Guidelines</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-700">
          {sourceGuidelines.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
