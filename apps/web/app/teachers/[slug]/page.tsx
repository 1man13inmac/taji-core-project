import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { teachers } from "../../lib/site-data";

export function generateStaticParams() {
  return teachers.map((teacher) => ({ slug: teacher.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const teacher = teachers.find((entry) => entry.slug === params.slug);
  if (!teacher) {
    return { title: "Teacher not found" };
  }

  return {
    title: `${teacher.name} Teacher Profile`,
    description: `${teacher.name} profile with lineage, teachers, students, technical specialties, and transmission context.`,
  };
}

export default function TeacherDetailPage({ params }: { params: { slug: string } }) {
  const teacher = teachers.find((entry) => entry.slug === params.slug);
  if (!teacher) {
    notFound();
  }

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-950">{teacher.name}</h1>
        {teacher.chineseName ? <p className="text-zinc-500">{teacher.chineseName}</p> : null}
        <p className="text-zinc-700">
          {teacher.birthYear ? `${teacher.birthYear}` : "Unknown"}
          {teacher.deathYear ? `–${teacher.deathYear}` : ""} · {teacher.lineage}
        </p>
      </header>

      <section className="rounded-lg border border-zinc-200 p-4">
        <h2 className="text-xl font-semibold">Biography Summary</h2>
        <p className="mt-2 text-zinc-700">{teacher.summary}</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-zinc-200 p-4">
          <h2 className="text-xl font-semibold">Teachers</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-700">
            {teacher.teachers.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-zinc-200 p-4">
          <h2 className="text-xl font-semibold">Students</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-700">
            {teacher.students.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-lg border border-zinc-200 p-4">
        <h2 className="text-xl font-semibold">Specialties</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-700">
          {teacher.specialties.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="flex flex-wrap gap-4">
        <Link className="underline" href="/family-tree">
          View family transmission tree
        </Link>
        <Link className="underline" href="/timeline">
          View related timeline
        </Link>
      </section>
    </article>
  );
}
