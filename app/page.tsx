import Link from "next/link";
import Card from "./components/card";

export const metadata = {
  title: "Portfolio",
  description: "A personal portfolio showcasing web projects, skills, and core technologies.",
};

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Portfolio
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I’m a full-stack developer building modern web experiences.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          I design and ship polished web applications with clean UI, strong performance, and maintainable code.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/about" className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
            About me
          </Link>
          <Link href="/about/projects" className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium transition hover:border-blue-600 hover:text-blue-600 dark:border-gray-700">
            View work
          </Link>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="h-full">
          <h2 className="text-lg font-semibold">Frontend + backend</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Build user-focused interfaces and connect them to robust APIs for a complete product experience.
          </p>
        </Card>
        <Card className="h-full">
          <h2 className="text-lg font-semibold">Fast, modern stack</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Use Next.js, TypeScript, Tailwind CSS, and scalable patterns to keep projects maintainable.
          </p>
        </Card>
      </div>
    </div>
  );
}