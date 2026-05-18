import type { Metadata } from "next";
import { timeline } from "../lib/site-data";

export const metadata: Metadata = {
  title: "Taijiquan Historical Timeline",
  description:
    "Chronological Taijiquan timeline from early lineage codification through modern global transmission and digital research era.",
};

export default function TimelinePage() {
  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Taijiquan Timeline</h1>
        <p className="max-w-4xl text-zinc-700">
          A chronology of major transmission eras, branch evolution, and publication periods.
        </p>
      </header>

      <ol className="space-y-4">
        {timeline.map((event) => (
          <li key={`${event.year}-${event.title}`} className="rounded-lg border border-zinc-200 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">{event.year}</p>
            <h2 className="mt-1 text-2xl font-semibold text-zinc-900">{event.title}</h2>
            <p className="mt-2 text-zinc-700">{event.detail}</p>
            <p className="mt-3 text-sm text-zinc-600">Related: {event.related.join(" · ")}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
