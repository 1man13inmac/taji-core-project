import type { Metadata } from "next";
import { philosophyTopics } from "../lib/site-data";

export const metadata: Metadata = {
  title: "Taijiquan Philosophy and Principles",
  description:
    "Philosophical and training principles in Taijiquan, including yin-yang dynamics, intent use, listening skill, and practical internal cultivation.",
};

export default function PhilosophyPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Philosophy and Principles</h1>
        <p className="max-w-4xl text-zinc-700">
          Core principles and classical concepts interpreted for practical training, teaching, and
          inter-lineage comparison.
        </p>
      </header>

      <section className="rounded-lg border border-zinc-200 p-5">
        <ul className="list-disc space-y-2 pl-5 text-zinc-700">
          {philosophyTopics.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
