import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { lineages } from "../../lib/site-data";

export function generateStaticParams() {
  return lineages.map((lineage) => ({ slug: lineage.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const lineage = lineages.find((entry) => entry.slug === params.slug);
  if (!lineage) {
    return { title: "Lineage not found" };
  }

  return {
    title: `${lineage.name} Lineage`,
    description: `${lineage.name} overview, hallmark techniques, key teachers, and historical origin context.`,
  };
}

export default function LineageDetailPage({ params }: { params: { slug: string } }) {
  const lineage = lineages.find((entry) => entry.slug === params.slug);
  if (!lineage) {
    notFound();
  }

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-950">{lineage.name}</h1>
        {lineage.chineseName ? <p className="text-zinc-500">{lineage.chineseName}</p> : null}
        <p className="max-w-4xl text-zinc-700">{lineage.overview}</p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-zinc-200 p-4">
          <h2 className="text-xl font-semibold">Lineage Facts</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-700">
            <li>
              <strong>Origin:</strong> {lineage.origin}
            </li>
            <li>
              <strong>Formation period:</strong> {lineage.period}
            </li>
            <li>
              <strong>Founder narrative:</strong> {lineage.founder}
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-zinc-200 p-4">
          <h2 className="text-xl font-semibold">Technical Hallmarks</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-700">
            {lineage.hallmarks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-lg border border-zinc-200 p-4">
        <h2 className="text-xl font-semibold">Key Teachers in This Narrative</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-700">
          {lineage.keyTeachers.map((teacher) => (
            <li key={teacher}>{teacher}</li>
          ))}
        </ul>
      </section>

      <section className="flex flex-wrap gap-4">
        <Link className="underline" href="/teachers">
          Browse teacher pages
        </Link>
        <Link className="underline" href="/family-tree">
          Open lineage family tree
        </Link>
        <Link className="underline" href="/timeline">
          View chronology context
        </Link>
      </section>
    </article>
  );
}
