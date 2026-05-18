import type { Metadata } from "next";
import Link from "next/link";
import { lineages } from "../lib/site-data";

export const metadata: Metadata = {
  title: "Taijiquan Lineages",
  description:
    "Detailed overview of major Taijiquan lineages with origin context, hallmark methods, key teachers, and branch-level learning links.",
};

export default function LineagesPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Taijiquan Lineages</h1>
        <p className="max-w-4xl text-zinc-700">
          Explore the major lineages and their historical context, technical hallmarks, and
          representative teachers.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {lineages.map((lineage) => (
          <article key={lineage.slug} className="rounded-lg border border-zinc-200 p-5">
            <h2 className="text-2xl font-semibold text-zinc-900">{lineage.name}</h2>
            {lineage.chineseName ? <p className="text-sm text-zinc-500">{lineage.chineseName}</p> : null}
            <p className="mt-2 text-zinc-700">{lineage.overview}</p>
            <p className="mt-2 text-sm text-zinc-600">
              <strong>Origin:</strong> {lineage.origin} · <strong>Period:</strong> {lineage.period}
            </p>
            <Link className="mt-4 inline-block underline" href={`/lineages/${lineage.slug}`}>
              View full lineage page
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
