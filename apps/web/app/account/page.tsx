import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "User Account Area",
  description:
    "Member area for saved research, contribution drafts, and account-level personalization features.",
};

export default function AccountPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">User Area</h1>
      <p className="max-w-4xl text-zinc-700">
        Logged-in user workspace for saved lineage studies, draft contributions, and personalized
        learning paths.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link href="/account/library" className="rounded-lg border border-zinc-200 p-4 hover:border-zinc-400">
          Saved Library
        </Link>
        <Link
          href="/account/contributions"
          className="rounded-lg border border-zinc-200 p-4 hover:border-zinc-400"
        >
          Contributions
        </Link>
      </div>
    </div>
  );
}
