"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/about/projects", label: "Projects" },
  { href: "/stack", label: "Stack" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const dragStartXRef = useRef<number | null>(null);
  const openRef = useRef(false);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (event.button !== 0) {
        return;
      }

      if (event.clientX <= 24 || openRef.current) {
        dragStartXRef.current = event.clientX;
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (dragStartXRef.current === null) {
        return;
      }

      const deltaX = event.clientX - dragStartXRef.current;

      if (!openRef.current && deltaX > 40) {
        setOpen(true);
      }

      if (openRef.current && deltaX < -40) {
        setOpen(false);
      }
    };

    const handlePointerUp = (event: PointerEvent) => {
      if (dragStartXRef.current === null) {
        return;
      }

      const deltaX = event.clientX - dragStartXRef.current;

      if (!openRef.current && deltaX > 80) {
        setOpen(true);
      } else if (openRef.current && deltaX < -80) {
        setOpen(false);
      }

      dragStartXRef.current = null;
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  return (
    <header className="border-b border-gray-200 px-4 py-4 transition-colors duration-300 dark:border-slate-800 md:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="text-xl font-black tracking-tighter text-gray-900 dark:text-white">
          Next Portfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Navigation */}
      <aside
        className="fixed inset-y-0 left-0 z-40 flex w-52 flex-col gap-3 bg-white/90 px-4 pb-6 pt-20 shadow-lg backdrop-blur-sm transition-transform duration-300 ease-out dark:bg-slate-950/85 md:hidden"
        style={{
          transform: open ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </aside>
    </header>
  );
}