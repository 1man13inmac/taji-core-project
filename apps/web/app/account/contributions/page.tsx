import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Contributions",
  description: "Draft, submit, and track user-generated content proposals.",
};

export default function AccountContributionsPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold tracking-tight">Contributions</h1>
      <form className="grid gap-4 rounded-lg border border-zinc-200 p-5">
        <label className="grid gap-1">
          <span className="text-sm font-medium">Page target</span>
          <input className="rounded border border-zinc-300 px-3 py-2" name="pageTarget" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Claim summary</span>
          <input className="rounded border border-zinc-300 px-3 py-2" name="claimSummary" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Evidence details</span>
          <textarea className="min-h-32 rounded border border-zinc-300 px-3 py-2" name="evidence" />
        </label>
      </form>
    </div>
  );
}
