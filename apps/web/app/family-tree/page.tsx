import type { Metadata } from "next";
import Link from "next/link";
import { teachers } from "../lib/site-data";

export const metadata: Metadata = {
  title: "Family Tree and Teacher-Student Transmission",
  description:
    "Structured family-tree view of Taijiquan transmission lines with teacher-student links across major style branches.",
};

export default function FamilyTreePage() {
  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Taijiquan Family Tree</h1>
        <p className="max-w-4xl text-zinc-700">
          This transmission view organizes key teachers and known student lines in a readable
          family-tree style. It is designed as a fast research index for lineage relationships.
        </p>
      </header>

      <div className="rounded-lg border border-zinc-200 p-5">
        <ol className="space-y-4">
          {teachers.map((teacher) => (
            <li key={teacher.slug} className="rounded border border-zinc-100 bg-zinc-50 p-4">
              <h2 className="text-xl font-semibold text-zinc-900">{teacher.name}</h2>
              <p className="text-sm text-zinc-600">{teacher.lineage}</p>
              <p className="mt-2 text-sm font-medium">Teachers:</p>
              <ul className="list-disc pl-5 text-zinc-700">
                {teacher.teachers.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-2 text-sm font-medium">Students:</p>
              <ul className="list-disc pl-5 text-zinc-700">
                {teacher.students.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="mt-3 inline-block underline" href={`/teachers/${teacher.slug}`}>
                Open teacher profile
              </Link>
            </li>
          ))}
        </ol>
      </div>

      <p className="text-sm text-zinc-600">
        Next benchmark step: convert this list into interactive graph nodes with source confidence
        overlays and disputed-link toggles.
      </p>
    </div>
  );
}
