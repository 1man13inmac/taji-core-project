"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

export function MainNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-3 md:hidden">
        <p className="text-sm font-medium text-zinc-700">Menu</p>
        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle site navigation"
          onClick={() => setOpen((value) => !value)}
          className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-800"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <nav aria-label="Primary" className="hidden flex-wrap gap-2 text-sm md:flex">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md border border-zinc-200 px-3 py-1.5 text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-950"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {open ? (
        <nav aria-label="Primary mobile" className="mt-3 grid gap-2 md:hidden">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md border border-zinc-200 px-3 py-2 text-sm text-zinc-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
