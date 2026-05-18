import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin · Timeline Events",
  description: "Admin fields for timeline event creation and chronology management.",
};

export default function AdminTimelinePage() {
  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold tracking-tight">Admin: Timeline Events</h1>
      <form className="grid gap-4 rounded-lg border border-zinc-200 p-5 md:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-sm font-medium">Event year or range</span>
          <input className="rounded border border-zinc-300 px-3 py-2" name="year" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Event title</span>
          <input className="rounded border border-zinc-300 px-3 py-2" name="title" />
        </label>
        <label className="grid gap-1 md:col-span-2">
          <span className="text-sm font-medium">Event detail</span>
          <textarea className="min-h-32 rounded border border-zinc-300 px-3 py-2" name="detail" />
        </label>
        <label className="grid gap-1 md:col-span-2">
          <span className="text-sm font-medium">Related nodes (comma separated)</span>
          <input className="rounded border border-zinc-300 px-3 py-2" name="related" />
        </label>
      </form>
    </div>
  );
}
