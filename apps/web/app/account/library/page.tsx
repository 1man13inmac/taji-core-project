import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Library",
  description: "Personal saved collections and bookmarked lineage research pages.",
};

export default function AccountLibraryPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">Saved Library</h1>
      <p className="text-zinc-700">
        Placeholder for saved teacher pages, timeline filters, and lineage comparison sets.
      </p>
    </div>
  );
}
