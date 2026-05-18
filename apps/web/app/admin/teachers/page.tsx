import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin · Teacher Records",
  description: "Admin interface fields for teacher pages and transmission links.",
};

export default function AdminTeachersPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold tracking-tight">Admin: Teacher Records</h1>
      <form className="grid gap-4 rounded-lg border border-zinc-200 p-5 md:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-sm font-medium">Teacher name</span>
          <input className="rounded border border-zinc-300 px-3 py-2" name="teacherName" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Slug</span>
          <input className="rounded border border-zinc-300 px-3 py-2" name="slug" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Birth year</span>
          <input className="rounded border border-zinc-300 px-3 py-2" name="birthYear" type="number" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Death year</span>
          <input className="rounded border border-zinc-300 px-3 py-2" name="deathYear" type="number" />
        </label>
        <label className="grid gap-1 md:col-span-2">
          <span className="text-sm font-medium">Teachers (comma separated)</span>
          <input className="rounded border border-zinc-300 px-3 py-2" name="teachers" />
        </label>
        <label className="grid gap-1 md:col-span-2">
          <span className="text-sm font-medium">Students (comma separated)</span>
          <input className="rounded border border-zinc-300 px-3 py-2" name="students" />
        </label>
        <label className="grid gap-1 md:col-span-2">
          <span className="text-sm font-medium">Biography summary</span>
          <textarea className="min-h-32 rounded border border-zinc-300 px-3 py-2" name="summary" />
        </label>
      </form>
    </div>
  );
}
