import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { siteName } from "./lib/site-data";
import { MainNav } from "./components/main-nav";

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
  { href: "/", label: "Home" },
  { href: "/lineages", label: "Lineages" },
  { href: "/teachers", label: "Teachers" },
  { href: "/family-tree", label: "Family Tree" },
  { href: "/timeline", label: "Timeline" },
  { href: "/techniques", label: "Techniques" },
  { href: "/history", label: "History" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/sources", label: "Sources" },
  { href: "/about", label: "About" },
  { href: "/account", label: "Account" },
  { href: "/admin", label: "Admin" },
];

const footerGroups = [
  {
    title: "Explore",
    links: [
      { href: "/lineages", label: "Lineages" },
      { href: "/teachers", label: "Teachers" },
      { href: "/family-tree", label: "Family Tree" },
      { href: "/timeline", label: "Timeline" },
    ],
  },
  {
    title: "Knowledge",
    links: [
      { href: "/techniques", label: "Techniques" },
      { href: "/history", label: "History" },
      { href: "/philosophy", label: "Philosophy" },
      { href: "/sources", label: "Sources" },
    ],
  },
  {
    title: "Platform",
    links: [
      { href: "/about", label: "About" },
      { href: "/account", label: "User Area" },
      { href: "/admin", label: "Admin Area" },
    ],
  },
];

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
              <MainNav items={navItems} />
            </div>
          </header>
          <main className="flex-1 py-8">{children}</main>
          <footer className="border-t border-zinc-200 py-8 text-sm text-zinc-600">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {footerGroups.map((group) => (
                <section key={group.title}>
                  <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-900">
                    {group.title}
                  </h2>
                  <ul className="space-y-1">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="hover:text-zinc-900 hover:underline">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
            <p className="mt-6">
              © {new Date().getFullYear()} {siteName}. Structured reference for Taijiquan lineages,
              methods, history, and philosophy.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
