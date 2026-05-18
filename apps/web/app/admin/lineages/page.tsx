import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin · Lineage Records",
  description: "Admin interface fields for creating and updating lineage pages.",
};

export default function AdminLineagesPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold tracking-tight">Admin: Lineage Records</h1>
      <form className="grid gap-4 rounded-lg border border-zinc-200 p-5 md:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-sm font-medium">Lineage name</span>
          <input className="rounded border border-zinc-300 px-3 py-2" name="lineageName" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Slug</span>
          <input className="rounded border border-zinc-300 px-3 py-2" name="slug" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Origin</span>
          <input className="rounded border border-zinc-300 px-3 py-2" name="origin" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Formation period</span>
          <input className="rounded border border-zinc-300 px-3 py-2" name="period" />
        </label>
        <label className="grid gap-1 md:col-span-2">
          <span className="text-sm font-medium">Founder narrative</span>
          <textarea className="min-h-24 rounded border border-zinc-300 px-3 py-2" name="founder" />
        </label>
        <label className="grid gap-1 md:col-span-2">
          <span className="text-sm font-medium">Overview</span>
          <textarea className="min-h-32 rounded border border-zinc-300 px-3 py-2" name="overview" />
        </label>
      </form>
    </div>
  );
}
