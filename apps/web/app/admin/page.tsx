import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin Area",
  description:
    "Admin control area for content operations, lineage management, teacher records, timeline events, and citation governance.",
};

const modules = [
  ["/admin/lineages", "Lineage Records"],
  ["/admin/teachers", "Teacher Records"],
  ["/admin/timeline", "Timeline Events"],
  ["/admin/sources", "Sources and Review"],
] as const;

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">Admin Area</h1>
      <p className="max-w-4xl text-zinc-700">
        Operational area for managing structured content. Integrate authentication and role-based
        authorization before production release.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {modules.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            className="rounded-lg border border-zinc-200 p-4 text-zinc-800 hover:border-zinc-400"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
