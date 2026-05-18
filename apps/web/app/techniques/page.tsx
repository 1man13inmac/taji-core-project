import type { Metadata } from "next";
import { techniques } from "../lib/site-data";

export const metadata: Metadata = {
  title: "Taijiquan Techniques and Training Methods",
  description:
    "Comprehensive technical overview of Taijiquan training themes, body-method mechanics, partner work, applications, and curriculum dimensions.",
};

export default function TechniquesPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Techniques and Methods</h1>
        <p className="max-w-4xl text-zinc-700">
          This section captures core Taijiquan training domains used across major lineages with
          room for lineage-specific technical comparison.
        </p>
      </header>

      <section className="rounded-lg border border-zinc-200 p-5">
        <h2 className="text-2xl font-semibold">Technical Scope</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-700">
          {techniques.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-lg border border-zinc-200 p-5">
        <h2 className="text-2xl font-semibold">2026 Benchmark Additions</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-700">
          <li>Lineage-by-lineage feature comparison matrix</li>
          <li>Structured drill progressions with skill milestones</li>
          <li>Source-linked technical vocabulary and concept glossary</li>
          <li>Annotated partner-work progression and safety context</li>
        </ul>
      </section>
    </div>
  );
}
