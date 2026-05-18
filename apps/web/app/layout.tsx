import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { siteName } from "./lib/site-data";

const siteDescription =
  "Taji Core Project is a structured Taijiquan resource covering lineages, teachers, family-tree transmission, technical methods, history, and philosophy.";

export const metadata: Metadata = {
  metadataBase: new URL("https://taji-core-project.vercel.app"),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Taijiquan",
    "Tai Chi",
    "Taiji lineage tree",
    "Taiji timeline",
    "Chen style",
    "Yang style",
    "Wu style",
    "Sun style",
    "Wu Hao style",
    "Zhaobao",
    "internal martial arts",
  ],
  openGraph: {
    title: siteName,
    description: siteDescription,
    type: "website",
    siteName,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
  alternates: {
    canonical: "/",
  },
};

const navItems = [
  ["/", "Home"],
  ["/lineages", "Lineages"],
  ["/teachers", "Teachers"],
  ["/family-tree", "Family Tree"],
  ["/timeline", "Timeline"],
  ["/techniques", "Techniques"],
  ["/history", "History"],
  ["/philosophy", "Philosophy"],
  ["/sources", "Sources"],
  ["/about", "About"],
] as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-white text-zinc-900">
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
          <header className="border-b border-zinc-200 py-5">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-2xl font-bold tracking-tight text-zinc-950">
                {siteName}
              </Link>
              <nav aria-label="Primary" className="flex flex-wrap gap-2 text-sm">
                {navItems.map(([href, label]) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-md border border-zinc-200 px-3 py-1.5 text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-950"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>
          <main className="flex-1 py-8">{children}</main>
          <footer className="border-t border-zinc-200 py-6 text-sm text-zinc-600">
            <p>
              © {new Date().getFullYear()} {siteName}. Structured reference for Taijiquan lineages,
              methods, history, and philosophy.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
