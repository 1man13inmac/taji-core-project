import type { Metadata } from "next";
import Link from "next/link";
import { teachers } from "../lib/site-data";

export const metadata: Metadata = {
  title: "Taijiquan Teachers and Transmission",
  description:
    "Teacher profiles with lineage affiliation, teacher-student links, specialties, and transmission pathways across major Taijiquan branches.",
};

export default function TeachersPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Teachers and Transmission</h1>
        <p className="max-w-4xl text-zinc-700">
          Profile pages for key figures in Taijiquan lineage transmission, including teacher-student
          relations and specialization context.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {teachers.map((teacher) => (
          <article key={teacher.slug} className="rounded-lg border border-zinc-200 p-5">
            <h2 className="text-2xl font-semibold text-zinc-900">{teacher.name}</h2>
            {teacher.chineseName ? <p className="text-sm text-zinc-500">{teacher.chineseName}</p> : null}
            <p className="mt-2 text-sm text-zinc-600">
              {teacher.birthYear ? `${teacher.birthYear}` : "Unknown"}
              {teacher.deathYear ? `–${teacher.deathYear}` : ""} · {teacher.lineage}
            </p>
            <p className="mt-2 text-zinc-700">{teacher.summary}</p>
            <Link className="mt-4 inline-block underline" href={`/teachers/${teacher.slug}`}>
              View full teacher page
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
