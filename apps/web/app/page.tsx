import type { Metadata } from "next";
import Link from "next/link";
import {
  lineages,
  philosophyTopics,
  siteName,
  techniques,
  timeline,
} from "./lib/site-data";

export const metadata: Metadata = {
  title: "Complete Taijiquan Lineage, Timeline, and Knowledge Hub",
  description:
    "Explore a structured Taijiquan knowledge base: major lineages, teacher-student transmission, family-tree mapping, timeline events, techniques, philosophy, and source standards.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  description:
    "Structured Taijiquan reference covering lineages, teachers, timeline, techniques, and philosophy.",
  inLanguage: "en",
  url: "https://taji-core-project.vercel.app",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://taji-core-project.vercel.app/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
          Taijiquan Lineage, Timeline, and Technical Knowledge — Unified
        </h1>
        <p className="max-w-4xl text-lg leading-8 text-zinc-700">
          {siteName} is designed as a complete and professional reference covering major Taijiquan
          lineages, teacher-student family transmission, historical chronology, training methods,
          principles, and source-backed research workflow.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            className="rounded-md bg-zinc-900 px-4 py-2 font-medium text-white hover:bg-zinc-700"
            href="/family-tree"
          >
            Open Family Tree
          </Link>
          <Link
            className="rounded-md border border-zinc-300 px-4 py-2 font-medium hover:border-zinc-500"
            href="/timeline"
          >
            View Timeline
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-lg border border-zinc-200 p-5">
          <h2 className="text-2xl font-semibold">Major Lineages</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-700">
            {lineages.map((lineage) => (
              <li key={lineage.slug}>
                <Link className="underline decoration-zinc-300" href={`/lineages/${lineage.slug}`}>
                  {lineage.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-zinc-600">
            Includes origin narratives, key teachers, hallmark methods, and cross-lineage context.
          </p>
        </article>

        <article className="rounded-lg border border-zinc-200 p-5">
          <h2 className="text-2xl font-semibold">Research Standards</h2>
          <p className="mt-3 text-zinc-700">
            Every claim should be evidence-tagged, confidence-scored, and review-tracked for
            historical transparency.
          </p>
          <Link className="mt-4 inline-block underline" href="/sources">
            See source methodology
          </Link>
        </article>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-lg border border-zinc-200 p-5">
          <h2 className="text-2xl font-semibold">Technical Curriculum Coverage</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-700">
            {techniques.slice(0, 5).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link className="mt-4 inline-block underline" href="/techniques">
            Explore techniques
          </Link>
        </article>

        <article className="rounded-lg border border-zinc-200 p-5">
          <h2 className="text-2xl font-semibold">Philosophy and Classics</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-700">
            {philosophyTopics.slice(0, 5).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link className="mt-4 inline-block underline" href="/philosophy">
            Explore philosophy
          </Link>
        </article>
      </section>

      <section className="rounded-lg border border-zinc-200 p-5">
        <h2 className="text-2xl font-semibold">Chronology Snapshot</h2>
        <ol className="mt-3 space-y-2">
          {timeline.slice(0, 4).map((event) => (
            <li key={`${event.year}-${event.title}`} className="rounded bg-zinc-50 p-3">
              <p className="font-semibold text-zinc-900">{event.year}</p>
              <p className="text-zinc-800">{event.title}</p>
              <p className="text-sm text-zinc-600">{event.detail}</p>
            </li>
          ))}
        </ol>
        <Link className="mt-4 inline-block underline" href="/timeline">
          Open full timeline
        </Link>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </div>
  );
}
