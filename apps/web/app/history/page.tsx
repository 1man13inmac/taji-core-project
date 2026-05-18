import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taijiquan History and Transmission Context",
  description:
    "Historical context for Taijiquan lineage development, migration patterns, urban teaching growth, and global expansion.",
};

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">History</h1>
        <p className="max-w-4xl text-zinc-700">
          Historical narratives are presented with transparent confidence labeling so oral tradition,
          documentary evidence, and modern synthesis can be compared responsibly.
        </p>
      </header>

      <section className="rounded-lg border border-zinc-200 p-5">
        <h2 className="text-2xl font-semibold">Major Historical Themes</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-700">
          <li>Village lineage transmission and codification periods</li>
          <li>Public teaching in imperial, military, and urban contexts</li>
          <li>Branch formation and curriculum standardization</li>
          <li>Publication era and modernization of pedagogy</li>
          <li>Global spread, digital archives, and comparative research</li>
        </ul>
      </section>
    </div>
  );
}
