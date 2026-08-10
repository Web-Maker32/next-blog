import Link from "next/link";
import Card from "./components/card";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Welcome
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Build a clean, modern blog with Next.js.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          This starter is simplified so you can focus on your content and features instead of fighting old demo code.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/about" className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
            Learn more
          </Link>
          <Link href="/about/projects" className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium transition hover:border-blue-600 hover:text-blue-600 dark:border-gray-700">
            View projects
          </Link>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="h-full">
          <h2 className="text-lg font-semibold">Simple structure</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            The main app pages are now straightforward and easy to extend.
          </p>
        </Card>
        <Card className="h-full">
          <h2 className="text-lg font-semibold">Ready to grow</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Add new sections, blog posts, or integrations without the extra clutter.
          </p>
        </Card>
      </div>
    </div>
  );
}