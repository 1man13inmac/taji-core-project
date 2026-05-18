import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin · Sources and Review",
  description: "Admin fields for source ingestion, confidence scoring, and review workflow.",
};

export default function AdminSourcesPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold tracking-tight">Admin: Sources and Review</h1>
      <form className="grid gap-4 rounded-lg border border-zinc-200 p-5 md:grid-cols-2">
        <label className="grid gap-1 md:col-span-2">
          <span className="text-sm font-medium">Source title</span>
          <input className="rounded border border-zinc-300 px-3 py-2" name="sourceTitle" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Author</span>
          <input className="rounded border border-zinc-300 px-3 py-2" name="author" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Year</span>
          <input className="rounded border border-zinc-300 px-3 py-2" name="year" type="number" />
        </label>
        <label className="grid gap-1 md:col-span-2">
          <span className="text-sm font-medium">URL</span>
          <input className="rounded border border-zinc-300 px-3 py-2" name="url" type="url" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Confidence</span>
          <select className="rounded border border-zinc-300 px-3 py-2" name="confidence" defaultValue="medium">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
            <option value="legendary">Legendary</option>
          </select>
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Review status</span>
          <select className="rounded border border-zinc-300 px-3 py-2" name="reviewStatus" defaultValue="pending">
            <option value="pending">Pending</option>
            <option value="reviewed">Reviewed</option>
            <option value="verified">Verified</option>
          </select>
        </label>
      </form>
    </div>
  );
}
